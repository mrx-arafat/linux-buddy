// Chapters 16-34 for LinuxBuddy
export const chapters16to34 = [
  {
    id: '16',
    icon: '📦',
    title: 'PACKAGE MANAGERS',
    description: 'How to install packages from source',
    slug: 'package-managers',
    content: {
      overview: 'Learn different package management systems and how to install software.',
      sections: [
        {
          title: 'APT (Debian/Ubuntu)',
          content: 'Advanced Package Tool for Debian-based distributions.',
          codeExample: `# Update package lists
sudo apt update

# Install packages
sudo apt install package-name

# Remove packages
sudo apt remove package-name

# Search packages
apt search keyword`
        }
      ]
    }
  },
  {
    id: '17',
    icon: '⌨️',
    title: 'CHOOSING A VPS',
    description: 'How to choose a Virtual Private Server',
    slug: 'choosing-a-vps',
    content: {
      overview: 'Learn how to select the right VPS provider and configuration for your needs.',
      sections: [
        {
          title: 'VPS Providers',
          content: 'Popular VPS providers and their strengths.',
          codeExample: `# Popular VPS Providers:
# DigitalOcean - Simple interface, $5/month
# Linode - Excellent performance, $5/month  
# Vultr - High performance, $2.50/month
# AWS EC2 - Most features, pay-as-you-go
# Hetzner - Best price/performance, €3.29/month`
        }
      ]
    }
  },
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

# SSH with specific port
ssh -p 2222 username@server-ip

# SSH with key file
ssh -i ~/.ssh/private_key username@server-ip`
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
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from LinuxBuddy!');
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
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

# Enable UFW
sudo ufw enable

# Allow specific ports
sudo ufw allow 22          # SSH
sudo ufw allow 80          # HTTP
sudo ufw allow 443         # HTTPS

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing`
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

# Pull latest changes
git pull origin main

# Set up deployment hook
git remote add production user@server:/var/repo/myapp.git
git push production main`
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
          codeExample: `# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com

# Test automatic renewal
sudo certbot renew --dry-run

# Set up automatic renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet`
        }
      ]
    }
  },
  {
    id: '23',
    icon: '🚅',
    title: 'NGINX',
    description: 'How to configure Nginx on your VPS',
    slug: 'nginx',
    content: {
      overview: 'Learn to configure Nginx as a web server and reverse proxy.',
      sections: [
        {
          title: 'Installing Nginx',
          content: 'Install and start Nginx on your server.',
          codeExample: `# Install Nginx
sudo apt install nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx

# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx`
        }
      ]
    }
  },
  {
    id: '24',
    icon: '🍱',
    title: 'ENV VARS',
    description: 'The many ways to configure Environment Variables in Linux',
    slug: 'env-vars',
    content: {
      overview: 'Master environment variables for configuration and security.',
      sections: [
        {
          title: 'Setting Environment Variables',
          content: 'Different ways to set and use environment variables.',
          codeExample: `# Temporary (current session only)
export VAR_NAME="value"

# View environment variables
env
printenv
echo $VAR_NAME

# Persistent (add to ~/.bashrc)
echo 'export API_KEY="your-secret-key"' >> ~/.bashrc

# System-wide (add to /etc/environment)
echo 'JAVA_HOME="/usr/lib/jvm/java-11"' | sudo tee -a /etc/environment`
        }
      ]
    }
  },
  {
    id: '25',
    icon: '🤖',
    title: 'SYSTEMD',
    description: 'Automatically start and heal processes with systemd',
    slug: 'systemd',
    content: {
      overview: 'Use systemd to manage services and ensure they start automatically.',
      sections: [
        {
          title: 'Creating a Service',
          content: 'Create a systemd service for your application.',
          codeExample: `# Create service file
sudo nano /etc/systemd/system/myapp.service

# Service configuration
[Unit]
Description=My Node.js App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/myapp
ExecStart=/usr/bin/node app.js
Restart=always

[Install]
WantedBy=multi-user.target

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable myapp
sudo systemctl start myapp`
        }
      ]
    }
  },
  {
    id: '26',
    icon: '💽',
    title: 'MOUNT A VOLUME',
    description: 'How to attach block storage to your VPS',
    slug: 'mount-a-volume',
    content: {
      overview: 'Learn to attach and mount additional storage to your VPS.',
      sections: [
        {
          title: 'Mounting Block Storage',
          content: 'Attach and mount additional storage volumes.',
          codeExample: `# List available disks
lsblk
fdisk -l

# Create filesystem on new disk
sudo mkfs.ext4 /dev/sdb

# Create mount point
sudo mkdir /mnt/data

# Mount the volume
sudo mount /dev/sdb /mnt/data

# Permanent mount (add to /etc/fstab)
echo '/dev/sdb /mnt/data ext4 defaults 0 2' | sudo tee -a /etc/fstab`
        }
      ]
    }
  },
  {
    id: '27',
    icon: '🚀',
    title: 'FINAL CHECKLIST',
    description: 'Checklist of considerations for VPS deployment',
    slug: 'final-checklist',
    content: {
      overview: 'Final security and optimization checklist for production deployment.',
      sections: [
        {
          title: 'Security Checklist',
          content: 'Essential security measures for production servers.',
          codeExample: `# Security Checklist:
# ✓ Disable root login
# ✓ Use SSH keys only
# ✓ Configure firewall (UFW)
# ✓ Install fail2ban
# ✓ Set up SSL certificates
# ✓ Regular security updates
# ✓ Strong passwords/keys
# ✓ Backup strategy
# ✓ Monitor logs
# ✓ Limit sudo access

# Quick security audit
sudo ss -tulpn | grep LISTEN  # Check open ports
sudo ufw status               # Check firewall
sudo systemctl status ssh     # Check SSH config`
        }
      ]
    }
  },
  {
    id: '28',
    icon: '🎊',
    title: 'LINUX HISTORY',
    description: 'The weird history of Linux',
    slug: 'linux-history',
    content: {
      overview: 'Discover the fascinating history and evolution of Linux.',
      sections: [
        {
          title: 'The Birth of Linux',
          content: 'How Linus Torvalds created Linux in 1991.',
          codeExample: `# Linus Torvalds' famous announcement (August 25, 1991):
"Hello everybody out there using minix -

I'm doing a (free) operating system (just a hobby, won't be big and
professional like gnu) for 386(486) AT clones..."

# First Linux version: 0.01 (September 1991)
# First "official" version: 0.02 (October 1991)
# Linux 1.0 released: March 1994
# Current version: 6.x (2023+)`
        }
      ]
    }
  },
  {
    id: '29',
    icon: '🍟',
    title: 'LINUX IN 100 SECONDS',
    description: 'A refresher summary of key Linux concepts',
    slug: 'linux-in-100-seconds',
    content: {
      overview: 'Quick refresher of essential Linux concepts and commands.',
      sections: [
        {
          title: 'Essential Commands Summary',
          content: 'The most important Linux commands in one place.',
          codeExample: `# Navigation: pwd, ls, cd, find
# File operations: cp, mv, rm, mkdir, touch, chmod, chown
# Text processing: cat, less, head, tail, grep, sed, awk
# Process management: ps, top, htop, kill, jobs, nohup
# System info: df, du, free, uname, whoami, id
# Network: ping, curl, wget, ssh, scp, rsync
# Package management: apt, yum, dnf (depends on distro)
# Archive/compression: tar, gzip, zip, unzip`
        }
      ]
    }
  },
  {
    id: '30',
    icon: '🐳',
    title: 'DOCKER 101',
    description: 'Learn how to use Docker to build microservices',
    slug: 'docker-101',
    content: {
      overview: 'Introduction to containerization with Docker.',
      sections: [
        {
          title: 'Docker Basics',
          content: 'Understanding containers and basic Docker commands.',
          codeExample: `# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Basic Docker commands
docker --version
docker run hello-world
docker ps                    # List running containers
docker ps -a                 # List all containers
docker images                # List images
docker pull ubuntu:20.04     # Pull image
docker run -it ubuntu:20.04 bash  # Interactive container

# Container management
docker stop container_id
docker start container_id
docker rm container_id`
        }
      ]
    }
  },
  {
    id: '31',
    icon: '🔪',
    title: 'ANSIBLE',
    description: 'Learn how to automatic server tasks with Ansible',
    slug: 'ansible',
    content: {
      overview: 'Automate server configuration and deployment with Ansible.',
      sections: [
        {
          title: 'Ansible Basics',
          content: 'Introduction to infrastructure automation with Ansible.',
          codeExample: `# Install Ansible
sudo apt install ansible

# Basic inventory file (/etc/ansible/hosts)
[webservers]
server1.example.com
server2.example.com

# Simple playbook (site.yml)
---
- hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Start nginx
      service:
        name: nginx
        state: started

# Run playbook
ansible-playbook site.yml`
        }
      ]
    }
  },
  {
    id: '32',
    icon: '🔨',
    title: 'SST',
    description: 'Infrastructure as Code for AWS',
    slug: 'sst',
    content: {
      overview: 'Learn Infrastructure as Code with SST for AWS deployments.',
      sections: [
        {
          title: 'SST Introduction',
          content: 'Modern Infrastructure as Code for serverless applications.',
          codeExample: `# Install SST
npm install -g sst

# Create new SST app
npx create-sst@latest my-app
cd my-app

# Basic SST config (sst.config.ts)
import { SSTConfig } from "sst";

export default {
  config(_input) {
    return {
      name: "my-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      // Your infrastructure here
    });
  },
} satisfies SSTConfig;

# Deploy
sst deploy
sst dev     # Development mode`
        }
      ]
    }
  },
  {
    id: '33',
    icon: '🎸',
    title: 'NEOVIM',
    description: 'Level up for terminal editing skills',
    slug: 'neovim',
    content: {
      overview: 'Advanced text editing with Neovim and modern plugins.',
      sections: [
        {
          title: 'Neovim Setup',
          content: 'Install and configure Neovim for modern development.',
          codeExample: `# Install Neovim
sudo apt install neovim

# Basic Neovim config (~/.config/nvim/init.vim)
set number
set relativenumber
set tabstop=2
set shiftwidth=2
set expandtab
set smartindent

# Plugin manager (vim-plug)
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \\
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

# Basic plugins
call plug#begin()
Plug 'nvim-treesitter/nvim-treesitter'
Plug 'neovim/nvim-lspconfig'
call plug#end()`
        }
      ]
    }
  },
  {
    id: '34',
    icon: '😎',
    title: 'COOLIFY',
    description: 'Manage multiple apps on your VPS',
    slug: 'coolify',
    content: {
      overview: 'Deploy and manage multiple applications with Coolify.',
      sections: [
        {
          title: 'Coolify Installation',
          content: 'Self-hosted alternative to Heroku for managing applications.',
          codeExample: `# Install Coolify
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# Access Coolify
# Open browser to http://your-server-ip:3000

# Features:
# - Git-based deployments
# - Multiple applications
# - Database management
# - SSL certificates
# - Environment variables
# - Monitoring and logs

# Deploy from Git repository
# 1. Connect your Git repository
# 2. Configure build settings
# 3. Set environment variables
# 4. Deploy with one click

# Supported frameworks:
# - Node.js, Python, PHP, Ruby
# - Static sites (React, Vue, etc.)
# - Docker containers
# - Databases (PostgreSQL, MySQL, Redis)`
        }
      ]
    }
  }
]
