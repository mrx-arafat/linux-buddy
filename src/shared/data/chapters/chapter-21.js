export const chapter21 = {
  id: '21',
  icon: '🍴',
  title: 'CODE TRANSFER',
  description: 'Moving code to your server',
  slug: 'code-transfer',
  content: {
    overview: 'Welcome to CODE TRANSFER - the art of getting your beautiful code from your local machine to production servers! 🍴 Code transfer is like being a digital courier - you need to safely, securely, and efficiently move your precious code from point A to point B without breaking anything. We\'ll explore everything from simple file transfers with SCP to sophisticated CI/CD pipelines that deploy automatically. By the end of this chapter, you\'ll be transferring code like a DevOps ninja! 🚀',
    sections: [
      {
        title: '1. SCP & RSYNC - The File Transfer Champions 📁',
        content: 'SCP (Secure Copy Protocol) and RSYNC are the bread and butter of file transfers in the Linux world. SCP is like a secure postal service for your files, while RSYNC is the smart cousin that only sends what\'s changed.',
        codeExample: `# === SCP & RSYNC MASTERY ===
echo "📁 SCP & RSYNC - The File Transfer Champions"

# === SCP FUNDAMENTALS ===
echo "🔐 SCP (Secure Copy Protocol) Basics:"

# Basic SCP syntax
echo "# Basic SCP file transfer:"
echo "scp source_file user@server:/destination/path"
echo "scp user@server:/remote/file /local/destination"

# Copy single file to remote server
echo "# Copy single file to server:"
echo "scp app.js user@192.168.1.100:/var/www/html/"
echo "scp config.json admin@myserver.com:/etc/myapp/"

# Copy file from remote server
echo "# Copy file from server:"
echo "scp user@server:/var/log/app.log ./logs/"
echo "scp admin@192.168.1.100:/backup/database.sql ./"

# Copy entire directory
echo "# Copy entire directory:"
echo "scp -r ./my-project user@server:/var/www/"
echo "scp -r user@server:/var/www/app ./downloaded-app"

# === ADVANCED SCP OPTIONS ===
echo "🚀 Advanced SCP Options:"

# Preserve file permissions and timestamps
echo "# Preserve permissions and timestamps:"
echo "scp -p config.conf user@server:/etc/"
echo "scp -rp ./website user@server:/var/www/"

# Use specific SSH key
echo "# Use specific SSH key:"
echo "scp -i ~/.ssh/deploy_key app.js user@server:/var/www/"
echo "scp -i /path/to/key -r ./project user@server:/opt/"

# Specify custom SSH port
echo "# Use custom SSH port:"
echo "scp -P 2222 app.js user@server:/var/www/"
echo "scp -P 8022 -r ./project user@server:/opt/"

# Verbose output for debugging
echo "# Verbose output:"
echo "scp -v app.js user@server:/var/www/"
echo "scp -rv ./project user@server:/opt/"

# Compress data during transfer
echo "# Compress data during transfer:"
echo "scp -C large-file.zip user@server:/tmp/"
echo "scp -Cr ./big-project user@server:/var/www/"

# === RSYNC FUNDAMENTALS ===
echo "⚡ RSYNC - The Intelligent Synchronizer:"

# Basic rsync syntax
echo "# Basic rsync commands:"
echo "rsync source destination"
echo "rsync -av source/ user@server:/destination/"

# Sync local directory to remote
echo "# Sync local to remote:"
echo "rsync -av ./website/ user@server:/var/www/html/"
echo "rsync -av --delete ./app/ user@server:/opt/myapp/"

# Sync remote directory to local
echo "# Sync remote to local:"
echo "rsync -av user@server:/var/www/html/ ./backup/"
echo "rsync -av user@server:/home/user/documents/ ./docs/"

# === RSYNC POWER OPTIONS ===
echo "💪 RSYNC Power Options:"

# Archive mode (preserves everything)
echo "# Archive mode (-a = -rlptgoD):"
echo "rsync -av source/ destination/"
echo "rsync -av ./project/ user@server:/var/www/"

# Delete files that don't exist in source
echo "# Delete extraneous files:"
echo "rsync -av --delete ./website/ user@server:/var/www/"
echo "rsync -av --delete-after ./app/ user@server:/opt/"

# Exclude specific files/patterns
echo "# Exclude files and patterns:"
echo "rsync -av --exclude='*.log' ./app/ user@server:/opt/"
echo "rsync -av --exclude='node_modules' --exclude='.git' ./project/ user@server:/var/www/"

# Dry run (test without actually transferring)
echo "# Dry run (test mode):"
echo "rsync -av --dry-run ./website/ user@server:/var/www/"
echo "rsync -av --dry-run --delete ./app/ user@server:/opt/"

# Show progress during transfer
echo "# Show progress:"
echo "rsync -av --progress ./large-project/ user@server:/var/www/"
echo "rsync -av --progress --stats ./backup/ user@server:/backups/"

# === SCP VS RSYNC COMPARISON ===
echo "⚖️ SCP vs RSYNC - When to Use What:"
echo ""
echo "Use SCP when:"
echo "✅ Transferring single files or small directories"
echo "✅ One-time transfers"
echo "✅ Simple, straightforward copying"
echo "✅ Working with different SSH configurations"
echo ""
echo "Use RSYNC when:"
echo "✅ Synchronizing large directories"
echo "✅ Regular backups or deployments"
echo "✅ Need to exclude/include specific files"
echo "✅ Want to transfer only changed files"
echo "✅ Need progress monitoring"

# === THE TRANSFER CHEAT SHEET ===
echo "📋 File Transfer Quick Reference:"
echo "scp file user@server:/path     = Copy single file"
echo "scp -r dir user@server:/path   = Copy directory"
echo "scp -i key file user@server:/  = Use SSH key"
echo "rsync -av src/ dest/           = Archive sync"
echo "rsync -av --delete src/ dest/  = Sync and delete"
echo "rsync -av --exclude='*.log'    = Exclude patterns"
echo "rsync -av --dry-run            = Test mode"
echo "rsync -av --progress           = Show progress"`
      },
      {
        title: '2. Git-Based Deployment - The Modern Way 🌟',
        content: 'Git-based deployment is the modern, professional way to transfer code. Instead of manually copying files, you use Git repositories as your deployment mechanism. It\'s like having a time machine for your code - you can deploy any version, rollback instantly, and track every change.',
        codeExample: `# === GIT-BASED DEPLOYMENT ===
echo "🌟 Git-Based Deployment - The Modern Way"

# === BASIC GIT DEPLOYMENT SETUP ===
echo "🔧 Basic Git Deployment Setup:"

# Initialize bare repository on server
echo "# On the server - create bare repository:"
echo "mkdir -p /var/repos/myapp.git"
echo "cd /var/repos/myapp.git"
echo "git init --bare"

# Set up post-receive hook for automatic deployment
echo "# Create post-receive hook:"
echo "#!/bin/bash"
echo "# /var/repos/myapp.git/hooks/post-receive"
echo ""
echo "DEPLOY_DIR=\"/var/www/html\""
echo "REPO_DIR=\"/var/repos/myapp.git\""
echo "BRANCH=\"main\""
echo ""
echo "echo \"Deploying to production...\""
echo ""
echo "# Check out the latest code"
echo "git --git-dir=\\$REPO_DIR --work-tree=\\$DEPLOY_DIR checkout -f \\$BRANCH"
echo ""
echo "# Run deployment commands"
echo "cd \\$DEPLOY_DIR"
echo ""
echo "# Install dependencies (if package.json exists)"
echo "if [ -f \"package.json\" ]; then"
echo "    echo \"Installing Node.js dependencies...\""
echo "    npm install --production"
echo "fi"
echo ""
echo "# Restart services"
echo "echo \"Restarting application services...\""
echo "sudo systemctl restart nginx"
echo "sudo systemctl restart myapp"
echo ""
echo "echo \"Deployment completed successfully!\""

echo "chmod +x /var/repos/myapp.git/hooks/post-receive"

# === LOCAL REPOSITORY SETUP ===
echo "💻 Local Repository Setup:"

# Add server as remote
echo "# Add server as deployment remote:"
echo "git remote add production user@server:/var/repos/myapp.git"
echo "git remote add staging user@staging-server:/var/repos/myapp.git"

# Deploy to production
echo "# Deploy to production:"
echo "git push production main"

# Deploy specific branch
echo "# Deploy specific branch:"
echo "git push production feature-branch:main"

# === ROLLBACK STRATEGIES ===
echo "🔄 Rollback Strategies:"

# Tag releases for easy rollback
echo "# Tag releases:"
echo "git tag -a v1.0.0 -m 'Release version 1.0.0'"
echo "git push production v1.0.0"

# Rollback to previous version
echo "# Rollback to previous version:"
echo "git push production v1.0.0:main"

# === THE GIT DEPLOYMENT CHEAT SHEET ===
echo "🌟 Git Deployment Quick Reference:"
echo "git init --bare                = Create bare repo"
echo "git remote add prod server:/repo = Add remote"
echo "git push production main       = Deploy to prod"
echo "git tag v1.0.0                = Tag release"
echo "git push prod v1.0.0:main     = Deploy tag"
echo "Post-receive hooks             = Auto deployment"
echo "git log --oneline              = View commits"`
      },
      {
        title: '3. CI/CD Pipelines - Automated Deployment Magic 🔄',
        content: 'CI/CD (Continuous Integration/Continuous Deployment) pipelines are like having a robot assistant that automatically tests, builds, and deploys your code every time you make changes. Modern development teams rely on CI/CD to deploy code safely and frequently.',
        codeExample: `# === CI/CD PIPELINES ===
echo "🔄 CI/CD Pipelines - Automated Deployment Magic"

# === GITHUB ACTIONS CI/CD ===
echo "🐙 GitHub Actions CI/CD Pipeline:"

# Complete GitHub Actions workflow
echo "# .github/workflows/ci-cd.yml"
echo "name: CI/CD Pipeline"
echo ""
echo "on:"
echo "  push:"
echo "    branches: [ main, develop ]"
echo "  pull_request:"
echo "    branches: [ main ]"
echo ""
echo "env:"
echo "  NODE_VERSION: '18'"
echo "  DEPLOY_PATH: '/var/www/html'"
echo ""
echo "jobs:"
echo "  test:"
echo "    runs-on: ubuntu-latest"
echo "    steps:"
echo "    - name: Checkout code"
echo "      uses: actions/checkout@v3"
echo "    - name: Setup Node.js"
echo "      uses: actions/setup-node@v3"
echo "      with:"
echo "        node-version: 18"
echo "        cache: 'npm'"
echo "    - name: Install dependencies"
echo "      run: npm ci"
echo "    - name: Run tests"
echo "      run: npm test"
echo ""
echo "  deploy:"
echo "    needs: test"
echo "    runs-on: ubuntu-latest"
echo "    if: github.ref == 'refs/heads/main'"
echo "    steps:"
echo "    - name: Deploy to server"
echo "      run: echo 'Deploying to production...'"

# === GITLAB CI/CD ===
echo "🦊 GitLab CI/CD Pipeline:"

echo "# .gitlab-ci.yml"
echo "stages:"
echo "  - test"
echo "  - deploy"
echo ""
echo "test:"
echo "  stage: test"
echo "  image: node:18"
echo "  script:"
echo "    - npm ci"
echo "    - npm test"
echo ""
echo "deploy:"
echo "  stage: deploy"
echo "  script:"
echo "    - echo 'Deploying to production...'"
echo "  only:"
echo "    - main"

# === CI/CD BEST PRACTICES ===
echo "✨ CI/CD Best Practices:"
echo ""
echo "🔒 Security:"
echo "• Use secrets management for sensitive data"
echo "• Scan for vulnerabilities in dependencies"
echo "• Use least-privilege access for deployment"
echo ""
echo "🧪 Testing:"
echo "• Run tests before deployment"
echo "• Include integration and e2e tests"
echo "• Use feature flags for gradual rollouts"
echo ""
echo "📊 Monitoring:"
echo "• Health checks after deployment"
echo "• Automated rollback on failure"
echo "• Deployment notifications"

# === THE CI/CD CHEAT SHEET ===
echo "🔄 CI/CD Quick Reference:"
echo "GitHub Actions: .github/workflows/    = Workflow files"
echo "GitLab CI: .gitlab-ci.yml            = Pipeline config"
echo "stages: test → build → deploy        = Pipeline stages"
echo "artifacts: build outputs             = Share between jobs"
echo "environments: staging → production   = Deployment targets"
echo "secrets: encrypted variables         = Secure credentials"`
      },
      {
        title: '4. Code Transfer Mastery - Professional Deployment 🎯',
        content: 'Code transfer mastery combines all the techniques we\'ve learned into professional-grade deployment strategies. This is where you become a deployment wizard, capable of handling complex multi-server architectures, zero-downtime deployments, and enterprise-scale operations.',
        codeExample: `# === CODE TRANSFER MASTERY ===
echo "🎯 Code Transfer Mastery - Professional Deployment"

# === ZERO-DOWNTIME DEPLOYMENT ===
echo "🔄 Zero-Downtime Deployment Strategies:"

# Blue-Green deployment concept
echo "# Blue-Green Deployment:"
echo "1. Deploy to inactive environment (Green)"
echo "2. Test the new deployment"
echo "3. Switch traffic from Blue to Green"
echo "4. Keep Blue as backup for quick rollback"

# Rolling deployment concept
echo "# Rolling Deployment:"
echo "1. Deploy to one server at a time"
echo "2. Remove server from load balancer"
echo "3. Deploy new code"
echo "4. Add server back to load balancer"
echo "5. Repeat for all servers"

# === DEPLOYMENT MONITORING ===
echo "📊 Deployment Monitoring:"

# Health check script
echo "# Health check script:"
echo "#!/bin/bash"
echo "# health-check.sh"
echo ""
echo "SERVERS=(\"web1.com\" \"web2.com\" \"api1.com\")"
echo "HEALTH_ENDPOINT=\"/health\""
echo ""
echo "check_server_health() {"
echo "    local server=\\$1"
echo "    local response=\\$(curl -s -o /dev/null -w \"%{http_code}\" \"http://\\$server\\$HEALTH_ENDPOINT\")"
echo ""
echo "    if [ \"\\$response\" = \"200\" ]; then"
echo "        echo \"✅ \\$server is healthy\""
echo "        return 0"
echo "    else"
echo "        echo \"❌ \\$server is unhealthy (HTTP \\$response)\""
echo "        return 1"
echo "    fi"
echo "}"
echo ""
echo "for server in \"\\$\\{SERVERS[@]\\}\"; do"
echo "    check_server_health \"\\$server\""
echo "done"

# === DEPLOYMENT AUTOMATION ===
echo "🤖 Deployment Automation:"

# Automated deployment script
echo "# Automated deployment script:"
echo "#!/bin/bash"
echo "# deploy.sh"
echo ""
echo "ENVIRONMENT=\\$1"
echo "VERSION=\\$2"
echo ""
echo "deploy_application() {"
echo "    local env=\\$1"
echo "    local version=\\$2"
echo ""
echo "    echo \"🚀 Deploying version \\$version to \\$env...\""
echo ""
echo "    # Run tests"
echo "    npm test || exit 1"
echo ""
echo "    # Build application"
echo "    npm run build || exit 1"
echo ""
echo "    # Deploy to servers"
echo "    rsync -av --delete ./dist/ user@\\$env-server:/var/www/html/"
echo ""
echo "    # Restart services"
echo "    ssh user@\\$env-server \"sudo systemctl restart myapp\""
echo ""
echo "    # Health check"
echo "    sleep 10"
echo "    if curl -f http://\\$env-server/health; then"
echo "        echo \"✅ Deployment successful!\""
echo "    else"
echo "        echo \"❌ Deployment failed!\""
echo "        exit 1"
echo "    fi"
echo "}"
echo ""
echo "deploy_application \"\\$ENVIRONMENT\" \"\\$VERSION\""

# === THE MASTERY TOOLKIT ===
echo "🎯 Code Transfer Mastery Toolkit:"
echo "================================="
echo "SCP/RSYNC: File transfer fundamentals"
echo "Git deployment: Version-controlled releases"
echo "CI/CD pipelines: Automated testing and deployment"
echo "Zero-downtime: Blue-green and rolling deployments"
echo "Monitoring: Health checks and alerting"
echo "Automation: Scripted deployment processes"

# === CONGRATULATIONS! ===
echo "🎓 CODE TRANSFER MASTERY COMPLETE!"
echo "=================================="
echo "You now understand:"
echo "✅ SCP and RSYNC for efficient file transfers"
echo "✅ Git-based deployment strategies"
echo "✅ CI/CD pipeline automation"
echo "✅ Zero-downtime deployment techniques"
echo "✅ Professional monitoring and rollback"
echo "✅ Enterprise-grade deployment practices"
echo ""
echo "🚀 You are now a DEPLOYMENT MASTER!"
echo "Deploy code like a DevOps professional! 💪"
echo ""
echo "Remember: Great deployments are invisible to users!"
echo "Use your transfer mastery to deliver seamless updates! 🌟"`
      }
    ]
  }
}
