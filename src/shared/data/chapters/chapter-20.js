export const chapter20 = {
  id: '20',
  icon: '🔥',
  title: 'FIREWALL',
  description: 'Linux firewall configuration',
  slug: 'firewall',
  content: {
    overview: 'Welcome to FIREWALL - your digital fortress guardian! 🔥 If you\'ve ever wondered how to protect your Linux system from the wild west of the internet, firewalls are your sheriff, deputy, and entire security force rolled into one. A firewall is like having a bouncer at the door of your digital nightclub - it decides who gets in, who gets kicked out, and who gets to stay for the after-party. Linux firewalls are incredibly powerful, from the simple UFW (Uncomplicated Firewall) that makes security accessible to beginners, to the advanced iptables that gives you granular control over every packet. We\'re going to transform you from someone who leaves their digital doors wide open to a security expert who can lock down systems tighter than Fort Knox! 🚀',
    sections: [
      {
        title: '1. UFW - The Beginner\'s Best Friend 🛡️',
        content: 'UFW (Uncomplicated Firewall) is like having a security system with a simple on/off switch and easy-to-understand controls. It\'s designed to make firewall management accessible to everyone, from beginners to system administrators who want quick results without complex syntax. Think of UFW as the training wheels for firewall management - it handles the complexity while you focus on the security policies.',
        codeExample: `# === UFW FUNDAMENTALS ===
echo "🛡️ UFW - The Beginner's Best Friend"

# === UFW INSTALLATION AND SETUP ===
echo "📦 UFW Installation and Basic Setup:"

# Install UFW (usually pre-installed on Ubuntu)
echo "# Install UFW:"
echo "sudo apt update"
echo "sudo apt install ufw"

# Check UFW status
echo "# Check UFW status:"
echo "sudo ufw status"
echo "sudo ufw status verbose"
echo "sudo ufw status numbered"

# Enable/disable UFW
echo "# Enable UFW:"
echo "sudo ufw enable"
echo "# Disable UFW:"
echo "sudo ufw disable"

# === BASIC UFW RULES ===
echo "🔧 Basic UFW Rules:"

# Allow/deny by port
echo "# Allow specific ports:"
echo "sudo ufw allow 22          # SSH"
echo "sudo ufw allow 80          # HTTP"
echo "sudo ufw allow 443         # HTTPS"
echo "sudo ufw allow 3000        # Custom application"

echo "# Allow port ranges:"
echo "sudo ufw allow 6000:6007   # Port range"

echo "# Allow by protocol:"
echo "sudo ufw allow 22/tcp      # TCP only"
echo "sudo ufw allow 53/udp      # UDP only"

echo "# Deny specific ports:"
echo "sudo ufw deny 23           # Deny Telnet"
echo "sudo ufw deny 135:139      # Deny Windows ports"

# Allow/deny by service name
echo "# Allow by service name:"
echo "sudo ufw allow ssh"
echo "sudo ufw allow http"
echo "sudo ufw allow https"
echo "sudo ufw allow ftp"

# === ADVANCED UFW RULES ===
echo "🚀 Advanced UFW Rules:"

# Allow from specific IP addresses
echo "# Allow from specific IPs:"
echo "sudo ufw allow from 192.168.1.100"
echo "sudo ufw allow from 192.168.1.0/24"
echo "sudo ufw allow from 10.0.0.0/8"

# Allow to specific IP and port
echo "# Allow to specific IP and port:"
echo "sudo ufw allow from 192.168.1.100 to any port 22"
echo "sudo ufw allow from 192.168.1.0/24 to any port 3306"

# Allow specific interface
echo "# Allow on specific interface:"
echo "sudo ufw allow in on eth0 to any port 80"
echo "sudo ufw allow out on eth1"

# Deny from specific sources
echo "# Deny from specific sources:"
echo "sudo ufw deny from 192.168.1.50"
echo "sudo ufw deny from 10.0.0.0/8 to any port 22"

# === UFW DEFAULT POLICIES ===
echo "⚙️ UFW Default Policies:"

# Set default policies
echo "# Set default policies:"
echo "sudo ufw default deny incoming"
echo "sudo ufw default allow outgoing"
echo "sudo ufw default deny forward"

# Check default policies
echo "# Check current defaults:"
echo "sudo ufw status verbose"

# === UFW RULE MANAGEMENT ===
echo "📋 UFW Rule Management:"

# List rules with numbers
echo "# List numbered rules:"
echo "sudo ufw status numbered"

# Delete rules
echo "# Delete rules:"
echo "sudo ufw delete 3          # Delete rule number 3"
echo "sudo ufw delete allow 80   # Delete specific rule"
echo "sudo ufw delete allow from 192.168.1.100"

# Insert rules at specific position
echo "# Insert rule at specific position:"
echo "sudo ufw insert 1 allow from 192.168.1.100"

# Reset all rules
echo "# Reset UFW (removes all rules):"
echo "sudo ufw --force reset"

# === UFW LOGGING ===
echo "📊 UFW Logging:"

# Enable/disable logging
echo "# Configure logging:"
echo "sudo ufw logging on"
echo "sudo ufw logging off"
echo "sudo ufw logging low"
echo "sudo ufw logging medium"
echo "sudo ufw logging high"
echo "sudo ufw logging full"

# View UFW logs
echo "# View UFW logs:"
echo "sudo tail -f /var/log/ufw.log"
echo "sudo grep UFW /var/log/syslog"

# === UFW APPLICATION PROFILES ===
echo "📱 UFW Application Profiles:"

# List available application profiles
echo "# List application profiles:"
echo "sudo ufw app list"

# Show application profile info
echo "# Show profile information:"
echo "sudo ufw app info 'Apache Full'"
echo "sudo ufw app info SSH"

# Allow application profiles
echo "# Allow application profiles:"
echo "sudo ufw allow 'Apache Full'"
echo "sudo ufw allow 'OpenSSH'"
echo "sudo ufw allow 'Nginx Full'"

# === UFW PRACTICAL EXAMPLES ===
echo "💼 UFW Practical Examples:"

# Web server setup
echo "# Web server firewall setup:"
echo "sudo ufw default deny incoming"
echo "sudo ufw default allow outgoing"
echo "sudo ufw allow ssh"
echo "sudo ufw allow 'Nginx Full'"
echo "sudo ufw enable"

# Database server setup
echo "# Database server setup:"
echo "sudo ufw allow from 192.168.1.0/24 to any port 3306"
echo "sudo ufw allow from 10.0.0.0/8 to any port 5432"

# Development server setup
echo "# Development server setup:"
echo "sudo ufw allow 3000:3010/tcp  # Node.js apps"
echo "sudo ufw allow 8000:8080/tcp  # Python/Django apps"

# === THE UFW CHEAT SHEET ===
echo "🛡️ UFW Quick Reference:"
echo "sudo ufw enable             = Enable firewall"
echo "sudo ufw status             = Show status"
echo "sudo ufw allow 80           = Allow port 80"
echo "sudo ufw deny 23            = Deny port 23"
echo "sudo ufw allow from IP      = Allow from IP"
echo "sudo ufw delete 3           = Delete rule 3"
echo "sudo ufw reset              = Reset all rules"
echo "sudo ufw logging on         = Enable logging"`
      },
      {
        title: '2. iptables - The Power User\'s Arsenal ⚔️',
        content: 'iptables is the Swiss Army knife of Linux firewalls - incredibly powerful, infinitely configurable, and capable of handling any networking scenario you can imagine. While UFW is like a simple security system, iptables is like having a team of expert security engineers at your disposal. It operates at the kernel level, giving you granular control over every packet that enters, leaves, or passes through your system.',
        codeExample: `# === IPTABLES FUNDAMENTALS ===
echo "⚔️ iptables - The Power User's Arsenal"

# === IPTABLES BASICS ===
echo "🔧 iptables Fundamentals:"

# View current rules
echo "# View iptables rules:"
echo "sudo iptables -L"
echo "sudo iptables -L -v"          # Verbose output
echo "sudo iptables -L -n"          # Numeric output (no DNS resolution)
echo "sudo iptables -L --line-numbers"  # Show line numbers

# View specific table
echo "# View specific tables:"
echo "sudo iptables -t filter -L"   # Filter table (default)
echo "sudo iptables -t nat -L"      # NAT table
echo "sudo iptables -t mangle -L"   # Mangle table
echo "sudo iptables -t raw -L"      # Raw table

# === IPTABLES CHAINS ===
echo "🔗 iptables Chains:"
echo ""
echo "Built-in Chains:"
echo "INPUT    = Incoming packets to local system"
echo "OUTPUT   = Outgoing packets from local system"
echo "FORWARD  = Packets routed through system"
echo "PREROUTING  = Packets before routing decision"
echo "POSTROUTING = Packets after routing decision"

# === BASIC IPTABLES RULES ===
echo "📝 Basic iptables Rules:"

# Allow/deny by port
echo "# Allow specific ports:"
echo "sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT"
echo "sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT"
echo "sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT"

echo "# Allow port ranges:"
echo "sudo iptables -A INPUT -p tcp --dport 6000:6010 -j ACCEPT"

echo "# Allow UDP ports:"
echo "sudo iptables -A INPUT -p udp --dport 53 -j ACCEPT"

echo "# Deny specific ports:"
echo "sudo iptables -A INPUT -p tcp --dport 23 -j DROP"

# Allow/deny by IP
echo "# Allow from specific IP:"
echo "sudo iptables -A INPUT -s 192.168.1.100 -j ACCEPT"
echo "sudo iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT"

echo "# Deny from specific IP:"
echo "sudo iptables -A INPUT -s 192.168.1.50 -j DROP"
echo "sudo iptables -A INPUT -s 10.0.0.0/8 -j REJECT"

# === IPTABLES TARGETS ===
echo "🎯 iptables Targets:"
echo ""
echo "ACCEPT  = Allow packet"
echo "DROP    = Silently discard packet"
echo "REJECT  = Discard packet and send error"
echo "LOG     = Log packet and continue"
echo "RETURN  = Return to calling chain"

# === STATEFUL CONNECTIONS ===
echo "🔄 Stateful Connection Tracking:"

# Allow established connections
echo "# Allow established and related connections:"
echo "sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT"

# Allow new connections on specific ports
echo "# Allow new SSH connections:"
echo "sudo iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT"
echo "sudo iptables -A OUTPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT"

# === ADVANCED IPTABLES RULES ===
echo "🚀 Advanced iptables Rules:"

# Rate limiting
echo "# Rate limiting (prevent brute force):"
echo "sudo iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -m recent --set"
echo "sudo iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -m recent --update --seconds 60 --hitcount 4 -j REJECT"

# Time-based rules
echo "# Time-based access:"
echo "sudo iptables -A INPUT -p tcp --dport 80 -m time --timestart 09:00 --timestop 17:00 -j ACCEPT"
echo "sudo iptables -A INPUT -p tcp --dport 80 -m time --weekdays Mon,Tue,Wed,Thu,Fri -j ACCEPT"

# Limit connections
echo "# Limit concurrent connections:"
echo "sudo iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 20 -j REJECT"

# Match by interface
echo "# Interface-specific rules:"
echo "sudo iptables -A INPUT -i eth0 -p tcp --dport 80 -j ACCEPT"
echo "sudo iptables -A OUTPUT -o eth1 -j ACCEPT"

# === IPTABLES RULE MANAGEMENT ===
echo "📋 iptables Rule Management:"

# Insert rules at specific position
echo "# Insert rule at specific position:"
echo "sudo iptables -I INPUT 1 -s 192.168.1.100 -j ACCEPT"

# Replace rule
echo "# Replace rule:"
echo "sudo iptables -R INPUT 3 -p tcp --dport 443 -j ACCEPT"

# Delete rules
echo "# Delete rules:"
echo "sudo iptables -D INPUT 3"     # Delete rule number 3
echo "sudo iptables -D INPUT -p tcp --dport 80 -j ACCEPT"  # Delete specific rule

# Flush chains
echo "# Flush (delete all rules):"
echo "sudo iptables -F"             # Flush all chains
echo "sudo iptables -F INPUT"       # Flush INPUT chain only

# === IPTABLES POLICIES ===
echo "⚙️ iptables Default Policies:"

# Set default policies
echo "# Set default policies:"
echo "sudo iptables -P INPUT DROP"
echo "sudo iptables -P FORWARD DROP"
echo "sudo iptables -P OUTPUT ACCEPT"

# === IPTABLES LOGGING ===
echo "📊 iptables Logging:"

# Log packets
echo "# Log dropped packets:"
echo "sudo iptables -A INPUT -j LOG --log-prefix 'IPTABLES-DROPPED: '"
echo "sudo iptables -A INPUT -j DROP"

# Log with rate limiting
echo "# Log with rate limiting:"
echo "sudo iptables -A INPUT -m limit --limit 5/min -j LOG --log-prefix 'IPTABLES-DROPPED: '"

# View logs
echo "# View iptables logs:"
echo "sudo tail -f /var/log/syslog | grep IPTABLES"
echo "sudo dmesg | grep IPTABLES"

# === SAVE AND RESTORE RULES ===
echo "💾 Save and Restore iptables Rules:"

# Save rules (Ubuntu/Debian)
echo "# Save rules:"
echo "sudo iptables-save > /etc/iptables/rules.v4"
echo "sudo ip6tables-save > /etc/iptables/rules.v6"

# Restore rules
echo "# Restore rules:"
echo "sudo iptables-restore < /etc/iptables/rules.v4"
echo "sudo ip6tables-restore < /etc/iptables/rules.v6"

# Make rules persistent
echo "# Install iptables-persistent:"
echo "sudo apt install iptables-persistent"
echo "sudo netfilter-persistent save"
echo "sudo netfilter-persistent reload"

# === THE IPTABLES CHEAT SHEET ===
echo "⚔️ iptables Quick Reference:"
echo "iptables -L                 = List rules"
echo "iptables -A INPUT            = Append to INPUT chain"
echo "iptables -I INPUT 1          = Insert at position 1"
echo "iptables -D INPUT 3          = Delete rule 3"
echo "iptables -F                  = Flush all rules"
echo "iptables -P INPUT DROP       = Set default policy"
echo "iptables-save               = Save current rules"`
      },
      {
        title: '3. Firewall Security Strategies - Advanced Defense 🏰',
        content: 'Advanced firewall security goes beyond basic allow/deny rules. It involves creating layered defense strategies, implementing intrusion detection, managing complex network topologies, and responding to security incidents. Think of this as designing a medieval castle\'s defense system - you need multiple layers of protection, early warning systems, and rapid response capabilities.',
        codeExample: `# === ADVANCED FIREWALL SECURITY ===
echo "🏰 Firewall Security Strategies - Advanced Defense"

# === LAYERED SECURITY APPROACH ===
echo "🛡️ Layered Security Implementation:"

# Network segmentation with iptables
echo "# Network segmentation example:"
cat << 'EOF'
#!/bin/bash
# network-segmentation.sh

# DMZ network: 192.168.10.0/24
# Internal network: 192.168.20.0/24
# Management network: 192.168.30.0/24

# Allow DMZ to access only specific internal services
iptables -A FORWARD -s 192.168.10.0/24 -d 192.168.20.100 -p tcp --dport 3306 -j ACCEPT
iptables -A FORWARD -s 192.168.10.0/24 -d 192.168.20.101 -p tcp --dport 5432 -j ACCEPT

# Deny all other DMZ to internal traffic
iptables -A FORWARD -s 192.168.10.0/24 -d 192.168.20.0/24 -j DROP

# Allow management network full access
iptables -A FORWARD -s 192.168.30.0/24 -j ACCEPT

# Log denied traffic
iptables -A FORWARD -j LOG --log-prefix "FORWARD-DENIED: "
iptables -A FORWARD -j DROP
EOF

# === INTRUSION DETECTION INTEGRATION ===
echo "🔍 Intrusion Detection with Fail2ban:"

# Advanced fail2ban configuration
echo "# Advanced fail2ban jail configuration:"
cat << 'EOF'
# /etc/fail2ban/jail.local
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3
backend = systemd

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 86400

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
logpath = /var/log/nginx/error.log
maxretry = 3

[nginx-noscript]
enabled = true
port = http,https
filter = nginx-noscript
logpath = /var/log/nginx/access.log
maxretry = 6

[nginx-badbots]
enabled = true
port = http,https
filter = nginx-badbots
logpath = /var/log/nginx/access.log
maxretry = 2

[recidive]
enabled = true
filter = recidive
logpath = /var/log/fail2ban.log
action = iptables-allports[name=recidive]
bantime = 604800
findtime = 86400
maxretry = 5
EOF

# Custom fail2ban filters
echo "# Custom fail2ban filter for application logs:"
cat << 'EOF'
# /etc/fail2ban/filter.d/myapp.conf
[Definition]
failregex = ^.*\\[error\\].*authentication failed for user.*from <HOST>.*$
            ^.*\\[warning\\].*suspicious activity from <HOST>.*$
ignoreregex =
EOF

# === DDOS PROTECTION ===
echo "🌊 DDoS Protection with iptables:"

# Rate limiting and connection limits
echo "# DDoS protection rules:"
cat << 'EOF'
#!/bin/bash
# ddos-protection.sh

# Limit new connections per second
iptables -A INPUT -p tcp --dport 80 -m conntrack --ctstate NEW -m limit --limit 25/minute --limit-burst 25 -j ACCEPT

# Limit concurrent connections per IP
iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 20 -j REJECT

# Protect against SYN flood
iptables -A INPUT -p tcp --syn -m limit --limit 1/s --limit-burst 3 -j RETURN
iptables -A INPUT -p tcp --syn -j DROP

# Protect against ping flood
iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 1/s -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-request -j DROP

# Block invalid packets
iptables -A INPUT -m conntrack --ctstate INVALID -j DROP

# Block NULL packets
iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP

# Block XMAS packets
iptables -A INPUT -p tcp --tcp-flags ALL ALL -j DROP

# Block packets with FIN and URG but no ACK
iptables -A INPUT -p tcp --tcp-flags FIN,URG FIN,URG -j DROP

# Block packets with FIN but no ACK
iptables -A INPUT -p tcp --tcp-flags ACK,FIN FIN -j DROP

# Block packets with PSH but no ACK
iptables -A INPUT -p tcp --tcp-flags ACK,PSH PSH -j DROP

# Block packets with URG but no ACK
iptables -A INPUT -p tcp --tcp-flags ACK,URG URG -j DROP
EOF

# === GEOBLOCKING ===
echo "🌍 Geographic IP Blocking:"

# GeoIP blocking setup
echo "# Install GeoIP modules:"
echo "sudo apt install xtables-addons-common libtext-csv-xs-perl"
echo "sudo mkdir /usr/share/xt_geoip"

# Download and build GeoIP database
echo "# Build GeoIP database:"
cat << 'EOF'
#!/bin/bash
# build-geoip.sh
cd /tmp
wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz
wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz

gunzip GeoIP.dat.gz
gunzip GeoLiteCity.dat.gz

/usr/lib/xtables-addons/xt_geoip_build -D /usr/share/xt_geoip *.dat
EOF

# Use GeoIP in iptables
echo "# Block specific countries:"
echo "iptables -A INPUT -m geoip --src-cc CN,RU,KP -j DROP"
echo "# Allow only specific countries:"
echo "iptables -A INPUT -m geoip ! --src-cc US,CA,GB,DE -j DROP"

# === PORT KNOCKING ===
echo "🚪 Port Knocking Implementation:"

# Port knocking with iptables
echo "# Port knocking setup:"
cat << 'EOF'
#!/bin/bash
# port-knocking.sh

# Create custom chains
iptables -N KNOCKING
iptables -N GATE1
iptables -N GATE2
iptables -N GATE3
iptables -N PASSED

# Main knocking chain
iptables -A INPUT -j KNOCKING

# First knock: port 1234
iptables -A GATE1 -p tcp --dport 1234 -m recent --name AUTH1 --set -j DROP
iptables -A GATE1 -j GATE2

# Second knock: port 2345 (within 30 seconds)
iptables -A GATE2 -m recent --name AUTH1 --rcheck --seconds 30 -p tcp --dport 2345 -m recent --name AUTH2 --set -j DROP
iptables -A GATE2 -m recent --name AUTH1 --remove
iptables -A GATE2 -j GATE3

# Third knock: port 3456 (within 30 seconds)
iptables -A GATE3 -m recent --name AUTH2 --rcheck --seconds 30 -p tcp --dport 3456 -m recent --name AUTH3 --set -j DROP
iptables -A GATE3 -m recent --name AUTH2 --remove
iptables -A GATE3 -j KNOCKING

# Allow SSH after successful knocking
iptables -A PASSED -m recent --name AUTH3 --rcheck --seconds 3600 -p tcp --dport 22 -j ACCEPT
iptables -A PASSED -m recent --name AUTH3 --remove

# Start the knocking sequence
iptables -A KNOCKING -j GATE1
iptables -A KNOCKING -j PASSED
EOF

# === FIREWALL MONITORING ===
echo "📊 Advanced Firewall Monitoring:"

# Real-time monitoring script
echo "# Real-time firewall monitoring:"
cat << 'EOF'
#!/bin/bash
# firewall-monitor.sh

LOGFILE="/var/log/firewall-monitor.log"
ALERT_EMAIL="admin@example.com"

monitor_connections() {
    while true; do
        TIMESTAMP=\\$(date '+%Y-%m-%d %H:%M:%S')

        # Count active connections
        TOTAL_CONNECTIONS=\\$(ss -tuln | wc -l)
        TCP_CONNECTIONS=\\$(ss -tln | wc -l)
        UDP_CONNECTIONS=\\$(ss -uln | wc -l)

        # Count blocked attempts
        BLOCKED_TODAY=\\$(grep "\\$(date +%Y-%m-%d)" /var/log/ufw.log | grep BLOCK | wc -l)

        # Check for suspicious activity
        SUSPICIOUS_IPS=\\$(tail -1000 /var/log/ufw.log | grep BLOCK | awk '{print \\$13}' | sort | uniq -c | sort -nr | head -5)

        # Log metrics
        echo "\\$TIMESTAMP - Connections: \\$TOTAL_CONNECTIONS (TCP: \\$TCP_CONNECTIONS, UDP: \\$UDP_CONNECTIONS), Blocked: \\$BLOCKED_TODAY" >> \\$LOGFILE

        # Alert on high connection count
        if [ \\$TOTAL_CONNECTIONS -gt 1000 ]; then
            echo "High connection count: \\$TOTAL_CONNECTIONS" | mail -s "Firewall Alert" \\$ALERT_EMAIL
        fi

        # Alert on high block count
        if [ \\$BLOCKED_TODAY -gt 100 ]; then
            echo "High block count today: \\$BLOCKED_TODAY" | mail -s "Security Alert" \\$ALERT_EMAIL
        fi

        sleep 60
    done
}

monitor_connections &
EOF

# === AUTOMATED RESPONSE SYSTEM ===
echo "🤖 Automated Incident Response:"

# Automated response script
echo "# Automated incident response:"
cat << 'EOF'
#!/bin/bash
# incident-response.sh

THREAT_THRESHOLD=50
BAN_DURATION=86400  # 24 hours

analyze_threats() {
    # Analyze recent logs for threats
    RECENT_ATTACKS=\\$(tail -1000 /var/log/ufw.log | grep "\\$(date +%Y-%m-%d)" | grep BLOCK)

    # Extract attacking IPs and count attempts
    echo "\\$RECENT_ATTACKS" | awk '{print \\$13}' | sort | uniq -c | sort -nr | while read count ip; do
        if [ \\$count -gt \\$THREAT_THRESHOLD ]; then
            echo "High-threat IP detected: \\$ip (\\$count attempts)"

            # Add to permanent ban list
            iptables -I INPUT 1 -s \\$ip -j DROP

            # Log the action
            echo "\\$(date): Permanently banned \\$ip (\\$count attempts)" >> /var/log/auto-ban.log

            # Send alert
            echo "Automatically banned IP \\$ip after \\$count attack attempts" | \\
                mail -s "Auto-Ban Alert" admin@example.com
        fi
    done
}

# Run analysis every hour
while true; do
    analyze_threats
    sleep 3600
done
EOF

# === THE ADVANCED SECURITY CHEAT SHEET ===
echo "🏰 Advanced Security Quick Reference:"
echo "Network segmentation: Isolate different network zones"
echo "Intrusion detection: Use fail2ban for automated blocking"
echo "DDoS protection: Rate limiting and connection limits"
echo "GeoIP blocking: Block traffic from specific countries"
echo "Port knocking: Hide services behind secret sequences"
echo "Monitoring: Real-time analysis and alerting"
echo "Automation: Respond to threats automatically"`
      },
      {
        title: '4. Firewall Mastery - Expert-Level Operations 🎯',
        content: 'Firewall mastery represents the pinnacle of network security expertise. This involves designing enterprise-grade security architectures, implementing zero-trust networks, managing complex multi-site configurations, and creating custom security solutions. Master-level firewall skills enable you to protect organizations from sophisticated threats and design security systems that scale to enterprise levels.',
        codeExample: `# === FIREWALL MASTERY ===
echo "🎯 Firewall Mastery - Expert-Level Operations"

# === ENTERPRISE FIREWALL ARCHITECTURE ===
echo "🏢 Enterprise Firewall Architecture:"

# Multi-zone firewall configuration
echo "# Enterprise multi-zone setup:"
cat << 'EOF'
#!/bin/bash
# enterprise-firewall.sh

# Define network zones
INTERNET="0.0.0.0/0"
DMZ="192.168.10.0/24"
INTERNAL="192.168.20.0/24"
MANAGEMENT="192.168.30.0/24"
DATABASE="192.168.40.0/24"

# Create custom chains for each zone
iptables -N ZONE_INTERNET
iptables -N ZONE_DMZ
iptables -N ZONE_INTERNAL
iptables -N ZONE_MANAGEMENT
iptables -N ZONE_DATABASE

# Internet to DMZ (web servers)
iptables -A ZONE_INTERNET -d \\$DMZ -p tcp --dport 80 -j ACCEPT
iptables -A ZONE_INTERNET -d \\$DMZ -p tcp --dport 443 -j ACCEPT
iptables -A ZONE_INTERNET -d \\$DMZ -p tcp --dport 25 -j ACCEPT  # SMTP

# DMZ to Internal (application servers)
iptables -A ZONE_DMZ -s \\$DMZ -d \\$INTERNAL -p tcp --dport 8080 -j ACCEPT
iptables -A ZONE_DMZ -s \\$DMZ -d \\$INTERNAL -p tcp --dport 8443 -j ACCEPT

# Internal to Database
iptables -A ZONE_INTERNAL -s \\$INTERNAL -d \\$DATABASE -p tcp --dport 3306 -j ACCEPT
iptables -A ZONE_INTERNAL -s \\$INTERNAL -d \\$DATABASE -p tcp --dport 5432 -j ACCEPT

# Management network access
iptables -A ZONE_MANAGEMENT -s \\$MANAGEMENT -j ACCEPT

# Apply zone rules to FORWARD chain
iptables -A FORWARD -j ZONE_INTERNET
iptables -A FORWARD -j ZONE_DMZ
iptables -A FORWARD -j ZONE_INTERNAL
iptables -A FORWARD -j ZONE_MANAGEMENT
iptables -A FORWARD -j ZONE_DATABASE

# Default deny
iptables -A FORWARD -j LOG --log-prefix "ZONE-DENIED: "
iptables -A FORWARD -j DROP
EOF

# === ZERO-TRUST NETWORK IMPLEMENTATION ===
echo "🔒 Zero-Trust Network Implementation:"

# Zero-trust firewall rules
echo "# Zero-trust network configuration:"
cat << 'EOF'
#!/bin/bash
# zero-trust-firewall.sh

# Default deny everything
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT DROP

# Allow loopback
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# Create application-specific chains
iptables -N WEB_SERVER
iptables -N API_SERVER
iptables -N DATABASE_SERVER
iptables -N MONITORING

# Web server rules (only HTTP/HTTPS)
iptables -A WEB_SERVER -p tcp --dport 80 -j ACCEPT
iptables -A WEB_SERVER -p tcp --dport 443 -j ACCEPT
iptables -A WEB_SERVER -j RETURN

# API server rules (authenticated access only)
iptables -A API_SERVER -p tcp --dport 8080 -m conntrack --ctstate NEW -m recent --set --name API_ACCESS
iptables -A API_SERVER -p tcp --dport 8080 -m recent --rcheck --seconds 3600 --name API_ACCESS -j ACCEPT
iptables -A API_SERVER -j RETURN

# Database server rules (internal access only)
iptables -A DATABASE_SERVER -s 192.168.20.0/24 -p tcp --dport 3306 -j ACCEPT
iptables -A DATABASE_SERVER -s 192.168.20.0/24 -p tcp --dport 5432 -j ACCEPT
iptables -A DATABASE_SERVER -j RETURN

# Monitoring rules
iptables -A MONITORING -s 192.168.30.100 -p tcp --dport 9090 -j ACCEPT  # Prometheus
iptables -A MONITORING -s 192.168.30.100 -p tcp --dport 3000 -j ACCEPT  # Grafana
iptables -A MONITORING -j RETURN

# Apply rules based on destination
iptables -A INPUT -d 192.168.10.0/24 -j WEB_SERVER
iptables -A INPUT -d 192.168.20.0/24 -j API_SERVER
iptables -A INPUT -d 192.168.40.0/24 -j DATABASE_SERVER
iptables -A INPUT -d 192.168.30.0/24 -j MONITORING

# Log and drop everything else
iptables -A INPUT -j LOG --log-prefix "ZERO-TRUST-DENIED: "
iptables -A INPUT -j DROP
EOF

# === ADVANCED TRAFFIC SHAPING ===
echo "🚦 Advanced Traffic Shaping with tc and iptables:"

# Quality of Service (QoS) implementation
echo "# QoS traffic shaping:"
cat << 'EOF'
#!/bin/bash
# qos-firewall.sh

INTERFACE="eth0"
BANDWIDTH="100mbit"

# Create traffic classes
tc qdisc add dev \\$INTERFACE root handle 1: htb default 30

# High priority (VoIP, SSH)
tc class add dev \\$INTERFACE parent 1: classid 1:10 htb rate 20mbit ceil 50mbit
tc qdisc add dev \\$INTERFACE parent 1:10 handle 10: sfq perturb 10

# Medium priority (HTTP/HTTPS)
tc class add dev \\$INTERFACE parent 1: classid 1:20 htb rate 30mbit ceil 80mbit
tc qdisc add dev \\$INTERFACE parent 1:20 handle 20: sfq perturb 10

# Low priority (bulk transfers)
tc class add dev \\$INTERFACE parent 1: classid 1:30 htb rate 10mbit ceil 30mbit
tc qdisc add dev \\$INTERFACE parent 1:30 handle 30: sfq perturb 10

# Mark packets with iptables
iptables -t mangle -A OUTPUT -p tcp --dport 22 -j MARK --set-mark 1
iptables -t mangle -A OUTPUT -p udp --dport 5060 -j MARK --set-mark 1  # SIP
iptables -t mangle -A OUTPUT -p tcp --dport 80 -j MARK --set-mark 2
iptables -t mangle -A OUTPUT -p tcp --dport 443 -j MARK --set-mark 2
iptables -t mangle -A OUTPUT -p tcp --dport 21 -j MARK --set-mark 3   # FTP
iptables -t mangle -A OUTPUT -p tcp --dport 25 -j MARK --set-mark 3   # SMTP

# Apply traffic control filters
tc filter add dev \\$INTERFACE protocol ip parent 1:0 prio 1 handle 1 fw flowid 1:10
tc filter add dev \\$INTERFACE protocol ip parent 1:0 prio 2 handle 2 fw flowid 1:20
tc filter add dev \\$INTERFACE protocol ip parent 1:0 prio 3 handle 3 fw flowid 1:30
EOF

# === CUSTOM SECURITY MODULES ===
echo "🔧 Custom Security Modules:"

# Custom iptables module for application-layer filtering
echo "# Custom security module example:"
cat << 'EOF'
#!/bin/bash
# custom-security-module.sh

# Application-layer inspection
inspect_http_traffic() {
    # Create NFQUEUE target for userspace processing
    iptables -A INPUT -p tcp --dport 80 -j NFQUEUE --queue-num 0

    # Start userspace packet processor
    python3 << 'PYTHON'
import netfilterqueue
import scapy.all as scapy

def process_packet(packet):
    pkt = scapy.IP(packet.get_payload())

    if pkt.haslayer(scapy.Raw):
        payload = pkt[scapy.Raw].load.decode('utf-8', errors='ignore')

        # Check for SQL injection patterns
        sql_patterns = ['union select', 'drop table', '1=1', 'or 1=1']
        if any(pattern in payload.lower() for pattern in sql_patterns):
            print(f"SQL injection attempt blocked from {pkt[scapy.IP].src}")
            packet.drop()
            return

        # Check for XSS patterns
        xss_patterns = ['<script>', 'javascript:', 'onerror=']
        if any(pattern in payload.lower() for pattern in xss_patterns):
            print(f"XSS attempt blocked from {pkt[scapy.IP].src}")
            packet.drop()
            return

    packet.accept()

nfqueue = netfilterqueue.NetfilterQueue()
nfqueue.bind(0, process_packet)
nfqueue.run()
PYTHON
}

# Start the inspection module
inspect_http_traffic &
EOF

# === DISTRIBUTED FIREWALL MANAGEMENT ===
echo "🌐 Distributed Firewall Management:"

# Centralized firewall management
echo "# Centralized firewall configuration:"
cat << 'EOF'
#!/bin/bash
# distributed-firewall-manager.sh

FIREWALL_SERVERS=("fw1.example.com" "fw2.example.com" "fw3.example.com")
CONFIG_DIR="/etc/firewall-configs"
SSH_KEY="/root/.ssh/firewall_key"

deploy_firewall_config() {
    local server=\\$1
    local config_file=\\$2

    echo "Deploying firewall config to \\$server..."

    # Copy configuration
    scp -i \\$SSH_KEY \\$config_file root@\\$server:/tmp/firewall.sh

    # Execute configuration
    ssh -i \\$SSH_KEY root@\\$server 'bash /tmp/firewall.sh && rm /tmp/firewall.sh'

    if [ \\$? -eq 0 ]; then
        echo "✅ Successfully deployed to \\$server"
    else
        echo "❌ Failed to deploy to \\$server"
    fi
}

# Deploy to all servers
for server in "\\$\\{FIREWALL_SERVERS[@]\\}"; do
    deploy_firewall_config \\$server "\\$CONFIG_DIR/production-firewall.sh" &
done

wait  # Wait for all deployments to complete
echo "Firewall deployment completed"
EOF

# === FIREWALL TESTING AND VALIDATION ===
echo "🧪 Firewall Testing and Validation:"

# Automated firewall testing
echo "# Automated firewall testing:"
cat << 'EOF'
#!/bin/bash
# firewall-test-suite.sh

TEST_RESULTS="/var/log/firewall-tests.log"

run_test() {
    local test_name=\\$1
    local command=\\$2
    local expected_result=\\$3

    echo "Running test: \\$test_name"
    result=\\$(eval \\$command 2>&1)

    if [[ \\$result == *"\\$expected_result"* ]]; then
        echo "✅ PASS: \\$test_name" | tee -a \\$TEST_RESULTS
    else
        echo "❌ FAIL: \\$test_name - Expected: \\$expected_result, Got: \\$result" | tee -a \\$TEST_RESULTS
    fi
}

# Test SSH access
run_test "SSH Access Test" "timeout 5 ssh -o ConnectTimeout=3 user@localhost echo 'success'" "success"

# Test HTTP access
run_test "HTTP Access Test" "curl -s -o /dev/null -w '%{http_code}' http://localhost" "200"

# Test blocked port
run_test "Blocked Port Test" "timeout 3 telnet localhost 23" "Connection refused"

# Test rate limiting
run_test "Rate Limiting Test" "for i in {1..10}; do curl -s localhost; done" "rate limited"

# Test geographic blocking
run_test "GeoIP Blocking Test" "curl -s --interface 1.2.3.4 localhost" "blocked"

echo "Firewall testing completed. Results in \\$TEST_RESULTS"
EOF

# === THE FIREWALL MASTERY TOOLKIT ===
echo "🎯 Firewall Mastery Toolkit:"
echo "============================="
echo "Enterprise architecture: Multi-zone security design"
echo "Zero-trust networks: Never trust, always verify"
echo "Traffic shaping: QoS and bandwidth management"
echo "Custom modules: Application-layer inspection"
echo "Distributed management: Centralized configuration"
echo "Automated testing: Continuous security validation"

# === CONGRATULATIONS! ===
echo "🎓 FIREWALL MASTERY COMPLETE!"
echo "=============================="
echo "You now understand:"
echo "✅ UFW for simple, effective firewall management"
echo "✅ iptables for advanced, granular control"
echo "✅ Advanced security strategies and layered defense"
echo "✅ Expert-level enterprise firewall operations"
echo "✅ Intrusion detection and automated response"
echo "✅ DDoS protection and traffic shaping"
echo "✅ Zero-trust network implementation"
echo "✅ Custom security modules and distributed management"
echo ""
echo "🔥 You are now a FIREWALL MASTER!"
echo "Protect networks and systems like a cybersecurity expert! 🚀"
echo ""
echo "Remember: Security is not a destination, it's a journey!"
echo "Use your firewall mastery to build impenetrable digital fortresses! 💪"
echo ""
echo "🎉 CONGRATULATIONS ON COMPLETING ALL 20 LINUXBUDDY CHAPTERS!"
echo "You've mastered Linux from basics to advanced enterprise operations!"
echo "Go forth and conquer the Linux world! 🐧👑"`
      }
    ]
  }
}