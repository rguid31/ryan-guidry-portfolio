import sgMail from '@sendgrid/mail';
import rateLimit from 'express-rate-limit';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Rate limiting configuration
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiting to the handler
const applyRateLimit = (handler) => async (req, res) => {
    try {
        await limiter(req, res);
        return handler(req, res);
    } catch (error) {
        console.error('Rate limit error:', error);
        return res.status(429).json({ message: 'Too many requests, please try again later.' });
    }
};

async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Prepare email content
        const msg = {
            to: process.env.CONTACT_EMAIL, // Your email address
            from: process.env.VERIFIED_SENDER, // Your verified SendGrid sender
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                
                Message:
                ${message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await sgMail.send(msg);

        // Log successful submission
        console.log('Contact form submission sent:', { name, email, subject });

        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        
        // Handle specific SendGrid errors
        if (error.response) {
            console.error('SendGrid error details:', error.response.body);
        }
        
        return res.status(500).json({ 
            message: 'Failed to send message',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}

// Export the rate-limited handler
export default applyRateLimit(handler); 