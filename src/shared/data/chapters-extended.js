export const extendedChapters = [
  {
    id: '13',
    icon: '🪫',
    title: 'PROCESS MANAGEMENT',
    description: 'Use tools like htop to manage Linux processes',
    slug: 'process-management',
    content: {
      overview: 'Learn to monitor, manage, and control processes in Linux systems.',
      sections: [
        {
          title: 'Viewing Processes',
          content: 'Use various tools to view running processes and system information.',
          codeExample: `# Basic process viewing
ps                    # Show current user processes
ps aux               # Show all processes
ps -ef               # Alternative format

# Interactive process viewers
top                  # Real-time process viewer
htop                 # Enhanced interactive viewer
btop                 # Modern system monitor

# Process tree
pstree               # Show process hierarchy
ps --forest          # Tree view with ps`
        },
        {
          title: 'Managing Processes',
          content: 'Control processes with signals and job control.',
          codeExample: `# Kill processes
kill PID             # Terminate process by PID
kill -9 PID          # Force kill process
killall process_name # Kill by process name
pkill pattern        # Kill by pattern

# Job control
command &            # Run in background
jobs                 # List background jobs
fg %1                # Bring job 1 to foreground
bg %1                # Send job 1 to background
nohup command &      # Run immune to hangups

# Process priority
nice -n 10 command   # Run with lower priority
renice 5 PID         # Change priority of running process`
        },
        {
          title: 'System Monitoring',
          content: 'Monitor system resources and performance.',
          codeExample: `# System load
uptime               # System uptime and load
w                    # Who is logged in and what they're doing
who                  # Currently logged in users

# Memory usage
free -h              # Memory usage (human readable)
cat /proc/meminfo    # Detailed memory information

# CPU information
lscpu                # CPU information
cat /proc/cpuinfo    # Detailed CPU info
vmstat 1             # Virtual memory statistics

# Disk I/O
iostat               # I/O statistics
iotop                # I/O usage by process`
        }
      ]
    }
  },
  {
    id: '14',
    icon: '⏰',
    title: 'CRON JOBS',
    description: 'Run background processes on a schedule with Cron',
    slug: 'cron-jobs',
    content: {
      overview: 'Automate tasks with cron to run commands on a schedule.',
      sections: [
        {
          title: 'Cron Basics',
          content: 'Understanding cron syntax and basic usage.',
          codeExample: `# Cron time format:
# * * * * * command
# | | | | |
# | | | | +-- Day of week (0-7, Sunday=0 or 7)
# | | | +---- Month (1-12)
# | | +------ Day of month (1-31)
# | +-------- Hour (0-23)
# +---------- Minute (0-59)

# Examples:
0 0 * * *     # Daily at midnight
0 9 * * 1     # Every Monday at 9 AM
*/15 * * * *  # Every 15 minutes
0 2 1 * *     # First day of month at 2 AM
0 0 * * 0     # Every Sunday at midnight`
        },
        {
          title: 'Managing Crontab',
          content: 'Edit and manage your personal cron jobs.',
          codeExample: `# Crontab commands
crontab -e           # Edit your crontab
crontab -l           # List your cron jobs
crontab -r           # Remove your crontab
crontab -u user -e   # Edit another user's crontab (as root)

# Example crontab entries:
# Backup home directory daily at 2 AM
0 2 * * * tar -czf /backup/home-$(date +%Y%m%d).tar.gz /home/

# Clean temp files every hour
0 * * * * find /tmp -type f -mtime +1 -delete

# Send system report weekly
0 8 * * 1 /scripts/system-report.sh | mail -s "Weekly Report" admin@example.com`
        },
        {
          title: 'System Cron',
          content: 'Understanding system-wide cron directories and anacron.',
          codeExample: `# System cron directories
/etc/cron.hourly/    # Scripts run hourly
/etc/cron.daily/     # Scripts run daily
/etc/cron.weekly/    # Scripts run weekly
/etc/cron.monthly/   # Scripts run monthly

# System crontab
/etc/crontab         # System-wide crontab
/etc/cron.d/         # Additional cron files

# Anacron for systems not always on
/etc/anacrontab      # Anacron configuration

# Cron logs
tail -f /var/log/cron        # CentOS/RHEL
tail -f /var/log/syslog      # Ubuntu/Debian
journalctl -u cron           # Systemd systems`
        }
      ]
    }
  },
  {
    id: '15',
    icon: '🪄',
    title: 'TAR & GZIP',
    description: 'File compression and directory archiving magic',
    slug: 'tar-and-gzip',
    content: {
      overview: 'Master file compression and archiving with tar, gzip, and related tools.',
      sections: [
        {
          title: 'Tar Archives',
          content: 'Create and extract tar archives for bundling files and directories.',
          codeExample: `# Create tar archive
tar -cf archive.tar file1 file2 dir/
tar -cvf archive.tar file1 file2 dir/  # Verbose output

# Extract tar archive
tar -xf archive.tar
tar -xvf archive.tar                   # Verbose output
tar -xf archive.tar -C /destination/   # Extract to specific directory

# List archive contents
tar -tf archive.tar
tar -tvf archive.tar                   # Detailed listing

# Add files to existing archive
tar -rf archive.tar newfile.txt`
        },
        {
          title: 'Compression with Gzip',
          content: 'Combine tar with gzip for compressed archives.',
          codeExample: `# Create compressed tar archive
tar -czf archive.tar.gz directory/
tar -czvf archive.tar.gz directory/    # Verbose

# Extract compressed archive
tar -xzf archive.tar.gz
tar -xzvf archive.tar.gz               # Verbose

# Compress individual files
gzip file.txt                          # Creates file.txt.gz
gunzip file.txt.gz                     # Extracts to file.txt
zcat file.txt.gz                       # View without extracting

# Other compression formats
tar -cjf archive.tar.bz2 directory/   # Bzip2 compression
tar -cJf archive.tar.xz directory/    # XZ compression`
        },
        {
          title: 'Advanced Archive Operations',
          content: 'Advanced techniques for working with archives.',
          codeExample: `# Exclude files from archive
tar -czf backup.tar.gz --exclude='*.log' --exclude='tmp/' /home/user/

# Archive with progress
tar -czf - directory/ | pv | gzip > archive.tar.gz

# Split large archives
tar -czf - directory/ | split -b 1G - archive.tar.gz.part

# Verify archive integrity
tar -tzf archive.tar.gz > /dev/null && echo "Archive OK"

# Incremental backups
tar -czf backup-$(date +%Y%m%d).tar.gz --newer-mtime='1 day ago' /home/

# Extract specific files
tar -xzf archive.tar.gz path/to/specific/file.txt`
        }
      ]
    }
  },
  {
    id: '16',
    icon: '📦',
    title: 'PACKAGE MANAGERS',
    description: 'How to install packages from source',
    slug: 'package-managers',
    content: {
      overview: 'Learn different package management systems and how to install software.',
      sections: [
        {
          title: 'APT (Debian/Ubuntu)',
          content: 'Advanced Package Tool for Debian-based distributions.',
          codeExample: `# Update package lists
sudo apt update

# Upgrade packages
sudo apt upgrade
sudo apt full-upgrade

# Install packages
sudo apt install package-name
sudo apt install package1 package2 package3

# Remove packages
sudo apt remove package-name
sudo apt purge package-name    # Remove with config files

# Search packages
apt search keyword
apt show package-name

# Clean package cache
sudo apt autoremove
sudo apt autoclean`
        },
        {
          title: 'YUM/DNF (RedHat/CentOS)',
          content: 'Package management for RedHat-based distributions.',
          codeExample: `# YUM (older systems)
sudo yum update
sudo yum install package-name
sudo yum remove package-name
sudo yum search keyword

# DNF (newer systems)
sudo dnf update
sudo dnf install package-name
sudo dnf remove package-name
sudo dnf search keyword

# Group installations
sudo dnf grouplist
sudo dnf groupinstall "Development Tools"

# Repository management
sudo dnf repolist
sudo dnf config-manager --add-repo URL`
        },
        {
          title: 'Building from Source',
          content: 'Compile and install software from source code.',
          codeExample: `# Typical build process
./configure --prefix=/usr/local
make
sudo make install

# With CMake
mkdir build && cd build
cmake ..
make
sudo make install

# Install build dependencies (Ubuntu)
sudo apt install build-essential
sudo apt build-dep package-name

# Install build dependencies (CentOS)
sudo dnf groupinstall "Development Tools"
sudo dnf builddep package-name

# Create packages from source
checkinstall    # Creates .deb package
rpmbuild        # Creates .rpm package`
        }
      ]
    }
  },
  {
    id: '17',
    icon: '⌨️',
    title: 'CHOOSING A VPS',
    description: 'How to choose a Virtual Private Server',
    slug: 'choosing-a-vps',
    content: {
      overview: 'Learn how to select the right VPS provider and configuration for your needs.',
      sections: [
        {
          title: 'VPS Providers Comparison',
          content: 'Popular VPS providers and their strengths.',
          codeExample: `# Popular VPS Providers:

# DigitalOcean
- Simple interface
- Good documentation
- $5/month starting price
- Global data centers

# Linode
- Excellent performance
- Great support
- $5/month starting price
- Advanced networking

# Vultr
- High performance
- Many locations
- $2.50/month starting price
- Good for gaming/low latency

# AWS EC2
- Most features
- Pay-as-you-go
- Global infrastructure
- Complex pricing

# Hetzner
- Best price/performance
- European focus
- €3.29/month starting price
- Excellent hardware`
        },
        {
          title: 'Server Specifications',
          content: 'Understanding CPU, RAM, storage, and bandwidth requirements.',
          codeExample: `# Basic VPS Specs for Different Uses:

# Personal Website/Blog
- 1 CPU core
- 1GB RAM
- 25GB SSD
- 1TB bandwidth

# Small Business Website
- 2 CPU cores
- 2GB RAM
- 50GB SSD
- 2TB bandwidth

# Development Server
- 2-4 CPU cores
- 4-8GB RAM
- 80GB SSD
- 4TB bandwidth

# Production Application
- 4+ CPU cores
- 8+ GB RAM
- 160GB+ SSD
- Unlimited bandwidth

# Check server resources
free -h        # Memory usage
df -h          # Disk usage
nproc          # CPU cores
lscpu          # CPU details`
        },
        {
          title: 'Initial Server Setup',
          content: 'Essential steps after getting a new VPS.',
          codeExample: `# Initial server setup checklist:

# 1. Update system
sudo apt update && sudo apt upgrade -y

# 2. Create non-root user
sudo adduser username
sudo usermod -aG sudo username

# 3. Configure SSH
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no
# Set: PasswordAuthentication no (after setting up keys)
sudo systemctl restart ssh

# 4. Setup firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable

# 5. Install essential packages
sudo apt install curl wget git vim htop fail2ban

# 6. Configure timezone
sudo timedatectl set-timezone America/New_York
timedatectl status`
        }
      ]
    }
  }
]
