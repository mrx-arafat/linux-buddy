export const chapter30 = {
  id: '30',
  icon: '🐳',
  title: 'DOCKER 101',
  description: 'Introduction to Docker containers',
  slug: 'docker-101',
  content: {
    overview: 'Welcome to DOCKER 101 - your gateway to the containerization revolution! 🐳 If you\'ve ever struggled with "it works on my machine" problems, Docker is your salvation. Docker is like having magical shipping containers for your applications - they work the same whether they\'re on your laptop, a server, or in the cloud. We\'re going to take you from Docker zero to Docker hero, teaching you everything you need to know to start containerizing applications like a DevOps professional. Get ready to solve deployment headaches forever! 🚀',
    sections: [
      {
        title: '1. Docker Fundamentals - What is Docker? 📦',
        content: 'Docker fundamentals are the foundation of modern application deployment. Understanding what Docker is, why it exists, and how it solves real-world problems is essential before diving into commands and configurations. Docker isn\'t just a tool - it\'s a paradigm shift in how we think about application deployment.',
        codeExample: `# === DOCKER FUNDAMENTALS ===
echo "📦 Docker Fundamentals - What is Docker?"

# === WHAT IS DOCKER? ===
echo "🐳 WHAT IS DOCKER?"

echo "Docker is a containerization platform that packages applications"
echo "and their dependencies into lightweight, portable containers."
echo ""
echo "Think of it like this:"
echo "🏠 Virtual Machine = Entire house (OS + apps)"
echo "📦 Container = Just your stuff in a box (app + dependencies)"

# === THE PROBLEM DOCKER SOLVES ===
echo "❌ THE PROBLEM DOCKER SOLVES:"

echo "Before Docker:"
echo "😫 'It works on my machine' syndrome"
echo "😫 Complex deployment procedures"
echo "😫 Environment inconsistencies"
echo "😫 Dependency conflicts"
echo "😫 Resource waste with VMs"
echo "😫 Slow scaling and deployment"

echo ""
echo "After Docker:"
echo "✅ Consistent environments everywhere"
echo "✅ Simple deployment process"
echo "✅ Isolated applications"
echo "✅ Efficient resource usage"
echo "✅ Fast scaling and deployment"
echo "✅ Version control for environments"

# === DOCKER VS VIRTUAL MACHINES ===
echo "🆚 DOCKER VS VIRTUAL MACHINES:"

echo "Virtual Machines:"
echo "• Each VM includes full OS (GBs of overhead)"
echo "• Slower startup (minutes)"
echo "• Resource intensive"
echo "• Hardware-level isolation"
echo "• Good for running different OS"

echo ""
echo "Docker Containers:"
echo "• Share host OS kernel (MBs of overhead)"
echo "• Fast startup (seconds)"
echo "• Lightweight and efficient"
echo "• Process-level isolation"
echo "• Perfect for microservices"

# === KEY DOCKER CONCEPTS ===
echo "🔑 KEY DOCKER CONCEPTS:"

echo "📋 Image:"
echo "• Blueprint for containers"
echo "• Read-only template"
echo "• Contains app + dependencies"
echo "• Versioned and shareable"
echo "• Built from Dockerfile"

echo ""
echo "🏃 Container:"
echo "• Running instance of an image"
echo "• Isolated process"
echo "• Has its own filesystem"
echo "• Can be started, stopped, deleted"
echo "• Ephemeral by design"

echo ""
echo "🏪 Registry:"
echo "• Storage for Docker images"
echo "• Docker Hub (public registry)"
echo "• Private registries available"
echo "• Version control for images"

echo ""
echo "📝 Dockerfile:"
echo "• Text file with build instructions"
echo "• Defines how to create an image"
echo "• Version controlled with code"
echo "• Reproducible builds"

# === DOCKER ARCHITECTURE ===
echo "🏗️ DOCKER ARCHITECTURE:"

echo "Docker uses a client-server architecture:"
echo ""
echo "🖥️ Docker Client (docker command):"
echo "• Command-line interface"
echo "• Communicates with Docker daemon"
echo "• Can connect to remote daemons"
echo ""
echo "⚙️ Docker Daemon (dockerd):"
echo "• Manages containers, images, networks"
echo "• Listens for Docker API requests"
echo "• Handles container lifecycle"
echo ""
echo "🌐 Docker Registry:"
echo "• Stores and distributes images"
echo "• Docker Hub is default registry"
echo "• Can be public or private"

# === DOCKER BENEFITS ===
echo "🌟 DOCKER BENEFITS:"

echo "For Developers:"
echo "✅ Consistent development environments"
echo "✅ Easy dependency management"
echo "✅ Quick project setup"
echo "✅ Simplified testing"
echo "✅ Version control for environments"

echo ""
echo "For Operations:"
echo "✅ Simplified deployments"
echo "✅ Better resource utilization"
echo "✅ Easy scaling"
echo "✅ Consistent production environments"
echo "✅ Faster disaster recovery"

echo ""
echo "For Business:"
echo "✅ Faster time to market"
echo "✅ Reduced infrastructure costs"
echo "✅ Improved reliability"
echo "✅ Better team collaboration"
echo "✅ Easier cloud migration"

# === DOCKER USE CASES ===
echo "🎯 DOCKER USE CASES:"

echo "🌐 Web Applications:"
echo "• Package web apps with dependencies"
echo "• Consistent staging and production"
echo "• Easy horizontal scaling"

echo ""
echo "🔬 Microservices:"
echo "• Isolate individual services"
echo "• Independent deployment"
echo "• Technology diversity"

echo ""
echo "🧪 Development & Testing:"
echo "• Consistent dev environments"
echo "• Quick environment setup"
echo "• Isolated testing"

echo ""
echo "☁️ Cloud Migration:"
echo "• Portable applications"
echo "• Hybrid cloud deployments"
echo "• Vendor independence"

echo ""
echo "🔄 CI/CD Pipelines:"
echo "• Consistent build environments"
echo "• Parallel testing"
echo "• Reliable deployments"

# === DOCKER ECOSYSTEM ===
echo "🌱 DOCKER ECOSYSTEM:"

echo "Core Tools:"
echo "🐳 Docker Engine - Container runtime"
echo "🐙 Docker Compose - Multi-container apps"
echo "🐝 Docker Swarm - Container orchestration"
echo "🏪 Docker Hub - Public image registry"

echo ""
echo "Related Technologies:"
echo "☸️ Kubernetes - Advanced orchestration"
echo "🔧 Podman - Alternative container runtime"
echo "🏗️ Buildah - Container image builder"
echo "📊 Prometheus - Container monitoring"

# === GETTING STARTED MINDSET ===
echo "🧠 GETTING STARTED MINDSET:"

echo "Think in containers:"
echo "1. What does my app need to run?"
echo "2. How can I package those dependencies?"
echo "3. How do I make it portable?"
echo "4. How do I scale it?"

echo ""
echo "Best practices from day one:"
echo "• Keep containers small and focused"
echo "• Don't store data in containers"
echo "• Use official base images"
echo "• Version your images"
echo "• Document your Dockerfiles"

echo ""
echo "📦 DOCKER FUNDAMENTALS COMPLETE!"
echo "You now understand what Docker is and why it's revolutionary."
echo "Next: Let's get our hands dirty with Docker commands! 🚀"`
      },
      {
        title: '2. Docker Installation & First Steps - Getting Started 🚀',
        content: 'Getting Docker installed and running your first container is the gateway to the containerization world. This section covers installation across different platforms and walks you through your first Docker commands to build confidence and understanding.',
        codeExample: `# === DOCKER INSTALLATION & FIRST STEPS ===
echo "🚀 Docker Installation & First Steps - Getting Started"

# === DOCKER INSTALLATION ===
echo "📦 DOCKER INSTALLATION:"

echo "🐧 Linux (Ubuntu/Debian):"
echo "# Update package index"
echo "sudo apt update"
echo ""
echo "# Install prerequisites"
echo "sudo apt install apt-transport-https ca-certificates curl software-properties-common"
echo ""
echo "# Add Docker's official GPG key"
echo "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"
echo ""
echo "# Add Docker repository"
echo "sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\$(lsb_release -cs) stable\""
echo ""
echo "# Install Docker"
echo "sudo apt update"
echo "sudo apt install docker-ce"
echo ""
echo "# Add user to docker group (avoid sudo)"
echo "sudo usermod -aG docker \\$USER"
echo "newgrp docker"

echo ""
echo "🍎 macOS:"
echo "# Download Docker Desktop from docker.com"
echo "# Or use Homebrew:"
echo "brew install --cask docker"

echo ""
echo "🪟 Windows:"
echo "# Download Docker Desktop from docker.com"
echo "# Requires Windows 10/11 with WSL2"
echo "# Or use Chocolatey:"
echo "choco install docker-desktop"

# === VERIFY INSTALLATION ===
echo "✅ VERIFY INSTALLATION:"

echo "# Check Docker version"
echo "docker --version"
echo "docker version"
echo ""
echo "# Check Docker info"
echo "docker info"
echo ""
echo "# Test Docker installation"
echo "docker run hello-world"

# === YOUR FIRST CONTAINER ===
echo "🎉 YOUR FIRST CONTAINER:"

echo "Let's run your first container!"
echo ""
echo "# Run a simple container"
echo "docker run hello-world"
echo ""
echo "What just happened?"
echo "1. Docker looked for 'hello-world' image locally"
echo "2. Didn't find it, so downloaded from Docker Hub"
echo "3. Created a container from the image"
echo "4. Ran the container"
echo "5. Container printed message and exited"

# === BASIC DOCKER COMMANDS ===
echo "🔧 BASIC DOCKER COMMANDS:"

echo "📋 Image Commands:"
echo "docker images                  # List local images"
echo "docker pull ubuntu:20.04       # Download an image"
echo "docker rmi image_name          # Remove an image"
echo "docker search nginx            # Search Docker Hub"

echo ""
echo "🏃 Container Commands:"
echo "docker ps                      # List running containers"
echo "docker ps -a                   # List all containers"
echo "docker run image_name          # Create and start container"
echo "docker start container_id      # Start stopped container"
echo "docker stop container_id       # Stop running container"
echo "docker rm container_id         # Remove container"

# === RUNNING INTERACTIVE CONTAINERS ===
echo "💬 RUNNING INTERACTIVE CONTAINERS:"

echo "# Run Ubuntu container interactively"
echo "docker run -it ubuntu:20.04 bash"
echo ""
echo "Flags explained:"
echo "-i = Interactive (keep STDIN open)"
echo "-t = Allocate a pseudo-TTY (terminal)"
echo "bash = Command to run inside container"
echo ""
echo "Try these commands inside the container:"
echo "cat /etc/os-release    # Check OS version"
echo "ls /                   # List root directory"
echo "ps aux                 # List processes"
echo "exit                   # Exit container"

# === RUNNING BACKGROUND CONTAINERS ===
echo "🌙 RUNNING BACKGROUND CONTAINERS:"

echo "# Run Nginx web server in background"
echo "docker run -d -p 8080:80 --name my-nginx nginx"
echo ""
echo "Flags explained:"
echo "-d = Detached (run in background)"
echo "-p 8080:80 = Port mapping (host:container)"
echo "--name my-nginx = Give container a name"
echo ""
echo "# Test the web server"
echo "curl http://localhost:8080"
echo "# Or open browser to http://localhost:8080"

# === CONTAINER MANAGEMENT ===
echo "🔄 CONTAINER MANAGEMENT:"

echo "# View running containers"
echo "docker ps"
echo ""
echo "# View container logs"
echo "docker logs my-nginx"
echo "docker logs -f my-nginx    # Follow logs"
echo ""
echo "# Execute commands in running container"
echo "docker exec -it my-nginx bash"
echo ""
echo "# Stop and remove container"
echo "docker stop my-nginx"
echo "docker rm my-nginx"

# === WORKING WITH VOLUMES ===
echo "💾 WORKING WITH VOLUMES:"

echo "# Run container with volume mount"
echo "docker run -d -p 8080:80 -v \\$(pwd)/html:/usr/share/nginx/html nginx"
echo ""
echo "This mounts your local 'html' directory to the container's web root"
echo ""
echo "# Create a simple HTML file"
echo "mkdir html"
echo "echo '<h1>Hello from Docker!</h1>' > html/index.html"
echo ""
echo "# Now visit http://localhost:8080 to see your page"

# === ENVIRONMENT VARIABLES ===
echo "🌍 ENVIRONMENT VARIABLES:"

echo "# Run container with environment variables"
echo "docker run -e MYSQL_ROOT_PASSWORD=mypassword -d mysql:8.0"
echo ""
echo "# Multiple environment variables"
echo "docker run -e NODE_ENV=production -e PORT=3000 -d node-app"
echo ""
echo "# Environment file"
echo "docker run --env-file .env -d my-app"

# === PRACTICAL EXAMPLES ===
echo "🎯 PRACTICAL EXAMPLES:"

echo "Example 1: Run a database"
echo "docker run -d --name my-postgres -e POSTGRES_PASSWORD=mypassword -p 5432:5432 postgres:13"

echo ""
echo "Example 2: Run a web application"
echo "docker run -d --name my-app -p 3000:3000 -e NODE_ENV=production node:16"

echo ""
echo "Example 3: Run with custom network"
echo "docker network create my-network"
echo "docker run -d --name db --network my-network postgres:13"
echo "docker run -d --name app --network my-network -p 3000:3000 my-app"

# === CLEANUP COMMANDS ===
echo "🧹 CLEANUP COMMANDS:"

echo "# Remove all stopped containers"
echo "docker container prune"
echo ""
echo "# Remove unused images"
echo "docker image prune"
echo ""
echo "# Remove everything unused"
echo "docker system prune"
echo ""
echo "# Nuclear option (remove everything)"
echo "docker system prune -a --volumes"

# === TROUBLESHOOTING TIPS ===
echo "🔧 TROUBLESHOOTING TIPS:"

echo "Container won't start?"
echo "• Check logs: docker logs container_name"
echo "• Check if port is already in use"
echo "• Verify image exists: docker images"

echo ""
echo "Permission denied?"
echo "• Add user to docker group: sudo usermod -aG docker \\$USER"
echo "• Restart terminal or run: newgrp docker"

echo ""
echo "Out of disk space?"
echo "• Clean up: docker system prune"
echo "• Check disk usage: docker system df"

# === NEXT STEPS ===
echo "🎯 NEXT STEPS:"

echo "Now that you can run containers, learn about:"
echo "1. Creating custom images with Dockerfile"
echo "2. Docker Compose for multi-container apps"
echo "3. Container networking"
echo "4. Data persistence with volumes"
echo "5. Container orchestration"

echo ""
echo "🚀 FIRST STEPS COMPLETE!"
echo "You can now run, manage, and troubleshoot Docker containers!"
echo "Next: Let's build custom images with Dockerfile! 🏗️"`
      },
      {
        title: '3. Dockerfile & Custom Images - Building Your Own 🏗️',
        content: 'Creating custom Docker images with Dockerfile is where Docker becomes truly powerful. Learn to package your applications into portable, reproducible containers.',
        codeExample: `# === DOCKERFILE & CUSTOM IMAGES ===
echo "🏗️ Dockerfile & Custom Images - Building Your Own"

# === WHAT IS A DOCKERFILE? ===
echo "📝 WHAT IS A DOCKERFILE?"
echo "A Dockerfile is a text file containing instructions to build a Docker image"
echo "Think of it as a recipe for creating your container"

# === BASIC DOCKERFILE STRUCTURE ===
echo "🏗️ BASIC DOCKERFILE STRUCTURE:"
echo "# Example Dockerfile for Node.js app"
echo "FROM node:16-alpine"
echo "WORKDIR /app"
echo "COPY package*.json ./"
echo "RUN npm install"
echo "COPY . ."
echo "EXPOSE 3000"
echo "CMD [\"npm\", \"start\"]"

# === DOCKERFILE INSTRUCTIONS ===
echo "📋 DOCKERFILE INSTRUCTIONS:"
echo "FROM ubuntu:20.04              # Base image"
echo "WORKDIR /app                   # Set working directory"
echo "COPY src/ /app/                # Copy files from host"
echo "RUN apt-get update             # Execute commands"
echo "ENV NODE_ENV=production        # Set environment variable"
echo "EXPOSE 8080                    # Document port"
echo "CMD [\"node\", \"app.js\"]        # Default command"

# === BUILDING IMAGES ===
echo "🔨 BUILDING IMAGES:"
echo "docker build -t my-app:latest ."
echo "docker build -f Dockerfile.prod -t my-app:prod ."

# === REAL-WORLD EXAMPLES ===
echo "🌍 REAL-WORLD EXAMPLES:"
echo "Python Flask App:"
echo "FROM python:3.9-slim"
echo "WORKDIR /app"
echo "COPY requirements.txt ."
echo "RUN pip install -r requirements.txt"
echo "COPY . ."
echo "EXPOSE 5000"
echo "CMD [\"python\", \"app.py\"]"

echo ""
echo "Static Website:"
echo "FROM nginx:alpine"
echo "COPY dist/ /usr/share/nginx/html/"
echo "EXPOSE 80"

# === BEST PRACTICES ===
echo "✨ DOCKERFILE BEST PRACTICES:"
echo "1. Use specific base image tags"
echo "2. Minimize layers by combining RUN commands"
echo "3. Copy package files before source code"
echo "4. Use .dockerignore file"
echo "5. Run as non-root user"

echo ""
echo "🏗️ You can now build custom Docker images!"
echo "Next: Docker Compose for multi-container apps! 🎼"`
      },
      {
        title: '4. Docker Compose - Multi-Container Magic 🎼',
        content: 'Docker Compose orchestrates multi-container applications with a simple YAML file. Learn to define, run, and manage complex application stacks with ease.',
        codeExample: `# === DOCKER COMPOSE ===
echo "🎼 Docker Compose - Multi-Container Magic"

# === WHAT IS DOCKER COMPOSE? ===
echo "🎭 WHAT IS DOCKER COMPOSE?"
echo "Docker Compose is a tool for defining and running multi-container applications"
echo "Uses YAML files to configure application services"
echo "Single command to start entire application stack"

# === BASIC DOCKER-COMPOSE.YML ===
echo "📝 BASIC DOCKER-COMPOSE.YML:"
echo "version: '3.8'"
echo ""
echo "services:"
echo "  web:"
echo "    build: ."
echo "    ports:"
echo "      - \"3000:3000\""
echo "    environment:"
echo "      - NODE_ENV=development"
echo "    depends_on:"
echo "      - db"
echo ""
echo "  db:"
echo "    image: postgres:13"
echo "    environment:"
echo "      - POSTGRES_DB=myapp"
echo "      - POSTGRES_USER=user"
echo "      - POSTGRES_PASSWORD=password"
echo "    volumes:"
echo "      - postgres_data:/var/lib/postgresql/data"
echo ""
echo "volumes:"
echo "  postgres_data:"

# === DOCKER COMPOSE COMMANDS ===
echo "🎮 DOCKER COMPOSE COMMANDS:"
echo "docker-compose up              # Start all services"
echo "docker-compose up -d           # Background mode"
echo "docker-compose down            # Stop all services"
echo "docker-compose build           # Build services"
echo "docker-compose logs            # View logs"
echo "docker-compose exec web bash   # Execute commands"

# === REAL-WORLD EXAMPLE ===
echo "🌍 FULL STACK APPLICATION:"
echo "version: '3.8'"
echo ""
echo "services:"
echo "  frontend:"
echo "    build: ./frontend"
echo "    ports:"
echo "      - \"3000:3000\""
echo "    depends_on:"
echo "      - backend"
echo ""
echo "  backend:"
echo "    build: ./backend"
echo "    ports:"
echo "      - \"5000:5000\""
echo "    environment:"
echo "      - DATABASE_URL=postgresql://user:pass@db:5432/myapp"
echo "    depends_on:"
echo "      - db"
echo ""
echo "  db:"
echo "    image: postgres:13"
echo "    environment:"
echo "      - POSTGRES_DB=myapp"
echo "      - POSTGRES_USER=user"
echo "      - POSTGRES_PASSWORD=password"
echo "    volumes:"
echo "      - postgres_data:/var/lib/postgresql/data"
echo ""
echo "volumes:"
echo "  postgres_data:"

# === ENVIRONMENT FILES ===
echo "🌍 ENVIRONMENT FILES:"
echo "# .env file"
echo "POSTGRES_DB=myapp"
echo "POSTGRES_USER=user"
echo "POSTGRES_PASSWORD=secret"
echo "NODE_ENV=development"

# === PRODUCTION TIPS ===
echo "🏭 PRODUCTION TIPS:"
echo "• Use specific image tags"
echo "• Set restart policies"
echo "• Configure health checks"
echo "• Use secrets for sensitive data"
echo "• Monitor resource usage"

echo ""
echo "🎼 DOCKER COMPOSE MASTERY COMPLETE!"
echo ""
echo "🎉 CONGRATULATIONS!"
echo "You've completed Docker 101 and are ready to:"
echo "✅ Containerize applications"
echo "✅ Build custom images"
echo "✅ Orchestrate multi-container apps"
echo "✅ Deploy with confidence"
echo ""
echo "🐳 Welcome to the containerization revolution!"
echo "Go forth and containerize the world! 🌍"`
      }
    ]
  }
}