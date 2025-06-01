export const chapter3 = {
  id: '03',
  icon: '🤘',
  title: 'LINUX 101',
  description: '101 words you must know in the Linux/GNU ecosystem',
  slug: 'linux-101',
  content: {
    overview: 'Master the essential Linux terminology and concepts that every user must understand. This comprehensive guide covers 101+ critical terms, concepts, and commands that form the foundation of Linux knowledge. From basic file system concepts to advanced system administration terms, this chapter will transform you from a Linux novice to someone who speaks the language fluently.',
    sections: [
      {
        title: 'File System Hierarchy Standard (FHS)',
        content: 'The Linux file system follows a standardized hierarchy that organizes everything in a logical tree structure starting from the root (/). Understanding this structure is crucial for navigating and managing a Linux system effectively. Each directory has a specific purpose and contains particular types of files.',
        codeExample: `# Root directory - The top of the file system tree
/

# Essential system directories
/bin                    # Essential user binaries (ls, cp, mv, etc.)
/sbin                   # System binaries (mount, fdisk, iptables)
/usr/bin               # User binaries (applications, utilities)
/usr/sbin              # Non-essential system binaries
/usr/local/bin         # Locally compiled programs

# Configuration and system files
/etc                   # System configuration files
/etc/passwd            # User account information
/etc/shadow            # Encrypted passwords
/etc/hosts             # Host name mappings
/etc/fstab             # File system mount information
/etc/crontab           # System cron jobs

# User and home directories
/home                  # User home directories
/home/username         # Individual user's home directory
/root                  # Root user's home directory

# Variable and temporary data
/var                   # Variable data (logs, databases, websites)
/var/log               # System and application logs
/var/www               # Web server files
/var/lib               # Application data
/tmp                   # Temporary files (cleared on reboot)
/var/tmp               # Temporary files (persistent across reboots)

# Device and process information
/dev                   # Device files (hardware interfaces)
/proc                  # Process and kernel information (virtual)
/sys                   # System and hardware information (virtual)

# Mount points and media
/mnt                   # Temporary mount points
/media                 # Removable media mount points
/opt                   # Optional software packages

# Boot and kernel files
/boot                  # Boot loader and kernel files
/lib                   # Essential shared libraries
/lib64                 # 64-bit shared libraries`
      },
      {
        title: 'Users, Groups, and Permissions',
        content: 'Linux is a multi-user system with sophisticated permission controls. Understanding users, groups, and the permission system is fundamental to Linux security and system administration. Every file and directory has an owner, a group, and specific permissions that control who can read, write, or execute them.',
        codeExample: `# User management commands
whoami                 # Show current username
id                     # Show user ID, group ID, and groups
id username            # Show specific user's ID information
groups                 # Show groups current user belongs to
groups username        # Show groups for specific user

# User account files
cat /etc/passwd        # User account database
cat /etc/group         # Group database
cat /etc/shadow        # Encrypted passwords (root only)

# Permission viewing and understanding
ls -l                  # Long listing with permissions
ls -la                 # Include hidden files
ls -ld /path/to/dir    # Show directory permissions

# Permission format: drwxrwxrwx
# d = directory (- for files, l for links)
# rwx = owner permissions (read, write, execute)
# rwx = group permissions
# rwx = other permissions

# Numeric permissions (octal)
# 4 = read (r)
# 2 = write (w)  
# 1 = execute (x)
# 755 = rwxr-xr-x (owner: rwx, group: r-x, others: r-x)
# 644 = rw-r--r-- (owner: rw-, group: r--, others: r--)
# 600 = rw------- (owner: rw-, group: ---, others: ---)

# Changing permissions
chmod 755 filename     # Set permissions using octal
chmod u+x filename     # Add execute for user (owner)
chmod g-w filename     # Remove write for group
chmod o+r filename     # Add read for others
chmod a+x filename     # Add execute for all (user, group, others)

# Changing ownership
sudo chown user:group filename    # Change owner and group
sudo chown user filename          # Change owner only
sudo chgrp group filename         # Change group only
sudo chown -R user:group directory/  # Recursive change

# Special permissions
chmod +t directory     # Sticky bit (only owner can delete files)
chmod g+s directory    # Set group ID (files inherit group)
chmod u+s filename     # Set user ID (run as owner)`
      }
    ]
  }
}
