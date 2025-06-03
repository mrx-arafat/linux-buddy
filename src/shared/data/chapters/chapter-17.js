export const chapter17 = {
  id: '17',
  icon: '⌨️',
  title: 'CHOOSING A VPS',
  description: 'Selecting the right VPS provider',
  slug: 'choosing-a-vps',
  content: {
    overview: 'Welcome to CHOOSING A VPS - where you become the master of cloud infrastructure decisions! ⌨️ If you\'ve ever been overwhelmed by the endless options of VPS providers, confused by technical specifications, or wondered whether you need 2GB or 8GB of RAM, this chapter is your salvation. A VPS (Virtual Private Server) is like renting your own piece of the internet - a virtual computer that runs 24/7 in a data center, ready to host your websites, applications, or experiments. Choosing the right VPS is like choosing the right apartment - you need to consider location, size, price, amenities, and reliability. We\'re going to turn you from someone who gets paralyzed by choice into a VPS selection expert who can pick the perfect server for any project! 🚀',
    sections: [
      {
        title: '1. VPS Fundamentals - Understanding Your Digital Real Estate 🏠',
        content: 'Before diving into providers, you need to understand what you\'re actually buying. A VPS is like having your own apartment in a digital building - you get dedicated resources, full control, and privacy, but you\'re sharing the underlying hardware with other tenants. Understanding VPS fundamentals helps you make informed decisions about specifications, pricing, and features.',
        codeExample: `# === VPS FUNDAMENTALS ===
echo "🏠 VPS Fundamentals - Understanding Your Digital Real Estate"

# === VPS SPECIFICATIONS EXPLAINED ===
echo "📊 VPS Specifications Breakdown:"
echo ""
echo "CPU (vCPU):"
echo "• 1 vCPU = Good for basic websites, small apps"
echo "• 2 vCPU = Suitable for medium traffic sites"
echo "• 4+ vCPU = High-traffic sites, applications"
echo ""
echo "RAM (Memory):"
echo "• 512MB-1GB = Basic static websites"
echo "• 2-4GB = WordPress, small databases"
echo "• 8GB+ = Large applications, multiple services"
echo ""
echo "Storage:"
echo "• HDD = Cheaper, slower (good for backups)"
echo "• SSD = Faster, more expensive (recommended)"
echo "• NVMe = Fastest, premium option"
echo ""
echo "Bandwidth:"
echo "• 1TB/month = Typical for small-medium sites"
echo "• Unlimited = Usually 'fair use' policy"
echo "• 10Gbps+ = High-speed connections"

# === VPS TYPES COMPARISON ===
echo "🔧 VPS Types Comparison:"
echo ""
echo "Shared VPS (OpenVZ/LXC):"
echo "✅ Cheaper pricing"
echo "✅ Good for basic needs"
echo "❌ Limited kernel access"
echo "❌ Resource contention possible"
echo ""
echo "KVM VPS (Full Virtualization):"
echo "✅ Full root access"
echo "✅ Custom kernels allowed"
echo "✅ Better isolation"
echo "❌ Slightly more expensive"
echo ""
echo "Dedicated CPU:"
echo "✅ Guaranteed CPU performance"
echo "✅ No 'noisy neighbor' issues"
echo "❌ Higher cost"

# === OPERATING SYSTEM CHOICES ===
echo "🐧 Operating System Selection:"
echo ""
echo "Ubuntu LTS (Long Term Support):"
echo "✅ Beginner-friendly"
echo "✅ Extensive documentation"
echo "✅ 5-year support cycle"
echo "✅ Large community"
echo ""
echo "CentOS/Rocky Linux/AlmaLinux:"
echo "✅ Enterprise-grade stability"
echo "✅ RHEL compatibility"
echo "✅ Long support cycles"
echo "❌ Older packages"
echo ""
echo "Debian:"
echo "✅ Very stable"
echo "✅ Minimal resource usage"
echo "✅ Security-focused"
echo "❌ Conservative package updates"
echo ""
echo "Arch Linux:"
echo "✅ Cutting-edge packages"
echo "✅ Minimal base system"
echo "❌ Requires more maintenance"
echo "❌ Rolling release risks"

# === LOCATION CONSIDERATIONS ===
echo "🌍 Server Location Impact:"
echo ""
echo "Latency by Distance:"
echo "• Same city: 1-10ms"
echo "• Same country: 10-50ms"
echo "• Same continent: 50-150ms"
echo "• Different continent: 150-300ms+"
echo ""
echo "Location Selection Tips:"
echo "• Choose closest to your users"
echo "• Consider data sovereignty laws"
echo "• Multiple locations for global apps"
echo "• CDN can help with distant users"

# === PRICING MODELS ===
echo "💰 VPS Pricing Models:"
echo ""
echo "Monthly Billing:"
echo "✅ Predictable costs"
echo "✅ Usually cheaper per hour"
echo "❌ Commitment required"
echo ""
echo "Hourly Billing:"
echo "✅ Pay only for usage"
echo "✅ Great for testing"
echo "❌ Can be expensive long-term"
echo ""
echo "Annual Billing:"
echo "✅ Significant discounts"
echo "✅ Budget planning"
echo "❌ Large upfront cost"

# === RESOURCE CALCULATION EXAMPLES ===
echo "🧮 Resource Calculation Examples:"
echo ""
echo "Basic WordPress Site:"
echo "• 1 vCPU, 1-2GB RAM, 25GB SSD"
echo "• Estimated cost: \\$5-15/month"
echo ""
echo "E-commerce Store:"
echo "• 2 vCPU, 4GB RAM, 50GB SSD"
echo "• Estimated cost: \\$20-40/month"
echo ""
echo "Development Server:"
echo "• 2-4 vCPU, 8GB RAM, 100GB SSD"
echo "• Estimated cost: \\$40-80/month"
echo ""
echo "High-Traffic Application:"
echo "• 4+ vCPU, 16GB+ RAM, 200GB+ SSD"
echo "• Estimated cost: \\$100+/month"

# === TESTING VPS PERFORMANCE ===
echo "⚡ Testing VPS Performance Commands:"

# CPU performance test
echo "# CPU Performance Test:"
echo "time dd if=/dev/zero bs=1M count=1024 | md5sum"

# Memory speed test
echo "# Memory Speed Test:"
echo "dd if=/dev/zero of=/dev/null bs=1M count=32768"

# Disk I/O test
echo "# Disk Write Speed:"
echo "dd if=/dev/zero of=testfile bs=1G count=1 oflag=direct"
echo "# Disk Read Speed:"
echo "dd if=testfile of=/dev/null bs=1G count=1 iflag=direct"

# Network speed test
echo "# Network Speed Test:"
echo "curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -"

# === THE VPS FUNDAMENTALS CHEAT SHEET ===
echo "🏠 VPS Fundamentals Quick Reference:"
echo "1 vCPU, 1GB RAM, 25GB SSD    = Basic website (\\$5-10/month)"
echo "2 vCPU, 4GB RAM, 50GB SSD    = Medium application (\\$20-30/month)"
echo "4 vCPU, 8GB RAM, 100GB SSD   = Large application (\\$50-80/month)"
echo "KVM > OpenVZ for flexibility"
echo "SSD > HDD for performance"
echo "Choose location closest to users"`
      },
      {
        title: '2. Top VPS Providers - The Market Leaders 🏆',
        content: 'The VPS market is crowded with providers ranging from budget options to premium enterprise solutions. Each provider has its strengths, weaknesses, and ideal use cases. Understanding the major players helps you choose based on your specific needs, whether that\'s rock-bottom pricing, premium performance, or specialized features.',
        codeExample: `# === TOP VPS PROVIDERS COMPARISON ===
echo "🏆 Top VPS Providers - The Market Leaders"

# === BUDGET-FRIENDLY PROVIDERS ===
echo "💰 Budget-Friendly VPS Providers:"
echo ""
echo "Vultr:"
echo "✅ Starting at \\$2.50/month"
echo "✅ 25+ global locations"
echo "✅ Hourly billing"
echo "✅ Good performance/price ratio"
echo "✅ Easy-to-use control panel"
echo "❌ Limited support options"
echo "Best for: Developers, small projects"
echo ""
echo "DigitalOcean:"
echo "✅ Starting at \\$4/month (Droplets)"
echo "✅ Excellent documentation"
echo "✅ Developer-friendly"
echo "✅ One-click applications"
echo "✅ Strong community"
echo "❌ No phone support"
echo "Best for: Developers, startups, learning"
echo ""
echo "Linode (now Akamai):"
echo "✅ Starting at \\$5/month"
echo "✅ Excellent performance"
echo "✅ 24/7 support"
echo "✅ Transparent pricing"
echo "✅ Long-standing reputation"
echo "❌ Fewer locations than competitors"
echo "Best for: Serious projects, businesses"

# === PREMIUM PROVIDERS ===
echo "🌟 Premium VPS Providers:"
echo ""
echo "Amazon EC2:"
echo "✅ Massive scale and reliability"
echo "✅ Extensive service ecosystem"
echo "✅ Global presence"
echo "✅ Enterprise features"
echo "❌ Complex pricing"
echo "❌ Steep learning curve"
echo "Best for: Enterprise, complex applications"
echo ""
echo "Google Cloud Platform:"
echo "✅ Google's infrastructure"
echo "✅ Excellent networking"
echo "✅ Machine learning integration"
echo "✅ Sustained use discounts"
echo "❌ Complex for beginners"
echo "❌ Can be expensive"
echo "Best for: Data-intensive applications"
echo ""
echo "Microsoft Azure:"
echo "✅ Windows integration"
echo "✅ Enterprise features"
echo "✅ Hybrid cloud capabilities"
echo "✅ Strong compliance"
echo "❌ Complex pricing"
echo "❌ Learning curve"
echo "Best for: Windows environments, enterprise"

# === SPECIALIZED PROVIDERS ===
echo "🎯 Specialized VPS Providers:"
echo ""
echo "Hetzner:"
echo "✅ Excellent price/performance"
echo "✅ European data centers"
echo "✅ Dedicated server options"
echo "✅ Good for high-resource needs"
echo "❌ Limited global presence"
echo "❌ EU-focused support hours"
echo "Best for: European users, resource-heavy apps"
echo ""
echo "OVH:"
echo "✅ Very competitive pricing"
echo "✅ European and global presence"
echo "✅ DDoS protection included"
echo "✅ Bare metal options"
echo "❌ Support quality varies"
echo "❌ Interface can be confusing"
echo "Best for: Budget-conscious, European users"
echo ""
echo "Contabo:"
echo "✅ Extremely low prices"
echo "✅ High resource allocations"
echo "✅ German engineering"
echo "❌ Limited locations"
echo "❌ Overselling concerns"
echo "Best for: Development, testing, budget projects"

# === PROVIDER COMPARISON TABLE ===
echo "📊 Provider Comparison (Entry-level VPS):"
echo "Provider     | Price/Month | RAM | Storage | Locations | Support"
echo "-------------|-------------|-----|---------|-----------|--------"
echo "Vultr        | \\$2.50      | 512MB| 10GB SSD| 25+      | Ticket"
echo "DigitalOcean | \\$4.00      | 512MB| 10GB SSD| 15+      | Ticket"
echo "Linode       | \\$5.00      | 1GB  | 25GB SSD| 11       | 24/7"
echo "Hetzner      | \\$3.29      | 1GB  | 20GB SSD| 3        | Ticket"
echo "OVH          | \\$3.50      | 1GB  | 10GB SSD| 12+      | Ticket"
echo "Contabo      | \\$3.99      | 4GB  | 50GB SSD| 8        | Ticket"

# === PROVIDER SELECTION CRITERIA ===
echo "🎯 Provider Selection Criteria:"
echo ""
echo "Choose DigitalOcean if:"
echo "• You're learning or developing"
echo "• You want excellent documentation"
echo "• You need one-click app deployments"
echo "• You value community resources"
echo ""
echo "Choose Vultr if:"
echo "• You want the lowest prices"
echo "• You need many location options"
echo "• You prefer hourly billing"
echo "• You're comfortable with minimal support"
echo ""
echo "Choose Linode if:"
echo "• You need reliable performance"
echo "• You want 24/7 support"
echo "• You're running production workloads"
echo "• You value transparent pricing"
echo ""
echo "Choose AWS/GCP/Azure if:"
echo "• You need enterprise features"
echo "• You're building complex applications"
echo "• You need extensive service integration"
echo "• Budget is less of a concern"
echo ""
echo "Choose Hetzner if:"
echo "• You need maximum performance per dollar"
echo "• You're in Europe"
echo "• You need high-resource VPS"
echo "• You don't need global presence"

# === PROVIDER TESTING COMMANDS ===
echo "🧪 Provider Testing Commands:"

# Test network connectivity
echo "# Test latency to provider:"
echo "ping -c 10 provider-server-ip"

# Test download speed
echo "# Test download speed:"
echo "wget -O /dev/null http://speedtest.provider.com/100MB.test"

# Test geolocation
echo "# Check server location:"
echo "curl ipinfo.io"

# Test DNS resolution
echo "# Test DNS performance:"
echo "dig @8.8.8.8 google.com"

# === PROVIDER GOTCHAS ===
echo "⚠️ Common Provider Gotchas:"
echo ""
echo "Bandwidth Limits:"
echo "• 'Unlimited' often has fair use policies"
echo "• Check overage charges"
echo "• Monitor your usage"
echo ""
echo "CPU Limits:"
echo "• Shared CPU vs dedicated CPU"
echo "• CPU steal time on oversold servers"
echo "• Burst vs sustained performance"
echo ""
echo "Support Quality:"
echo "• Ticket response times"
echo "• Technical expertise level"
echo "• Available support hours"
echo ""
echo "Hidden Costs:"
echo "• Backup fees"
echo "• Snapshot charges"
echo "• Bandwidth overages"
echo "• IP address fees"

# === THE PROVIDER SELECTION CHEAT SHEET ===
echo "🏆 Provider Selection Quick Reference:"
echo "Learning/Development: DigitalOcean"
echo "Budget-conscious: Vultr, Contabo"
echo "Production workloads: Linode, Hetzner"
echo "Enterprise needs: AWS, GCP, Azure"
echo "European users: Hetzner, OVH"
echo "High performance: Linode, Hetzner"
echo "Global presence: AWS, GCP, DigitalOcean"`
      },
      {
        title: '3. VPS Selection Strategy - Making the Right Choice 🎯',
        content: 'Choosing a VPS isn\'t just about comparing specs and prices - it\'s about understanding your specific needs, growth plans, and technical requirements. A strategic approach to VPS selection saves money, prevents headaches, and ensures your infrastructure can scale with your projects.',
        codeExample: `# === VPS SELECTION STRATEGY ===
echo "🎯 VPS Selection Strategy - Making the Right Choice"

# === NEEDS ASSESSMENT ===
echo "📋 VPS Needs Assessment:"
echo ""
echo "Project Type Analysis:"
echo "Static Website:"
echo "• 1 vCPU, 512MB-1GB RAM, 10-25GB SSD"
echo "• Any budget provider (Vultr, DO)"
echo "• CDN recommended for global users"
echo ""
echo "WordPress/CMS:"
echo "• 1-2 vCPU, 2-4GB RAM, 25-50GB SSD"
echo "• Reliable provider (Linode, DO)"
echo "• Consider managed WordPress hosting"
echo ""
echo "E-commerce:"
echo "• 2+ vCPU, 4-8GB RAM, 50-100GB SSD"
echo "• High-reliability provider (Linode, AWS)"
echo "• PCI compliance considerations"
echo ""
echo "Development/Testing:"
echo "• Variable specs, hourly billing preferred"
echo "• Multiple small instances (Vultr, DO)"
echo "• Easy snapshot/backup features"
echo ""
echo "High-Traffic Application:"
echo "• 4+ vCPU, 8-16GB RAM, 100GB+ SSD"
echo "• Premium provider (AWS, GCP, Linode)"
echo "• Load balancing and auto-scaling"

# === TRAFFIC ESTIMATION ===
echo "📈 Traffic and Resource Estimation:"
echo ""
echo "Monthly Visitors -> VPS Requirements:"
echo "< 1,000 visitors    = 1 vCPU, 1GB RAM"
echo "1,000-10,000        = 1-2 vCPU, 2GB RAM"
echo "10,000-100,000      = 2-4 vCPU, 4-8GB RAM"
echo "100,000-1M          = 4+ vCPU, 8-16GB RAM"
echo "1M+                 = Multiple servers, load balancing"
echo ""
echo "Database Size Considerations:"
echo "< 1GB database      = 2GB RAM minimum"
echo "1-10GB database     = 4-8GB RAM"
echo "10-100GB database   = 16-32GB RAM"
echo "100GB+ database     = Dedicated database server"

# === BUDGET PLANNING ===
echo "💰 VPS Budget Planning:"
echo ""
echo "Cost Categories:"
echo "• Base VPS cost (monthly/hourly)"
echo "• Backup storage fees"
echo "• Bandwidth overage charges"
echo "• Additional IP addresses"
echo "• Managed services (if needed)"
echo "• Support upgrades"
echo ""
echo "Budget Allocation Examples:"
echo "Startup Budget (\\$20-50/month):"
echo "• 1-2 VPS instances"
echo "• Basic monitoring"
echo "• Manual backups"
echo ""
echo "Small Business (\\$100-300/month):"
echo "• 2-4 VPS instances"
echo "• Automated backups"
echo "• Load balancer"
echo "• Monitoring service"
echo ""
echo "Enterprise (\\$500+/month):"
echo "• Multiple regions"
echo "• High availability setup"
echo "• Managed services"
echo "• 24/7 support"

# === SCALABILITY PLANNING ===
echo "📊 Scalability Planning:"
echo ""
echo "Vertical Scaling (Upgrade existing server):"
echo "✅ Simple to implement"
echo "✅ No application changes needed"
echo "❌ Limited by hardware maximums"
echo "❌ Downtime during upgrades"
echo ""
echo "Horizontal Scaling (Add more servers):"
echo "✅ Unlimited scaling potential"
echo "✅ Better fault tolerance"
echo "❌ Application complexity"
echo "❌ Load balancing required"
echo ""
echo "Scaling Strategy by Provider:"
echo "DigitalOcean: Easy vertical scaling, good load balancers"
echo "AWS: Excellent auto-scaling, complex setup"
echo "Linode: Simple scaling, good performance"
echo "Vultr: Manual scaling, budget-friendly"

# === DECISION MATRIX ===
echo "🎯 VPS Decision Matrix:"
echo ""
echo "Rate each factor (1-5) based on importance:"
echo "Factor              | Weight | Provider Scores"
echo "--------------------|--------|----------------"
echo "Price               | ___    | Vultr(5) DO(4) Linode(3)"
echo "Performance         | ___    | Linode(5) Hetzner(5) AWS(4)"
echo "Support             | ___    | Linode(5) AWS(4) DO(3)"
echo "Ease of Use        | ___    | DO(5) Vultr(4) AWS(2)"
echo "Global Locations   | ___    | AWS(5) DO(4) Vultr(4)"
echo "Documentation      | ___    | DO(5) AWS(4) Linode(4)"
echo ""
echo "Calculate: (Weight × Score) for each provider"
echo "Choose highest total score"

# === TESTING STRATEGY ===
echo "🧪 VPS Testing Strategy:"
echo ""
echo "Before Committing:"
echo "1. Sign up for trial/credit"
echo "2. Deploy test application"
echo "3. Run performance benchmarks"
echo "4. Test support responsiveness"
echo "5. Check billing accuracy"
echo "6. Evaluate control panel usability"
echo ""
echo "Performance Tests to Run:"
echo "• CPU: sysbench cpu test"
echo "• Memory: sysbench memory test"
echo "• Disk I/O: fio or dd tests"
echo "• Network: iperf3 or speedtest"
echo "• Application: Load testing with your stack"

# === MIGRATION PLANNING ===
echo "🚚 Migration Planning:"
echo ""
echo "Migration Checklist:"
echo "□ Backup current data"
echo "□ Document current configuration"
echo "□ Test migration process"
echo "□ Plan DNS changes"
echo "□ Schedule maintenance window"
echo "□ Prepare rollback plan"
echo "□ Monitor post-migration"
echo ""
echo "Migration Tools:"
echo "• rsync for file transfers"
echo "• mysqldump for databases"
echo "• Docker for containerized apps"
echo "• Ansible for configuration"
echo "• CloudFlare for DNS management"

# === THE SELECTION STRATEGY CHEAT SHEET ===
echo "🎯 VPS Selection Strategy Quick Reference:"
echo "1. Assess your actual needs (not wants)"
echo "2. Estimate traffic and growth"
echo "3. Set realistic budget"
echo "4. Test before committing"
echo "5. Plan for scaling"
echo "6. Consider total cost of ownership"
echo "7. Have a migration strategy"`
      },
      {
        title: '4. VPS Management Best Practices - Professional Operations 🛡️',
        content: 'Once you\'ve chosen and deployed your VPS, proper management becomes crucial. Professional VPS management involves security hardening, monitoring, backup strategies, and maintenance procedures. These practices separate hobbyists from professionals and ensure your VPS runs reliably and securely.',
        codeExample: `# === VPS MANAGEMENT BEST PRACTICES ===
echo "🛡️ VPS Management Best Practices - Professional Operations"

# === INITIAL VPS SETUP ===
echo "🚀 Initial VPS Setup Checklist:"
echo ""
echo "Security Hardening:"
echo "□ Change default passwords"
echo "□ Create non-root user with sudo"
echo "□ Disable root SSH login"
echo "□ Configure SSH key authentication"
echo "□ Change default SSH port"
echo "□ Configure firewall (ufw/iptables)"
echo "□ Install fail2ban"
echo "□ Update all packages"
echo ""
echo "Basic Configuration:"
echo "□ Set timezone"
echo "□ Configure hostname"
echo "□ Set up swap file"
echo "□ Configure automatic updates"
echo "□ Install essential packages"
echo "□ Configure log rotation"

# === SECURITY BEST PRACTICES ===
echo "🔒 VPS Security Best Practices:"

# SSH Security
echo "# SSH Security Configuration:"
echo "sudo nano /etc/ssh/sshd_config"
echo "# Key settings:"
echo "Port 2222                    # Change from default 22"
echo "PermitRootLogin no          # Disable root login"
echo "PasswordAuthentication no   # Use keys only"
echo "MaxAuthTries 3              # Limit login attempts"
echo "ClientAliveInterval 300     # Timeout idle connections"

# Firewall Configuration
echo "# Basic UFW Firewall Setup:"
echo "sudo ufw default deny incoming"
echo "sudo ufw default allow outgoing"
echo "sudo ufw allow 2222/tcp     # SSH on custom port"
echo "sudo ufw allow 80/tcp       # HTTP"
echo "sudo ufw allow 443/tcp      # HTTPS"
echo "sudo ufw enable"

# Fail2ban Setup
echo "# Fail2ban Configuration:"
echo "sudo apt install fail2ban"
echo "sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local"
echo "# Edit jail.local for custom settings"

# === MONITORING AND ALERTING ===
echo "📊 VPS Monitoring Setup:"

# System Monitoring
echo "# Install monitoring tools:"
echo "sudo apt install htop iotop nethogs"

# Automated Monitoring Script
echo "# Create monitoring script:"
cat << 'EOF'
#!/bin/bash
# /usr/local/bin/vps-monitor.sh

ALERT_EMAIL="admin@example.com"
CPU_THRESHOLD=80
MEMORY_THRESHOLD=85
DISK_THRESHOLD=90

# Check CPU usage
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
if (( $(echo "$CPU_USAGE > $CPU_THRESHOLD" | bc -l) )); then
    echo "High CPU usage: $CPU_USAGE%" | mail -s "VPS Alert: High CPU" $ALERT_EMAIL
fi

# Check memory usage
MEMORY_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
if [ $MEMORY_USAGE -gt $MEMORY_THRESHOLD ]; then
    echo "High memory usage: $MEMORY_USAGE%" | mail -s "VPS Alert: High Memory" $ALERT_EMAIL
fi

# Check disk usage
DISK_USAGE=$(df / | awk 'NR==2{print $5}' | cut -d'%' -f1)
if [ $DISK_USAGE -gt $DISK_THRESHOLD ]; then
    echo "High disk usage: $DISK_USAGE%" | mail -s "VPS Alert: High Disk Usage" $ALERT_EMAIL
fi
EOF

echo "chmod +x /usr/local/bin/vps-monitor.sh"
echo "# Add to crontab: */5 * * * * /usr/local/bin/vps-monitor.sh"

# === BACKUP STRATEGIES ===
echo "💾 VPS Backup Strategies:"

# Automated Backup Script
echo "# Automated backup script:"
cat << 'EOF'
#!/bin/bash
# /usr/local/bin/backup.sh

BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=30

# Create backup directory
mkdir -p $BACKUP_DIR

# Database backup
mysqldump --all-databases > $BACKUP_DIR/mysql_$DATE.sql
gzip $BACKUP_DIR/mysql_$DATE.sql

# File backup
tar -czf $BACKUP_DIR/files_$DATE.tar.gz /var/www /etc /home

# Upload to remote storage (optional)
# rsync -av $BACKUP_DIR/ user@backup-server:/backups/

# Clean old backups
find $BACKUP_DIR -name "*.gz" -mtime +$RETENTION_DAYS -delete

echo "Backup completed: $DATE"
EOF

echo "chmod +x /usr/local/bin/backup.sh"
echo "# Schedule daily: 0 2 * * * /usr/local/bin/backup.sh"

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ VPS Performance Optimization:"

# System Optimization
echo "# System optimization commands:"
echo "# Optimize swappiness"
echo "echo 'vm.swappiness=10' >> /etc/sysctl.conf"
echo ""
echo "# Optimize network settings"
echo "echo 'net.core.rmem_max = 16777216' >> /etc/sysctl.conf"
echo "echo 'net.core.wmem_max = 16777216' >> /etc/sysctl.conf"
echo ""
echo "# Apply changes"
echo "sysctl -p"

# Web Server Optimization
echo "# Nginx optimization example:"
echo "worker_processes auto;"
echo "worker_connections 1024;"
echo "keepalive_timeout 65;"
echo "gzip on;"
echo "gzip_types text/plain text/css application/json;"

# === MAINTENANCE PROCEDURES ===
echo "🔧 VPS Maintenance Procedures:"

# Weekly Maintenance Script
echo "# Weekly maintenance script:"
cat << 'EOF'
#!/bin/bash
# /usr/local/bin/weekly-maintenance.sh

echo "Starting weekly maintenance..."

# Update packages
apt update && apt upgrade -y

# Clean package cache
apt autoremove -y
apt autoclean

# Rotate logs
logrotate -f /etc/logrotate.conf

# Check disk usage
df -h

# Check memory usage
free -h

# Check running services
systemctl --failed

# Check security updates
apt list --upgradable | grep -i security

echo "Weekly maintenance completed"
EOF

# === DISASTER RECOVERY ===
echo "🚨 Disaster Recovery Planning:"

echo "# Disaster recovery checklist:"
echo "□ Regular backups tested and verified"
echo "□ Configuration documented"
echo "□ Recovery procedures documented"
echo "□ Alternative VPS provider identified"
echo "□ DNS failover configured"
echo "□ Recovery time objectives defined"
echo "□ Team contact information updated"

# === THE VPS MANAGEMENT CHEAT SHEET ===
echo "🛡️ VPS Management Quick Reference:"
echo "Security: SSH keys, firewall, fail2ban, updates"
echo "Monitoring: CPU, memory, disk, network alerts"
echo "Backups: Automated, tested, offsite storage"
echo "Performance: Optimize configs, monitor metrics"
echo "Maintenance: Regular updates, log rotation"
echo "Recovery: Documented procedures, tested backups"`
      },
      {
        title: '5. VPS Mastery - Advanced Strategies 🎓',
        content: 'VPS mastery involves advanced techniques like multi-server architectures, automation, cost optimization, and strategic planning. This is where you graduate from managing single servers to orchestrating complex infrastructures that scale efficiently and cost-effectively.',
        codeExample: `# === VPS MASTERY - ADVANCED STRATEGIES ===
echo "🎓 VPS Mastery - Advanced Strategies"

# === MULTI-SERVER ARCHITECTURES ===
echo "🏗️ Multi-Server Architecture Patterns:"

echo "# Load Balanced Web Servers:"
echo "Setup: 2+ web servers + 1 load balancer + 1 database server"
echo "Benefits: High availability, horizontal scaling"
echo "Tools: Nginx/HAProxy for load balancing"
echo ""
echo "# Microservices Architecture:"
echo "Setup: Multiple small VPS for different services"
echo "Benefits: Independent scaling, fault isolation"
echo "Tools: Docker, Kubernetes, service mesh"
echo ""
echo "# Database Clustering:"
echo "Setup: Master-slave or master-master database setup"
echo "Benefits: Read scaling, high availability"
echo "Tools: MySQL replication, PostgreSQL streaming"

# === INFRASTRUCTURE AS CODE ===
echo "🤖 Infrastructure as Code (IaC):"

# Terraform Example
echo "# Terraform VPS provisioning:"
cat << 'EOF'
# main.tf
provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_droplet" "web" {
  count  = 3
  image  = "ubuntu-20-04-x64"
  name   = "web-\\$\\{count.index + 1\\}"
  region = "nyc1"
  size   = "s-2vcpu-2gb"

  ssh_keys = [var.ssh_key_fingerprint]

  user_data = file("cloud-init.yml")
}

resource "digitalocean_loadbalancer" "web" {
  name   = "web-lb"
  region = "nyc1"

  forwarding_rule {
    entry_port     = 80
    entry_protocol = "http"
    target_port    = 80
    target_protocol = "http"
  }

  droplet_ids = digitalocean_droplet.web[*].id
}
EOF

# Ansible Playbook
echo "# Ansible server configuration:"
cat << 'EOF'
# playbook.yml
---
- hosts: all
  become: yes
  tasks:
    - name: Update packages
      apt:
        update_cache: yes
        upgrade: yes

    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Configure firewall
      ufw:
        rule: allow
        port: "{{ item }}"
      loop:
        - "22"
        - "80"
        - "443"

    - name: Enable nginx
      systemd:
        name: nginx
        enabled: yes
        state: started
EOF

# === COST OPTIMIZATION STRATEGIES ===
echo "💰 Advanced Cost Optimization:"

echo "# Reserved Instances Strategy:"
echo "AWS/GCP: 1-3 year commitments for 30-60% savings"
echo "Suitable for: Predictable, long-term workloads"
echo ""
echo "# Spot/Preemptible Instances:"
echo "AWS Spot: Up to 90% savings for interruptible workloads"
echo "GCP Preemptible: Up to 80% savings"
echo "Suitable for: Batch processing, development, testing"
echo ""
echo "# Right-sizing Strategy:"
echo "Monitor actual usage vs allocated resources"
echo "Downsize over-provisioned instances"
echo "Use auto-scaling for variable workloads"

# Cost Monitoring Script
echo "# Cost monitoring script:"
cat << 'EOF'
#!/bin/bash
# cost-monitor.sh

# Track monthly costs
CURRENT_MONTH=$(date +%Y-%m)
COST_THRESHOLD=500

# Get current month spending (provider-specific API calls)
# AWS: aws ce get-cost-and-usage
# GCP: gcloud billing budgets list
# DigitalOcean: doctl account get

echo "Monthly cost tracking for $CURRENT_MONTH"
echo "Threshold: $COST_THRESHOLD"

# Alert if over threshold
if [ $CURRENT_COST -gt $COST_THRESHOLD ]; then
    echo "Cost alert: $CURRENT_COST exceeds threshold" | mail -s "Cost Alert" admin@example.com
fi
EOF

# === ADVANCED MONITORING ===
echo "📊 Advanced Monitoring and Observability:"

# Prometheus + Grafana Setup
echo "# Monitoring stack setup:"
echo "1. Prometheus for metrics collection"
echo "2. Grafana for visualization"
echo "3. AlertManager for notifications"
echo "4. Node Exporter for system metrics"
echo ""
echo "# Key metrics to monitor:"
echo "• Application response times"
echo "• Error rates and status codes"
echo "• Database query performance"
echo "• Cache hit rates"
echo "• Business metrics (users, transactions)"

# === DISASTER RECOVERY AUTOMATION ===
echo "🚨 Automated Disaster Recovery:"

# DR Automation Script
echo "# Disaster recovery automation:"
cat << 'EOF'
#!/bin/bash
# dr-failover.sh

PRIMARY_SERVER="web1.example.com"
BACKUP_SERVER="web2.example.com"
DNS_RECORD="example.com"

# Check primary server health
if ! curl -f -s $PRIMARY_SERVER > /dev/null; then
    echo "Primary server down, initiating failover"

    # Update DNS to point to backup
    # (Using CloudFlare API example)
    curl -X PUT "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$RECORD_ID" \
         -H "Authorization: Bearer $CF_TOKEN" \
         -H "Content-Type: application/json" \
         --data '{"type":"A","name":"example.com","content":"backup-server-ip"}'

    # Send alert
    echo "Failover completed to backup server" | mail -s "DR Failover" admin@example.com
fi
EOF

# === SCALING AUTOMATION ===
echo "📈 Automated Scaling Strategies:"

# Auto-scaling Script
echo "# Simple auto-scaling script:"
cat << 'EOF'
#!/bin/bash
# auto-scale.sh

MIN_INSTANCES=2
MAX_INSTANCES=10
CPU_THRESHOLD=70

# Get current CPU usage across instances
AVG_CPU=$(get_cluster_cpu_usage)

if [ $AVG_CPU -gt $CPU_THRESHOLD ]; then
    CURRENT_COUNT=$(get_instance_count)
    if [ $CURRENT_COUNT -lt $MAX_INSTANCES ]; then
        echo "Scaling up: CPU at $AVG_CPU%"
        create_new_instance
        add_to_load_balancer
    fi
elif [ $AVG_CPU -lt 30 ]; then
    CURRENT_COUNT=$(get_instance_count)
    if [ $CURRENT_COUNT -gt $MIN_INSTANCES ]; then
        echo "Scaling down: CPU at $AVG_CPU%"
        remove_instance
    fi
fi
EOF

# === SECURITY AUTOMATION ===
echo "🔒 Advanced Security Automation:"

# Security Scanning Script
echo "# Automated security scanning:"
cat << 'EOF'
#!/bin/bash
# security-scan.sh

# Check for security updates
SECURITY_UPDATES=$(apt list --upgradable 2>/dev/null | grep -c security)
if [ $SECURITY_UPDATES -gt 0 ]; then
    echo "$SECURITY_UPDATES security updates available" | mail -s "Security Updates" admin@example.com
fi

# Scan for suspicious activity
FAILED_LOGINS=$(grep "Failed password" /var/log/auth.log | grep "$(date +%b\ %d)" | wc -l)
if [ $FAILED_LOGINS -gt 10 ]; then
    echo "High number of failed logins: $FAILED_LOGINS" | mail -s "Security Alert" admin@example.com
fi

# Check for unusual network connections
netstat -tuln | grep LISTEN > /tmp/current_ports
if ! diff -q /tmp/baseline_ports /tmp/current_ports > /dev/null; then
    echo "New listening ports detected" | mail -s "Port Change Alert" admin@example.com
fi
EOF

# === THE VPS MASTERY TOOLKIT ===
echo "🎓 VPS Mastery Toolkit:"
echo "========================"
echo "Infrastructure as Code: Terraform, Ansible, CloudFormation"
echo "Monitoring: Prometheus, Grafana, ELK Stack"
echo "Automation: CI/CD pipelines, auto-scaling, DR scripts"
echo "Cost Optimization: Reserved instances, right-sizing, monitoring"
echo "Security: Automated scanning, compliance checking"
echo "Multi-cloud: Avoid vendor lock-in, geographic distribution"

# === CONGRATULATIONS! ===
echo "🎓 CHOOSING A VPS MASTERY COMPLETE!"
echo "===================================="
echo "You now understand:"
echo "✅ VPS fundamentals and specifications"
echo "✅ Provider comparison and selection criteria"
echo "✅ Strategic decision-making processes"
echo "✅ Professional management practices"
echo "✅ Advanced architecture patterns"
echo "✅ Cost optimization strategies"
echo "✅ Automation and scaling techniques"
echo "✅ Security and disaster recovery"
echo ""
echo "⌨️ You are now a VPS SELECTION MASTER!"
echo "Choose, deploy, and manage VPS infrastructure like a pro! 🚀"
echo ""
echo "Remember: The best VPS is the one that meets your needs reliably and cost-effectively!"
echo "Use your knowledge to build robust, scalable infrastructure! 💪"`
      }
    ]
  }
}