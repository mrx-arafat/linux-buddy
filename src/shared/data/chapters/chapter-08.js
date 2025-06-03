export const chapter8 = {
  id: '08',
  icon: '🦸',
  title: 'SUDO',
  description: 'Superuser privileges and sudo command',
  slug: 'sudo',
  content: {
    overview: 'Welcome to the world of SUDO - your gateway to Linux superpowers! 🦸 If you\'ve ever wondered why you need to type `sudo` before certain commands, why Linux keeps asking for your password, or what the difference is between being a regular user and having "root access," this chapter is your superhero origin story. SUDO isn\'t just a command - it\'s the elegant security system that lets you temporarily become the most powerful user on the system without actually logging in as root. Think of it as your Linux cape and mask - it gives you superpowers when you need them, but keeps you safe from accidentally destroying your system when you don\'t. We\'re going to master sudo configuration, understand the security philosophy behind it, and turn you into a responsible Linux superhero who knows when and how to use their powers! 🚀',
    sections: [
      {
        title: '1. Understanding SUDO - Your Linux Superpowers 💪',
        content: 'SUDO stands for "Substitute User DO" or "Super User DO" - basically, it\'s your temporary promotion to system administrator. While Windows gives everyone admin rights by default (and then wonders why malware spreads so easily), and macOS asks for your password for everything, Linux uses sudo as a precise, controlled way to grant elevated privileges. It\'s like having a security clearance system where you can temporarily access classified information, but only when you really need it and only for specific tasks.',
        codeExample: `# === THE SUDO REVELATION ===
sudo whoami                     # "Who am I when using sudo?" (should show "root")
whoami                          # "Who am I normally?" (your regular username)
id                              # "Show my regular user info"
sudo id                         # "Show my sudo user info"

# === BASIC SUDO USAGE ===
sudo ls /root                   # "List root's home directory"
sudo cat /etc/shadow            # "Read the shadow password file"
sudo systemctl restart apache2 # "Restart a system service"
sudo apt update                 # "Update package lists"
sudo mkdir /opt/myapp           # "Create directory in system location"

# === WHY SUDO EXISTS ===
# Without sudo, you'd have to:
# 1. Log in as root (dangerous!)
# 2. Give everyone root access (insane!)
# 3. Live without admin privileges (useless!)
#
# With sudo, you get:
# ✅ Temporary elevated privileges
# ✅ Audit trail of who did what
# ✅ Granular control over permissions
# ✅ Safety from accidental system damage

# === SUDO VS ROOT LOGIN ===
echo "🦸 SUDO vs ROOT comparison:"
echo "sudo command = Temporary superpowers for one command"
echo "su -         = Become root user completely"
echo "sudo su -    = Use sudo to become root"

# === CHECKING SUDO ACCESS ===
sudo -l                         # "What can I do with sudo?"
sudo -v                         # "Validate sudo credentials (refresh timeout)"
sudo -k                         # "Kill sudo credentials (force re-authentication)"

# === SUDO TIMEOUT ===
# By default, sudo remembers your password for 15 minutes
sudo echo "First command - will ask for password"
sudo echo "Second command - won't ask (within timeout)"
# Wait 15 minutes...
sudo echo "After timeout - will ask for password again"

# === SUDO WITH DIFFERENT USERS ===
sudo -u username command        # "Run command as specific user"
sudo -u www-data ls /var/www    # "Run as web server user"
sudo -u postgres psql           # "Run as database user"

# === SUDO ENVIRONMENT ===
sudo env                        # "Show environment when using sudo"
sudo -E command                 # "Preserve user environment"
sudo -H command                 # "Set HOME to target user's home"

# === THE SUDO REALITY CHECK ===
echo "🎯 SUDO Reality:"
echo "sudo = Temporary admin powers"
echo "Great power = Great responsibility"
echo "Always think before you sudo"
echo "With great sudo comes great possibility of breaking things!"

# === COMMON SUDO SCENARIOS ===
sudo apt install package        # "Install software"
sudo systemctl status service   # "Check service status"
sudo chmod 755 /usr/local/bin/script # "Change permissions on system files"
sudo chown root:root /etc/config # "Change ownership of system files"
sudo mount /dev/sdb1 /mnt       # "Mount filesystems"

# === SUDO SAFETY TIPS ===
echo "🛡️ SUDO Safety Tips:"
echo "1. Always read the command before pressing Enter"
echo "2. Don't sudo random commands from the internet"
echo "3. Use sudo only when necessary"
echo "4. Understand what the command does"
echo "5. sudo rm -rf / is NOT a joke - it will destroy everything!"

# === CHECKING IF YOU HAVE SUDO ACCESS ===
groups \$(whoami) | grep -q sudo && echo "✅ You have sudo access" || echo "❌ No sudo access"
sudo -n true 2>/dev/null && echo "✅ Sudo credentials cached" || echo "❌ Need to authenticate"`
      },
      {
        title: '2. SUDO Configuration - Becoming the Sudo Master 🎛️',
        content: 'The real power of sudo isn\'t just in using it - it\'s in configuring it. The `/etc/sudoers` file is where the magic happens, where you define who can do what with sudo. This isn\'t just configuration - this is system security architecture. We\'re going to learn how to safely edit sudoers, understand the syntax, and create custom sudo rules that would make security professionals weep with joy.',
        codeExample: `# === THE SUDOERS FILE ===
sudo cat /etc/sudoers           # "View the sudoers configuration"
sudo visudo                     # "SAFELY edit sudoers file"
# NEVER edit /etc/sudoers directly! Always use visudo!

# === SUDOERS FILE STRUCTURE ===
# Format: user host=(runas) commands
# Examples from /etc/sudoers:
# root    ALL=(ALL:ALL) ALL
# %admin  ALL=(ALL) ALL
# %sudo   ALL=(ALL:ALL) ALL

# === UNDERSTANDING SUDOERS SYNTAX ===
echo "🎛️ Sudoers Syntax Breakdown:"
echo "user = who can run commands"
echo "host = on which machines (usually ALL)"
echo "(runas) = as which user (usually ALL)"
echo "commands = what commands (ALL or specific)"

# === COMMON SUDOERS ENTRIES ===
# Give user full sudo access:
# username ALL=(ALL:ALL) ALL

# Give user specific commands only:
# username ALL=(ALL) /usr/bin/systemctl, /usr/bin/apt

# Allow group to run commands without password:
# %groupname ALL=(ALL) NOPASSWD: ALL

# Allow user to restart specific service without password:
# username ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart apache2

# === CHECKING SUDOERS SYNTAX ===
sudo visudo -c                  # "Check sudoers file syntax"
sudo visudo -f /etc/sudoers.d/myfile # "Edit specific sudoers file"

# === SUDOERS.D DIRECTORY ===
ls -la /etc/sudoers.d/          # "List additional sudoers files"
sudo cat /etc/sudoers.d/*       # "View all additional sudoers files"

# === CREATING CUSTOM SUDO RULES ===
# Create a new sudoers file for specific user
sudo visudo -f /etc/sudoers.d/developer
# Add content like:
# developer ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx
# developer ALL=(ALL) /usr/bin/apt update, /usr/bin/apt upgrade

# === SUDO ALIASES ===
# In sudoers file, you can create aliases:
# User_Alias WEBADMINS = john, jane, bob
# Cmnd_Alias WEBCOMMANDS = /usr/bin/systemctl restart apache2, /usr/bin/systemctl reload nginx
# WEBADMINS ALL=(ALL) WEBCOMMANDS

# === TESTING SUDO CONFIGURATION ===
sudo -l                         # "List what I can do with sudo"
sudo -l -U username             # "List what specific user can do"
sudo -v                         # "Validate and refresh sudo credentials"

# === SUDO LOGGING ===
sudo tail -f /var/log/auth.log  # "Watch sudo usage in real-time"
grep sudo /var/log/auth.log     # "Find all sudo usage"
sudo journalctl | grep sudo     # "View sudo logs with journalctl"

# === ADVANCED SUDO OPTIONS ===
# In sudoers file:
# Defaults passwd_timeout=30     # Password prompt timeout
# Defaults timestamp_timeout=60  # How long sudo remembers password
# Defaults insults              # Enable sudo insults for wrong passwords
# Defaults lecture=never        # Disable sudo lecture for new users

# === SUDO SECURITY FEATURES ===
echo "🔒 SUDO Security Features:"
echo "- Password required by default"
echo "- Timeout after inactivity"
echo "- Detailed logging of all actions"
echo "- Granular permission control"
echo "- Safe configuration editing with visudo"

# === TROUBLESHOOTING SUDO ===
# "User is not in the sudoers file"
sudo usermod -aG sudo username  # "Add user to sudo group"

# "sudo: command not found"
which sudo                      # "Is sudo installed?"
apt list --installed | grep sudo # "Check if sudo is installed"

# "Sorry, try again" (wrong password)
# Make sure you're typing YOUR password, not root's password

# === SUDO BEST PRACTICES ===
echo "🎯 SUDO Best Practices:"
echo "1. Use visudo to edit sudoers files"
echo "2. Give minimal necessary permissions"
echo "3. Use groups instead of individual users when possible"
echo "4. Regular audit of sudo permissions"
echo "5. Monitor sudo logs for suspicious activity"
echo "6. Use NOPASSWD sparingly and only for safe commands"

# === THE SUDOERS CHEAT SHEET ===
echo "🎛️ Sudoers Quick Reference:"
echo "sudo visudo = Edit sudoers safely"
echo "user ALL=(ALL:ALL) ALL = Full sudo access"
echo "user ALL=(ALL) NOPASSWD: command = No password for specific command"
echo "%group ALL=(ALL) ALL = Group gets sudo access"
echo "sudo -l = List my sudo permissions"`
      },
      {
        title: '3. Advanced SUDO Techniques - Ninja-Level Privilege Management 🥷',
        content: 'Time to level up from sudo user to sudo ninja! This is where we explore the advanced features that most people never learn but make all the difference in professional environments. We\'re talking about sudo aliases, environment handling, security policies, and the kind of advanced techniques that will make system administrators respect your skills. This isn\'t just about running commands as root - this is about architecting secure, scalable privilege management systems.',
        codeExample: `# === ADVANCED SUDO OPTIONS ===
sudo -i                         # "Interactive login shell as root"
sudo -s                         # "Shell as root (non-login)"
sudo -u user -i                 # "Interactive shell as specific user"
sudo -g group command           # "Run command as specific group"

# === SUDO WITH ENVIRONMENT CONTROL ===
sudo -E env | grep HOME         # "Preserve environment variables"
sudo env HOME=/tmp whoami       # "Set specific environment variables"
sudo -H -u user bash            # "Set HOME to target user's home"

# === SUDO ALIASES AND FUNCTIONS ===
# Create useful sudo aliases in ~/.bashrc
alias svi='sudo vi'             # "Sudo vi"
alias scat='sudo cat'           # "Sudo cat"
alias stail='sudo tail -f'      # "Sudo tail follow"
alias sless='sudo less'         # "Sudo less"
alias srestart='sudo systemctl restart'  # "Sudo service restart"

# === SUDO WITH PIPES AND REDIRECTION ===
# These DON'T work as expected:
# sudo echo "text" > /root/file  # Wrong! Redirection runs as user
# sudo cat file | grep pattern > /root/output  # Wrong! Pipe runs as user

# These DO work:
sudo sh -c 'echo "text" > /root/file'  # "Correct way to redirect as root"
sudo tee /root/file <<< "text"         # "Alternative using tee"
cat file | sudo tee /root/output       # "Correct way to pipe to root file"

# === SUDO PASSWORD CACHING ===
sudo -v                         # "Refresh sudo timestamp"
sudo -K                         # "Kill all sudo timestamps"
sudo -k                         # "Kill current sudo timestamp"

# Check if sudo is cached
sudo -n true 2>/dev/null && echo "Sudo cached" || echo "Need password"

# === SUDO WITH COMPLEX COMMANDS ===
# Running complex commands with sudo
sudo bash -c 'cd /root && ls -la && pwd'  # "Multiple commands as root"
sudo sh -c 'for file in /etc/*.conf; do echo "Processing \$file"; done'

# === SUDO SECURITY POLICIES ===
# View current sudo security policy
sudo -l -l                      # "Detailed sudo policy information"

# === SUDO WITH DIFFERENT SHELLS ===
sudo -u user -s /bin/zsh        # "Run zsh as specific user"
sudo -u user -s /bin/fish       # "Run fish shell as specific user"

# === SUDO ENVIRONMENT VARIABLES ===
echo "🔧 Important SUDO Environment Variables:"
echo "SUDO_USER = Original user who ran sudo"
echo "SUDO_UID = Original user's UID"
echo "SUDO_GID = Original user's GID"
echo "SUDO_COMMAND = Command being executed"

# Check these in a sudo command
sudo bash -c 'echo "Original user: \$SUDO_USER"; echo "Command: \$SUDO_COMMAND"'

# === SUDO WITH SYSTEMD ===
sudo systemctl --user status    # "User systemd services"
sudo loginctl list-sessions     # "List login sessions"
sudo journalctl -u service      # "View service logs"

# === SUDO DEBUGGING ===
sudo -D 9 command               # "Debug sudo execution (max verbosity)"
sudo -l -v                      # "Verbose sudo policy listing"

# === ADVANCED SUDOERS FEATURES ===
# In /etc/sudoers or /etc/sudoers.d/ files:

# Command aliases
# Cmnd_Alias NETWORKING = /sbin/route, /sbin/ifconfig, /bin/ping
# Cmnd_Alias SOFTWARE = /bin/rpm, /usr/bin/up2date, /usr/bin/yum

# User aliases
# User_Alias ADMINS = jsmith, mikem
# User_Alias WEBMASTERS = will, wendy, wim

# Host aliases
# Host_Alias SERVERS = 192.168.1.1, 192.168.1.2, server1, server2

# Runas aliases
# Runas_Alias OP = root, operator

# === SUDO WITH SPECIFIC ARGUMENTS ===
# Allow specific arguments only
# username ALL=(ALL) /usr/bin/systemctl restart apache2
# username ALL=(ALL) /usr/bin/systemctl reload nginx

# === SUDO SECURITY RESTRICTIONS ===
# Restrict dangerous commands
# username ALL=(ALL) ALL, !/usr/bin/su, !/bin/sh, !/usr/bin/passwd root

# === THE ADVANCED SUDO TOOLKIT ===
# Create a sudo management function
sudo_manager() {
    case "\$1" in
        "check")
            sudo -l
            ;;
        "refresh")
            sudo -v
            ;;
        "kill")
            sudo -K
            ;;
        "test")
            sudo -n true 2>/dev/null && echo "✅ Sudo active" || echo "❌ Need authentication"
            ;;
        "logs")
            sudo tail -20 /var/log/auth.log | grep sudo
            ;;
        "who")
            echo "Original user: \$SUDO_USER"
            echo "Current user: \$(whoami)"
            echo "Effective UID: \$(id -u)"
            ;;
        *)
            echo "🥷 Sudo Manager Commands:"
            echo "  sudo_manager check   - Show sudo permissions"
            echo "  sudo_manager refresh - Refresh sudo timeout"
            echo "  sudo_manager kill    - Kill sudo cache"
            echo "  sudo_manager test    - Test if sudo is cached"
            echo "  sudo_manager logs    - Show recent sudo logs"
            echo "  sudo_manager who     - Show user information"
            ;;
    esac
}

# === SUDO BEST PRACTICES FOR PROS ===
echo "🥷 Advanced SUDO Best Practices:"
echo "1. Use command aliases for complex permission sets"
echo "2. Implement least privilege principle"
echo "3. Regular audit of sudo usage logs"
echo "4. Use NOPASSWD only for automation scripts"
echo "5. Implement sudo session recording for compliance"
echo "6. Use sudo with specific arguments when possible"
echo "7. Never allow sudo access to shells or su command"`
      },
      {
        title: '4. SUDO Security and Monitoring - Protecting Your Kingdom 🛡️',
        content: 'With great sudo power comes great security responsibility! This section is about protecting your system from sudo abuse, monitoring sudo usage, and implementing security best practices that would make cybersecurity experts proud. We\'re going to turn you into a sudo security expert who can detect threats, prevent abuse, and maintain audit trails that satisfy even the most paranoid compliance requirements.',
        codeExample: `# === SUDO SECURITY MONITORING ===
# Real-time sudo monitoring
sudo tail -f /var/log/auth.log | grep sudo  # "Watch sudo usage live"
sudo journalctl -f | grep sudo              # "Alternative with journalctl"

# === SUDO LOG ANALYSIS ===
# Find all sudo usage
grep sudo /var/log/auth.log                 # "All sudo activity"
grep "COMMAND=" /var/log/auth.log           # "All sudo commands executed"
grep "authentication failure" /var/log/auth.log # "Failed sudo attempts"

# === SUDO USAGE STATISTICS ===
# Count sudo usage by user
grep sudo /var/log/auth.log | awk '{print \$5}' | sort | uniq -c | sort -nr

# Most used sudo commands
grep "COMMAND=" /var/log/auth.log | awk -F'COMMAND=' '{print \$2}' | sort | uniq -c | sort -nr

# === SUDO SECURITY ALERTS ===
# Create a sudo monitoring script
sudo_monitor() {
    echo "🛡️ SUDO Security Report:"
    echo "========================"

    echo "📊 Recent sudo activity (last 24 hours):"
    grep sudo /var/log/auth.log | grep "\$(date +%b\ %d)" | wc -l

    echo "⚠️ Failed sudo attempts:"
    grep "authentication failure" /var/log/auth.log | grep "\$(date +%b\ %d)" | wc -l

    echo "👥 Users who used sudo today:"
    grep sudo /var/log/auth.log | grep "\$(date +%b\ %d)" | awk '{print \$5}' | sort | uniq

    echo "🚨 Suspicious sudo activity:"
    grep -E "(rm -rf|dd if=|mkfs|fdisk)" /var/log/auth.log | grep "\$(date +%b\ %d)"
}

# === SUDO SECURITY POLICIES ===
# Implement security restrictions in sudoers
echo "🔒 Security-focused sudoers entries:"
echo "# Deny dangerous commands"
echo "username ALL=(ALL) ALL, !/bin/su, !/usr/bin/passwd root, !/bin/sh"
echo ""
echo "# Allow only specific safe commands"
echo "webdev ALL=(ALL) /usr/bin/systemctl restart nginx, /usr/bin/systemctl reload apache2"
echo ""
echo "# Require password for sensitive operations"
echo "admin ALL=(ALL) PASSWD: /usr/bin/userdel, /usr/bin/usermod"

# === SUDO SESSION RECORDING ===
# Enable sudo session recording (if supported)
echo "📹 Sudo session recording configuration:"
echo "# In /etc/sudoers:"
echo "Defaults log_input, log_output"
echo "Defaults iolog_dir=/var/log/sudo-io"
echo "Defaults iolog_file=%{seq}"

# === SUDO INTRUSION DETECTION ===
# Detect potential sudo abuse
detect_sudo_abuse() {
    echo "🚨 Sudo Abuse Detection:"

    # Multiple failed attempts
    failed_attempts=\$(grep "authentication failure" /var/log/auth.log | grep "\$(date +%b\ %d)" | wc -l)
    if [ \$failed_attempts -gt 5 ]; then
        echo "⚠️ HIGH: \$failed_attempts failed sudo attempts today"
    fi

    # Root shell access
    root_shells=\$(grep -E "sudo.*(/bin/bash|\\/bin/sh|su -)" /var/log/auth.log | grep "\$(date +%b\ %d)" | wc -l)
    if [ \$root_shells -gt 0 ]; then
        echo "⚠️ MEDIUM: \$root_shells root shell access attempts"
    fi

    # Dangerous commands
    dangerous_cmds=\$(grep -E "sudo.*(rm -rf|dd if=|mkfs|fdisk|passwd root)" /var/log/auth.log | grep "\$(date +%b\ %d)" | wc -l)
    if [ \$dangerous_cmds -gt 0 ]; then
        echo "🚨 CRITICAL: \$dangerous_cmds dangerous commands executed"
    fi
}

# === SUDO ACCESS AUDITING ===
# Audit who has sudo access
audit_sudo_access() {
    echo "👥 Sudo Access Audit:"
    echo "===================="

    echo "📋 Users in sudo group:"
    getent group sudo | cut -d: -f4 | tr ',' '\\n'

    echo "📋 Users in admin group:"
    getent group admin 2>/dev/null | cut -d: -f4 | tr ',' '\\n'

    echo "📋 Custom sudoers entries:"
    sudo grep -v "^#" /etc/sudoers | grep -v "^$"

    echo "📋 Additional sudoers files:"
    ls -la /etc/sudoers.d/
}

# === SUDO COMPLIANCE REPORTING ===
# Generate compliance report
sudo_compliance_report() {
    echo "📊 SUDO Compliance Report"
    echo "========================"
    echo "Generated: \$(date)"
    echo ""

    echo "🔐 Sudo Configuration:"
    echo "- Sudoers file last modified: \$(stat -c %y /etc/sudoers)"
    echo "- Additional sudoers files: \$(ls /etc/sudoers.d/ | wc -l)"
    echo ""

    echo "📈 Usage Statistics (last 30 days):"
    echo "- Total sudo commands: \$(grep sudo /var/log/auth.log | wc -l)"
    echo "- Unique users: \$(grep sudo /var/log/auth.log | awk '{print \$5}' | sort | uniq | wc -l)"
    echo "- Failed attempts: \$(grep "authentication failure" /var/log/auth.log | wc -l)"
    echo ""

    echo "⚠️ Security Incidents:"
    echo "- Root password changes: \$(grep "passwd root" /var/log/auth.log | wc -l)"
    echo "- Shell escalations: \$(grep -E "sudo.*(/bin/bash|/bin/sh|su -)" /var/log/auth.log | wc -l)"
}

# === SUDO SECURITY HARDENING ===
echo "🛡️ Sudo Security Hardening Checklist:"
echo "1. ✅ Use visudo for all sudoers modifications"
echo "2. ✅ Implement least privilege principle"
echo "3. ✅ Enable sudo logging and monitoring"
echo "4. ✅ Regular audit of sudo permissions"
echo "5. ✅ Restrict dangerous commands"
echo "6. ✅ Use groups instead of individual users"
echo "7. ✅ Implement session recording for compliance"
echo "8. ✅ Monitor for suspicious sudo activity"
echo "9. ✅ Regular review of sudo logs"
echo "10. ✅ Implement alerting for security events"

# === EMERGENCY SUDO PROCEDURES ===
echo "🚨 Emergency Sudo Procedures:"
echo "If sudo is compromised:"
echo "1. Immediately revoke sudo access: sudo visudo"
echo "2. Check recent sudo activity: grep sudo /var/log/auth.log"
echo "3. Review all sudo-enabled accounts"
echo "4. Change passwords for affected accounts"
echo "5. Audit system for unauthorized changes"
echo "6. Implement additional monitoring"`
      },
      {
        title: '5. SUDO Mastery - Real-World Scenarios and Pro Tips 🎯',
        content: 'Time to become a true SUDO master! This final section covers real-world scenarios, professional deployment strategies, and the kind of advanced sudo wizardry that separates system administrators from sudo masters. We\'re talking about enterprise-grade sudo configurations, automation strategies, and troubleshooting techniques that will make you the go-to person for privilege management in any organization.',
        codeExample: `# === ENTERPRISE SUDO DEPLOYMENT ===
# Multi-tier sudo access structure
echo "🏢 Enterprise Sudo Architecture:"
echo "Level 1: Basic users - No sudo access"
echo "Level 2: Power users - Limited sudo for development"
echo "Level 3: System admins - Full sudo with restrictions"
echo "Level 4: Security admins - Unrestricted sudo access"

# === SUDO FOR AUTOMATION ===
# Service account sudo configuration
echo "🤖 Automation-friendly sudo setup:"
echo "# In /etc/sudoers.d/automation:"
echo "automation_user ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart myapp"
echo "automation_user ALL=(ALL) NOPASSWD: /usr/bin/systemctl status myapp"
echo "automation_user ALL=(ALL) NOPASSWD: /bin/cp /tmp/config/* /etc/myapp/"

# === SUDO WITH CONFIGURATION MANAGEMENT ===
# Ansible sudo configuration
echo "📋 Ansible sudo configuration:"
echo "# In ansible playbook:"
echo "- name: Configure sudo for web team"
echo "  lineinfile:"
echo "    path: /etc/sudoers.d/webteam"
echo "    line: '%webteam ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx'"
echo "    create: yes"
echo "    validate: 'visudo -cf %s'"

# === SUDO TROUBLESHOOTING SCENARIOS ===
# Common sudo problems and solutions
sudo_troubleshoot() {
    echo "🔧 SUDO Troubleshooting Guide:"
    echo "=============================="

    # Check if user has sudo access
    if groups \$(whoami) | grep -q sudo; then
        echo "✅ User is in sudo group"
    else
        echo "❌ User NOT in sudo group"
        echo "Fix: sudo usermod -aG sudo \$(whoami)"
    fi

    # Check sudo configuration
    if sudo -l >/dev/null 2>&1; then
        echo "✅ Sudo configuration is valid"
    else
        echo "❌ Sudo configuration error"
        echo "Fix: sudo visudo -c"
    fi

    # Check sudo service
    if systemctl is-active sudo >/dev/null 2>&1; then
        echo "✅ Sudo service is running"
    else
        echo "❌ Sudo service issue"
        echo "Fix: sudo systemctl restart sudo"
    fi
}

# === SUDO PERFORMANCE OPTIMIZATION ===
# Optimize sudo for large environments
echo "⚡ Sudo Performance Optimization:"
echo "# In /etc/sudoers:"
echo "Defaults timestamp_timeout=60    # Longer timeout reduces auth requests"
echo "Defaults passwd_tries=3          # Limit password attempts"
echo "Defaults passwd_timeout=5        # Faster timeout for wrong passwords"
echo "Defaults !lecture               # Skip lecture for experienced users"

# === SUDO WITH LDAP/AD INTEGRATION ===
echo "🌐 Enterprise Directory Integration:"
echo "# LDAP sudo configuration in /etc/sudoers:"
echo "#includedir /etc/sudoers.d"
echo "# LDAP groups:"
echo "%domain_admins ALL=(ALL:ALL) ALL"
echo "%helpdesk ALL=(ALL) /usr/bin/systemctl restart, /usr/bin/systemctl status"

# === SUDO BACKUP AND DISASTER RECOVERY ===
# Backup sudo configuration
backup_sudo_config() {
    local backup_dir="/backup/sudo/\$(date +%Y%m%d)"
    sudo mkdir -p "\$backup_dir"

    echo "💾 Backing up sudo configuration..."
    sudo cp /etc/sudoers "\$backup_dir/"
    sudo cp -r /etc/sudoers.d "\$backup_dir/"
    sudo cp /var/log/auth.log "\$backup_dir/"

    echo "✅ Sudo configuration backed up to \$backup_dir"
}

# Restore sudo configuration
restore_sudo_config() {
    local backup_dir="\$1"
    if [ ! -d "\$backup_dir" ]; then
        echo "❌ Backup directory not found: \$backup_dir"
        return 1
    fi

    echo "🔄 Restoring sudo configuration..."
    sudo cp "\$backup_dir/sudoers" /etc/sudoers.backup
    sudo visudo -c -f "\$backup_dir/sudoers" && {
        sudo cp "\$backup_dir/sudoers" /etc/sudoers
        sudo cp -r "\$backup_dir/sudoers.d"/* /etc/sudoers.d/
        echo "✅ Sudo configuration restored"
    } || {
        echo "❌ Invalid sudoers file in backup"
    }
}

# === SUDO COMPLIANCE AND AUDITING ===
# SOX/PCI compliance sudo setup
compliance_sudo_setup() {
    echo "📋 Compliance-Ready Sudo Configuration:"

    # Enable comprehensive logging
    echo "Defaults log_host, log_year, logfile=/var/log/sudo.log" | sudo tee -a /etc/sudoers.d/compliance
    echo "Defaults log_input, log_output" | sudo tee -a /etc/sudoers.d/compliance
    echo "Defaults iolog_dir=/var/log/sudo-io/%{user}" | sudo tee -a /etc/sudoers.d/compliance

    # Require reason for sudo usage
    echo "Defaults passprompt=\"[sudo] password for %p (Reason required): \"" | sudo tee -a /etc/sudoers.d/compliance

    # Set strict timeouts
    echo "Defaults timestamp_timeout=5" | sudo tee -a /etc/sudoers.d/compliance

    echo "✅ Compliance sudo configuration applied"
}

# === SUDO MONITORING DASHBOARD ===
# Create a sudo monitoring dashboard
sudo_dashboard() {
    clear
    echo "🎛️ SUDO MONITORING DASHBOARD"
    echo "============================"
    echo "Last updated: \$(date)"
    echo ""

    echo "📊 CURRENT STATUS:"
    echo "- Active sudo sessions: \$(ps aux | grep sudo | grep -v grep | wc -l)"
    echo "- Users with sudo access: \$(getent group sudo | cut -d: -f4 | tr ',' ' ' | wc -w)"
    echo "- Sudo commands today: \$(grep sudo /var/log/auth.log | grep "\$(date +%b\ %d)" | wc -l)"
    echo ""

    echo "⚠️ SECURITY ALERTS:"
    failed=\$(grep "authentication failure" /var/log/auth.log | grep "\$(date +%b\ %d)" | wc -l)
    if [ \$failed -gt 0 ]; then
        echo "- ⚠️ \$failed failed sudo attempts today"
    else
        echo "- ✅ No failed sudo attempts today"
    fi

    echo ""
    echo "👥 TOP SUDO USERS TODAY:"
    grep sudo /var/log/auth.log | grep "\$(date +%b\ %d)" | awk '{print \$5}' | sort | uniq -c | sort -nr | head -5

    echo ""
    echo "🔧 RECENT SUDO COMMANDS:"
    grep "COMMAND=" /var/log/auth.log | grep "\$(date +%b\ %d)" | tail -5 | awk -F'COMMAND=' '{print \$2}'
}

# === THE ULTIMATE SUDO MASTER TOOLKIT ===
# Comprehensive sudo management system
sudo_master_toolkit() {
    case "\$1" in
        "status")
            sudo_dashboard
            ;;
        "troubleshoot")
            sudo_troubleshoot
            ;;
        "backup")
            backup_sudo_config
            ;;
        "restore")
            restore_sudo_config "\$2"
            ;;
        "compliance")
            compliance_sudo_setup
            ;;
        "monitor")
            sudo_monitor
            ;;
        "audit")
            audit_sudo_access
            ;;
        "report")
            sudo_compliance_report
            ;;
        "abuse")
            detect_sudo_abuse
            ;;
        "install")
            echo "Installing sudo master toolkit..."
            # Add functions to ~/.bashrc
            echo "# Sudo Master Toolkit" >> ~/.bashrc
            echo "source /path/to/sudo_functions.sh" >> ~/.bashrc
            echo "✅ Sudo master toolkit installed"
            ;;
        *)
            echo "🎯 SUDO MASTER TOOLKIT"
            echo "====================="
            echo "Usage: sudo_master_toolkit <command>"
            echo ""
            echo "Commands:"
            echo "  status       - Show sudo dashboard"
            echo "  troubleshoot - Diagnose sudo issues"
            echo "  backup       - Backup sudo configuration"
            echo "  restore DIR  - Restore sudo configuration"
            echo "  compliance   - Setup compliance logging"
            echo "  monitor      - Security monitoring report"
            echo "  audit        - Audit sudo access"
            echo "  report       - Generate compliance report"
            echo "  abuse        - Detect potential abuse"
            echo "  install      - Install toolkit functions"
            echo ""
            echo "🦸 Pro Tips:"
            echo "- Always use visudo for configuration changes"
            echo "- Monitor sudo logs regularly"
            echo "- Implement least privilege principle"
            echo "- Use groups instead of individual users"
            echo "- Regular security audits are essential"
            ;;
    esac
}

# === CONGRATULATIONS! ===
echo "🎓 SUDO Mastery Complete!"
echo "========================"
echo "You now understand:"
echo "✅ What sudo is and why it exists"
echo "✅ How to configure sudo safely with visudo"
echo "✅ Advanced sudo techniques and environment handling"
echo "✅ Security monitoring and threat detection"
echo "✅ Real-world deployment and troubleshooting"
echo "✅ Enterprise-grade sudo management"
echo "✅ Compliance and auditing requirements"
echo ""
echo "🦸 You are now a SUDO SUPERHERO!"
echo "With great power comes great responsibility."
echo "Use your sudo powers wisely! 🚀"
echo ""
echo "Remember: sudo is not just a command, it's a philosophy of security."
echo "Master it, respect it, and keep your systems safe! 🛡️"`
      }
    ]
  }
}