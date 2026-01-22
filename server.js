const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>MyCounselor</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
          .container { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); max-width: 500px; text-align: center; }
          h1 { color: #333; margin: 0 0 20px; }
          p { color: #666; margin: 10px 0; }
          .btn { display: inline-block; padding: 12px 30px; margin: 10px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; cursor: pointer; border: none; font-size: 16px; }
          .btn:hover { background: #764ba2; }
          .status { background: #e8f5e9; padding: 20px; border-radius: 5px; margin: 20px 0; color: #2e7d32; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🎓 MyCounselor</h1>
          <p style="font-size: 18px; color: #764ba2; margin-bottom: 30px;">School Admissions Platform</p>
          <div class="status">
            <strong>✅ Server is Running!</strong>
            <p>Port 3000</p>
          </div>
          <button class="btn" onclick="window.location.href='/login'">Login</button>
          <button class="btn" onclick="window.location.href='/signup'">Signup</button>
        </div>
      </body>
      </html>
    `);
  } else if (req.url === '/login') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Login - MyCounselor</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
          .container { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); max-width: 400px; width: 100%; }
          h1 { color: #333; text-align: center; }
          form { margin-top: 30px; }
          input { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ddd; border-radius: 5px; font-size: 16px; box-sizing: border-box; }
          button { width: 100%; padding: 12px; background: #667eea; color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 20px; }
          button:hover { background: #764ba2; }
          .admin-creds { background: #f3e5f5; padding: 15px; border-radius: 5px; margin-top: 20px; font-size: 14px; }
          a { color: #667eea; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Login to MyCounselor</h1>
          <form>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Login</button>
          </form>
          <div class="admin-creds">
            <strong>Demo Credentials:</strong><br>
            Email: admin@presidentialschool.edu<br>
            Password: YourSecurePassword123!
          </div>
          <p style="text-align: center;"><a href="/">← Back Home</a></p>
        </div>
      </body>
      </html>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1><a href="/">Go Home</a>');
  }
});

server.listen(PORT, () => {
  console.log(`\n✅ MyCounselor Server Running!`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log(`\nPress Ctrl+C to stop\n`);
});
