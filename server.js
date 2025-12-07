/**
 * Simple Static Server for HUAY Backoffice
 * Run: node server.js
 * Then open: http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    // Parse URL and remove query string
    let filePath = req.url.split('?')[0];
    
    // Default to index.html
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Build full file path
    const fullPath = path.join(__dirname, filePath);
    
    // Get file extension
    const ext = path.extname(fullPath).toLowerCase();
    
    // Check if file exists
    fs.access(fullPath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found - try adding .html extension
            const htmlPath = fullPath + '.html';
            fs.access(htmlPath, fs.constants.F_OK, (err2) => {
                if (err2) {
                    // Return 404
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(`
                        <!DOCTYPE html>
                        <html>
                        <head><title>404 Not Found</title></head>
                        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
                            <h1>404</h1>
                            <p>File not found: ${filePath}</p>
                            <a href="/">Go to Home</a>
                        </body>
                        </html>
                    `);
                    console.log(`  -> 404 Not Found: ${filePath}`);
                } else {
                    // Serve the .html file
                    serveFile(htmlPath, 'text/html', res);
                }
            });
        } else {
            // Serve the file
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            serveFile(fullPath, contentType, res);
        }
    });
});

function serveFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
            console.log(`  -> 500 Error: ${err.message}`);
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache'
            });
            res.end(content);
            console.log(`  -> 200 OK (${contentType})`);
        }
    });
}

server.listen(PORT, () => {
    console.log('');
    console.log('='.repeat(50));
    console.log('  HUAY Backoffice Static Server');
    console.log('='.repeat(50));
    console.log(`  Server running at: http://localhost:${PORT}`);
    console.log('');
    console.log('  Press Ctrl+C to stop');
    console.log('='.repeat(50));
    console.log('');
});

