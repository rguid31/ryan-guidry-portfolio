document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }

    // First, test if we can reach the test endpoint
    fetch('/api/test')
        .then(response => response.json())
        .then(data => console.log('Test endpoint response:', data))
        .catch(error => console.error('Test endpoint error:', error));

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('Form submission intercepted');

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            console.log('Sending request to:', 'http://localhost:3000/api/contact');
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                alert(data.success);
                contactForm.reset();
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Detailed error:', error);
            alert('An error occurred while sending the message');
        }
    });
});