export const chapter18 = {
  id: '18',
  icon: '🗝️',
  title: 'SSH',
  description: 'Secure Shell for remote access',
  slug: 'ssh',
  content: {
    overview: 'Welcome to SSH - your magical portal to remote Linux systems! 🗝️ If you\'ve ever needed to control a computer from across the room, across the country, or across the world, SSH (Secure Shell) is your teleportation device. SSH is like having a secure tunnel through the internet that lets you control remote servers as if you were sitting right in front of them. It\'s the backbone of modern system administration, cloud computing, and remote development. Think of SSH as your master key to the Linux universe - once you understand it, you can securely access and manage any Linux system anywhere in the world. We\'re going to turn you from someone who\'s intimidated by remote access into an SSH wizard who can tunnel through firewalls, automate deployments, and manage fleets of servers! 🚀',
    sections: [
      {
        title: '1. SSH Fundamentals - Your Remote Control Magic 🎮',
        content: 'SSH is like having a remote control for Linux systems, but instead of changing TV channels, you\'re executing commands on computers thousands of miles away. Understanding SSH fundamentals means learning how to establish secure connections, authenticate safely, and navigate remote systems as if they were local. It\'s the difference between being stuck at your desk and having the freedom to work from anywhere.',
        codeExample: `# === SSH BASICS ===
echo "🎮 SSH Fundamentals - Your Remote Control Magic"

# Basic SSH connection
ssh username@hostname                # "Connect to remote server"
ssh user@192.168.1.100              # "Connect using IP address"
ssh -p 2222 user@server.com         # "Connect on custom port"

# SSH with different options
ssh -v user@server.com               # "Verbose output for debugging"
ssh -X user@server.com               # "Enable X11 forwarding (GUI apps)"
ssh -C user@server.com               # "Enable compression"

# === SSH CONNECTION PROCESS ===
echo "🔐 SSH Connection Process:"
echo "1. Client initiates connection"
echo "2. Server sends public key"
echo "3. Client verifies server identity"
echo "4. Encrypted channel established"
echo "5. User authentication"
echo "6. Secure shell session begins"

# === FIRST-TIME CONNECTION ===
echo "🆕 First-Time SSH Connection:"
echo "When connecting to a new server, you'll see:"
echo "The authenticity of host 'server.com' can't be established."
echo "ECDSA key fingerprint is SHA256:..."
echo "Are you sure you want to continue connecting (yes/no)?"
echo ""
echo "Type 'yes' to accept and add to known_hosts"
echo "The server's fingerprint is stored in ~/.ssh/known_hosts"

# === SSH CLIENT CONFIGURATION ===
echo "⚙️ SSH Client Configuration:"

# Global SSH config
echo "System-wide config: /etc/ssh/ssh_config"
echo "User config: ~/.ssh/config"

# Example SSH config file
cat << 'EOF'
# ~/.ssh/config example
Host myserver
    HostName server.example.com
    User myusername
    Port 2222
    IdentityFile ~/.ssh/myserver_key

Host *.example.com
    User admin
    Port 22
    ForwardAgent yes

Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
EOF

echo "Usage: ssh myserver  # Uses config settings"

# === SSH AUTHENTICATION METHODS ===
echo "🔑 SSH Authentication Methods:"
echo ""
echo "Password Authentication:"
echo "✅ Simple to set up"
echo "❌ Less secure"
echo "❌ Vulnerable to brute force"
echo ""
echo "Public Key Authentication:"
echo "✅ More secure"
echo "✅ No password needed"
echo "✅ Can be automated"
echo "❌ Key management required"
echo ""
echo "Two-Factor Authentication:"
echo "✅ Highest security"
echo "✅ Combines something you know + have"
echo "❌ More complex setup"

# === SSH SESSION MANAGEMENT ===
echo "📱 SSH Session Management:"

# Basic session commands
echo "# During SSH session:"
echo "exit                    # Close SSH connection"
echo "logout                  # Alternative to exit"
echo "Ctrl+D                  # EOF signal (also exits)"
echo ""
echo "# SSH escape sequences (after ~):"
echo "~.                      # Disconnect"
echo "~^Z                     # Suspend SSH"
echo "~#                      # List forwarded connections"
echo "~?                      # Show escape help"

# Multiple sessions
echo "# Managing multiple SSH sessions:"
echo "ssh user@server1 &      # Background SSH session"
echo "jobs                    # List background jobs"
echo "fg %1                   # Bring job 1 to foreground"

# === SSH TROUBLESHOOTING ===
echo "🔧 SSH Troubleshooting:"

# Common connection issues
echo "# Debug connection issues:"
echo "ssh -v user@server      # Verbose output"
echo "ssh -vv user@server     # More verbose"
echo "ssh -vvv user@server    # Maximum verbosity"

# Check SSH service
echo "# Check if SSH service is running:"
echo "systemctl status ssh    # Ubuntu/Debian"
echo "systemctl status sshd   # CentOS/RHEL"
echo "ps aux | grep ssh       # Check SSH processes"

# Network connectivity
echo "# Test network connectivity:"
echo "ping server.com         # Basic connectivity"
echo "telnet server.com 22    # Test SSH port"
echo "nmap -p 22 server.com   # Port scan"

# === SSH SECURITY BASICS ===
echo "🛡️ SSH Security Basics:"

# Change default port
echo "# Change SSH port (in /etc/ssh/sshd_config):"
echo "Port 2222               # Use non-standard port"

# Disable root login
echo "# Disable root SSH login:"
echo "PermitRootLogin no      # Prevent root access"

# Limit users
echo "# Limit SSH access:"
echo "AllowUsers user1 user2  # Only allow specific users"
echo "DenyUsers baduser       # Deny specific users"

# === THE SSH FUNDAMENTALS CHEAT SHEET ===
echo "🎮 SSH Fundamentals Quick Reference:"
echo "ssh user@server         = Basic connection"
echo "ssh -p 2222 user@server = Custom port"
echo "ssh -v user@server      = Verbose debugging"
echo "~/.ssh/config           = Client configuration"
echo "~/.ssh/known_hosts      = Server fingerprints"
echo "exit or Ctrl+D          = Close connection"
echo "~.                      = Force disconnect"`
      },
      {
        title: '2. SSH Keys - Your Digital Identity Cards 🎫',
        content: 'SSH keys are like having a VIP pass to your servers - once set up, they provide secure, password-free access that\'s both more convenient and more secure than traditional passwords. Think of SSH keys as a sophisticated lock-and-key system where you hold the private key and servers have your public key. Understanding SSH keys transforms you from someone typing passwords constantly to someone who glides seamlessly between servers.',
        codeExample: `# === SSH KEY FUNDAMENTALS ===
echo "🎫 SSH Keys - Your Digital Identity Cards"

# === GENERATING SSH KEYS ===
echo "🔑 Generating SSH Key Pairs:"

# Generate default RSA key
ssh-keygen -t rsa -b 4096           # "Generate 4096-bit RSA key"

# Generate with custom name and comment
ssh-keygen -t rsa -b 4096 -f ~/.ssh/myserver_key -C "user@email.com"

# Generate different key types
ssh-keygen -t ed25519               # "Generate Ed25519 key (recommended)"
ssh-keygen -t ecdsa -b 521          # "Generate ECDSA key"
ssh-keygen -t dsa                   # "Generate DSA key (deprecated)"

# === KEY TYPES COMPARISON ===
echo "🔐 SSH Key Types Comparison:"
echo ""
echo "Ed25519:"
echo "✅ Most secure and fastest"
echo "✅ Small key size (68 characters)"
echo "✅ Recommended for new keys"
echo "❌ Not supported on very old systems"
echo ""
echo "RSA 4096:"
echo "✅ Widely supported"
echo "✅ Very secure with 4096 bits"
echo "❌ Larger key size"
echo "❌ Slower than Ed25519"
echo ""
echo "ECDSA:"
echo "✅ Good security and performance"
echo "❌ Potential NSA backdoor concerns"
echo "❌ Less widely adopted"

# === SSH KEY MANAGEMENT ===
echo "🗂️ SSH Key Management:"

# List SSH keys
echo "# List your SSH keys:"
echo "ls -la ~/.ssh/          # Show all SSH files"
echo "ssh-add -l              # List loaded keys"

# SSH key file structure
echo "# SSH key files:"
echo "~/.ssh/id_rsa           # Private key (keep secret!)"
echo "~/.ssh/id_rsa.pub       # Public key (share this)"
echo "~/.ssh/config           # SSH client config"
echo "~/.ssh/known_hosts      # Server fingerprints"
echo "~/.ssh/authorized_keys  # Allowed public keys (on server)"

# View public key
echo "# View your public key:"
echo "cat ~/.ssh/id_rsa.pub"
echo "ssh-keygen -y -f ~/.ssh/id_rsa  # Extract public from private"

# === COPYING KEYS TO SERVERS ===
echo "📤 Copying SSH Keys to Servers:"

# Easy method (if ssh-copy-id available)
ssh-copy-id user@server.com         # "Copy default key to server"
ssh-copy-id -i ~/.ssh/mykey.pub user@server.com # "Copy specific key"

# Manual method
echo "# Manual key copying:"
echo "cat ~/.ssh/id_rsa.pub | ssh user@server 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'"

# Using scp
echo "# Copy key file then append:"
echo "scp ~/.ssh/id_rsa.pub user@server:/tmp/"
echo "ssh user@server 'cat /tmp/id_rsa.pub >> ~/.ssh/authorized_keys'"

# === SSH AGENT ===
echo "🤖 SSH Agent - Key Management:"

# Start SSH agent
echo "# Start SSH agent:"
echo "eval \\$(ssh-agent -s)    # Start agent and set environment"

# Add keys to agent
echo "# Add keys to SSH agent:"
echo "ssh-add ~/.ssh/id_rsa    # Add default key"
echo "ssh-add ~/.ssh/mykey     # Add specific key"
echo "ssh-add -l              # List loaded keys"
echo "ssh-add -D              # Remove all keys from agent"

# SSH agent with timeout
echo "# Add key with timeout:"
echo "ssh-add -t 3600 ~/.ssh/id_rsa  # Key expires in 1 hour"

# === SSH KEY SECURITY ===
echo "🔒 SSH Key Security Best Practices:"

# Secure key permissions
echo "# Set correct permissions:"
echo "chmod 700 ~/.ssh/              # SSH directory"
echo "chmod 600 ~/.ssh/id_rsa        # Private key"
echo "chmod 644 ~/.ssh/id_rsa.pub    # Public key"
echo "chmod 600 ~/.ssh/authorized_keys # Authorized keys"
echo "chmod 600 ~/.ssh/config        # SSH config"

# Passphrase protection
echo "# Add passphrase to existing key:"
echo "ssh-keygen -p -f ~/.ssh/id_rsa"

# Key rotation
echo "# Key rotation best practices:"
echo "1. Generate new keys regularly (annually)"
echo "2. Remove old keys from servers"
echo "3. Use different keys for different purposes"
echo "4. Monitor key usage in logs"

# === MULTIPLE SSH KEYS ===
echo "🔑 Managing Multiple SSH Keys:"

# SSH config for multiple keys
cat << 'EOF'
# ~/.ssh/config for multiple keys
Host work-server
    HostName work.example.com
    User workuser
    IdentityFile ~/.ssh/work_key
    IdentitiesOnly yes

Host personal-server
    HostName personal.example.com
    User personaluser
    IdentityFile ~/.ssh/personal_key
    IdentitiesOnly yes

Host github.com
    User git
    IdentityFile ~/.ssh/github_key
    IdentitiesOnly yes
EOF

# Use specific key for connection
echo "# Use specific key:"
echo "ssh -i ~/.ssh/specific_key user@server"

# === SSH KEY TROUBLESHOOTING ===
echo "🔧 SSH Key Troubleshooting:"

# Debug key authentication
echo "# Debug key authentication:"
echo "ssh -v user@server      # See which keys are tried"
echo "ssh-add -l              # Check loaded keys"
echo "ssh -o PreferredAuthentications=publickey user@server"

# Test key authentication
echo "# Test if key works:"
echo "ssh -o PasswordAuthentication=no user@server"

# Check server-side authorized_keys
echo "# On server, check authorized_keys:"
echo "cat ~/.ssh/authorized_keys"
echo "ls -la ~/.ssh/authorized_keys  # Check permissions"

# === SSH KEY AUTOMATION ===
echo "🤖 SSH Key Automation:"

# Automated key deployment script
cat << 'EOF'
#!/bin/bash
# deploy-keys.sh
KEY_FILE="\\$HOME/.ssh/id_rsa.pub"
SERVERS=("server1.com" "server2.com" "server3.com")
USER="admin"

for server in "\\$\\{SERVERS[@]\\}"; do
    echo "Deploying key to \\$server..."
    ssh-copy-id -i "\\$KEY_FILE" "\\$USER@\\$server"
    if [ \\$? -eq 0 ]; then
        echo "✅ Key deployed to \\$server"
    else
        echo "❌ Failed to deploy key to \\$server"
    fi
done
EOF

# === THE SSH KEYS CHEAT SHEET ===
echo "🎫 SSH Keys Quick Reference:"
echo "ssh-keygen -t ed25519           = Generate Ed25519 key"
echo "ssh-copy-id user@server         = Copy key to server"
echo "ssh-add ~/.ssh/key              = Add key to agent"
echo "ssh -i ~/.ssh/key user@server   = Use specific key"
echo "chmod 600 ~/.ssh/id_rsa         = Set private key permissions"
echo "ssh-add -l                      = List loaded keys"
echo "IdentitiesOnly yes              = Use only specified key"`
      },
      {
        title: '3. SSH Tunneling - Your Network Ninja Skills 🌐',
        content: 'SSH tunneling is like having secret passages through the internet. You can create secure tunnels to access services behind firewalls, encrypt insecure connections, and even browse the web through remote servers. Think of SSH tunnels as your personal VPN that you can create on-demand for any purpose. Mastering SSH tunneling turns you into a network ninja who can bypass restrictions and secure communications.',
        codeExample: `# === SSH TUNNELING FUNDAMENTALS ===
echo "🌐 SSH Tunneling - Your Network Ninja Skills"

# === LOCAL PORT FORWARDING ===
echo "🔄 Local Port Forwarding (Local -> Remote):"
echo "Access remote services through local ports"

# Basic local forwarding
ssh -L 8080:localhost:80 user@server    # "Forward local 8080 to remote 80"
ssh -L 3306:localhost:3306 user@dbserver # "Access remote MySQL locally"
ssh -L 5432:postgres.internal:5432 user@jumphost # "Access internal DB via jumphost"

# Multiple port forwards
ssh -L 8080:localhost:80 -L 3306:localhost:3306 user@server

# Background forwarding
ssh -f -N -L 8080:localhost:80 user@server # "Run in background"

# === REMOTE PORT FORWARDING ===
echo "🔄 Remote Port Forwarding (Remote -> Local):"
echo "Expose local services to remote server"

# Basic remote forwarding
ssh -R 8080:localhost:80 user@server    # "Remote can access local port 80 via 8080"
ssh -R 2222:localhost:22 user@server    # "Remote can SSH back to local machine"

# Expose local web server
ssh -R 8080:localhost:3000 user@server  # "Share local dev server"

# === DYNAMIC PORT FORWARDING (SOCKS PROXY) ===
echo "🌐 Dynamic Port Forwarding (SOCKS Proxy):"
echo "Create SOCKS proxy for web browsing"

# Create SOCKS proxy
ssh -D 8080 user@server                 # "Create SOCKS proxy on port 8080"
ssh -f -N -D 8080 user@server           # "Background SOCKS proxy"

# Configure browser to use SOCKS proxy:
# Firefox: Settings -> Network -> Manual proxy -> SOCKS Host: localhost:8080

# === PRACTICAL TUNNELING EXAMPLES ===
echo "💼 Practical SSH Tunneling Examples:"

# Access internal web interface
echo "# Access internal admin panel:"
echo "ssh -L 8080:internal-server:80 user@gateway"
echo "# Then browse to: http://localhost:8080"

# Secure database connection
echo "# Secure MySQL connection:"
echo "ssh -L 3306:db.internal:3306 user@jumphost"
echo "# Connect MySQL client to: localhost:3306"

# Bypass firewall restrictions
echo "# Access blocked websites:"
echo "ssh -D 8080 user@external-server"
echo "# Configure browser SOCKS proxy: localhost:8080"

# Remote desktop access
echo "# Access remote VNC:"
echo "ssh -L 5901:localhost:5901 user@server"
echo "# Connect VNC client to: localhost:5901"

# === TUNNEL MANAGEMENT ===
echo "🔧 SSH Tunnel Management:"

# List active tunnels
echo "# List SSH connections with tunnels:"
echo "ss -tlnp | grep ssh"
echo "netstat -tlnp | grep ssh"

# Kill specific tunnel
echo "# Find and kill tunnel process:"
echo "ps aux | grep 'ssh.*-L'"
echo "kill PID"

# Tunnel health check
echo "# Test tunnel connectivity:"
echo "curl -I http://localhost:8080"
echo "telnet localhost 8080"

# === ADVANCED TUNNELING ===
echo "🚀 Advanced SSH Tunneling:"

# Jump host tunneling
echo "# Multi-hop tunneling:"
echo "ssh -J jumphost1,jumphost2 user@target"
echo "ssh -L 8080:target:80 -J jumphost user@intermediate"

# Tunnel through multiple hops
echo "# Chain tunnels:"
echo "ssh -L 8080:localhost:8080 user@hop1"
echo "ssh -L 8080:target:80 user@hop2  # On hop1"

# Reverse tunnel for remote access
echo "# Allow remote access to local machine:"
echo "ssh -R 2222:localhost:22 user@public-server"
echo "# From public server: ssh -p 2222 localuser@localhost"

# === TUNNEL AUTOMATION ===
echo "🤖 Tunnel Automation:"

# Persistent tunnel script
cat << 'EOF'
#!/bin/bash
# persistent-tunnel.sh
TUNNEL_HOST="user@server.com"
LOCAL_PORT="8080"
REMOTE_HOST="internal.server"
REMOTE_PORT="80"

while true; do
    echo "Starting tunnel..."
    ssh -o ServerAliveInterval=60 \\\\
        -o ServerAliveCountMax=3 \\\\
        -o ExitOnForwardFailure=yes \\\\
        -L \\$LOCAL_PORT:\\$REMOTE_HOST:\\$REMOTE_PORT \\\\
        \\$TUNNEL_HOST

    echo "Tunnel disconnected, retrying in 5 seconds..."
    sleep 5
done
EOF

# Systemd service for tunnel
cat << 'EOF'
# /etc/systemd/system/ssh-tunnel.service
[Unit]
Description=SSH Tunnel
After=network.target

[Service]
Type=simple
User=tunneluser
ExecStart=/usr/bin/ssh -N -L 8080:internal:80 user@gateway
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# === TUNNEL SECURITY ===
echo "🔒 SSH Tunnel Security:"

# Restrict tunnel access
echo "# Server-side tunnel restrictions (/etc/ssh/sshd_config):"
echo "AllowTcpForwarding yes          # Allow tunneling"
echo "GatewayPorts no                 # Restrict to localhost"
echo "PermitTunnel no                 # Disable layer 3 tunneling"

# Client-side restrictions
echo "# Restrict in ~/.ssh/authorized_keys:"
echo 'no-port-forwarding,no-X11-forwarding ssh-rsa AAAAB3...'

# Tunnel monitoring
echo "# Monitor tunnel usage:"
echo "ss -tlnp | grep :8080"
echo "lsof -i :8080"

# === THE SSH TUNNELING CHEAT SHEET ===
echo "🌐 SSH Tunneling Quick Reference:"
echo "ssh -L 8080:target:80 user@server  = Local forward (access remote via local)"
echo "ssh -R 8080:localhost:80 user@server = Remote forward (expose local to remote)"
echo "ssh -D 8080 user@server            = SOCKS proxy (browse through server)"
echo "ssh -f -N -L 8080:target:80 user@server = Background tunnel"
echo "ssh -J jumphost user@target        = Jump through intermediate host"
echo "ss -tlnp | grep ssh                = List active tunnels"`
      },
      {
        title: '4. SSH Server Configuration - Fortress Management 🏰',
        content: 'Configuring an SSH server is like designing the security system for your digital fortress. You need to balance accessibility with security, performance with safety. Understanding SSH server configuration transforms you from someone who uses default settings to someone who can create secure, efficient, and customized SSH environments that meet specific security requirements.',
        codeExample: `# === SSH SERVER CONFIGURATION ===
echo "🏰 SSH Server Configuration - Fortress Management"

# === SSH SERVER BASICS ===
echo "🔧 SSH Server (sshd) Configuration:"

# Main configuration file
echo "Main config: /etc/ssh/sshd_config"
echo "Host keys: /etc/ssh/ssh_host_*"
echo "Service control: systemctl {start|stop|restart|reload} ssh"

# Test configuration
echo "# Test SSH config before applying:"
echo "sudo sshd -t                    # Test configuration syntax"
echo "sudo sshd -T                    # Show effective configuration"

# === ESSENTIAL SECURITY SETTINGS ===
echo "🛡️ Essential SSH Security Settings:"

# Basic security hardening
cat << 'EOF'
# /etc/ssh/sshd_config security settings
Port 2222                           # Change default port
Protocol 2                          # Use SSH protocol 2 only
PermitRootLogin no                   # Disable root login
PasswordAuthentication no            # Disable password auth
PubkeyAuthentication yes             # Enable key-based auth
AuthorizedKeysFile .ssh/authorized_keys
PermitEmptyPasswords no              # No empty passwords
MaxAuthTries 3                       # Limit login attempts
LoginGraceTime 60                    # Login timeout
ClientAliveInterval 300              # Keep-alive interval
ClientAliveCountMax 2                # Max keep-alive probes
MaxStartups 10:30:60                 # Connection rate limiting
EOF

# User and group restrictions
echo "# User access control:"
echo "AllowUsers user1 user2 admin    # Only allow specific users"
echo "DenyUsers baduser guest         # Deny specific users"
echo "AllowGroups ssh-users admin     # Only allow specific groups"
echo "DenyGroups noremote             # Deny specific groups"

# === ADVANCED AUTHENTICATION ===
echo "🔐 Advanced SSH Authentication:"

# Two-factor authentication
echo "# Enable 2FA with Google Authenticator:"
echo "sudo apt install libpam-google-authenticator"
echo "# Add to /etc/pam.d/sshd:"
echo "auth required pam_google_authenticator.so"
echo "# In /etc/ssh/sshd_config:"
echo "ChallengeResponseAuthentication yes"
echo "AuthenticationMethods publickey,keyboard-interactive"

# Certificate-based authentication
echo "# SSH Certificate Authority setup:"
echo "ssh-keygen -t rsa -b 4096 -f /etc/ssh/ca_key"
echo "# Sign user keys:"
echo "ssh-keygen -s /etc/ssh/ca_key -I user1 -n user1 ~/.ssh/id_rsa.pub"
echo "# In sshd_config:"
echo "TrustedUserCAKeys /etc/ssh/ca_key.pub"

# === SSH SERVER PERFORMANCE ===
echo "⚡ SSH Server Performance Tuning:"

# Performance settings
cat << 'EOF'
# Performance optimization
MaxSessions 10                       # Max sessions per connection
MaxStartups 10:30:60                 # Connection rate limiting
TCPKeepAlive yes                     # Enable TCP keep-alive
Compression delayed                   # Compress after authentication
UseDNS no                            # Disable DNS lookups
GSSAPIAuthentication no              # Disable GSSAPI if not needed
EOF

# Cipher and algorithm selection
echo "# Modern crypto algorithms:"
echo "KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group16-sha512"
echo "Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com"
echo "MACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com"

# === SSH SERVER MONITORING ===
echo "📊 SSH Server Monitoring:"

# Log analysis
echo "# SSH logs location:"
echo "/var/log/auth.log               # Ubuntu/Debian"
echo "/var/log/secure                 # CentOS/RHEL"
echo "journalctl -u ssh               # systemd systems"

# Monitor SSH connections
echo "# Monitor active SSH sessions:"
echo "who                             # Show logged-in users"
echo "w                               # Show user activity"
echo "ss -tnp | grep :22              # Show SSH connections"
echo "netstat -tnp | grep :22         # Alternative"

# SSH connection logging
echo "# Enhanced logging in sshd_config:"
echo "LogLevel VERBOSE                # Detailed logging"
echo "SyslogFacility AUTH             # Log facility"

# === FAIL2BAN INTEGRATION ===
echo "🚫 Fail2ban SSH Protection:"

# Install and configure fail2ban
echo "# Install fail2ban:"
echo "sudo apt install fail2ban"

# Fail2ban SSH jail configuration
cat << 'EOF'
# /etc/fail2ban/jail.local
[sshd]
enabled = true
port = 2222
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600
findtime = 600
EOF

echo "sudo systemctl restart fail2ban"

# === SSH SERVER MAINTENANCE ===
echo "🔧 SSH Server Maintenance:"

# Key rotation
echo "# Rotate SSH host keys:"
echo "sudo rm /etc/ssh/ssh_host_*"
echo "sudo ssh-keygen -A              # Generate new host keys"
echo "sudo systemctl restart ssh"

# Security auditing
echo "# SSH security audit:"
echo "sudo ssh-audit localhost        # Audit SSH configuration"
echo "nmap --script ssh2-enum-algos localhost"

# Configuration backup
echo "# Backup SSH configuration:"
echo "sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup"
echo "sudo tar -czf ssh-config-backup.tar.gz /etc/ssh/"

# === CUSTOM SSH CONFIGURATIONS ===
echo "🎯 Custom SSH Configurations:"

# Development server config
cat << 'EOF'
# Development server sshd_config
Port 22
PermitRootLogin no
PasswordAuthentication yes           # Allow passwords for dev
PubkeyAuthentication yes
X11Forwarding yes                    # Allow GUI apps
AllowTcpForwarding yes               # Allow tunneling
GatewayPorts no
MaxAuthTries 6                       # More lenient for dev
LoginGraceTime 120
EOF

# Production server config
cat << 'EOF'
# Production server sshd_config
Port 2222
PermitRootLogin no
PasswordAuthentication no            # Keys only
PubkeyAuthentication yes
X11Forwarding no                     # No GUI forwarding
AllowTcpForwarding no                # No tunneling
MaxAuthTries 3                       # Strict auth attempts
LoginGraceTime 60
ClientAliveInterval 300
ClientAliveCountMax 2
MaxStartups 5:50:10                  # Conservative limits
EOF

# === SSH SERVER TROUBLESHOOTING ===
echo "🔧 SSH Server Troubleshooting:"

# Debug SSH server
echo "# Debug SSH server issues:"
echo "sudo sshd -d                    # Run in debug mode"
echo "sudo sshd -T                    # Show effective config"
echo "sudo sshd -t                    # Test configuration"

# Common issues and solutions
echo "# Common SSH server issues:"
echo "Permission denied:"
echo "  - Check user exists and has shell access"
echo "  - Verify authorized_keys permissions (600)"
echo "  - Check SSH directory permissions (700)"
echo ""
echo "Connection refused:"
echo "  - Check if SSH service is running"
echo "  - Verify firewall allows SSH port"
echo "  - Check if port is correct"
echo ""
echo "Slow connections:"
echo "  - Set UseDNS no in sshd_config"
echo "  - Disable GSSAPI authentication"
echo "  - Check network connectivity"

# === THE SSH SERVER CHEAT SHEET ===
echo "🏰 SSH Server Quick Reference:"
echo "/etc/ssh/sshd_config            = Main configuration file"
echo "sudo sshd -t                    = Test configuration"
echo "sudo systemctl reload ssh       = Apply config changes"
echo "PermitRootLogin no              = Disable root login"
echo "PasswordAuthentication no       = Disable password auth"
echo "Port 2222                       = Change default port"
echo "AllowUsers user1 user2          = Restrict user access"`
      },
      {
        title: '5. SSH Mastery - Advanced Techniques 🧙‍♂️',
        content: 'SSH mastery involves advanced techniques that separate casual users from SSH wizards. This includes automation, complex configurations, security hardening, and integration with modern DevOps workflows. Master-level SSH skills enable you to manage hundreds of servers efficiently, automate complex deployments, and create secure, scalable infrastructure.',
        codeExample: `# === SSH MASTERY - ADVANCED TECHNIQUES ===
echo "🧙‍♂️ SSH Mastery - Advanced Techniques"

# === SSH AUTOMATION AND SCRIPTING ===
echo "🤖 SSH Automation and Scripting:"

# Parallel SSH execution
echo "# Execute commands on multiple servers:"
cat << 'EOF'
#!/bin/bash
# parallel-ssh.sh
SERVERS=("server1.com" "server2.com" "server3.com")
COMMAND="uptime"

for server in "\\$\\{SERVERS[@]\\}"; do
    echo "=== \\$server ==="
    ssh -o ConnectTimeout=5 user@\\$server "\\$COMMAND" &
done
wait  # Wait for all background jobs to complete
EOF

# SSH with expect for automation
echo "# Automated SSH with expect:"
cat << 'EOF'
#!/usr/bin/expect
# auto-ssh.exp
set timeout 20
set host [lindex $argv 0]
set user [lindex $argv 1]
set password [lindex $argv 2]

spawn ssh $user@$host
expect {
    "password:" {
        send "$password\\r"
        expect "$ "
        send "uptime\\r"
        expect "$ "
        send "exit\\r"
    }
    "yes/no" {
        send "yes\\r"
        exp_continue
    }
}
EOF

# === ADVANCED SSH CONFIGURATIONS ===
echo "🔧 Advanced SSH Configurations:"

# Complex SSH config with includes
cat << 'EOF'
# ~/.ssh/config with advanced features
Include ~/.ssh/config.d/*

# Default settings for all hosts
Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
    TCPKeepAlive yes
    ControlMaster auto
    ControlPath ~/.ssh/sockets/%r@%h-%p
    ControlPersist 600

# Production environment
Host prod-*
    User admin
    Port 2222
    IdentityFile ~/.ssh/production_key
    ProxyJump bastion.prod.com
    StrictHostKeyChecking yes

# Development environment
Host dev-*
    User developer
    Port 22
    IdentityFile ~/.ssh/development_key
    ForwardAgent yes
    X11Forwarding yes

# Database servers
Host db-*
    User dbadmin
    LocalForward 3306 localhost:3306
    LocalForward 5432 localhost:5432
EOF

# === SSH CONNECTION MULTIPLEXING ===
echo "🔗 SSH Connection Multiplexing:"

# Enable connection sharing
echo "# Connection multiplexing setup:"
echo "mkdir -p ~/.ssh/sockets"
echo "# Add to ~/.ssh/config:"
echo "ControlMaster auto"
echo "ControlPath ~/.ssh/sockets/%r@%h-%p"
echo "ControlPersist 600"

# Manage multiplexed connections
echo "# Manage shared connections:"
echo "ssh -O check user@server       # Check if connection exists"
echo "ssh -O exit user@server        # Close shared connection"
echo "ssh -O stop user@server        # Stop connection sharing"

# === SSH CERTIFICATE AUTHORITY ===
echo "🏛️ SSH Certificate Authority:"

# Set up SSH CA
echo "# Create SSH Certificate Authority:"
echo "ssh-keygen -t rsa -b 4096 -f /etc/ssh/ca_key -C 'SSH CA'"

# Sign user certificates
echo "# Sign user certificate:"
echo "ssh-keygen -s /etc/ssh/ca_key -I user1 -n user1,admin -V +52w ~/.ssh/id_rsa.pub"

# Server configuration for certificates
echo "# Server config for certificates:"
echo "TrustedUserCAKeys /etc/ssh/ca_key.pub"
echo "AuthorizedPrincipalsFile /etc/ssh/auth_principals/%u"

# === SSH BASTION/JUMP HOST SETUP ===
echo "🏰 SSH Bastion/Jump Host Setup:"

# Bastion host configuration
cat << 'EOF'
# Bastion host sshd_config
Port 22
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowTcpForwarding yes
GatewayPorts no
X11Forwarding no
PermitTunnel no
AllowAgentForwarding yes
ClientAliveInterval 300
ClientAliveCountMax 2
MaxSessions 10
EOF

# Client configuration for bastion
echo "# Client config for bastion access:"
echo "Host internal-*"
echo "    ProxyJump bastion.company.com"
echo "    User admin"

# === SSH SECURITY HARDENING ===
echo "🔒 Advanced SSH Security Hardening:"

# Generate strong host keys
echo "# Generate strong SSH host keys:"
echo "sudo rm /etc/ssh/ssh_host_*"
echo "sudo ssh-keygen -t rsa -b 4096 -f /etc/ssh/ssh_host_rsa_key"
echo "sudo ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key"

# Disable weak algorithms
cat << 'EOF'
# Disable weak crypto in sshd_config
KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr
MACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com
HostKeyAlgorithms rsa-sha2-512,rsa-sha2-256,ssh-ed25519
EOF

# === SSH MONITORING AND ALERTING ===
echo "📊 Advanced SSH Monitoring:"

# SSH connection monitoring script
cat << 'EOF'
#!/bin/bash
# ssh-monitor.sh
ALERT_EMAIL="admin@company.com"
MAX_CONNECTIONS=50
SUSPICIOUS_USERS=("root" "admin" "test")

# Monitor connection count
CURRENT_CONNECTIONS=\\$(ss -tn | grep :22 | wc -l)
if [ \\$CURRENT_CONNECTIONS -gt \\$MAX_CONNECTIONS ]; then
    echo "High SSH connection count: \\$CURRENT_CONNECTIONS" | \\\\
    mail -s "SSH Alert: High Connections" \\$ALERT_EMAIL
fi

# Monitor suspicious login attempts
for user in "\\$\\{SUSPICIOUS_USERS[@]\\}"; do
    ATTEMPTS=\\$(grep "Failed password for \\$user" /var/log/auth.log | \\\\
               grep "\\$(date +%b\\\\ %d)" | wc -l)
    if [ \\$ATTEMPTS -gt 5 ]; then
        echo "Suspicious login attempts for \\$user: \\$ATTEMPTS" | \\\\
        mail -s "SSH Alert: Suspicious Activity" \\$ALERT_EMAIL
    fi
done
EOF

# === SSH PERFORMANCE OPTIMIZATION ===
echo "⚡ SSH Performance Optimization:"

# High-performance SSH settings
cat << 'EOF'
# High-performance sshd_config
MaxStartups 100:30:200
MaxSessions 50
TCPKeepAlive yes
Compression delayed
UseDNS no
GSSAPIAuthentication no
KerberosAuthentication no
EOF

# Client-side performance
echo "# Client performance optimization:"
echo "Compression yes"
echo "CompressionLevel 6"
echo "IPQoS throughput"

# === SSH INTEGRATION WITH DEVOPS ===
echo "🔄 SSH Integration with DevOps:"

# Ansible SSH configuration
cat << 'EOF'
# ansible.cfg SSH settings
[ssh_connection]
ssh_args = -o ControlMaster=auto -o ControlPersist=60s -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no
pipelining = True
control_path = ~/.ansible/cp/%%h-%%p-%%r
EOF

# Docker SSH integration
echo "# SSH into Docker containers:"
echo "docker run -d --name sshd -p 2222:22 ubuntu/ssh"
echo "ssh -p 2222 user@localhost"

# === THE SSH MASTERY TOOLKIT ===
echo "🧙‍♂️ SSH Mastery Toolkit:"
echo "========================="
echo "Connection multiplexing: Faster subsequent connections"
echo "Certificate authority: Scalable key management"
echo "Bastion hosts: Secure network access patterns"
echo "Automation scripts: Parallel execution and monitoring"
echo "Security hardening: Modern crypto and restrictions"
echo "Performance tuning: Optimized for high-load environments"

# === CONGRATULATIONS! ===
echo "🎓 SSH MASTERY COMPLETE!"
echo "========================"
echo "You now understand:"
echo "✅ SSH fundamentals and secure connections"
echo "✅ SSH key management and automation"
echo "✅ Advanced tunneling and port forwarding"
echo "✅ SSH server configuration and hardening"
echo "✅ Master-level techniques and automation"
echo "✅ DevOps integration and scaling"
echo "✅ Security best practices and monitoring"
echo "✅ Performance optimization techniques"
echo ""
echo "🗝️ You are now an SSH WIZARD!"
echo "Connect, secure, and automate like a master! 🚀"
echo ""
echo "Remember: SSH is the foundation of secure remote administration!"
echo "Use your powers to build secure, efficient infrastructure! 💪"`
      }
    ]
  }
}