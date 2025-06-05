export const chapter22 = {
  id: '22',
  icon: '🐳',
  title: 'DOCKER',
  description: 'Containerization with Docker',
  slug: 'docker',
  content: {
    overview: 'Welcome to DOCKER - the containerization revolution that changed how we deploy software! 🐳 If you\'ve ever struggled with "it works on my machine" problems, Docker is your salvation. Docker packages your application and all its dependencies into lightweight, portable containers that run consistently everywhere. It\'s like having a magical shipping container for your code that works the same whether it\'s on your laptop, a server, or in the cloud. We\'re going to transform you from someone who manually installs software to a containerization wizard who can deploy applications anywhere with a single command! 🚀',
    sections: [
      {
        title: '1. Docker Fundamentals - Containerization Basics 📦',
        content: 'Docker fundamentals are the foundation of modern application deployment. Containers are like lightweight virtual machines that package your application with everything it needs to run. Understanding Docker concepts like images, containers, and registries is essential for modern software development.',
        codeExample: `# === DOCKER FUNDAMENTALS ===
echo "📦 Docker Fundamentals - Containerization Basics"

# === DOCKER INSTALLATION ===
echo "🔧 Docker Installation:"

# Install Docker on Ubuntu
echo "# Install Docker (Ubuntu):"
echo "sudo apt update"
echo "sudo apt install apt-transport-https ca-certificates curl software-properties-common"
echo "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"
echo "sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable\""
echo "sudo apt update && sudo apt install docker-ce"

# Add user to docker group
echo "# Add user to docker group:"
echo "sudo usermod -aG docker \\$USER"
echo "newgrp docker"

# Verify installation
echo "# Verify Docker installation:"
echo "docker --version"
echo "docker run hello-world"

# === DOCKER BASIC COMMANDS ===
echo "🐳 Docker Basic Commands:"

# Container management
echo "# Container management:"
echo "docker run ubuntu:20.04         = Run container"
echo "docker run -it ubuntu bash      = Interactive container"
echo "docker run -d nginx             = Run in background"
echo "docker ps                       = List running containers"
echo "docker ps -a                    = List all containers"
echo "docker stop container_id        = Stop container"
echo "docker start container_id       = Start container"
echo "docker restart container_id     = Restart container"
echo "docker rm container_id          = Remove container"

# Image management
echo "# Image management:"
echo "docker images                   = List images"
echo "docker pull ubuntu:20.04        = Download image"
echo "docker rmi image_id             = Remove image"
echo "docker build -t myapp .         = Build image"
echo "docker tag myapp:latest myapp:v1 = Tag image"

# === DOCKER CONCEPTS ===
echo "💡 Docker Core Concepts:"

echo "📋 Key Terms:"
echo "Image     = Blueprint for containers (like a class)"
echo "Container = Running instance of an image (like an object)"
echo "Registry  = Storage for images (Docker Hub, etc.)"
echo "Dockerfile = Instructions to build an image"
echo "Volume    = Persistent data storage"
echo "Network   = Communication between containers"

# === WORKING WITH CONTAINERS ===
echo "🏃 Working with Containers:"

# Run containers with different options
echo "# Container options:"
echo "docker run -d --name webserver nginx"
echo "docker run -p 8080:80 nginx     = Port mapping"
echo "docker run -v /host:/container nginx = Volume mount"
echo "docker run -e ENV_VAR=value nginx = Environment variable"
echo "docker run --rm nginx           = Auto-remove after exit"

# Execute commands in running containers
echo "# Execute commands in containers:"
echo "docker exec -it container_name bash"
echo "docker exec container_name ls -la"
echo "docker logs container_name"
echo "docker inspect container_name"

# === DOCKER IMAGES ===
echo "🖼️ Working with Docker Images:"

# Search and pull images
echo "# Search and pull images:"
echo "docker search nginx"
echo "docker pull nginx:alpine"
echo "docker pull ubuntu:20.04"
echo "docker pull node:18"

# Image information
echo "# Image information:"
echo "docker images"
echo "docker history image_name"
echo "docker inspect image_name"

# === THE DOCKER FUNDAMENTALS CHEAT SHEET ===
echo "📦 Docker Fundamentals Quick Reference:"
echo "docker run image                = Create and start container"
echo "docker ps                       = List running containers"
echo "docker stop/start/restart       = Container lifecycle"
echo "docker images                   = List images"
echo "docker pull/push                = Download/upload images"
echo "docker exec -it container bash  = Access container shell"
echo "docker logs container           = View container logs"
echo "docker rm/rmi                   = Remove containers/images"`
      },
      {
        title: '2. Dockerfile & Image Building - Creating Custom Images 🏗️',
        content: 'Dockerfiles are the blueprints for creating custom Docker images. They contain step-by-step instructions for building your application environment. Mastering Dockerfile creation is essential for packaging your applications efficiently and securely.',
        codeExample: `# === DOCKERFILE & IMAGE BUILDING ===
echo "🏗️ Dockerfile & Image Building - Creating Custom Images"

# === BASIC DOCKERFILE ===
echo "📝 Basic Dockerfile Structure:"

# Simple Node.js application Dockerfile
echo "# Dockerfile for Node.js app"
echo "FROM node:18-alpine"
echo ""
echo "# Set working directory"
echo "WORKDIR /app"
echo ""
echo "# Copy package files"
echo "COPY package*.json ./"
echo ""
echo "# Install dependencies"
echo "RUN npm ci --only=production"
echo ""
echo "# Copy application code"
echo "COPY . ."
echo ""
echo "# Expose port"
echo "EXPOSE 3000"
echo ""
echo "# Define startup command"
echo "CMD [\"npm\", \"start\"]"

# === DOCKERFILE INSTRUCTIONS ===
echo "📋 Dockerfile Instructions:"

echo "# Common Dockerfile instructions:"
echo "FROM ubuntu:20.04              = Base image"
echo "WORKDIR /app                   = Set working directory"
echo "COPY src/ /app/                = Copy files"
echo "ADD archive.tar.gz /app/       = Copy and extract"
echo "RUN apt-get update             = Execute commands"
echo "ENV NODE_ENV=production        = Set environment variable"
echo "EXPOSE 8080                    = Document port"
echo "VOLUME [\"/data\"]               = Create volume mount point"
echo "USER appuser                   = Set user"
echo "CMD [\"node\", \"app.js\"]        = Default command"
echo "ENTRYPOINT [\"./entrypoint.sh\"] = Entry point script"

# === MULTI-STAGE BUILDS ===
echo "🏭 Multi-Stage Builds:"

# Multi-stage Dockerfile example
echo "# Multi-stage Dockerfile"
echo "# Build stage"
echo "FROM node:18 AS builder"
echo "WORKDIR /app"
echo "COPY package*.json ./"
echo "RUN npm ci"
echo "COPY . ."
echo "RUN npm run build"
echo ""
echo "# Production stage"
echo "FROM node:18-alpine AS production"
echo "WORKDIR /app"
echo "COPY package*.json ./"
echo "RUN npm ci --only=production"
echo "COPY --from=builder /app/dist ./dist"
echo "EXPOSE 3000"
echo "CMD [\"npm\", \"start\"]"

# === BUILDING IMAGES ===
echo "🔨 Building Docker Images:"

# Build commands
echo "# Build image:"
echo "docker build -t myapp:latest ."
echo "docker build -t myapp:v1.0 ."
echo "docker build -f Dockerfile.prod -t myapp:prod ."

# Build with build arguments
echo "# Build with arguments:"
echo "docker build --build-arg NODE_ENV=production -t myapp ."
echo "docker build --no-cache -t myapp ."

# === DOCKERFILE BEST PRACTICES ===
echo "✨ Dockerfile Best Practices:"

echo "🎯 Optimization tips:"
echo "1. Use specific base image tags (not 'latest')"
echo "2. Minimize layers by combining RUN commands"
echo "3. Use .dockerignore to exclude unnecessary files"
echo "4. Copy package files before source code"
echo "5. Use multi-stage builds for smaller images"
echo "6. Run as non-root user for security"
echo "7. Use COPY instead of ADD when possible"

# Optimized Dockerfile example
echo "# Optimized Dockerfile"
echo "FROM node:18-alpine"
echo ""
echo "# Create app user"
echo "RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001"
echo ""
echo "WORKDIR /app"
echo ""
echo "# Copy package files and install dependencies"
echo "COPY package*.json ./"
echo "RUN npm ci --only=production && npm cache clean --force"
echo ""
echo "# Copy source code"
echo "COPY --chown=nextjs:nodejs . ."
echo ""
echo "# Switch to non-root user"
echo "USER nextjs"
echo ""
echo "EXPOSE 3000"
echo "CMD [\"npm\", \"start\"]"

# === DOCKERIGNORE ===
echo "🚫 .dockerignore File:"

echo "# .dockerignore"
echo "node_modules"
echo "npm-debug.log"
echo ".git"
echo ".gitignore"
echo "README.md"
echo ".env"
echo "coverage"
echo ".nyc_output"
echo "*.log"

# === THE DOCKERFILE CHEAT SHEET ===
echo "🏗️ Dockerfile Quick Reference:"
echo "FROM image:tag                 = Base image"
echo "WORKDIR /path                  = Working directory"
echo "COPY src dest                  = Copy files"
echo "RUN command                    = Execute command"
echo "ENV VAR=value                  = Environment variable"
echo "EXPOSE port                    = Document port"
echo "CMD [\"command\"]                = Default command"
echo "docker build -t name .         = Build image"`
      },
      {
        title: '3. Docker Compose - Multi-Container Applications 🎼',
        content: 'Docker Compose is the orchestration tool for multi-container applications. Instead of managing individual containers, you define your entire application stack in a single YAML file. It\'s like having a conductor for your container orchestra.',
        codeExample: `# === DOCKER COMPOSE ===
echo "🎼 Docker Compose - Multi-Container Applications"

# === DOCKER COMPOSE INSTALLATION ===
echo "📦 Docker Compose Installation:"

# Install Docker Compose
echo "# Install Docker Compose:"
echo "sudo curl -L \"https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-\\$(uname -s)-\\$(uname -m)\" -o /usr/local/bin/docker-compose"
echo "sudo chmod +x /usr/local/bin/docker-compose"
echo "docker-compose --version"

# === BASIC DOCKER COMPOSE ===
echo "📝 Basic Docker Compose File:"

# Simple web application with database
echo "# docker-compose.yml"
echo "version: '3.8'"
echo ""
echo "services:"
echo "  web:"
echo "    build: ."
echo "    ports:"
echo "      - \"3000:3000\""
echo "    environment:"
echo "      - NODE_ENV=development"
echo "      - DATABASE_URL=postgresql://user:password@db:5432/myapp"
echo "    depends_on:"
echo "      - db"
echo "    volumes:"
echo "      - .:/app"
echo "      - /app/node_modules"
echo ""
echo "  db:"
echo "    image: postgres:13"
echo "    environment:"
echo "      - POSTGRES_DB=myapp"
echo "      - POSTGRES_USER=user"
echo "      - POSTGRES_PASSWORD=password"
echo "    volumes:"
echo "      - postgres_data:/var/lib/postgresql/data"
echo "    ports:"
echo "      - \"5432:5432\""
echo ""
echo "volumes:"
echo "  postgres_data:"

# === DOCKER COMPOSE COMMANDS ===
echo "🎮 Docker Compose Commands:"

# Basic commands
echo "# Basic Compose commands:"
echo "docker-compose up               = Start all services"
echo "docker-compose up -d            = Start in background"
echo "docker-compose down             = Stop and remove containers"
echo "docker-compose stop             = Stop services"
echo "docker-compose start            = Start stopped services"
echo "docker-compose restart          = Restart services"

# Service management
echo "# Service management:"
echo "docker-compose up web           = Start specific service"
echo "docker-compose logs web         = View service logs"
echo "docker-compose exec web bash    = Execute command in service"
echo "docker-compose ps               = List running services"
echo "docker-compose build            = Build/rebuild services"

# === ADVANCED COMPOSE FEATURES ===
echo "🚀 Advanced Compose Features:"

# Complete application stack
echo "# Advanced docker-compose.yml"
echo "version: '3.8'"
echo ""
echo "services:"
echo "  nginx:"
echo "    image: nginx:alpine"
echo "    ports:"
echo "      - \"80:80\""
echo "      - \"443:443\""
echo "    volumes:"
echo "      - ./nginx.conf:/etc/nginx/nginx.conf"
echo "      - ./ssl:/etc/nginx/ssl"
echo "    depends_on:"
echo "      - web"
echo "    networks:"
echo "      - frontend"
echo ""
echo "  web:"
echo "    build:"
echo "      context: ."
echo "      dockerfile: Dockerfile.prod"
echo "    environment:"
echo "      - NODE_ENV=production"
echo "    volumes:"
echo "      - ./uploads:/app/uploads"
echo "    networks:"
echo "      - frontend"
echo "      - backend"
echo "    deploy:"
echo "      replicas: 3"
echo "      resources:"
echo "        limits:"
echo "          memory: 512M"
echo "        reservations:"
echo "          memory: 256M"
echo ""
echo "  db:"
echo "    image: postgres:13"
echo "    environment:"
echo "      - POSTGRES_DB=myapp"
echo "      - POSTGRES_USER=user"
echo "      - POSTGRES_PASSWORD_FILE=/run/secrets/db_password"
echo "    volumes:"
echo "      - postgres_data:/var/lib/postgresql/data"
echo "    networks:"
echo "      - backend"
echo "    secrets:"
echo "      - db_password"
echo ""
echo "  redis:"
echo "    image: redis:alpine"
echo "    networks:"
echo "      - backend"
echo ""
echo "volumes:"
echo "  postgres_data:"
echo ""
echo "networks:"
echo "  frontend:"
echo "  backend:"
echo ""
echo "secrets:"
echo "  db_password:"
echo "    file: ./secrets/db_password.txt"

# === ENVIRONMENT FILES ===
echo "🌍 Environment Files:"

# .env file for Compose
echo "# .env file for Docker Compose"
echo "POSTGRES_DB=myapp"
echo "POSTGRES_USER=user"
echo "POSTGRES_PASSWORD=secretpassword"
echo "NODE_ENV=development"
echo "APP_PORT=3000"

# Using environment files
echo "# Using environment files in compose:"
echo "services:"
echo "  web:"
echo "    env_file:"
echo "      - .env"
echo "      - .env.local"

# === THE DOCKER COMPOSE CHEAT SHEET ===
echo "🎼 Docker Compose Quick Reference:"
echo "docker-compose up -d            = Start services in background"
echo "docker-compose down             = Stop and remove containers"
echo "docker-compose logs -f          = Follow logs"
echo "docker-compose exec service cmd = Execute command"
echo "docker-compose build            = Build services"
echo "docker-compose ps               = List services"
echo "docker-compose pull             = Pull latest images"`
      },
      {
        title: '4. Docker Mastery - Production & Orchestration 🎯',
        content: 'Docker mastery involves understanding production deployment, security best practices, and container orchestration. This is where you become a containerization expert capable of managing complex, scalable applications in production environments.',
        codeExample: `# === DOCKER MASTERY ===
echo "🎯 Docker Mastery - Production & Orchestration"

# === PRODUCTION BEST PRACTICES ===
echo "🏭 Production Best Practices:"

echo "🔒 Security best practices:"
echo "1. Use official base images"
echo "2. Keep images updated"
echo "3. Run as non-root user"
echo "4. Use secrets management"
echo "5. Scan images for vulnerabilities"
echo "6. Limit container resources"
echo "7. Use read-only filesystems when possible"

# Secure Dockerfile example
echo "# Secure production Dockerfile"
echo "FROM node:18-alpine AS base"
echo ""
echo "# Create non-root user"
echo "RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001"
echo ""
echo "# Build stage"
echo "FROM base AS builder"
echo "WORKDIR /app"
echo "COPY package*.json ./"
echo "RUN npm ci"
echo "COPY . ."
echo "RUN npm run build"
echo ""
echo "# Production stage"
echo "FROM base AS production"
echo "WORKDIR /app"
echo ""
echo "# Copy built application"
echo "COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist"
echo "COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./"
echo ""
echo "# Install production dependencies"
echo "RUN npm ci --only=production && npm cache clean --force"
echo ""
echo "# Security: Remove package manager"
echo "RUN rm -rf /usr/local/lib/node_modules/npm"
echo ""
echo "# Switch to non-root user"
echo "USER nextjs"
echo ""
echo "# Health check"
echo "HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\"
echo "  CMD curl -f http://localhost:3000/health || exit 1"
echo ""
echo "EXPOSE 3000"
echo "CMD [\"node\", \"dist/index.js\"]"

# === CONTAINER MONITORING ===
echo "📊 Container Monitoring:"

# Docker stats and monitoring
echo "# Monitor containers:"
echo "docker stats                    = Real-time resource usage"
echo "docker logs -f container        = Follow logs"
echo "docker inspect container        = Detailed info"
echo "docker system df                = Disk usage"
echo "docker system prune             = Clean up unused resources"

# Health checks
echo "# Health checks in Dockerfile:"
echo "HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\"
echo "  CMD curl -f http://localhost/health || exit 1"

# === DOCKER SWARM ===
echo "🐝 Docker Swarm (Basic Orchestration):"

# Initialize swarm
echo "# Initialize Docker Swarm:"
echo "docker swarm init"
echo "docker node ls"

# Deploy stack
echo "# Deploy stack:"
echo "docker stack deploy -c docker-compose.yml myapp"
echo "docker service ls"
echo "docker service ps myapp_web"

# Scale services
echo "# Scale services:"
echo "docker service scale myapp_web=3"
echo "docker service update --image myapp:v2 myapp_web"

# === CONTAINER REGISTRY ===
echo "📦 Container Registry:"

# Docker Hub
echo "# Docker Hub operations:"
echo "docker login"
echo "docker tag myapp:latest username/myapp:latest"
echo "docker push username/myapp:latest"
echo "docker pull username/myapp:latest"

# Private registry
echo "# Private registry:"
echo "docker run -d -p 5000:5000 --name registry registry:2"
echo "docker tag myapp localhost:5000/myapp"
echo "docker push localhost:5000/myapp"

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ Performance Optimization:"

echo "🚀 Optimization techniques:"
echo "1. Use multi-stage builds"
echo "2. Minimize image layers"
echo "3. Use .dockerignore effectively"
echo "4. Choose appropriate base images"
echo "5. Cache dependencies properly"
echo "6. Use build cache"
echo "7. Optimize for container startup time"

# Build cache optimization
echo "# Optimize build cache:"
echo "docker build --cache-from myapp:latest -t myapp:new ."
echo "docker buildx build --cache-from type=registry,ref=myapp:cache ."

# === TROUBLESHOOTING ===
echo "🔧 Docker Troubleshooting:"

echo "# Common troubleshooting commands:"
echo "docker logs container_name      = Check container logs"
echo "docker exec -it container bash  = Debug inside container"
echo "docker inspect container        = Detailed container info"
echo "docker system events            = Real-time events"
echo "docker system df                = Disk usage"
echo "docker system prune -a          = Clean everything"

# === THE MASTERY TOOLKIT ===
echo "🎯 Docker Mastery Toolkit:"
echo "========================="
echo "Security: Non-root users, image scanning, secrets"
echo "Monitoring: Health checks, logging, metrics"
echo "Orchestration: Docker Swarm, service scaling"
echo "Registry: Image distribution, versioning"
echo "Performance: Multi-stage builds, caching"
echo "Troubleshooting: Debugging, system cleanup"

# === CONGRATULATIONS! ===
echo "🎓 DOCKER MASTERY COMPLETE!"
echo "=========================="
echo "You now understand:"
echo "✅ Docker fundamentals and container concepts"
echo "✅ Dockerfile creation and image building"
echo "✅ Docker Compose for multi-container apps"
echo "✅ Production deployment best practices"
echo "✅ Container security and monitoring"
echo "✅ Basic orchestration with Docker Swarm"
echo "✅ Performance optimization techniques"
echo ""
echo "🐳 You are now a DOCKER MASTER!"
echo "Containerize applications like a DevOps professional! 💪"
echo ""
echo "Remember: Containers should be ephemeral and stateless!"
echo "Use your Docker mastery to build scalable, portable applications! 🚀"`
      }
    ]
  }
}
