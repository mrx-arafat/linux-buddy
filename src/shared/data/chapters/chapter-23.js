export const chapter23 = {
  id: '23',
  icon: '🚅',
  title: 'NGINX',
  description: 'Web server configuration with Nginx',
  slug: 'nginx',
  content: {
    overview: 'Welcome to NGINX - the high-performance web server that powers the modern internet! 🚅 NGINX is like having a super-efficient traffic controller for your web applications. Originally created to solve the C10K problem (handling 10,000 concurrent connections), NGINX has become the Swiss Army knife of web infrastructure. It\'s not just a web server - it\'s a reverse proxy, load balancer, HTTP cache, and so much more. We\'re going to transform you from someone who thinks web servers just "serve web pages" to a performance wizard who can architect scalable, lightning-fast web infrastructure! 🚀',
    sections: [
      {
        title: '1. NGINX Fundamentals - Web Server Mastery 🌐',
        content: 'NGINX fundamentals are the foundation of modern web infrastructure. Unlike traditional web servers that create a new process for each request, NGINX uses an event-driven, asynchronous architecture that can handle thousands of concurrent connections with minimal resource usage.',
        codeExample: `# === NGINX FUNDAMENTALS ===
echo "🌐 NGINX Fundamentals - Web Server Mastery"

# === NGINX INSTALLATION ===
echo "📦 NGINX Installation:"

# Install NGINX on Ubuntu/Debian
echo "# Install NGINX (Ubuntu/Debian):"
echo "sudo apt update"
echo "sudo apt install nginx"

# Install NGINX on CentOS/RHEL
echo "# Install NGINX (CentOS/RHEL):"
echo "sudo yum install epel-release"
echo "sudo yum install nginx"

# === NGINX SERVICE MANAGEMENT ===
echo "🔧 NGINX Service Management:"

# Basic service commands
echo "# Basic NGINX service commands:"
echo "sudo systemctl start nginx"
echo "sudo systemctl stop nginx"
echo "sudo systemctl restart nginx"
echo "sudo systemctl reload nginx"
echo "sudo systemctl enable nginx"
echo "sudo systemctl status nginx"

# Test configuration
echo "# Test NGINX configuration:"
echo "sudo nginx -t"
echo "sudo nginx -T"  # Test and dump configuration

# Reload configuration gracefully
echo "# Graceful reload:"
echo "sudo nginx -s reload"
echo "sudo nginx -s quit"    # Graceful shutdown
echo "sudo nginx -s stop"    # Fast shutdown

# === NGINX DIRECTORY STRUCTURE ===
echo "📁 NGINX Directory Structure:"
echo ""
echo "Configuration files:"
echo "/etc/nginx/nginx.conf           = Main configuration"
echo "/etc/nginx/sites-available/     = Available sites"
echo "/etc/nginx/sites-enabled/       = Enabled sites"
echo "/etc/nginx/conf.d/              = Additional configs"
echo ""
echo "Content and logs:"
echo "/var/www/html/                  = Default web root"
echo "/var/log/nginx/access.log       = Access logs"
echo "/var/log/nginx/error.log        = Error logs"

# === BASIC SERVER BLOCK ===
echo "🏠 Basic Server Block Configuration:"

# Simple static website configuration
echo "# /etc/nginx/sites-available/example.com"
echo "server {"
echo "    listen 80;"
echo "    listen [::]:80;"
echo ""
echo "    server_name example.com www.example.com;"
echo "    root /var/www/example.com;"
echo "    index index.html index.htm;"
echo ""
echo "    # Main location"
echo "    location / {"
echo "        try_files \\$uri \\$uri/ =404;"
echo "    }"
echo ""
echo "    # Static assets caching"
echo "    location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg)\\$ {"
echo "        expires 1y;"
echo "        add_header Cache-Control \"public, immutable\";"
echo "    }"
echo ""
echo "    # Security - deny access to hidden files"
echo "    location ~ /\\. {"
echo "        deny all;"
echo "    }"
echo "}"

# Enable site
echo "# Enable site:"
echo "sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/"
echo "sudo nginx -t && sudo systemctl reload nginx"

# === VIRTUAL HOSTS MANAGEMENT ===
echo "🏘️ Virtual Hosts Management:"

# Create web directory
echo "# Create virtual host:"
echo "sudo mkdir -p /var/www/example.com"
echo "sudo chown www-data:www-data /var/www/example.com"

# Create basic index.html
echo "# Create test page:"
echo "echo '<h1>Welcome to example.com</h1>' | sudo tee /var/www/example.com/index.html"

# === THE NGINX FUNDAMENTALS CHEAT SHEET ===
echo "🌐 NGINX Fundamentals Quick Reference:"
echo "nginx -t                        = Test configuration"
echo "nginx -s reload                 = Reload config"
echo "systemctl status nginx          = Check service status"
echo "/etc/nginx/sites-available/     = Site configurations"
echo "/etc/nginx/sites-enabled/       = Enabled sites"
echo "server { }                      = Virtual host block"
echo "location / { }                  = URL location block"
echo "try_files \\$uri \\$uri/ =404       = File serving logic"`
      },
      {
        title: '2. Reverse Proxy & Load Balancing - Traffic Management 🔄',
        content: 'NGINX\'s reverse proxy and load balancing capabilities transform it from a simple web server into a powerful traffic management system. Think of it as a smart traffic controller that can distribute incoming requests across multiple backend servers.',
        codeExample: `# === REVERSE PROXY & LOAD BALANCING ===
echo "🔄 Reverse Proxy & Load Balancing - Traffic Management"

# === BASIC REVERSE PROXY ===
echo "🔀 Basic Reverse Proxy Configuration:"

# Simple reverse proxy
echo "# /etc/nginx/sites-available/proxy.example.com"
echo "server {"
echo "    listen 80;"
echo "    server_name proxy.example.com;"
echo ""
echo "    location / {"
echo "        proxy_pass http://backend-server:8080;"
echo "        proxy_set_header Host \\$host;"
echo "        proxy_set_header X-Real-IP \\$remote_addr;"
echo "        proxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;"
echo "        proxy_set_header X-Forwarded-Proto \\$scheme;"
echo ""
echo "        # Timeouts"
echo "        proxy_connect_timeout 30s;"
echo "        proxy_send_timeout 30s;"
echo "        proxy_read_timeout 30s;"
echo "    }"
echo "}"

# === LOAD BALANCING METHODS ===
echo "⚖️ Load Balancing Methods:"

# Round Robin (default)
echo "# Round Robin Load Balancing"
echo "upstream backend_roundrobin {"
echo "    server web1.example.com;"
echo "    server web2.example.com;"
echo "    server web3.example.com;"
echo "}"

# Least Connections
echo "# Least Connections Load Balancing"
echo "upstream backend_least_conn {"
echo "    least_conn;"
echo "    server web1.example.com;"
echo "    server web2.example.com;"
echo "    server web3.example.com;"
echo "}"

# Weighted Load Balancing
echo "# Weighted Load Balancing"
echo "upstream backend_weighted {"
echo "    server web1.example.com weight=3;"
echo "    server web2.example.com weight=2;"
echo "    server web3.example.com weight=1;"
echo "    server web4.example.com weight=1 backup;"
echo "}"

# === ADVANCED PROXY CONFIGURATION ===
echo "🚀 Advanced Proxy Features:"

echo "# Advanced proxy with caching"
echo "upstream backend {"
echo "    server 192.168.1.10:8080 weight=3;"
echo "    server 192.168.1.11:8080 weight=2;"
echo "    server 192.168.1.12:8080 backup;"
echo "    keepalive 32;"
echo "}"
echo ""
echo "server {"
echo "    listen 80;"
echo "    server_name api.example.com;"
echo ""
echo "    location / {"
echo "        proxy_pass http://backend;"
echo "        proxy_http_version 1.1;"
echo "        proxy_set_header Connection \"\";"
echo "        proxy_set_header Host \\$host;"
echo "        proxy_set_header X-Real-IP \\$remote_addr;"
echo ""
echo "        # Caching"
echo "        proxy_cache my_cache;"
echo "        proxy_cache_valid 200 302 10m;"
echo "        proxy_cache_valid 404 1m;"
echo "    }"
echo "}"

# === THE LOAD BALANCING CHEAT SHEET ===
echo "🔄 Load Balancing Quick Reference:"
echo "upstream backend { }            = Define backend servers"
echo "proxy_pass http://backend       = Forward to backend"
echo "least_conn                      = Least connections method"
echo "ip_hash                         = Session persistence"
echo "weight=3                        = Server weight"
echo "backup                          = Backup server"
echo "proxy_cache                     = Enable caching"`
      },
      {
        title: '3. SSL/TLS & Security - Secure Web Infrastructure 🔒',
        content: 'SSL/TLS configuration in NGINX is essential for modern web security. NGINX makes it easy to implement HTTPS, configure security headers, and protect your applications from common web vulnerabilities.',
        codeExample: `# === SSL/TLS & SECURITY ===
echo "🔒 SSL/TLS & Security - Secure Web Infrastructure"

# === SSL CERTIFICATE SETUP ===
echo "🔐 SSL Certificate Setup:"

# Install Certbot for Let's Encrypt
echo "# Install Certbot (Ubuntu/Debian):"
echo "sudo apt install certbot python3-certbot-nginx"

# Get SSL certificate
echo "# Get SSL certificate:"
echo "sudo certbot --nginx -d example.com -d www.example.com"

# Auto-renewal setup
echo "# Setup auto-renewal:"
echo "sudo crontab -e"
echo "0 12 * * * /usr/bin/certbot renew --quiet"

# === HTTPS SERVER CONFIGURATION ===
echo "🌐 HTTPS Server Configuration:"

# Complete HTTPS server block
echo "# /etc/nginx/sites-available/secure.example.com"
echo "server {"
echo "    listen 80;"
echo "    server_name example.com www.example.com;"
echo "    return 301 https://\\$server_name\\$request_uri;"
echo "}"
echo ""
echo "server {"
echo "    listen 443 ssl http2;"
echo "    listen [::]:443 ssl http2;"
echo "    server_name example.com www.example.com;"
echo ""
echo "    # SSL Configuration"
echo "    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;"
echo "    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;"
echo "    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;"
echo ""
echo "    # SSL Settings"
echo "    ssl_protocols TLSv1.2 TLSv1.3;"
echo "    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;"
echo "    ssl_prefer_server_ciphers off;"
echo "    ssl_session_cache shared:SSL:10m;"
echo "    ssl_session_timeout 10m;"
echo ""
echo "    # Security Headers"
echo "    add_header Strict-Transport-Security \"max-age=63072000\" always;"
echo "    add_header X-Frame-Options DENY always;"
echo "    add_header X-Content-Type-Options nosniff always;"
echo "    add_header Referrer-Policy no-referrer-when-downgrade always;"
echo ""
echo "    root /var/www/example.com;"
echo "    index index.html;"
echo ""
echo "    location / {"
echo "        try_files \\$uri \\$uri/ =404;"
echo "    }"
echo "}"

# === SECURITY BEST PRACTICES ===
echo "🛡️ Security Best Practices:"

# Security configuration snippet
echo "# /etc/nginx/snippets/security.conf"
echo "# Hide NGINX version"
echo "server_tokens off;"
echo ""
echo "# Security headers"
echo "add_header X-Frame-Options \"SAMEORIGIN\" always;"
echo "add_header X-XSS-Protection \"1; mode=block\" always;"
echo "add_header X-Content-Type-Options \"nosniff\" always;"
echo "add_header Referrer-Policy \"no-referrer-when-downgrade\" always;"
echo "add_header Content-Security-Policy \"default-src 'self' http: https: data: blob: 'unsafe-inline'\" always;"
echo ""
echo "# Rate limiting"
echo "limit_req_zone \\$binary_remote_addr zone=login:10m rate=10r/m;"
echo "limit_req_zone \\$binary_remote_addr zone=api:10m rate=1r/s;"

# === FIREWALL CONFIGURATION ===
echo "🔥 Firewall Configuration:"

# UFW firewall rules
echo "# Configure UFW firewall:"
echo "sudo ufw allow 'Nginx Full'"
echo "sudo ufw allow ssh"
echo "sudo ufw enable"

# Check firewall status
echo "# Check firewall status:"
echo "sudo ufw status"

# === THE SECURITY CHEAT SHEET ===
echo "🔒 Security Quick Reference:"
echo "certbot --nginx                 = Get SSL certificate"
echo "ssl_protocols TLSv1.2 TLSv1.3   = Modern TLS versions"
echo "add_header HSTS                 = Force HTTPS"
echo "server_tokens off               = Hide NGINX version"
echo "limit_req_zone                  = Rate limiting"
echo "ufw allow 'Nginx Full'         = Firewall rules"`
      },
      {
        title: '4. NGINX Mastery - Performance & Production 🎯',
        content: 'NGINX mastery involves advanced performance tuning, monitoring, and production-ready configurations. This is where you become an NGINX expert capable of handling enterprise-scale web infrastructure with optimal performance and reliability.',
        codeExample: `# === NGINX MASTERY ===
echo "🎯 NGINX Mastery - Performance & Production"

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ Performance Optimization:"

# High-performance nginx.conf
echo "# /etc/nginx/nginx.conf - Performance optimized"
echo "user www-data;"
echo "worker_processes auto;"
echo "worker_rlimit_nofile 65535;"
echo ""
echo "events {"
echo "    worker_connections 1024;"
echo "    use epoll;"
echo "    multi_accept on;"
echo "}"
echo ""
echo "http {"
echo "    # Basic optimizations"
echo "    sendfile on;"
echo "    tcp_nopush on;"
echo "    tcp_nodelay on;"
echo "    keepalive_timeout 30;"
echo "    keepalive_requests 100;"
echo ""
echo "    # Buffer sizes"
echo "    client_body_buffer_size 128k;"
echo "    client_max_body_size 10m;"
echo "    client_header_buffer_size 1k;"
echo "    large_client_header_buffers 4 4k;"
echo "    output_buffers 1 32k;"
echo "    postpone_output 1460;"
echo ""
echo "    # Gzip compression"
echo "    gzip on;"
echo "    gzip_vary on;"
echo "    gzip_min_length 10240;"
echo "    gzip_proxied expired no-cache no-store private must-revalidate auth;"
echo "    gzip_types text/plain text/css text/xml application/json application/javascript;"
echo ""
echo "    # File caching"
echo "    open_file_cache max=200000 inactive=20s;"
echo "    open_file_cache_valid 30s;"
echo "    open_file_cache_min_uses 2;"
echo "    open_file_cache_errors on;"
echo "}"

# === MONITORING AND LOGGING ===
echo "📊 Monitoring and Logging:"

# Advanced logging configuration
echo "# Advanced logging format"
echo "log_format detailed '\\$remote_addr - \\$remote_user [\\$time_local] '"
echo "                   '\"\\$request\" \\$status \\$body_bytes_sent '"
echo "                   '\"\\$http_referer\" \"\\$http_user_agent\" '"
echo "                   '\\$request_time \\$upstream_response_time';"

# Status monitoring
echo "# Enable status monitoring"
echo "server {"
echo "    listen 127.0.0.1:8080;"
echo "    location /nginx_status {"
echo "        stub_status on;"
echo "        access_log off;"
echo "        allow 127.0.0.1;"
echo "        deny all;"
echo "    }"
echo "}"

# === CACHING STRATEGIES ===
echo "💾 Caching Strategies:"

# Proxy caching configuration
echo "# Proxy cache configuration"
echo "proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;"
echo ""
echo "server {"
echo "    location / {"
echo "        proxy_cache my_cache;"
echo "        proxy_cache_revalidate on;"
echo "        proxy_cache_min_uses 3;"
echo "        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;"
echo "        proxy_cache_background_update on;"
echo "        proxy_cache_lock on;"
echo "        add_header X-Cache-Status \\$upstream_cache_status;"
echo "    }"
echo "}"

# === DEPLOYMENT AUTOMATION ===
echo "🤖 Deployment Automation:"

# NGINX deployment script
echo "#!/bin/bash"
echo "# nginx-deploy.sh"
echo ""
echo "deploy_nginx_config() {"
echo "    echo \"🚀 Deploying NGINX configuration...\""
echo ""
echo "    # Test configuration"
echo "    if nginx -t; then"
echo "        echo \"✅ Configuration test passed\""
echo "    else"
echo "        echo \"❌ Configuration test failed\""
echo "        exit 1"
echo "    fi"
echo ""
echo "    # Reload NGINX"
echo "    systemctl reload nginx"
echo "    echo \"✅ NGINX reloaded successfully\""
echo ""
echo "    # Check status"
echo "    if systemctl is-active --quiet nginx; then"
echo "        echo \"✅ NGINX is running\""
echo "    else"
echo "        echo \"❌ NGINX is not running\""
echo "        exit 1"
echo "    fi"
echo "}"
echo ""
echo "deploy_nginx_config"

# === THE MASTERY TOOLKIT ===
echo "🎯 NGINX Mastery Toolkit:"
echo "========================="
echo "Performance: Worker processes, connections, buffers"
echo "Caching: Proxy cache, static file caching"
echo "Monitoring: Status module, detailed logging"
echo "Security: SSL/TLS, security headers, rate limiting"
echo "Load balancing: Multiple algorithms, health checks"
echo "Automation: Configuration testing, deployment scripts"

# === CONGRATULATIONS! ===
echo "🎓 NGINX MASTERY COMPLETE!"
echo "=========================="
echo "You now understand:"
echo "✅ NGINX installation and basic configuration"
echo "✅ Virtual hosts and server blocks"
echo "✅ Reverse proxy and load balancing"
echo "✅ SSL/TLS and security configuration"
echo "✅ Performance optimization techniques"
echo "✅ Monitoring and logging strategies"
echo "✅ Production deployment practices"
echo ""
echo "🚅 You are now an NGINX MASTER!"
echo "Build high-performance web infrastructure! 💪"
echo ""
echo "Remember: Great web servers are invisible to users!"
echo "Use your NGINX mastery to deliver lightning-fast experiences! ⚡"`
      }
    ]
  }
}
