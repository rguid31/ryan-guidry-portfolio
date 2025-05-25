import { randomBytes } from 'crypto';

export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Generate a random CSRF token
    const csrfToken = randomBytes(32).toString('hex');

    // Set the token in an HTTP-only cookie
    res.setHeader('Set-Cookie', `csrf-token=${csrfToken}; HttpOnly; Path=/; SameSite=Strict; Secure`);

    // Return the token to the client
    res.status(200).json({ csrfToken });
} 