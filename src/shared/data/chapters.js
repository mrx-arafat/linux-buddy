export const chapters = [
  {
    id: '01',
    icon: '🐧',
    title: 'START USING LINUX',
    description: 'How to get started with Linux',
    slug: 'start-using-linux',
    content: {
      overview: 'Learn the fundamentals of getting started with Linux, from choosing a distribution to your first commands.',
      sections: [
        {
          title: 'What is Linux?',
          content: 'Linux is a free and open-source operating system kernel that forms the foundation of many operating systems called distributions.',
          codeExample: `# Check your Linux distribution
cat /etc/os-release

# Check kernel version
uname -r

# Display system information
uname -a`
        },
        {
          title: 'Choosing a Linux Distribution',
          content: 'Popular beginner-friendly distributions include Ubuntu, Linux Mint, and Fedora.',
          codeExample: `# Ubuntu - Most popular beginner distribution
# Download from: https://ubuntu.com

# Linux Mint - User-friendly with familiar interface
# Download from: https://linuxmint.com

# Fedora - Cutting-edge features
# Download from: https://getfedora.org`
        },
        {
          title: 'First Steps After Installation',
          content: 'Essential commands and setup tasks for new Linux users.',
          codeExample: `# Update your system
sudo apt update && sudo apt upgrade

# Install essential packages
sudo apt install curl wget git vim

# Check available disk space
df -h

# View running processes
ps aux

# Check system uptime
uptime`
        }
      ]
    }
  },
  {
    id: '02',
    icon: '💿',
    title: '10 LINUX DISTROS',
    description: 'Ten awesome Linux distros explained',
    slug: '10-linux-distros',
    content: {
      overview: 'Explore the most popular Linux distributions and understand which one might be right for you.',
      sections: [
        {
          title: 'Ubuntu',
          content: 'The most popular Linux distribution, perfect for beginners with excellent community support.',
          codeExample: `# Ubuntu package management
sudo apt update
sudo apt install package-name
sudo apt remove package-name

# Ubuntu version info
lsb_release -a`
        },
        {
          title: 'CentOS/RHEL',
          content: 'Enterprise-focused distributions known for stability and long-term support.',
          codeExample: `# CentOS/RHEL package management
sudo yum update
sudo yum install package-name
sudo yum remove package-name

# Or with newer dnf
sudo dnf install package-name`
        },
        {
          title: 'Arch Linux',
          content: 'A rolling-release distribution for advanced users who want cutting-edge software.',
          codeExample: `# Arch package management with pacman
sudo pacman -Syu  # Update system
sudo pacman -S package-name  # Install package
sudo pacman -R package-name  # Remove package

# AUR helper (yay)
yay -S aur-package-name`
        }
      ]
    }
  },
  {
    id: '03',
    icon: '🤘',
    title: 'LINUX 101',
    description: '101 words you must know in the Linux/GNU ecosystem',
    slug: 'linux-101',
    content: {
      overview: 'Essential Linux terminology and concepts every user should understand.',
      sections: [
        {
          title: 'File System Hierarchy',
          content: 'Understanding the Linux directory structure and important locations.',
          codeExample: `# Root directory
/

# User home directories
/home/username

# System binaries
/bin, /usr/bin

# Configuration files
/etc

# Variable data
/var

# Temporary files
/tmp`
        },
        {
          title: 'Permissions and Ownership',
          content: 'Linux file permissions and user/group ownership concepts.',
          codeExample: `# View file permissions
ls -la

# Change permissions (rwx = read, write, execute)
chmod 755 filename
chmod u+x filename  # Add execute for user

# Change ownership
sudo chown user:group filename
sudo chown -R user:group directory/`
        },
        {
          title: 'Processes and Services',
          content: 'Understanding how Linux manages running programs and system services.',
          codeExample: `# View running processes
ps aux
top
htop

# Kill a process
kill PID
killall process-name

# Manage services
sudo systemctl start service-name
sudo systemctl stop service-name
sudo systemctl status service-name`
        }
      ]
    }
  },
  {
    id: '04',
    icon: '💪',
    title: '10 ESSENTIAL COMMANDS',
    description: 'Ten Linux commands and tricks you absolutely must know',
    slug: '10-essential-commands',
    content: {
      overview: 'Master the most important Linux commands that every user needs to know.',
      sections: [
        {
          title: 'Navigation Commands',
          content: 'Essential commands for moving around the file system.',
          codeExample: `# Print working directory
pwd

# List directory contents
ls
ls -la  # Detailed list with hidden files
ls -lh  # Human readable file sizes

# Change directory
cd /path/to/directory
cd ~     # Go to home directory
cd ..    # Go up one directory
cd -     # Go to previous directory`
        },
        {
          title: 'File Operations',
          content: 'Commands for creating, copying, moving, and deleting files.',
          codeExample: `# Create files and directories
touch filename
mkdir directory-name
mkdir -p path/to/nested/directory

# Copy files and directories
cp source destination
cp -r source-dir destination-dir

# Move/rename files
mv oldname newname
mv file /new/location/

# Remove files and directories
rm filename
rm -r directory
rm -rf directory  # Force remove`
        },
        {
          title: 'Text Processing',
          content: 'Commands for viewing and manipulating text files.',
          codeExample: `# View file contents
cat filename
less filename
head filename     # First 10 lines
tail filename     # Last 10 lines
tail -f filename  # Follow file changes

# Search in files
grep "pattern" filename
grep -r "pattern" directory/
grep -i "pattern" filename  # Case insensitive

# Count lines, words, characters
wc filename
wc -l filename  # Count lines only`
        }
      ]
    }
  },
  {
    id: '05',
    icon: '🗃️',
    title: 'THE FILE SYSTEM',
    description: 'Every Linux directory explained',
    slug: 'the-file-system',
    content: {
      overview: 'Understanding the Linux file system hierarchy and important directories.',
      sections: [
        {
          title: 'Root Directory Structure',
          content: 'The Linux file system starts at the root (/) and branches out into various directories.',
          codeExample: `# Navigate to root
cd /

# List root directories
ls -la /

# Important directories:
/bin     # Essential binaries
/etc     # Configuration files
/home    # User home directories
/var     # Variable data
/tmp     # Temporary files
/usr     # User programs`
        }
      ]
    }
  },
  {
    id: '06',
    icon: '🗺️',
    title: 'WTF IS $PATH',
    description: 'What is the PATH environment variable?',
    slug: 'wtf-is-path',
    content: {
      overview: 'Learn about the PATH environment variable and how Linux finds executables.',
      sections: [
        {
          title: 'Understanding PATH',
          content: 'PATH tells the shell where to look for executable files.',
          codeExample: `# View current PATH
echo $PATH

# Add directory to PATH
export PATH=$PATH:/new/directory

# Make PATH change permanent
echo 'export PATH=$PATH:/new/directory' >> ~/.bashrc`
        }
      ]
    }
  }
]

export const getChapterBySlug = (slug) => {
  return chapters.find(chapter => chapter.slug === slug)
}

export const getChapterById = (id) => {
  return chapters.find(chapter => chapter.id === id)
}
