export const chapter24 = {
  id: '24',
  icon: '🍱',
  title: 'ENV VARS',
  description: 'Environment variables management',
  slug: 'env-vars',
  content: {
    overview: 'Welcome to ENV VARS - the secret configuration language of the Linux world! 🍱 Environment variables are like your system\'s personal assistant - they carry important information around so your programs can access it whenever needed. From simple PATH configurations to complex application secrets, env vars are the backbone of modern software configuration. We\'re going to transform you from someone who hardcodes everything to a configuration wizard who manages environments like a DevOps professional! 🚀',
    sections: [
      {
        title: '1. Environment Variables Fundamentals - The Configuration Foundation 🏗️',
        content: 'Environment variables are key-value pairs that define the environment in which processes run. They\'re like having a global notepad that all programs can read from. Understanding how to create, modify, and manage environment variables is fundamental to Linux system administration and application deployment.',
        codeExample: `# === ENVIRONMENT VARIABLES FUNDAMENTALS ===
echo "🏗️ Environment Variables Fundamentals - The Configuration Foundation"

# === BASIC ENVIRONMENT VARIABLE OPERATIONS ===
echo "📝 Basic Environment Variable Operations:"

# Display environment variables
echo "# Display environment variables:"
echo "env                              # List all environment variables"
echo "printenv                         # Same as env"
echo "echo \\$HOME                      # Display specific variable"
echo "echo \\$PATH                      # Display PATH variable"
echo "echo \\$USER                      # Display current user"

# Set environment variables
echo "# Set environment variables:"
echo "export MY_VAR='Hello World'      # Set and export variable"
echo "MY_LOCAL_VAR='Local only'        # Set local variable (not exported)"
echo "export PATH=\\$PATH:/new/path     # Add to existing PATH"

# Unset environment variables
echo "# Remove environment variables:"
echo "unset MY_VAR                     # Remove variable"
echo "unset MY_LOCAL_VAR               # Remove local variable"

# === VARIABLE EXPANSION AND MANIPULATION ===
echo "🔧 Variable Expansion and Manipulation:"

# Default values
echo "# Default values:"
echo "echo \\$\\{VAR:-'default value'\\}      # Use default if VAR is unset"
echo "echo \\$\\{VAR:='default value'\\}      # Set and use default if VAR is unset"
echo "echo \\$\\{VAR:+'alternative'\\}        # Use alternative if VAR is set"

# String manipulation
echo "# String manipulation:"
echo "FILE='/path/to/file.txt'"
echo "echo \\$\\{FILE##*/\\}          # Get filename (file.txt)"
echo "echo \\$\\{FILE%/*\\}           # Get directory (/path/to)"
echo "echo \\$\\{FILE%.txt\\}         # Remove extension (/path/to/file)"
echo "echo \\$\\{FILE/file/document\\} # Replace first occurrence"

# Variable length
echo "# Variable length:"
echo "echo \\$\\{#PATH\\}             # Length of PATH variable"

# === COMMON ENVIRONMENT VARIABLES ===
echo "🌍 Common Environment Variables:"

# System variables
echo "# System variables:"
echo "HOME        = User home directory"
echo "PATH        = Executable search path"
echo "USER        = Current username"
echo "SHELL       = Current shell"
echo "PWD         = Present working directory"
echo "OLDPWD      = Previous working directory"
echo "TERM        = Terminal type"
echo "LANG        = System language"
echo "TZ          = Timezone"

# Application variables
echo "# Application variables:"
echo "NODE_ENV    = Node.js environment (development/production)"
echo "JAVA_HOME   = Java installation directory"
echo "PYTHONPATH  = Python module search path"
echo "EDITOR      = Default text editor"
echo "BROWSER     = Default web browser"

# === PRACTICAL EXAMPLES ===
echo "💼 Practical Examples:"

# Setting up development environment
echo "# Development environment setup:"
echo "export NODE_ENV=development"
echo "export DEBUG=true"
echo "export PORT=3000"
echo "export DATABASE_URL=postgresql://localhost:5432/myapp_dev"

# Production environment
echo "# Production environment setup:"
echo "export NODE_ENV=production"
echo "export DEBUG=false"
echo "export PORT=80"
echo "export DATABASE_URL=postgresql://prod-server:5432/myapp"

# === THE ENV VARS FUNDAMENTALS CHEAT SHEET ===
echo "🏗️ Environment Variables Quick Reference:"
echo "export VAR='value'           = Set and export variable"
echo "echo \\$VAR                   = Display variable value"
echo "unset VAR                    = Remove variable"
echo "env                          = List all env variables"
echo "\\$\\{VAR:-default\\}             = Use default if unset"
echo "\\$\\{VAR/old/new\\}              = Replace text in variable"
echo "PATH=\\$PATH:/new/path        = Add to PATH"
echo "VAR='value' command          = Temporary variable"`
      },
      {
        title: '2. Configuration Management - Organizing Your Environment 📋',
        content: 'Configuration management with environment variables is about creating organized, maintainable, and secure systems for managing application settings. It\'s like having a well-organized filing cabinet where every piece of configuration has its proper place and can be easily found and updated.',
        codeExample: `# === CONFIGURATION MANAGEMENT ===
echo "📋 Configuration Management - Organizing Your Environment"

# === .ENV FILES ===
echo "📄 .env Files for Application Configuration:"

# Create a sample .env file
cat << 'EOF'
# .env - Application Configuration
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=myapp
DATABASE_USER=appuser
DATABASE_PASSWORD=secure_password_here

# API Configuration
API_BASE_URL=https://api.example.com
API_KEY=your_api_key_here
API_TIMEOUT=30

# Application Settings
APP_ENV=development
APP_DEBUG=true
APP_PORT=3000
APP_SECRET_KEY=your_secret_key_here

# External Services
REDIS_URL=redis://localhost:6379
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Feature Flags
FEATURE_NEW_UI=true
FEATURE_ANALYTICS=false
FEATURE_BETA_API=true
EOF

# Load .env file in bash
echo "# Load .env file in bash:"
echo "export \\$(grep -v '^#' .env | grep -v '^\\$' | xargs)"

# === ENVIRONMENT-SPECIFIC CONFIGURATIONS ===
echo "🌍 Environment-Specific Configurations:"

# Development environment
echo "# .env.development"
echo "APP_ENV=development"
echo "APP_DEBUG=true"
echo "DATABASE_HOST=localhost"
echo "DATABASE_NAME=myapp_dev"
echo "API_BASE_URL=http://localhost:8080"
echo "LOG_LEVEL=debug"
echo "CACHE_ENABLED=false"

# Production environment
echo "# .env.production"
echo "APP_ENV=production"
echo "APP_DEBUG=false"
echo "DATABASE_HOST=prod-db.internal"
echo "DATABASE_NAME=myapp_production"
echo "API_BASE_URL=https://api.example.com"
echo "LOG_LEVEL=warn"
echo "CACHE_ENABLED=true"
echo "MONITORING_ENABLED=true"

# === CONFIGURATION VALIDATION ===
echo "✅ Configuration Validation:"

# Simple validation script
cat << 'EOF'
#!/bin/bash
# validate-env.sh

REQUIRED_VARS=("DATABASE_HOST" "DATABASE_NAME" "API_KEY")

validate_environment() {
    local errors=0
    
    echo "🔍 Validating environment configuration..."
    
    for var in "\\$\\{REQUIRED_VARS[@]\\}"; do
        if [ -z "\\$\\{!var\\}" ]; then
            echo "❌ Required variable \\$var is not set"
            errors=\\$((errors + 1))
        else
            echo "✅ \\$var is set"
        fi
    done
    
    if [ \\$errors -eq 0 ]; then
        echo "🎉 Environment validation passed!"
        return 0
    else
        echo "💥 Environment validation failed with \\$errors errors"
        return 1
    fi
}

validate_environment
EOF

echo "chmod +x validate-env.sh"

# === THE CONFIGURATION MANAGEMENT CHEAT SHEET ===
echo "📋 Configuration Management Quick Reference:"
echo ".env files                      = Application configuration"
echo ".env.development/.env.production = Environment-specific configs"
echo "export \\$(grep -v '^#' .env | xargs) = Load .env file"
echo "validate required variables     = Ensure all configs present"
echo "chmod 600 .env                  = Secure file permissions"
echo "Add .env to .gitignore         = Never commit secrets"
echo "Use templates                   = Standardize configurations"`
      },
      {
        title: '3. Application Integration - Environment Variables in Action 🚀',
        content: 'Application integration with environment variables is where theory meets practice. This is about making your applications configurable, portable, and production-ready through proper environment variable usage. It\'s like giving your applications the ability to adapt to any environment they\'re deployed in.',
        codeExample: `# === APPLICATION INTEGRATION ===
echo "🚀 Application Integration - Environment Variables in Action"

# === NODE.JS APPLICATION INTEGRATION ===
echo "🟢 Node.js Application Integration:"

# Package.json with environment scripts
echo "# package.json scripts:"
echo '"start": "node app.js"'
echo '"dev": "NODE_ENV=development nodemon app.js"'
echo '"prod": "NODE_ENV=production node app.js"'
echo '"test": "NODE_ENV=test jest"'

# Node.js environment configuration
echo "# Node.js config example:"
echo "const config = \\{"
echo "  env: process.env.NODE_ENV || 'development',"
echo "  port: process.env.PORT || 3000,"
echo "  database: \\{"
echo "    url: process.env.DATABASE_URL"
echo "  \\},"
echo "  api: \\{"
echo "    key: process.env.API_KEY"
echo "  \\}"
echo "\\};"

# === DOCKER INTEGRATION ===
echo "🐳 Docker Integration:"

# Dockerfile with environment variables
echo "# Dockerfile:"
echo "FROM node:18-alpine"
echo "WORKDIR /app"
echo "COPY package*.json ./"
echo "RUN npm ci --only=production"
echo "COPY . ."
echo "EXPOSE \\$PORT"
echo "CMD [\"npm\", \"start\"]"

# Docker Compose with environment variables
echo "# docker-compose.yml:"
echo "services:"
echo "  app:"
echo "    build: ."
echo "    ports:"
echo "      - \"3000:3000\""
echo "    environment:"
echo "      - NODE_ENV=production"
echo "      - DATABASE_URL=postgresql://db:5432/myapp"
echo "    env_file:"
echo "      - .env"

# === SYSTEMD SERVICE INTEGRATION ===
echo "⚙️ Systemd Service Integration:"

# Systemd service with environment file
echo "# /etc/systemd/system/myapp.service:"
echo "[Unit]"
echo "Description=My Application"
echo "After=network.target"
echo ""
echo "[Service]"
echo "Type=simple"
echo "User=myapp"
echo "WorkingDirectory=/opt/myapp"
echo "ExecStart=/usr/bin/node app.js"
echo "Restart=always"
echo "Environment=NODE_ENV=production"
echo "EnvironmentFile=/etc/myapp/environment"
echo ""
echo "[Install]"
echo "WantedBy=multi-user.target"

# === THE APPLICATION INTEGRATION CHEAT SHEET ===
echo "🚀 Application Integration Quick Reference:"
echo "process.env.VAR             = Access env var in Node.js"
echo "os.environ['VAR']           = Access env var in Python"
echo "System.getenv(\"VAR\")        = Access env var in Java"
echo "ENV['VAR']                  = Access env var in Ruby"
echo "env_file: .env              = Docker Compose env file"
echo "EnvironmentFile=            = Systemd environment file"
echo "NODE_ENV=production         = Set environment mode"`
      },
      {
        title: '4. Environment Variables Mastery - Production-Grade Management 🎯',
        content: 'Environment variables mastery represents the pinnacle of configuration management expertise. This involves implementing enterprise-grade secret management, automated configuration deployment, comprehensive monitoring, and security best practices.',
        codeExample: `# === ENVIRONMENT VARIABLES MASTERY ===
echo "🎯 Environment Variables Mastery - Production-Grade Management"

# === SECRET MANAGEMENT ===
echo "🔐 Secret Management Best Practices:"

# Secure environment setup
echo "# Secure environment setup:"
echo "# 1. Use secret management systems (Vault, AWS Secrets Manager)"
echo "# 2. Never commit secrets to version control"
echo "# 3. Use different secrets for each environment"
echo "# 4. Rotate secrets regularly"
echo "# 5. Limit access to production secrets"

# Environment file security
echo "# Secure .env files:"
echo "chmod 600 .env                  # Restrict file permissions"
echo "chown app:app .env               # Set proper ownership"
echo "echo '.env' >> .gitignore        # Never commit to git"

# === CONFIGURATION AUTOMATION ===
echo "🤖 Configuration Automation:"

# Environment deployment script
cat << 'EOF'
#!/bin/bash
# deploy-config.sh

ENVIRONMENT=\\$1
CONFIG_DIR="/etc/myapp"
BACKUP_DIR="/var/backups/config"

deploy_config() {
    local env=\\$1
    
    echo "🚀 Deploying \\$env configuration..."
    
    # Backup existing config
    if [ -f "\\$CONFIG_DIR/environment" ]; then
        cp "\\$CONFIG_DIR/environment" "\\$BACKUP_DIR/environment.\\$(date +%Y%m%d-%H%M%S)"
    fi
    
    # Deploy new config
    cp "configs/\\$env.env" "\\$CONFIG_DIR/environment"
    chmod 600 "\\$CONFIG_DIR/environment"
    chown myapp:myapp "\\$CONFIG_DIR/environment"
    
    # Restart services
    systemctl restart myapp
    
    echo "✅ Configuration deployed successfully"
}

deploy_config "\\$ENVIRONMENT"
EOF

echo "chmod +x deploy-config.sh"

# === MONITORING AND VALIDATION ===
echo "📊 Monitoring and Validation:"

# Health check with environment validation
cat << 'EOF'
#!/bin/bash
# health-check.sh

check_environment() {
    echo "🔍 Checking environment health..."
    
    # Check required variables
    local required_vars=("DATABASE_URL" "API_KEY" "APP_SECRET")
    local missing_vars=()
    
    for var in "\\$\\{required_vars[@]\\}"; do
        if [ -z "\\$\\{!var\\}" ]; then
            missing_vars+=("\\$var")
        fi
    done
    
    if [ \\$\\{#missing_vars[@]\\} -eq 0 ]; then
        echo "✅ All required environment variables are set"
        return 0
    else
        echo "❌ Missing variables: \\$\\{missing_vars[*]\\}"
        return 1
    fi
}

check_environment
EOF

echo "chmod +x health-check.sh"

# === ENTERPRISE PATTERNS ===
echo "🏢 Enterprise Patterns:"

# Multi-environment management
echo "# Multi-environment management:"
echo "environments/"
echo "├── development.env"
echo "├── staging.env"
echo "├── production.env"
echo "└── test.env"

# Configuration hierarchy
echo "# Configuration hierarchy:"
echo "1. Default values in code"
echo "2. Environment-specific .env files"
echo "3. System environment variables"
echo "4. Command-line arguments"
echo "5. Secret management systems"

# === THE MASTERY TOOLKIT ===
echo "🎯 Environment Variables Mastery Toolkit:"
echo "================================="
echo "Secret management: Vault, AWS Secrets Manager"
echo "Configuration automation: Deployment scripts"
echo "Environment validation: Health checks"
echo "Security: File permissions, access control"
echo "Monitoring: Configuration drift detection"
echo "Documentation: Environment templates"

# === CONGRATULATIONS! ===
echo "🎓 ENVIRONMENT VARIABLES MASTERY COMPLETE!"
echo "=========================================="
echo "You now understand:"
echo "✅ Environment variable fundamentals"
echo "✅ Configuration management with .env files"
echo "✅ Application integration patterns"
echo "✅ Secret management best practices"
echo "✅ Production-grade configuration deployment"
echo "✅ Enterprise environment management"
echo ""
echo "🌍 You are now an ENVIRONMENT VARIABLES MASTER!"
echo "Configure applications like a DevOps professional! 💪"
echo ""
echo "Remember: Good configuration is invisible but essential!"
echo "Use your env var mastery to build flexible, secure applications! 🚀"`
      }
    ]
  }
}
