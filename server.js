const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Serve static files from the public directory
    server.use(express.static(path.join(__dirname, 'public')));

    // Let Next.js handle all other routes
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3000;
    const startServer = (retryPort = port) => {
        server.listen(retryPort, () => {
            console.log(`Server running on port ${retryPort}`);
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${retryPort} is busy, trying ${retryPort + 1}...`);
                startServer(retryPort + 1);
            } else {
                console.error('Server error:', err);
            }
        });
    };

    startServer();
});
