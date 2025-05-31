export const finalChapters = [
  {
    id: '18',
    icon: '🗝️',
    title: 'SSH',
    description: 'Connect to a remote server securely with SSH',
    slug: 'ssh',
    content: {
      overview: 'Master SSH for secure remote server access and management.',
      sections: [
        {
          title: 'SSH Basics',
          content: 'Connect to remote servers securely using SSH.',
          codeExample: `# Basic SSH connection
ssh username@server-ip
ssh username@domain.com

# SSH with specific port
ssh -p 2222 username@server-ip

# SSH with key file
ssh -i ~/.ssh/private_key username@server-ip

# SSH with X11 forwarding
ssh -X username@server-ip

# SSH with port forwarding
ssh -L 8080:localhost:80 username@server-ip`
        },
        {
          title: 'SSH Key Authentication',
          content: 'Set up passwordless SSH authentication with key pairs.',
          codeExample: `# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
ssh-keygen -t ed25519 -C "your_email@example.com"  # More secure

# Copy public key to server
ssh-copy-id username@server-ip
# Or manually:
cat ~/.ssh/id_rsa.pub | ssh username@server-ip "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# Set proper permissions
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/authorized_keys`
        },
        {
          title: 'SSH Configuration',
          content: 'Configure SSH client and server for better security and convenience.',
          codeExample: `# SSH client config (~/.ssh/config)
Host myserver
    HostName server-ip-or-domain
    User username
    Port 22
    IdentityFile ~/.ssh/private_key

# SSH server config (/etc/ssh/sshd_config)
Port 2222                    # Change default port
PermitRootLogin no          # Disable root login
PasswordAuthentication no   # Disable password auth
PubkeyAuthentication yes    # Enable key auth
MaxAuthTries 3              # Limit auth attempts

# Restart SSH service
sudo systemctl restart ssh`
        }
      ]
    }
  },
  {
    id: '19',
    icon: '🖥️',
    title: 'BUILD AN APP',
    description: 'Build a fullstack webapp for VPS deployment',
    slug: 'build-an-app',
    content: {
      overview: 'Create a simple web application ready for deployment on your VPS.',
      sections: [
        {
          title: 'Node.js Express App',
          content: 'Build a basic Express.js web application.',
          codeExample: `# Initialize Node.js project
mkdir myapp && cd myapp
npm init -y

# Install dependencies
npm install express

# Create app.js
cat > app.js << 'EOF'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from LinuxBuddy!');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
EOF

# Run the app
node app.js`
        },
        {
          title: 'Environment Configuration',
          content: 'Configure your application for different environments.',
          codeExample: `# Create .env file
cat > .env << 'EOF'
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost/myapp
EOF

# Install dotenv
npm install dotenv

# Update app.js to use environment variables
require('dotenv').config();

# Create package.json scripts
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest"
  }
}

# Install PM2 for production
npm install -g pm2`
        },
        {
          title: 'Database Integration',
          content: 'Add database connectivity to your application.',
          codeExample: `# Install PostgreSQL client
npm install pg

# Database connection
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

# Create database table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# Add database route
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`
        }
      ]
    }
  },
  {
    id: '20',
    icon: '🔥',
    title: 'FIREWALL',
    description: 'How to open ports on your Firewall with ufw',
    slug: 'firewall',
    content: {
      overview: 'Configure UFW (Uncomplicated Firewall) to secure your server.',
      sections: [
        {
          title: 'UFW Basics',
          content: 'Enable and configure the basic firewall rules.',
          codeExample: `# Check UFW status
sudo ufw status
sudo ufw status verbose

# Enable UFW
sudo ufw enable

# Disable UFW
sudo ufw disable

# Reset UFW to defaults
sudo ufw --force reset

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing`
        },
        {
          title: 'Managing Rules',
          content: 'Add, remove, and manage firewall rules.',
          codeExample: `# Allow specific ports
sudo ufw allow 22          # SSH
sudo ufw allow 80          # HTTP
sudo ufw allow 443         # HTTPS
sudo ufw allow 3000        # Custom app

# Allow port ranges
sudo ufw allow 6000:6007/tcp

# Allow specific protocols
sudo ufw allow 53/udp      # DNS

# Allow from specific IP
sudo ufw allow from 192.168.1.100

# Allow from subnet
sudo ufw allow from 192.168.1.0/24

# Delete rules
sudo ufw delete allow 80
sudo ufw delete 1          # Delete by rule number`
        },
        {
          title: 'Advanced Rules',
          content: 'Create more specific and advanced firewall rules.',
          codeExample: `# Allow specific service to specific IP
sudo ufw allow from 192.168.1.100 to any port 22

# Deny specific IP
sudo ufw deny from 192.168.1.50

# Allow specific interface
sudo ufw allow in on eth0 to any port 80

# Rate limiting (prevent brute force)
sudo ufw limit ssh
sudo ufw limit 22/tcp

# Application profiles
sudo ufw app list
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'

# Logging
sudo ufw logging on
sudo ufw logging medium
tail -f /var/log/ufw.log`
        }
      ]
    }
  },
  {
    id: '21',
    icon: '🍴',
    title: 'CODE TRANSFER',
    description: 'How to upload code to a VPS',
    slug: 'code-transfer',
    content: {
      overview: 'Learn different methods to transfer your code to a VPS server.',
      sections: [
        {
          title: 'Git Deployment',
          content: 'Use Git to deploy code to your server.',
          codeExample: `# Clone repository on server
git clone https://github.com/username/repo.git
cd repo

# Set up deployment with Git hooks
# On server, create bare repository
git init --bare /var/repo/myapp.git

# Create post-receive hook
cat > /var/repo/myapp.git/hooks/post-receive << 'EOF'
#!/bin/bash
cd /var/www/myapp
git --git-dir=/var/repo/myapp.git --work-tree=/var/www/myapp checkout -f
npm install
pm2 restart myapp
EOF

chmod +x /var/repo/myapp.git/hooks/post-receive

# On local machine, add remote
git remote add production user@server:/var/repo/myapp.git
git push production main`
        },
        {
          title: 'SCP and RSYNC',
          content: 'Transfer files using SCP and rsync commands.',
          codeExample: `# SCP - Secure Copy
# Copy file to server
scp file.txt user@server:/path/to/destination/

# Copy directory recursively
scp -r directory/ user@server:/path/to/destination/

# Copy from server to local
scp user@server:/path/to/file.txt ./

# RSYNC - More efficient for large transfers
# Sync directory to server
rsync -avz --delete ./myapp/ user@server:/var/www/myapp/

# Exclude files
rsync -avz --delete --exclude='node_modules' --exclude='.git' ./myapp/ user@server:/var/www/myapp/

# Dry run (test without changes)
rsync -avz --delete --dry-run ./myapp/ user@server:/var/www/myapp/`
        },
        {
          title: 'Automated Deployment',
          content: 'Set up automated deployment with scripts and CI/CD.',
          codeExample: `# Simple deployment script
#!/bin/bash
# deploy.sh

echo "Deploying to production..."

# Build locally
npm run build

# Upload files
rsync -avz --delete --exclude='node_modules' ./ user@server:/var/www/myapp/

# Run commands on server
ssh user@server << 'EOF'
cd /var/www/myapp
npm install --production
pm2 restart myapp
EOF

echo "Deployment complete!"

# Make script executable
chmod +x deploy.sh

# GitHub Actions example (.github/workflows/deploy.yml)
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to server
        run: |
          echo "${{ secrets.SSH_KEY }}" > key
          chmod 600 key
          rsync -avz -e "ssh -i key" ./ user@server:/var/www/myapp/`
        }
      ]
    }
  },
  {
    id: '22',
    icon: '🛡️',
    title: 'SSL',
    description: 'How to setup a free SSL certificate',
    slug: 'ssl',
    content: {
      overview: 'Secure your website with free SSL certificates using Let\'s Encrypt.',
      sections: [
        {
          title: 'Let\'s Encrypt with Certbot',
          content: 'Install and configure free SSL certificates.',
          codeExample: `# Install Certbot (Ubuntu/Debian)
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Install Certbot (CentOS/RHEL)
sudo dnf install certbot python3-certbot-nginx

# Get SSL certificate for Nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Get certificate only (manual configuration)
sudo certbot certonly --nginx -d yourdomain.com

# Test automatic renewal
sudo certbot renew --dry-run

# Set up automatic renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet`
        },
        {
          title: 'Manual SSL Configuration',
          content: 'Manually configure SSL certificates in Nginx.',
          codeExample: `# Nginx SSL configuration
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`
        },
        {
          title: 'SSL Best Practices',
          content: 'Security best practices for SSL configuration.',
          codeExample: `# Check SSL certificate
openssl x509 -in /etc/letsencrypt/live/yourdomain.com/cert.pem -text -noout

# Test SSL configuration
curl -I https://yourdomain.com
openssl s_client -connect yourdomain.com:443

# SSL Labs test (online)
# https://www.ssllabs.com/ssltest/

# HSTS (HTTP Strict Transport Security)
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# Security headers
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";

# Certificate transparency
add_header Expect-CT "enforce, max-age=30";`
        }
      ]
    }
  }
]
