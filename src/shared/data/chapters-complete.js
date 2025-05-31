export const completeChapters = [
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
          codeExample: `# Install Nginx (Ubuntu/Debian)
sudo apt update
sudo apt install nginx

# Install Nginx (CentOS/RHEL)
sudo dnf install nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx

# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx`
        },
        {
          title: 'Basic Configuration',
          content: 'Configure Nginx for serving static files and reverse proxy.',
          codeExample: `# Main configuration file
/etc/nginx/nginx.conf

# Site configuration
/etc/nginx/sites-available/default
/etc/nginx/sites-enabled/default

# Basic server block
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}

# Reverse proxy configuration
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`
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
VAR_NAME="value"

# View environment variables
env
printenv
echo $VAR_NAME

# Unset variable
unset VAR_NAME

# Set for single command
VAR_NAME="value" command

# Check if variable is set
if [ -z "$VAR_NAME" ]; then
    echo "Variable not set"
fi`
        },
        {
          title: 'Persistent Environment Variables',
          content: 'Make environment variables persistent across sessions.',
          codeExample: `# User-specific (add to ~/.bashrc or ~/.profile)
echo 'export PATH=$PATH:/new/path' >> ~/.bashrc
echo 'export API_KEY="your-secret-key"' >> ~/.bashrc

# System-wide (add to /etc/environment)
echo 'JAVA_HOME="/usr/lib/jvm/java-11-openjdk"' | sudo tee -a /etc/environment

# For specific service (systemd)
sudo systemctl edit myservice
# Add:
[Service]
Environment="NODE_ENV=production"
Environment="PORT=3000"

# Using .env files
# Create .env file
cat > .env << 'EOF'
DATABASE_URL=postgresql://user:pass@localhost/db
API_KEY=your-secret-key
DEBUG=false
EOF

# Load .env in bash
set -a
source .env
set +a`
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
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable myapp
sudo systemctl start myapp`
        },
        {
          title: 'Managing Services',
          content: 'Control and monitor systemd services.',
          codeExample: `# Service management
sudo systemctl start myapp
sudo systemctl stop myapp
sudo systemctl restart myapp
sudo systemctl reload myapp

# Service status
sudo systemctl status myapp
sudo systemctl is-active myapp
sudo systemctl is-enabled myapp

# Enable/disable autostart
sudo systemctl enable myapp
sudo systemctl disable myapp

# View logs
journalctl -u myapp
journalctl -u myapp -f        # Follow logs
journalctl -u myapp --since today`
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

# Verify mount
df -h
mount | grep sdb

# Permanent mount (add to /etc/fstab)
echo '/dev/sdb /mnt/data ext4 defaults 0 2' | sudo tee -a /etc/fstab

# Test fstab
sudo mount -a`
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
sudo fail2ban-client status   # Check fail2ban
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
professional like gnu) for 386(486) AT clones. This has been brewing
since april, and is starting to get ready. I'd like any feedback on
things people like/dislike in minix, as my OS resembles it somewhat
(same physical layout of the file-system (due to practical reasons)
among other things).

I've currently ported bash(1.08) and gcc(1.40), and things seem to work.
This implies that I'll get something practical within a few months, and
I'd like to know what features most people would want. Any suggestions
are welcome, but I won't promise I'll implement them :-)

                Linus (torvalds@kruuna.helsinki.fi)

PS. Yes – it's free of any minix code, and it has a multi-threaded fs.
It is NOT protable (uses 386 task switching etc), and it probably never
will support anything other than AT-harddisks, as that's all I have :-(."

# First Linux version: 0.01 (September 1991)
# First "official" version: 0.02 (October 1991)`
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
          codeExample: `# Navigation
pwd, ls, cd, find

# File operations
cp, mv, rm, mkdir, touch, chmod, chown

# Text processing
cat, less, head, tail, grep, sed, awk

# Process management
ps, top, htop, kill, jobs, nohup

# System info
df, du, free, uname, whoami, id

# Network
ping, curl, wget, ssh, scp, rsync

# Package management
apt, yum, dnf (depends on distro)

# Archive/compression
tar, gzip, zip, unzip`
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
docker rm container_id
docker rmi image_id`
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

[databases]
db1.example.com

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
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "my-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
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
Plug 'hrsh7th/nvim-cmp'
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
