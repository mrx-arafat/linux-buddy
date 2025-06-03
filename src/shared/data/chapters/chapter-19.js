export const chapter19 = {
  id: '19',
  icon: '🖥️',
  title: 'BUILD AN APP',
  description: 'Deploying applications on Linux',
  slug: 'build-an-app',
  content: {
    overview: 'Welcome to BUILD AN APP - where your code comes to life on Linux servers! 🖥️ If you\'ve ever wondered how to take your application from your laptop to a production server that serves millions of users, this chapter is your complete deployment guide. Building and deploying applications on Linux is like being an architect who not only designs buildings but also constructs them from foundation to rooftop. You\'ll learn to set up web servers, configure databases, manage dependencies, handle SSL certificates, and create robust deployment pipelines. We\'re going to transform you from someone who says "it works on my machine" to someone who confidently deploys scalable, secure applications that work flawlessly in production! 🚀',
    sections: [
      {
        title: '1. Application Architecture - Planning Your Digital Empire 🏗️',
        content: 'Before writing a single line of deployment code, you need to understand application architecture. Think of this as creating the blueprint for your digital empire. A well-architected application is like a well-designed city - it has proper infrastructure, clear organization, and can scale to accommodate growth. Understanding architecture patterns helps you make informed decisions about technology stacks, deployment strategies, and scaling approaches.',
        codeExample: `# === APPLICATION ARCHITECTURE FUNDAMENTALS ===
echo "🏗️ Application Architecture - Planning Your Digital Empire"

# === COMMON ARCHITECTURE PATTERNS ===
echo "🏛️ Common Application Architecture Patterns:"
echo ""
echo "Monolithic Architecture:"
echo "✅ Simple to develop and deploy"
echo "✅ Easy to test and debug"
echo "✅ Good for small to medium applications"
echo "❌ Difficult to scale specific components"
echo "❌ Technology lock-in"
echo "❌ Single point of failure"
echo ""
echo "Microservices Architecture:"
echo "✅ Independent scaling of components"
echo "✅ Technology diversity"
echo "✅ Fault isolation"
echo "❌ Complex deployment and monitoring"
echo "❌ Network latency between services"
echo "❌ Data consistency challenges"
echo ""
echo "Serverless Architecture:"
echo "✅ No server management"
echo "✅ Automatic scaling"
echo "✅ Pay-per-execution"
echo "❌ Vendor lock-in"
echo "❌ Cold start latency"
echo "❌ Limited execution time"

# === TECHNOLOGY STACK DECISIONS ===
echo "🥞 Technology Stack Considerations:"
echo ""
echo "Frontend Technologies:"
echo "• React/Vue/Angular for SPAs"
echo "• Next.js/Nuxt.js for SSR"
echo "• Static site generators (Gatsby, Hugo)"
echo "• Progressive Web Apps (PWAs)"
echo ""
echo "Backend Technologies:"
echo "• Node.js: JavaScript everywhere"
echo "• Python: Django/Flask for rapid development"
echo "• Go: High performance and concurrency"
echo "• Java: Enterprise-grade applications"
echo "• PHP: WordPress and legacy systems"
echo ""
echo "Database Choices:"
echo "• PostgreSQL: Robust relational database"
echo "• MySQL: Popular and well-supported"
echo "• MongoDB: Document-based NoSQL"
echo "• Redis: In-memory caching and sessions"
echo "• SQLite: Embedded and lightweight"

# === DEPLOYMENT STRATEGIES ===
echo "🚀 Deployment Strategy Planning:"
echo ""
echo "Blue-Green Deployment:"
echo "• Two identical production environments"
echo "• Switch traffic between environments"
echo "• Zero-downtime deployments"
echo "• Easy rollback capability"
echo ""
echo "Rolling Deployment:"
echo "• Gradual replacement of instances"
echo "• Maintains service availability"
echo "• Lower resource requirements"
echo "• Slower deployment process"
echo ""
echo "Canary Deployment:"
echo "• Deploy to small subset of users"
echo "• Monitor metrics and feedback"
echo "• Gradual rollout to all users"
echo "• Risk mitigation strategy"

# === INFRASTRUCTURE PLANNING ===
echo "🏗️ Infrastructure Planning:"

# Basic LAMP/LEMP stack
echo "# Traditional LAMP/LEMP Stack:"
echo "Linux (Ubuntu/CentOS)"
echo "Apache/Nginx (Web Server)"
echo "MySQL/PostgreSQL (Database)"
echo "PHP/Python/Perl (Programming Language)"

# Modern containerized stack
echo "# Modern Containerized Stack:"
echo "Docker (Containerization)"
echo "Kubernetes (Orchestration)"
echo "Load Balancer (Traffic Distribution)"
echo "Database Cluster (High Availability)"
echo "Monitoring Stack (Observability)"

# === SCALABILITY CONSIDERATIONS ===
echo "📈 Scalability Planning:"
echo ""
echo "Horizontal Scaling (Scale Out):"
echo "• Add more servers/instances"
echo "• Load balancing required"
echo "• Better fault tolerance"
echo "• Linear cost scaling"
echo ""
echo "Vertical Scaling (Scale Up):"
echo "• Increase server resources"
echo "• Simpler implementation"
echo "• Hardware limitations"
echo "• Single point of failure"
echo ""
echo "Database Scaling:"
echo "• Read replicas for read-heavy workloads"
echo "• Sharding for write-heavy workloads"
echo "• Caching layers (Redis, Memcached)"
echo "• CDN for static content"

# === SECURITY ARCHITECTURE ===
echo "🔒 Security Architecture Planning:"
echo ""
echo "Network Security:"
echo "• Firewalls and security groups"
echo "• VPN for internal communication"
echo "• SSL/TLS for data in transit"
echo "• Network segmentation"
echo ""
echo "Application Security:"
echo "• Input validation and sanitization"
echo "• Authentication and authorization"
echo "• Secure session management"
echo "• Regular security updates"
echo ""
echo "Data Security:"
echo "• Encryption at rest"
echo "• Database access controls"
echo "• Backup encryption"
echo "• Compliance requirements (GDPR, HIPAA)"

# === MONITORING AND OBSERVABILITY ===
echo "📊 Monitoring Architecture:"
echo ""
echo "Three Pillars of Observability:"
echo "1. Metrics: Quantitative measurements"
echo "2. Logs: Detailed event records"
echo "3. Traces: Request flow tracking"
echo ""
echo "Monitoring Stack Components:"
echo "• Prometheus: Metrics collection"
echo "• Grafana: Visualization dashboards"
echo "• ELK Stack: Log aggregation and analysis"
echo "• Jaeger: Distributed tracing"
echo "• AlertManager: Notification system"

# === THE ARCHITECTURE PLANNING CHEAT SHEET ===
echo "🏗️ Architecture Planning Quick Reference:"
echo "Start simple: Monolith -> Microservices as needed"
echo "Choose proven technologies over trendy ones"
echo "Plan for 10x growth from day one"
echo "Security and monitoring are not optional"
echo "Document architecture decisions and trade-offs"
echo "Consider operational complexity in design"
echo "Design for failure and recovery"`
      },
      {
        title: '2. Web Server Setup - Your Digital Foundation 🌐',
        content: 'Setting up a web server is like laying the foundation for your digital empire. Whether you choose Nginx for its performance or Apache for its flexibility, understanding web server configuration is crucial for serving your applications reliably. A properly configured web server handles SSL certificates, load balancing, caching, and security - it\'s the gateway between your users and your application.',
        codeExample: `# === WEB SERVER SETUP ===
echo "🌐 Web Server Setup - Your Digital Foundation"

# === NGINX INSTALLATION AND SETUP ===
echo "⚡ Nginx - The High-Performance Web Server:"

# Install Nginx
echo "# Install Nginx on Ubuntu/Debian:"
echo "sudo apt update"
echo "sudo apt install nginx"
echo "sudo systemctl start nginx"
echo "sudo systemctl enable nginx"

echo "# Install Nginx on CentOS/RHEL:"
echo "sudo yum install epel-release"
echo "sudo yum install nginx"
echo "sudo systemctl start nginx"
echo "sudo systemctl enable nginx"

# Basic Nginx configuration
echo "# Basic Nginx configuration (/etc/nginx/sites-available/myapp):"
cat << 'EOF'
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/myapp;
    index index.html index.php;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Static file handling
    location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # PHP processing (if using PHP)
    location ~ \\.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME \\$document_root\\$fastcgi_script_name;
        include fastcgi_params;
    }

    # Node.js reverse proxy
    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \\$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \\$host;
        proxy_set_header X-Real-IP \\$remote_addr;
        proxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \\$scheme;
        proxy_cache_bypass \\$http_upgrade;
    }
}
EOF

# Enable site
echo "# Enable Nginx site:"
echo "sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/"
echo "sudo nginx -t  # Test configuration"
echo "sudo systemctl reload nginx"

# === APACHE INSTALLATION AND SETUP ===
echo "🔥 Apache - The Flexible Web Server:"

# Install Apache
echo "# Install Apache on Ubuntu/Debian:"
echo "sudo apt update"
echo "sudo apt install apache2"
echo "sudo systemctl start apache2"
echo "sudo systemctl enable apache2"

echo "# Install Apache on CentOS/RHEL:"
echo "sudo yum install httpd"
echo "sudo systemctl start httpd"
echo "sudo systemctl enable httpd"

# Basic Apache virtual host
echo "# Apache virtual host (/etc/apache2/sites-available/myapp.conf):"
cat << 'EOF'
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    DocumentRoot /var/www/myapp

    # Security headers
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set X-Content-Type-Options "nosniff"

    # Compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \\.(?:gif|jpe?g|png)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \\.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>

    # Static file caching
    <FilesMatch "\\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
    </FilesMatch>

    # PHP processing
    <FilesMatch "\\.php$">
        SetHandler "proxy:unix:/var/run/php/php8.1-fpm.sock|fcgi://localhost"
    </FilesMatch>

    # Reverse proxy for Node.js
    ProxyPreserveHost On
    ProxyPass /api/ http://localhost:3000/
    ProxyPassReverse /api/ http://localhost:3000/

    ErrorLog \\$\\{APACHE_LOG_DIR\\}/myapp_error.log
    CustomLog \\$\\{APACHE_LOG_DIR\\}/myapp_access.log combined
</VirtualHost>
EOF

# Enable Apache modules and site
echo "# Enable Apache modules and site:"
echo "sudo a2enmod rewrite ssl headers deflate proxy proxy_http"
echo "sudo a2ensite myapp.conf"
echo "sudo apache2ctl configtest"
echo "sudo systemctl reload apache2"

# === SSL/TLS SETUP WITH LET'S ENCRYPT ===
echo "🔒 SSL/TLS Setup with Let's Encrypt:"

# Install Certbot
echo "# Install Certbot:"
echo "sudo apt install certbot python3-certbot-nginx  # For Nginx"
echo "sudo apt install certbot python3-certbot-apache # For Apache"

# Obtain SSL certificate
echo "# Obtain SSL certificate:"
echo "sudo certbot --nginx -d example.com -d www.example.com"
echo "sudo certbot --apache -d example.com -d www.example.com"

# Auto-renewal setup
echo "# Setup auto-renewal:"
echo "sudo crontab -e"
echo "# Add: 0 12 * * * /usr/bin/certbot renew --quiet"

# Manual SSL configuration for Nginx
echo "# Manual SSL configuration for Nginx:"
cat << 'EOF'
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000" always;

    root /var/www/myapp;
    index index.html index.php;

    # Rest of configuration...
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://\\$server_name\\$request_uri;
}
EOF

# === LOAD BALANCING SETUP ===
echo "⚖️ Load Balancing Configuration:"

# Nginx load balancing
echo "# Nginx load balancing:"
cat << 'EOF'
upstream backend {
    least_conn;
    server 192.168.1.10:3000 weight=3;
    server 192.168.1.11:3000 weight=2;
    server 192.168.1.12:3000 weight=1 backup;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://backend;
        proxy_set_header Host \\$host;
        proxy_set_header X-Real-IP \\$remote_addr;
        proxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;

        # Health checks
        proxy_connect_timeout 5s;
        proxy_send_timeout 5s;
        proxy_read_timeout 5s;
    }
}
EOF

# === WEB SERVER SECURITY ===
echo "🛡️ Web Server Security Hardening:"

# Nginx security configuration
echo "# Nginx security hardening:"
cat << 'EOF'
# Hide Nginx version
server_tokens off;

# Rate limiting
limit_req_zone \\$binary_remote_addr zone=login:10m rate=1r/s;
limit_req_zone \\$binary_remote_addr zone=api:10m rate=10r/s;

server {
    # Rate limiting
    location /login {
        limit_req zone=login burst=5 nodelay;
    }

    location /api/ {
        limit_req zone=api burst=20 nodelay;
    }

    # Block common attack patterns
    location ~* \\.(php|asp|aspx|jsp)$ {
        deny all;
    }

    # Prevent access to hidden files
    location ~ /\\. {
        deny all;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
}
EOF

# === WEB SERVER MONITORING ===
echo "📊 Web Server Monitoring:"

# Nginx status module
echo "# Enable Nginx status monitoring:"
cat << 'EOF'
server {
    listen 127.0.0.1:8080;
    server_name localhost;

    location /nginx_status {
        stub_status on;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
EOF

# Log analysis
echo "# Analyze web server logs:"
echo "sudo tail -f /var/log/nginx/access.log"
echo "sudo tail -f /var/log/nginx/error.log"
echo "awk '{print \\$1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10"

# === THE WEB SERVER CHEAT SHEET ===
echo "🌐 Web Server Quick Reference:"
echo "Nginx: High performance, low memory usage"
echo "Apache: Flexible, extensive module ecosystem"
echo "SSL: Always use HTTPS in production"
echo "Security headers: Protect against common attacks"
echo "Load balancing: Distribute traffic across servers"
echo "Monitoring: Track performance and errors"
echo "Caching: Improve performance and reduce load"`
      },
      {
        title: '3. Database Setup - Your Data Fortress 🗄️',
        content: 'Setting up a database is like building a secure vault for your application\'s most valuable asset - its data. Whether you choose PostgreSQL for its robustness, MySQL for its popularity, or MongoDB for its flexibility, proper database configuration ensures data integrity, performance, and security. A well-configured database can handle millions of transactions while keeping your data safe and accessible.',
        codeExample: `# === DATABASE SETUP ===
echo "🗄️ Database Setup - Your Data Fortress"

# === POSTGRESQL SETUP ===
echo "🐘 PostgreSQL - The Advanced Open Source Database:"

# Install PostgreSQL
echo "# Install PostgreSQL on Ubuntu/Debian:"
echo "sudo apt update"
echo "sudo apt install postgresql postgresql-contrib"
echo "sudo systemctl start postgresql"
echo "sudo systemctl enable postgresql"

echo "# Install PostgreSQL on CentOS/RHEL:"
echo "sudo yum install postgresql-server postgresql-contrib"
echo "sudo postgresql-setup initdb"
echo "sudo systemctl start postgresql"
echo "sudo systemctl enable postgresql"

# Basic PostgreSQL configuration
echo "# Configure PostgreSQL:"
echo "sudo -u postgres psql"
echo "# In PostgreSQL prompt:"
echo "CREATE DATABASE myapp;"
echo "CREATE USER myapp_user WITH ENCRYPTED PASSWORD 'secure_password';"
echo "GRANT ALL PRIVILEGES ON DATABASE myapp TO myapp_user;"
echo "\\\\q"

# PostgreSQL security configuration
echo "# PostgreSQL security (/etc/postgresql/*/main/postgresql.conf):"
cat << 'EOF'
# Connection settings
listen_addresses = 'localhost'          # Only local connections
port = 5432
max_connections = 100

# Security settings
ssl = on
ssl_cert_file = '/etc/ssl/certs/ssl-cert-snakeoil.pem'
ssl_key_file = '/etc/ssl/private/ssl-cert-snakeoil.key'

# Logging
log_statement = 'mod'                   # Log modifications
log_min_duration_statement = 1000       # Log slow queries
log_connections = on
log_disconnections = on

# Performance tuning
shared_buffers = 256MB                  # 25% of RAM
effective_cache_size = 1GB              # 75% of RAM
work_mem = 4MB
maintenance_work_mem = 64MB
EOF

# PostgreSQL authentication (/etc/postgresql/*/main/pg_hba.conf)
echo "# PostgreSQL authentication configuration:"
cat << 'EOF'
# TYPE  DATABASE        USER            ADDRESS                 METHOD
local   all             postgres                                peer
local   all             all                                     md5
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
EOF

# === MYSQL SETUP ===
echo "🐬 MySQL - The Popular Relational Database:"

# Install MySQL
echo "# Install MySQL on Ubuntu/Debian:"
echo "sudo apt update"
echo "sudo apt install mysql-server"
echo "sudo systemctl start mysql"
echo "sudo systemctl enable mysql"
echo "sudo mysql_secure_installation"

echo "# Install MySQL on CentOS/RHEL:"
echo "sudo yum install mysql-server"
echo "sudo systemctl start mysqld"
echo "sudo systemctl enable mysqld"
echo "sudo mysql_secure_installation"

# MySQL database and user setup
echo "# Configure MySQL:"
echo "sudo mysql -u root -p"
echo "# In MySQL prompt:"
echo "CREATE DATABASE myapp;"
echo "CREATE USER 'myapp_user'@'localhost' IDENTIFIED BY 'secure_password';"
echo "GRANT ALL PRIVILEGES ON myapp.* TO 'myapp_user'@'localhost';"
echo "FLUSH PRIVILEGES;"
echo "EXIT;"

# MySQL configuration (/etc/mysql/mysql.conf.d/mysqld.cnf)
echo "# MySQL configuration:"
cat << 'EOF'
[mysqld]
# Basic settings
bind-address = 127.0.0.1
port = 3306
max_connections = 100

# Security
ssl-ca = /etc/mysql/ca.pem
ssl-cert = /etc/mysql/server-cert.pem
ssl-key = /etc/mysql/server-key.pem

# Logging
general_log = 1
general_log_file = /var/log/mysql/mysql.log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2

# Performance tuning
innodb_buffer_pool_size = 256M          # 70-80% of RAM
innodb_log_file_size = 64M
query_cache_size = 16M
query_cache_type = 1
EOF

# === MONGODB SETUP ===
echo "🍃 MongoDB - The Document Database:"

# Install MongoDB
echo "# Install MongoDB on Ubuntu:"
echo "wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -"
echo "echo 'deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse' | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list"
echo "sudo apt update"
echo "sudo apt install mongodb-org"
echo "sudo systemctl start mongod"
echo "sudo systemctl enable mongod"

# MongoDB configuration
echo "# Configure MongoDB (/etc/mongod.conf):"
cat << 'EOF'
# Network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1

# Security
security:
  authorization: enabled

# Storage
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true

# Logging
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log
EOF

# MongoDB user setup
echo "# Create MongoDB admin user:"
echo "mongo"
echo "# In MongoDB shell:"
echo "use admin"
echo "db.createUser({"
echo "  user: 'admin',"
echo "  pwd: 'secure_password',"
echo "  roles: [ { role: 'userAdminAnyDatabase', db: 'admin' } ]"
echo "})"
echo "use myapp"
echo "db.createUser({"
echo "  user: 'myapp_user',"
echo "  pwd: 'secure_password',"
echo "  roles: [ { role: 'readWrite', db: 'myapp' } ]"
echo "})"

# === REDIS SETUP ===
echo "🔴 Redis - The In-Memory Data Store:"

# Install Redis
echo "# Install Redis:"
echo "sudo apt update"
echo "sudo apt install redis-server"
echo "sudo systemctl start redis-server"
echo "sudo systemctl enable redis-server"

# Redis configuration (/etc/redis/redis.conf)
echo "# Redis configuration:"
cat << 'EOF'
# Network
bind 127.0.0.1
port 6379
protected-mode yes

# Security
requirepass secure_password

# Persistence
save 900 1
save 300 10
save 60 10000

# Memory management
maxmemory 256mb
maxmemory-policy allkeys-lru

# Logging
loglevel notice
logfile /var/log/redis/redis-server.log
EOF

# === DATABASE BACKUP STRATEGIES ===
echo "💾 Database Backup Strategies:"

# PostgreSQL backup
echo "# PostgreSQL backup script:"
cat << 'EOF'
#!/bin/bash
# postgresql-backup.sh
DB_NAME="myapp"
DB_USER="myapp_user"
BACKUP_DIR="/backup/postgresql"
DATE=\\$(date +%Y%m%d_%H%M%S)

mkdir -p \\$BACKUP_DIR

# Full database backup
pg_dump -U \\$DB_USER -h localhost \\$DB_NAME | gzip > \\$BACKUP_DIR/\\$DB_NAME_\\$DATE.sql.gz

# Schema-only backup
pg_dump -U \\$DB_USER -h localhost -s \\$DB_NAME | gzip > \\$BACKUP_DIR/\\$DB_NAME_schema_\\$DATE.sql.gz

# Clean old backups (keep 7 days)
find \\$BACKUP_DIR -name "*.gz" -mtime +7 -delete

echo "PostgreSQL backup completed: \\$DATE"
EOF

# MySQL backup
echo "# MySQL backup script:"
cat << 'EOF'
#!/bin/bash
# mysql-backup.sh
DB_NAME="myapp"
DB_USER="myapp_user"
DB_PASS="secure_password"
BACKUP_DIR="/backup/mysql"
DATE=\\$(date +%Y%m%d_%H%M%S)

mkdir -p \\$BACKUP_DIR

# Full database backup
mysqldump -u \\$DB_USER -p\\$DB_PASS \\$DB_NAME | gzip > \\$BACKUP_DIR/\\$DB_NAME_\\$DATE.sql.gz

# All databases backup
mysqldump -u \\$DB_USER -p\\$DB_PASS --all-databases | gzip > \\$BACKUP_DIR/all_databases_\\$DATE.sql.gz

# Clean old backups
find \\$BACKUP_DIR -name "*.gz" -mtime +7 -delete

echo "MySQL backup completed: \\$DATE"
EOF

# MongoDB backup
echo "# MongoDB backup script:"
cat << 'EOF'
#!/bin/bash
# mongodb-backup.sh
DB_NAME="myapp"
BACKUP_DIR="/backup/mongodb"
DATE=\\$(date +%Y%m%d_%H%M%S)

mkdir -p \\$BACKUP_DIR

# Database backup
mongodump --db \\$DB_NAME --out \\$BACKUP_DIR/\\$DATE

# Compress backup
tar -czf \\$BACKUP_DIR/\\$DB_NAME_\\$DATE.tar.gz -C \\$BACKUP_DIR \\$DATE
rm -rf \\$BACKUP_DIR/\\$DATE

# Clean old backups
find \\$BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "MongoDB backup completed: \\$DATE"
EOF

# === DATABASE MONITORING ===
echo "📊 Database Monitoring:"

# PostgreSQL monitoring
echo "# PostgreSQL monitoring queries:"
echo "# Active connections:"
echo "SELECT count(*) FROM pg_stat_activity;"
echo "# Database sizes:"
echo "SELECT datname, pg_size_pretty(pg_database_size(datname)) FROM pg_database;"
echo "# Slow queries:"
echo "SELECT query, mean_time, calls FROM pg_stat_statements ORDER BY mean_time DESC LIMIT 10;"

# MySQL monitoring
echo "# MySQL monitoring queries:"
echo "# Show processlist:"
echo "SHOW PROCESSLIST;"
echo "# Database sizes:"
echo "SELECT table_schema, ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) AS 'DB Size in MB' FROM information_schema.tables GROUP BY table_schema;"
echo "# Slow queries:"
echo "SELECT * FROM mysql.slow_log ORDER BY start_time DESC LIMIT 10;"

# === DATABASE PERFORMANCE TUNING ===
echo "⚡ Database Performance Tuning:"

# PostgreSQL performance
echo "# PostgreSQL performance tuning:"
echo "# Analyze query performance:"
echo "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user@example.com';"
echo "# Create indexes:"
echo "CREATE INDEX idx_users_email ON users(email);"
echo "# Update statistics:"
echo "ANALYZE;"

# MySQL performance
echo "# MySQL performance tuning:"
echo "# Enable slow query log:"
echo "SET GLOBAL slow_query_log = 'ON';"
echo "SET GLOBAL long_query_time = 2;"
echo "# Analyze queries:"
echo "EXPLAIN SELECT * FROM users WHERE email = 'user@example.com';"
echo "# Create indexes:"
echo "CREATE INDEX idx_users_email ON users(email);"

# === THE DATABASE CHEAT SHEET ===
echo "🗄️ Database Quick Reference:"
echo "PostgreSQL: Advanced features, ACID compliance"
echo "MySQL: Popular, well-supported, good performance"
echo "MongoDB: Document-based, flexible schema"
echo "Redis: In-memory, caching, sessions"
echo "Backup: Automate daily backups with retention"
echo "Monitor: Track connections, queries, performance"
echo "Security: Use strong passwords, limit access"`
      },
      {
        title: '4. Application Deployment - Going Live 🚀',
        content: 'Application deployment is the moment of truth - when your code meets the real world. This is where you transform from a developer to a DevOps engineer, orchestrating the complex dance of code, servers, databases, and users. Modern deployment involves containerization, automation, monitoring, and graceful handling of failures. Master deployment, and you master the art of reliable software delivery.',
        codeExample: `# === APPLICATION DEPLOYMENT ===
echo "🚀 Application Deployment - Going Live"

# === NODE.JS APPLICATION DEPLOYMENT ===
echo "🟢 Node.js Application Deployment:"

# Install Node.js
echo "# Install Node.js using NodeSource repository:"
echo "curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -"
echo "sudo apt install nodejs"
echo "node --version"
echo "npm --version"

# Application setup
echo "# Deploy Node.js application:"
cat << 'EOF'
#!/bin/bash
# deploy-nodejs.sh
APP_NAME="myapp"
APP_DIR="/var/www/\\$APP_NAME"
APP_USER="www-data"
NODE_ENV="production"

# Create application directory
sudo mkdir -p \\$APP_DIR
sudo chown \\$APP_USER:\\$APP_USER \\$APP_DIR

# Clone or copy application
cd \\$APP_DIR
# git clone https://github.com/user/myapp.git .
# Or copy files: sudo cp -r /path/to/app/* \\$APP_DIR/

# Install dependencies
sudo -u \\$APP_USER npm ci --only=production

# Build application (if needed)
sudo -u \\$APP_USER npm run build

# Set environment variables
sudo tee /etc/environment << EOL
NODE_ENV=\\$NODE_ENV
DATABASE_URL=postgresql://user:pass@localhost/myapp
REDIS_URL=redis://localhost:6379
EOL

echo "Node.js application deployed to \\$APP_DIR"
EOF

# PM2 process manager
echo "# Install and configure PM2:"
echo "sudo npm install -g pm2"

# PM2 ecosystem file
echo "# Create PM2 ecosystem file (ecosystem.config.js):"
cat << 'EOF'
module.exports = {
  apps: [{
    name: 'myapp',
    script: './app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/myapp-error.log',
    out_file: '/var/log/pm2/myapp-out.log',
    log_file: '/var/log/pm2/myapp.log',
    time: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
};
EOF

echo "# Start application with PM2:"
echo "pm2 start ecosystem.config.js"
echo "pm2 save"
echo "pm2 startup"

# === PYTHON APPLICATION DEPLOYMENT ===
echo "🐍 Python Application Deployment:"

# Install Python and dependencies
echo "# Install Python and virtual environment:"
echo "sudo apt update"
echo "sudo apt install python3 python3-pip python3-venv"

# Python application setup
echo "# Deploy Python application:"
cat << 'EOF'
#!/bin/bash
# deploy-python.sh
APP_NAME="myapp"
APP_DIR="/var/www/\\$APP_NAME"
APP_USER="www-data"
PYTHON_VERSION="3.9"

# Create application directory
sudo mkdir -p \\$APP_DIR
sudo chown \\$APP_USER:\\$APP_USER \\$APP_DIR

# Create virtual environment
cd \\$APP_DIR
sudo -u \\$APP_USER python3 -m venv venv
sudo -u \\$APP_USER source venv/bin/activate

# Install dependencies
sudo -u \\$APP_USER pip install -r requirements.txt

# Collect static files (Django)
sudo -u \\$APP_USER python manage.py collectstatic --noinput

# Run migrations
sudo -u \\$APP_USER python manage.py migrate

echo "Python application deployed to \\$APP_DIR"
EOF

# Gunicorn configuration
echo "# Install and configure Gunicorn:"
echo "pip install gunicorn"

# Gunicorn service file
echo "# Create systemd service (/etc/systemd/system/myapp.service):"
cat << 'EOF'
[Unit]
Description=Gunicorn instance to serve myapp
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/myapp
Environment="PATH=/var/www/myapp/venv/bin"
ExecStart=/var/www/myapp/venv/bin/gunicorn --workers 3 --bind unix:/var/www/myapp/myapp.sock myapp.wsgi:application
ExecReload=/bin/kill -s HUP \\$MAINPID
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

echo "sudo systemctl daemon-reload"
echo "sudo systemctl start myapp"
echo "sudo systemctl enable myapp"

# === DOCKER DEPLOYMENT ===
echo "🐳 Docker Container Deployment:"

# Install Docker
echo "# Install Docker:"
echo "curl -fsSL https://get.docker.com -o get-docker.sh"
echo "sudo sh get-docker.sh"
echo "sudo usermod -aG docker \\$USER"

# Dockerfile example
echo "# Create Dockerfile:"
cat << 'EOF'
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Build application
RUN npm run build

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
EOF

# Docker Compose setup
echo "# Create docker-compose.yml:"
cat << 'EOF'
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      - db
      - redis
    restart: unless-stopped

  db:
    image: postgres:14
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
EOF

echo "# Deploy with Docker Compose:"
echo "docker-compose up -d"
echo "docker-compose logs -f"

# === CONTINUOUS DEPLOYMENT ===
echo "🔄 Continuous Deployment Pipeline:"

# GitHub Actions workflow
echo "# GitHub Actions workflow (.github/workflows/deploy.yml):"
cat << 'EOF'
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm test

    - name: Build application
      run: npm run build

    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: \\$\\{\\{ secrets\\.HOST \\}\\}
        username: \\$\\{\\{ secrets\\.USERNAME \\}\\}
        key: \\$\\{\\{ secrets\\.SSH_KEY \\}\\}
        script: |
          cd /var/www/myapp
          git pull origin main
          npm ci --only=production
          npm run build
          pm2 reload ecosystem.config.js
EOF

# Deployment script
echo "# Automated deployment script:"
cat << 'EOF'
#!/bin/bash
# deploy.sh
set -e

APP_DIR="/var/www/myapp"
BACKUP_DIR="/backup/deployments"
DATE=\\$(date +%Y%m%d_%H%M%S)

echo "Starting deployment at \\$DATE"

# Create backup
mkdir -p \\$BACKUP_DIR
tar -czf \\$BACKUP_DIR/backup_\\$DATE.tar.gz -C \\$APP_DIR .

# Pull latest code
cd \\$APP_DIR
git pull origin main

# Install dependencies
npm ci --only=production

# Run database migrations
npm run migrate

# Build application
npm run build

# Restart application
pm2 reload ecosystem.config.js

# Health check
sleep 5
if curl -f http://localhost:3000/health; then
    echo "Deployment successful!"
    # Clean old backups
    find \\$BACKUP_DIR -name "backup_*.tar.gz" -mtime +7 -delete
else
    echo "Deployment failed! Rolling back..."
    tar -xzf \\$BACKUP_DIR/backup_\\$DATE.tar.gz -C \\$APP_DIR
    pm2 reload ecosystem.config.js
    exit 1
fi
EOF

# === DEPLOYMENT MONITORING ===
echo "📊 Deployment Monitoring:"

# Health check endpoint
echo "# Create health check endpoint:"
cat << 'EOF'
// health.js
const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  // Check database connection
  // Check external services
  // Check application status

  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version
  });
});

module.exports = app;
EOF

# Monitoring script
echo "# Deployment monitoring script:"
cat << 'EOF'
#!/bin/bash
# monitor-deployment.sh
APP_URL="http://localhost:3000"
ALERT_EMAIL="admin@example.com"

# Health check
if ! curl -f \\$APP_URL/health > /dev/null 2>&1; then
    echo "Application health check failed" | mail -s "Deployment Alert" \\$ALERT_EMAIL
    exit 1
fi

# Check application logs
ERROR_COUNT=\\$(tail -100 /var/log/pm2/myapp-error.log | grep "\\$(date +%Y-%m-%d)" | wc -l)
if [ \\$ERROR_COUNT -gt 10 ]; then
    echo "High error count detected: \\$ERROR_COUNT" | mail -s "Application Errors" \\$ALERT_EMAIL
fi

echo "Application monitoring completed successfully"
EOF

# === THE DEPLOYMENT CHEAT SHEET ===
echo "🚀 Deployment Quick Reference:"
echo "Node.js: Use PM2 for process management"
echo "Python: Use Gunicorn + systemd for production"
echo "Docker: Containerize for consistency and portability"
echo "CI/CD: Automate testing and deployment"
echo "Monitoring: Health checks and error tracking"
echo "Rollback: Always have a rollback strategy"
echo "Security: Use environment variables for secrets"`
      },
      {
        title: '5. Production Mastery - Enterprise-Grade Operations 🏭',
        content: 'Production mastery is where you graduate from building apps to running bulletproof systems that serve millions of users. This involves advanced monitoring, scaling strategies, security hardening, disaster recovery, and performance optimization. Master-level production operations separate hobby projects from enterprise-grade systems that can handle Black Friday traffic and sleep-depriving incidents.',
        codeExample: `# === PRODUCTION MASTERY ===
echo "🏭 Production Mastery - Enterprise-Grade Operations"

# === ADVANCED MONITORING STACK ===
echo "📊 Advanced Monitoring and Observability:"

# Prometheus setup
echo "# Install Prometheus:"
echo "wget https://github.com/prometheus/prometheus/releases/download/v2.40.0/prometheus-2.40.0.linux-amd64.tar.gz"
echo "tar xvfz prometheus-*.tar.gz"
echo "sudo mv prometheus-*/prometheus /usr/local/bin/"
echo "sudo mv prometheus-*/promtool /usr/local/bin/"

# Prometheus configuration
echo "# Prometheus configuration (prometheus.yml):"
cat << 'EOF'
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']

  - job_name: 'nginx'
    static_configs:
      - targets: ['localhost:9113']

  - job_name: 'application'
    static_configs:
      - targets: ['localhost:3000']
    metrics_path: '/metrics'
EOF

# Grafana setup
echo "# Install Grafana:"
echo "sudo apt-get install -y software-properties-common"
echo "sudo add-apt-repository 'deb https://packages.grafana.com/oss/deb stable main'"
echo "wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -"
echo "sudo apt-get update"
echo "sudo apt-get install grafana"
echo "sudo systemctl start grafana-server"
echo "sudo systemctl enable grafana-server"

# === LOAD BALANCING AND HIGH AVAILABILITY ===
echo "⚖️ Load Balancing and High Availability:"

# HAProxy configuration
echo "# Install HAProxy:"
echo "sudo apt update"
echo "sudo apt install haproxy"

echo "# HAProxy configuration (/etc/haproxy/haproxy.cfg):"
cat << 'EOF'
global
    daemon
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy

defaults
    mode http
    timeout connect 5000ms
    timeout client 50000ms
    timeout server 50000ms
    option httplog
    option dontlognull

frontend web_frontend
    bind *:80
    bind *:443 ssl crt /etc/ssl/certs/example.com.pem
    redirect scheme https if !{ ssl_fc }

    # Rate limiting
    stick-table type ip size 100k expire 30s store http_req_rate(10s)
    http-request track-sc0 src
    http-request reject if { sc_http_req_rate(0) gt 20 }

    default_backend web_servers

backend web_servers
    balance roundrobin
    option httpchk GET /health

    server web1 192.168.1.10:3000 check
    server web2 192.168.1.11:3000 check
    server web3 192.168.1.12:3000 check backup

listen stats
    bind *:8404
    stats enable
    stats uri /stats
    stats refresh 30s
    stats admin if TRUE
EOF

# === AUTO-SCALING SETUP ===
echo "📈 Auto-Scaling Configuration:"

# Auto-scaling script
echo "# Auto-scaling script:"
cat << 'EOF'
#!/bin/bash
# auto-scale.sh
MIN_INSTANCES=2
MAX_INSTANCES=10
SCALE_UP_THRESHOLD=70
SCALE_DOWN_THRESHOLD=30
CHECK_INTERVAL=60

while true; do
    # Get current metrics
    CPU_USAGE=\\$(curl -s http://localhost:9090/api/v1/query?query=avg\\\\(cpu_usage\\\\) | jq -r '\\.data\\.result[0]\\.value[1]')
    CURRENT_INSTANCES=\\$(docker ps --filter "name=app" --format "table \\{\\{\\.Names\\}\\}" | wc -l)

    echo "Current CPU: \\$CPU_USAGE%, Instances: \\$CURRENT_INSTANCES"

    # Scale up decision
    if (( \\$(echo "\\$CPU_USAGE > \\$SCALE_UP_THRESHOLD" | bc -l) )) && [ \\$CURRENT_INSTANCES -lt \\$MAX_INSTANCES ]; then
        echo "Scaling up..."
        docker-compose up -d --scale app=\\$\\(\\(CURRENT_INSTANCES + 1\\)\\)

        # Update load balancer
        /usr/local/bin/update-haproxy-config.sh

    # Scale down decision
    elif (( \\$(echo "\\$CPU_USAGE < \\$SCALE_DOWN_THRESHOLD" | bc -l) )) && [ \\$CURRENT_INSTANCES -gt \\$MIN_INSTANCES ]; then
        echo "Scaling down..."
        docker-compose up -d --scale app=\\$\\(\\(CURRENT_INSTANCES - 1\\)\\)

        # Update load balancer
        /usr/local/bin/update-haproxy-config.sh
    fi

    sleep \\$CHECK_INTERVAL
done
EOF

# === SECURITY HARDENING ===
echo "🔒 Production Security Hardening:"

# Security audit script
echo "# Security audit script:"
cat << 'EOF'
#!/bin/bash
# security-audit.sh
REPORT_FILE="/var/log/security-audit-\\$(date +%Y%m%d).log"

{
    echo "Security Audit Report - \\$(date)"
    echo "=================================="

    # Check for security updates
    echo "Security Updates Available:"
    apt list --upgradable 2>/dev/null | grep -i security

    # Check open ports
    echo "Open Ports:"
    ss -tuln

    # Check running services
    echo "Running Services:"
    systemctl list-units --type=service --state=running

    # Check failed login attempts
    echo "Failed Login Attempts (last 24h):"
    grep "Failed password" /var/log/auth.log | grep "\\$(date +%b\\ %d)"

    # Check file permissions
    echo "Checking critical file permissions:"
    ls -la /etc/passwd /etc/shadow /etc/ssh/sshd_config

    # Check for SUID files
    echo "SUID Files:"
    find / -perm -4000 -type f 2>/dev/null

    # Check disk usage
    echo "Disk Usage:"
    df -h

    # Check memory usage
    echo "Memory Usage:"
    free -h

} > \\$REPORT_FILE

echo "Security audit completed: \\$REPORT_FILE"
EOF

# === DISASTER RECOVERY ===
echo "🚨 Disaster Recovery Planning:"

# Backup and recovery script
echo "# Comprehensive backup script:"
cat << 'EOF'
#!/bin/bash
# disaster-recovery-backup.sh
BACKUP_ROOT="/backup/disaster-recovery"
DATE=\\$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="\\$BACKUP_ROOT/\\$DATE"

mkdir -p \\$BACKUP_DIR

echo "Starting disaster recovery backup..."

# Application code backup
echo "Backing up application code..."
tar -czf \\$BACKUP_DIR/application.tar.gz -C /var/www .

# Database backups
echo "Backing up databases..."
pg_dumpall | gzip > \\$BACKUP_DIR/postgresql.sql.gz
mysqldump --all-databases | gzip > \\$BACKUP_DIR/mysql.sql.gz

# Configuration backups
echo "Backing up configurations..."
tar -czf \\$BACKUP_DIR/configs.tar.gz /etc/nginx /etc/apache2 /etc/haproxy /etc/ssl

# System state backup
echo "Backing up system state..."
dpkg --get-selections > \\$BACKUP_DIR/packages.list
systemctl list-unit-files --state=enabled > \\$BACKUP_DIR/services.list
crontab -l > \\$BACKUP_DIR/crontab.backup 2>/dev/null || true

# Upload to remote storage
echo "Uploading to remote storage..."
aws s3 sync \\$BACKUP_DIR s3://disaster-recovery-bucket/\\$DATE/

# Create recovery documentation
cat << EOL > \\$BACKUP_DIR/recovery-instructions.md
# Disaster Recovery Instructions

## System Information
- Backup Date: \\$DATE
- Server: \\$(hostname)
- OS: \\$(lsb_release -d | cut -f2)

## Recovery Steps
1. Restore application: tar -xzf application.tar.gz -C /var/www
2. Restore databases: gunzip < postgresql.sql.gz | psql
3. Restore configs: tar -xzf configs.tar.gz -C /
4. Reinstall packages: dpkg --set-selections < packages.list && apt-get dselect-upgrade
5. Enable services: systemctl enable \\$(cat services.list | grep enabled | awk '{print \\$1}')

## Verification
- Check application health: curl http://localhost/health
- Verify database connectivity
- Test all critical functionality
EOL

echo "Disaster recovery backup completed: \\$BACKUP_DIR"

# Clean old backups (keep 30 days)
find \\$BACKUP_ROOT -type d -mtime +30 -exec rm -rf {} +
EOF

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ Production Performance Optimization:"

# Performance monitoring script
echo "# Performance monitoring script:"
cat << 'EOF'
#!/bin/bash
# performance-monitor.sh
METRICS_FILE="/var/log/performance-metrics.log"

while true; do
    TIMESTAMP=\\$(date +%Y-%m-%d\\ %H:%M:%S)

    # CPU metrics
    CPU_USAGE=\\$(top -bn1 | grep "Cpu(s)" | awk '{print \\$2}' | cut -d'%' -f1)
    LOAD_AVG=\\$(uptime | awk -F'load average:' '{print \\$2}' | awk '{print \\$1}' | tr -d ',')

    # Memory metrics
    MEMORY_USAGE=\\$(free | awk 'NR==2{printf "%\\.1f", \\$3*100/\\$2}')

    # Disk metrics
    DISK_USAGE=\\$(df / | awk 'NR==2{print \\$5}' | cut -d'%' -f1)
    DISK_IO=\\$(iostat -d 1 2 | tail -n +4 | awk '{print \\$4}')

    # Network metrics
    NETWORK_IN=\\$(cat /proc/net/dev | grep eth0 | awk '{print \\$2}')
    NETWORK_OUT=\\$(cat /proc/net/dev | grep eth0 | awk '{print \\$10}')

    # Application metrics
    RESPONSE_TIME=\\$(curl -o /dev/null -s -w '%\\{time_total\\}' http://localhost:3000/health)

    # Log metrics
    echo "\\$TIMESTAMP,\\$CPU_USAGE,\\$LOAD_AVG,\\$MEMORY_USAGE,\\$DISK_USAGE,\\$RESPONSE_TIME" >> \\$METRICS_FILE

    sleep 60
done
EOF

# === ALERTING SYSTEM ===
echo "🚨 Advanced Alerting System:"

# Alert manager configuration
echo "# AlertManager configuration (alertmanager.yml):"
cat << 'EOF'
global:
  smtp_smarthost: 'localhost:587'
  smtp_from: 'alerts@example.com'

route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'web.hook'

receivers:
- name: 'web.hook'
  email_configs:
  - to: 'admin@example.com'
    subject: 'Alert: \\{\\{ \\.GroupLabels\\.alertname \\}\\}'
    body: |
      \\{\\{ range \\.Alerts \\}\\}
      Alert: \\{\\{ \\.Annotations\\.summary \\}\\}
      Description: \\{\\{ \\.Annotations\\.description \\}\\}
      \\{\\{ end \\}\\}

  slack_configs:
  - api_url: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK'
    channel: '#alerts'
    title: 'Production Alert'
    text: '\\{\\{ range \\.Alerts \\}\\}\\{\\{ \\.Annotations\\.summary \\}\\}\\{\\{ end \\}\\}'

inhibit_rules:
  - source_match:
      severity: 'critical'
    target_match:
      severity: 'warning'
    equal: ['alertname', 'dev', 'instance']
EOF

# === THE PRODUCTION MASTERY TOOLKIT ===
echo "🏭 Production Mastery Toolkit:"
echo "=============================="
echo "Monitoring: Prometheus + Grafana + AlertManager"
echo "Load Balancing: HAProxy with health checks"
echo "Auto-scaling: CPU/memory-based scaling"
echo "Security: Regular audits and hardening"
echo "Disaster Recovery: Automated backups and documentation"
echo "Performance: Continuous monitoring and optimization"
echo "Alerting: Multi-channel notifications"

# === CONGRATULATIONS! ===
echo "🎓 BUILD AN APP MASTERY COMPLETE!"
echo "=================================="
echo "You now understand:"
echo "✅ Application architecture and planning"
echo "✅ Web server setup and configuration"
echo "✅ Database installation and management"
echo "✅ Application deployment strategies"
echo "✅ Production-grade operations"
echo "✅ Monitoring and observability"
echo "✅ Security hardening and compliance"
echo "✅ Disaster recovery and business continuity"
echo ""
echo "🖥️ You are now an APPLICATION DEPLOYMENT MASTER!"
echo "Build, deploy, and operate applications like a professional! 🚀"
echo ""
echo "Remember: Great applications are built once but operated forever!"
echo "Use your skills to create reliable, scalable, secure systems! 💪"`
      }
    ]
  }
}