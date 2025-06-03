export const chapter7 = {
  id: '07',
  icon: '🔐',
  title: 'FILE PERMISSIONS',
  description: 'Linux file permissions and security',
  slug: 'file-permissions',
  content: {
    overview: 'Welcome to the Linux Permission Matrix! 🔐 If you\'ve ever wondered why you can\'t edit a file, why your script won\'t run, or why Linux seems to be constantly telling you "permission denied," this chapter is your salvation. Linux file permissions aren\'t just some archaic security theater - they\'re the elegant, logical system that keeps your files safe while giving you granular control over who can do what. While other operating systems hide permissions behind confusing dialog boxes with checkboxes everywhere, Linux gives you a clean, mathematical system that actually makes sense once you understand it. We\'re going to decode the permission matrix, master the chmod command, understand ownership, and turn you into a Linux security ninja. By the end of this chapter, you\'ll read permission strings like Neo reading the Matrix code, and you\'ll never again be confused by rwxrwxrwx! 🥷',
    sections: [
      {
        title: '1. The Permission Matrix Decoded - Reading the Digital DNA 🧬',
        content: 'Every file in Linux has a permission string that looks like hieroglyphics to beginners but is actually a beautiful, logical system. That cryptic `rwxrwxrwx` isn\'t random - it\'s a precise description of who can do what with your file. Think of it as the digital DNA of your files, encoding exactly how they can be accessed. We\'re going to break down this matrix step by step, and by the end, you\'ll be reading permissions faster than a speed reader goes through a novel.',
        codeExample: `# === THE PERMISSION REVELATION ===
ls -la                          # "Show me the permission matrix!"
ls -la /bin/ls                  # "What permissions does 'ls' have?"
ls -la /etc/passwd              # "What about the password file?"
ls -ld /tmp                     # "What about directories?"

# === DECODING THE PERMISSION STRING ===
# Format: -rwxrwxrwx
# Position 1: File type (- = file, d = directory, l = link)
# Positions 2-4: Owner permissions (rwx)
# Positions 5-7: Group permissions (rwx)
# Positions 8-10: Other permissions (rwx)

# === UNDERSTANDING EACH PERMISSION ===
# r = read (4)    - Can view file content or list directory
# w = write (2)   - Can modify file or create/delete in directory
# x = execute (1) - Can run file or enter directory

# === PERMISSION EXAMPLES BREAKDOWN ===
echo "🧬 Permission DNA Examples:"
echo "-rw-r--r--  = Regular file, owner: read+write, group: read, others: read"
echo "-rwxr-xr-x  = Executable file, owner: full access, others: read+execute"
echo "drwxr-xr-x  = Directory, owner: full access, others: read+enter"
echo "-rw-------  = Private file, only owner can read+write"
echo "-rwxrwxrwx  = Public file, everyone can do everything (dangerous!)"

# === READING PERMISSIONS LIKE A PRO ===
ls -la | head -10               # "Show first 10 items with permissions"
ls -la | awk '{print \$1, \$9}'  # "Show just permissions and filenames"

# === FILE TYPE INDICATORS ===
ls -la | grep "^-"              # "Show regular files"
ls -la | grep "^d"              # "Show directories"
ls -la | grep "^l"              # "Show symbolic links"
ls -la /dev | grep "^c"         # "Show character devices"
ls -la /dev | grep "^b"         # "Show block devices"

# === PERMISSION MATH ===
echo "🔢 Permission Math:"
echo "r = 4, w = 2, x = 1"
echo "rwx = 4+2+1 = 7 (full permissions)"
echo "rw- = 4+2+0 = 6 (read and write)"
echo "r-x = 4+0+1 = 5 (read and execute)"
echo "r-- = 4+0+0 = 4 (read only)"
echo "--- = 0+0+0 = 0 (no permissions)"

# === COMMON PERMISSION PATTERNS ===
echo "📋 Common Permission Patterns:"
echo "755 = rwxr-xr-x = Executable files, scripts"
echo "644 = rw-r--r-- = Text files, documents"
echo "600 = rw------- = Private files, SSH keys"
echo "777 = rwxrwxrwx = Everything for everyone (avoid!)"
echo "000 = --------- = Nothing for nobody (locked)"

# === CHECKING YOUR OWN PERMISSIONS ===
id                              # "Who am I and what groups do I belong to?"
groups                          # "What groups am I in?"
whoami                          # "What's my username?"

# === TESTING FILE ACCESS ===
test -r filename && echo "I can read this file"
test -w filename && echo "I can write to this file"
test -x filename && echo "I can execute this file"
test -d dirname && echo "This is a directory I can access"

# === THE PERMISSION REALITY CHECK ===
echo "🎯 Permission Reality:"
echo "Every file has an owner, a group, and permissions for others"
echo "Permissions control read, write, and execute access"
echo "Understanding permissions = Understanding Linux security"
echo "Master this and you master Linux file security!"`
      },
      {
        title: '2. The chmod Command - Your Permission Wand 🪄',
        content: 'Meet `chmod` - your magic wand for changing file permissions. This isn\'t just a command, it\'s your key to controlling access to every file on your system. While Windows users are clicking through property dialogs and macOS users are dealing with confusing permission panels, you\'ll be setting permissions with surgical precision using simple, logical commands. We\'re going to master both the octal (numeric) and symbolic (letter) methods, because a true Linux wizard knows both spells.',
        codeExample: `# === BASIC CHMOD MAGIC ===
chmod 755 script.sh             # "Make script executable for owner, readable for others"
chmod 644 document.txt          # "Make document readable/writable for owner, readable for others"
chmod 600 secret.txt            # "Make file private to owner only"
chmod +x program                # "Add execute permission for everyone"
chmod -w readonly.txt           # "Remove write permission for everyone"

# === OCTAL (NUMERIC) METHOD ===
# This is the mathematical approach - precise and fast
chmod 755 file                  # "rwxr-xr-x" - owner: full, others: read+execute
chmod 644 file                  # "rw-r--r--" - owner: read+write, others: read
chmod 600 file                  # "rw-------" - owner: read+write, nobody else
chmod 777 file                  # "rwxrwxrwx" - everyone can do everything (dangerous!)
chmod 000 file                  # "---------" - nobody can do anything

# === SYMBOLIC (LETTER) METHOD ===
# This is the human-readable approach - more intuitive
# Who: u=user(owner), g=group, o=others, a=all
# What: r=read, w=write, x=execute
# How: +=add, -=remove, ==set exactly

chmod u+x file                  # "Give owner execute permission"
chmod g-w file                  # "Remove group write permission"
chmod o+r file                  # "Give others read permission"
chmod a+x file                  # "Give everyone execute permission"
chmod u=rwx,g=rx,o=r file       # "Set exact permissions for each group"

# === PRACTICAL CHMOD SCENARIOS ===
# Make a script executable
chmod +x myscript.sh
chmod 755 myscript.sh           # "Alternative method"

# Make a file read-only
chmod -w important.txt
chmod 444 important.txt         # "Alternative method"

# Make a file private
chmod 600 private.txt           # "Only owner can read/write"
chmod go-rwx private.txt        # "Remove all permissions for group and others"

# Make a directory accessible
chmod 755 mydirectory/          # "Owner: full access, others: read+enter"
chmod u=rwx,go=rx mydirectory/  # "Alternative method"

# === RECURSIVE PERMISSIONS ===
chmod -R 755 directory/         # "Apply 755 to directory and ALL contents"
chmod -R u+x ~/scripts/         # "Make all files in scripts executable"
chmod -R go-w ~/private/        # "Remove write permissions for group and others"

# === ADVANCED CHMOD TECHNIQUES ===
# Copy permissions from one file to another
chmod --reference=source.txt target.txt

# Set permissions based on current permissions
chmod u+x,g=u,o=g file          # "Owner +x, group=owner perms, others=group perms"

# Conditional permissions
chmod u+x file && echo "Made executable" || echo "Failed to change permissions"

# === CHMOD WITH FIND ===
# Set permissions for all files of a certain type
find . -name "*.sh" -exec chmod +x {} \\;     # "Make all .sh files executable"
find . -type f -exec chmod 644 {} \\;         # "Set 644 for all files"
find . -type d -exec chmod 755 {} \\;         # "Set 755 for all directories"

# === SECURITY BEST PRACTICES ===
echo "🔒 Security Best Practices:"
echo "644 for documents and text files"
echo "755 for executable files and scripts"
echo "700 for private directories"
echo "600 for private files (SSH keys, passwords)"
echo "Never use 777 unless you absolutely must!"

# === COMMON CHMOD MISTAKES ===
echo "⚠️ Common Mistakes to Avoid:"
echo "chmod 777 * = BAD! Makes everything world-writable"
echo "chmod -R 777 / = DISASTER! Never do this!"
echo "chmod 000 important_file = You'll lock yourself out!"

# === CHMOD TROUBLESHOOTING ===
# "Why can't I execute this script?"
ls -la script.sh                # "Check if executable bit is set"
chmod +x script.sh              # "Add execute permission"

# "Why can't I edit this file?"
ls -la file.txt                 # "Check write permissions"
chmod u+w file.txt              # "Add write permission for owner"

# === THE CHMOD CHEAT SHEET ===
echo "🪄 chmod Quick Reference:"
echo "chmod 755 file = rwxr-xr-x (executable)"
echo "chmod 644 file = rw-r--r-- (document)"
echo "chmod 600 file = rw------- (private)"
echo "chmod +x file = Add execute for all"
echo "chmod u+w file = Add write for owner"
echo "chmod -R 755 dir/ = Recursive permissions"`
      },
      {
        title: '3. File Ownership - Who Owns What in the Digital Kingdom 👑',
        content: 'Every file in Linux has two types of ownership: a user owner and a group owner. Think of it like a digital kingdom where every file belongs to someone and is part of a family (group). Understanding ownership is crucial because permissions mean nothing if you don\'t know who they apply to. We\'re going to master the `chown` and `chgrp` commands, understand user and group relationships, and learn how to transfer digital property like a Linux real estate agent.',
        codeExample: `# === UNDERSTANDING OWNERSHIP ===
ls -la                          # "Show ownership for all files"
ls -la file.txt                 # "Who owns this specific file?"
stat file.txt                   # "Detailed ownership information"

# === OWNERSHIP FORMAT ===
# In 'ls -la' output: user:group
# Example: john:developers means user 'john' owns it, group 'developers' owns it

# === CHECKING CURRENT USER AND GROUPS ===
whoami                          # "What's my username?"
id                              # "My user ID, group ID, and all groups"
groups                          # "What groups am I in?"
groups username                 # "What groups is 'username' in?"

# === THE CHOWN COMMAND - CHANGING USER OWNERSHIP ===
sudo chown newuser file.txt     # "Change file owner to 'newuser'"
sudo chown newuser:newgroup file.txt # "Change both user and group"
sudo chown :newgroup file.txt   # "Change only the group"
sudo chown newuser: file.txt    # "Change user, keep current group"

# === THE CHGRP COMMAND - CHANGING GROUP OWNERSHIP ===
sudo chgrp newgroup file.txt    # "Change group ownership"
sudo chgrp developers *.py      # "Change group for all Python files"

# === RECURSIVE OWNERSHIP CHANGES ===
sudo chown -R user:group directory/  # "Change ownership recursively"
sudo chown -R www-data:www-data /var/www/  # "Web server ownership"
sudo chown -R \$(whoami): ~/myproject/     # "Take ownership of my project"

# === PRACTICAL OWNERSHIP SCENARIOS ===
# Take ownership of files you created as root
sudo chown \$(whoami): file.txt

# Set up web directory ownership
sudo chown -R www-data:www-data /var/www/html/

# Fix ownership after copying files
sudo cp /root/file.txt ~/
sudo chown \$(whoami): ~/file.txt

# === OWNERSHIP AND PERMISSIONS TOGETHER ===
# Set ownership and permissions in one go
sudo chown user:group file.txt && chmod 644 file.txt

# === FINDING FILES BY OWNERSHIP ===
find / -user username 2>/dev/null    # "Find all files owned by 'username'"
find / -group groupname 2>/dev/null  # "Find all files owned by 'groupname'"
find / -nouser 2>/dev/null           # "Find orphaned files (no owner)"
find / -nogroup 2>/dev/null          # "Find files with no group"

# === USER AND GROUP MANAGEMENT ===
cat /etc/passwd                 # "List all users on system"
cat /etc/group                  # "List all groups on system"
getent passwd username          # "Get user information"
getent group groupname          # "Get group information"

# === CHECKING EFFECTIVE PERMISSIONS ===
# Your effective permissions depend on:
# 1. If you're the owner -> use owner permissions
# 2. If you're in the group -> use group permissions
# 3. Otherwise -> use other permissions

# === OWNERSHIP TROUBLESHOOTING ===
# "Why can't I edit this file I created?"
ls -la problematic_file         # "Check ownership and permissions"
sudo chown \$(whoami): problematic_file  # "Take ownership"

# "Why can't the web server access my files?"
sudo chown www-data:www-data web_files/  # "Give web server ownership"

# === SPECIAL OWNERSHIP SCENARIOS ===
# Files created by root
sudo touch /tmp/rootfile
ls -la /tmp/rootfile            # "Owned by root:root"
sudo chown \$(whoami): /tmp/rootfile  # "Take ownership"

# Files in shared directories
sudo mkdir /shared
sudo chgrp developers /shared
sudo chmod g+w /shared          # "Group can write to shared directory"

# === THE OWNERSHIP CHEAT SHEET ===
echo "👑 Ownership Quick Reference:"
echo "chown user file = Change user owner"
echo "chown user:group file = Change user and group"
echo "chown :group file = Change group only"
echo "chgrp group file = Change group owner"
echo "chown -R user:group dir/ = Recursive ownership change"
echo "find / -user username = Find files by owner"`
      },
      {
        title: '4. Special Permissions - The Advanced Security Features 🎭',
        content: 'Beyond the basic rwx permissions, Linux has special permission bits that give you superpowers over file access. We\'re talking about SUID, SGID, and the sticky bit - the advanced security features that separate Linux ninjas from casual users. These aren\'t just academic concepts - they\'re used throughout the system for everything from password changes to shared directories. Understanding special permissions is like unlocking the secret levels in a video game.',
        codeExample: `# === THE SPECIAL PERMISSION TRIO ===
# SUID (Set User ID) - Run as file owner
# SGID (Set Group ID) - Run as file group or inherit group
# Sticky Bit - Only owner can delete files in directory

# === FINDING SPECIAL PERMISSIONS ===
find /usr/bin -perm -4000 2>/dev/null  # "Find SUID files"
find /usr/bin -perm -2000 2>/dev/null  # "Find SGID files"
find /tmp -perm -1000 2>/dev/null      # "Find sticky bit directories"

# === SUID PERMISSIONS (Set User ID) ===
# When a file has SUID, it runs with the permissions of the file owner
ls -la /usr/bin/passwd          # "passwd command has SUID (s in owner execute)"
ls -la /usr/bin/sudo            # "sudo command has SUID"

# Setting SUID
chmod u+s file                  # "Add SUID bit"
chmod 4755 file                 # "Set SUID with octal (4 prefix)"

# === SGID PERMISSIONS (Set Group ID) ===
# For files: runs with group permissions
# For directories: new files inherit the directory's group
ls -ld /var/mail                # "Mail directory often has SGID"

# Setting SGID
chmod g+s file                  # "Add SGID bit"
chmod 2755 file                 # "Set SGID with octal (2 prefix)"

# === STICKY BIT ===
# Only the owner of a file can delete it, even if others have write permission
ls -ld /tmp                     # "tmp directory has sticky bit (t at end)"
ls -ld /var/tmp                 # "Another sticky directory"

# Setting sticky bit
chmod +t directory              # "Add sticky bit"
chmod 1755 directory            # "Set sticky bit with octal (1 prefix)"

# === SPECIAL PERMISSION EXAMPLES ===
echo "🎭 Special Permission Examples:"
echo "4755 = rwsr-xr-x = SUID executable"
echo "2755 = rwxr-sr-x = SGID executable"
echo "1755 = rwxr-xr-t = Directory with sticky bit"
echo "6755 = rwsr-sr-x = Both SUID and SGID"
echo "7755 = rwsr-sr-t = All special bits set"

# === CREATING SPECIAL PERMISSION SCENARIOS ===
# Create a shared directory with SGID
mkdir shared_project
chmod g+s shared_project        # "Files created here inherit group"
chmod 2775 shared_project       # "Alternative method"

# Create a directory with sticky bit
mkdir public_drop
chmod +t public_drop            # "Only file owners can delete their files"
chmod 1777 public_drop          # "Alternative method"

# === SECURITY IMPLICATIONS ===
echo "🔒 Special Permissions Security:"
echo "SUID files can be security risks if not properly secured"
echo "Always audit SUID/SGID files on your system"
echo "Sticky bit prevents accidental deletion in shared directories"

# === SPECIAL PERMISSION TROUBLESHOOTING ===
# "Why does this script run as root when I'm not root?"
ls -la suspicious_script        # "Check for SUID bit"

# "Why do files in this directory have weird group ownership?"
ls -ld directory                # "Check for SGID bit"

# "Why can't I delete this file in /tmp?"
ls -ld /tmp                     # "Check for sticky bit"
ls -la /tmp/problematic_file    # "Check file ownership"

# === REMOVING SPECIAL PERMISSIONS ===
chmod u-s file                  # "Remove SUID"
chmod g-s file                  # "Remove SGID"
chmod -t directory              # "Remove sticky bit"
chmod 755 file                  # "Reset to normal permissions"

# === ADVANCED SPECIAL PERMISSION USAGE ===
# Create a program that always runs as a specific user
sudo chown root:root myprogram
sudo chmod 4755 myprogram       # "Now runs as root regardless of who executes it"

# Create a shared development directory
sudo mkdir /shared/dev
sudo chgrp developers /shared/dev
sudo chmod 2775 /shared/dev     # "SGID + group write"

# === THE SPECIAL PERMISSIONS CHEAT SHEET ===
echo "🎭 Special Permissions Quick Reference:"
echo "chmod u+s file = Add SUID (runs as owner)"
echo "chmod g+s file = Add SGID (runs as group)"
echo "chmod +t dir = Add sticky bit (owner-only delete)"
echo "chmod 4755 = SUID + 755"
echo "chmod 2755 = SGID + 755"
echo "chmod 1755 = Sticky + 755"
echo "find / -perm -4000 = Find SUID files"`
      },
      {
        title: '5. Permission Mastery - Advanced Techniques and Security 🛡️',
        content: 'Time to become a true Linux permission master! This is where we dive into the advanced techniques, security considerations, and real-world scenarios that separate the pros from the amateurs. We\'re talking about ACLs, umask, permission auditing, and the kind of security wizardry that will make system administrators respect your skills. This isn\'t just about knowing commands - this is about understanding the philosophy of Linux security and implementing it like a pro.',
        codeExample: `# === ADVANCED PERMISSION ANALYSIS ===
# Find files with specific permission patterns
find / -perm 777 2>/dev/null            # "Find world-writable files (security risk!)"
find / -perm -002 2>/dev/null           # "Find world-writable files (alternative)"
find / -perm -4000 2>/dev/null          # "Find SUID files"
find / -perm -2000 2>/dev/null          # "Find SGID files"
find / -type f -perm -o+w 2>/dev/null   # "Find files writable by others"

# === UMASK - DEFAULT PERMISSION CONTROL ===
umask                           # "Show current umask"
umask 022                       # "Set umask to 022 (default for most systems)"
umask 077                       # "Set restrictive umask (no permissions for group/others)"

# Understanding umask calculation:
# Default file permissions: 666 (rw-rw-rw-)
# Default directory permissions: 777 (rwxrwxrwx)
# Actual permissions = Default - umask

echo "🎯 umask Examples:"
echo "umask 022: files=644, directories=755"
echo "umask 077: files=600, directories=700"
echo "umask 002: files=664, directories=775"

# === PERMISSION AUDITING ===
# Security audit commands
find /home -type f -perm -o+w 2>/dev/null  # "World-writable files in home"
find /etc -type f -perm -o+w 2>/dev/null   # "World-writable config files"
find /usr/bin -type f -perm -4000          # "SUID binaries"
find /var -type d -perm -o+w 2>/dev/null   # "World-writable directories"

# === ACCESS CONTROL LISTS (ACLs) ===
# Advanced permissions beyond user/group/other
getfacl file.txt                # "Show ACL permissions" (if supported)
setfacl -m u:username:rw file.txt # "Give specific user read/write access"
setfacl -m g:groupname:r file.txt  # "Give specific group read access"
setfacl -x u:username file.txt     # "Remove ACL for specific user"
setfacl -b file.txt                # "Remove all ACLs"

# === PERMISSION TROUBLESHOOTING TOOLKIT ===
# Comprehensive permission checker
check_permissions() {
    local file="\$1"
    echo "🔍 Permission Analysis for: \$file"

    if [ ! -e "\$file" ]; then
        echo "❌ File does not exist"
        return 1
    fi

    echo "📊 Basic Info:"
    ls -la "\$file"

    echo "📋 Detailed Info:"
    stat "\$file"

    echo "🔐 Access Tests:"
    test -r "\$file" && echo "✅ Readable" || echo "❌ Not readable"
    test -w "\$file" && echo "✅ Writable" || echo "❌ Not writable"
    test -x "\$file" && echo "✅ Executable" || echo "❌ Not executable"

    echo "👤 Ownership:"
    echo "Owner: \$(stat -c %U "\$file")"
    echo "Group: \$(stat -c %G "\$file")"

    echo "🎭 Special Permissions:"
    if [ \$(stat -c %a "\$file" | cut -c1) -gt 0 ]; then
        echo "⚠️ Special permissions detected"
    else
        echo "✅ No special permissions"
    fi
}

# === BULK PERMISSION OPERATIONS ===
# Fix common permission issues
fix_script_permissions() {
    find . -name "*.sh" -exec chmod +x {} \\;
    echo "✅ Made all .sh files executable"
}

fix_directory_permissions() {
    find . -type d -exec chmod 755 {} \\;
    find . -type f -exec chmod 644 {} \\;
    echo "✅ Set standard permissions: directories=755, files=644"
}

secure_private_files() {
    find . -name "*.key" -exec chmod 600 {} \\;
    find . -name "*password*" -exec chmod 600 {} \\;
    find . -name "*.pem" -exec chmod 600 {} \\;
    echo "✅ Secured private files (600 permissions)"
}

# === PERMISSION BACKUP AND RESTORE ===
# Backup permissions
backup_permissions() {
    local dir="\${1:-.}"
    find "\$dir" -type f -exec stat -c "%n %a" {} \\; > permissions_backup.txt
    echo "✅ Permissions backed up to permissions_backup.txt"
}

# Restore permissions
restore_permissions() {
    if [ -f permissions_backup.txt ]; then
        while read file perm; do
            chmod "\$perm" "\$file" 2>/dev/null
        done < permissions_backup.txt
        echo "✅ Permissions restored from backup"
    else
        echo "❌ No backup file found"
    fi
}

# === SECURITY BEST PRACTICES ===
security_audit() {
    echo "🛡️ Security Audit Report:"

    echo "📊 World-writable files:"
    find / -type f -perm -002 2>/dev/null | head -10

    echo "📊 SUID files:"
    find /usr/bin -perm -4000 2>/dev/null | head -10

    echo "📊 Files with no owner:"
    find / -nouser 2>/dev/null | head -5

    echo "📊 Large files in /tmp:"
    find /tmp -type f -size +100M 2>/dev/null

    echo "📊 Recently modified system files:"
    find /etc -type f -mtime -1 2>/dev/null
}

# === PERMISSION RECIPES ===
# Common permission scenarios
setup_web_directory() {
    local webdir="\$1"
    sudo chown -R www-data:www-data "\$webdir"
    sudo find "\$webdir" -type d -exec chmod 755 {} \\;
    sudo find "\$webdir" -type f -exec chmod 644 {} \\;
    echo "✅ Web directory configured: \$webdir"
}

setup_shared_project() {
    local projdir="\$1"
    local group="\$2"
    sudo mkdir -p "\$projdir"
    sudo chgrp "\$group" "\$projdir"
    sudo chmod 2775 "\$projdir"  # SGID + group write
    echo "✅ Shared project directory configured: \$projdir"
}

secure_ssh_keys() {
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/id_*
    chmod 644 ~/.ssh/*.pub
    chmod 644 ~/.ssh/authorized_keys
    chmod 644 ~/.ssh/known_hosts
    echo "✅ SSH keys secured"
}

# === THE PERMISSION MASTER'S TOOLKIT ===
permission_master() {
    case "\$1" in
        "check")
            check_permissions "\$2"
            ;;
        "audit")
            security_audit
            ;;
        "fix-scripts")
            fix_script_permissions
            ;;
        "fix-dirs")
            fix_directory_permissions
            ;;
        "secure")
            secure_private_files
            ;;
        "backup")
            backup_permissions "\$2"
            ;;
        "restore")
            restore_permissions
            ;;
        "web")
            setup_web_directory "\$2"
            ;;
        "shared")
            setup_shared_project "\$2" "\$3"
            ;;
        "ssh")
            secure_ssh_keys
            ;;
        *)
            echo "🛡️ Permission Master Commands:"
            echo "  permission_master check FILE     - Analyze file permissions"
            echo "  permission_master audit          - Security audit"
            echo "  permission_master fix-scripts    - Make .sh files executable"
            echo "  permission_master fix-dirs       - Fix directory permissions"
            echo "  permission_master secure         - Secure private files"
            echo "  permission_master backup [DIR]   - Backup permissions"
            echo "  permission_master restore        - Restore permissions"
            echo "  permission_master web DIR        - Setup web directory"
            echo "  permission_master shared DIR GRP - Setup shared project"
            echo "  permission_master ssh            - Secure SSH keys"
            ;;
    esac
}

# === CONGRATULATIONS! ===
echo "🎓 Permission Mastery Complete!"
echo "You now understand:"
echo "✅ How to read permission strings like Matrix code"
echo "✅ chmod command in both octal and symbolic modes"
echo "✅ File ownership and the chown/chgrp commands"
echo "✅ Special permissions: SUID, SGID, and sticky bit"
echo "✅ Advanced security techniques and auditing"
echo "✅ Real-world permission scenarios and solutions"
echo ""
echo "🛡️ You are now a Linux Permission Master!"
echo "Use your powers to keep systems secure! 🚀"`
      }
    ]
  }
}