export const chapter14 = {
  id: '14',
  icon: '⏰',
  title: 'CRON JOBS',
  description: 'Scheduling tasks with cron',
  slug: 'cron-jobs',
  content: {
    overview: 'Welcome to CRON JOBS - where you become the time master of your Linux system! ⏰ If you\'ve ever wanted your computer to do things automatically while you sleep, eat, or binge-watch Netflix, cron is your digital butler. Cron (Command Run On) is the time-based job scheduler that\'s been faithfully running tasks since the dawn of Unix. Think of it as your personal assistant that never sleeps, never forgets, and never asks for a raise. Whether you want to backup files every night, clean up logs weekly, or send yourself motivational emails every morning, cron makes it happen. We\'re going to turn you from someone who manually runs commands into a time-scheduling wizard who automates everything! 🚀',
    sections: [
      {
        title: '1. Cron Fundamentals - Your Digital Butler 🤖',
        content: 'Cron is like having a super-reliable digital butler who follows your schedule to the minute. Every Linux system has a cron daemon running in the background, constantly checking if it\'s time to run any scheduled tasks. Understanding cron syntax is like learning the language of time itself - once you master it, you can schedule anything to happen at any time with surgical precision.',
        codeExample: `# === CRON BASICS ===
echo "🤖 Cron - Your Digital Butler"

# View current user's cron jobs
crontab -l                          # "List current cron jobs"
crontab -l -u username              # "List cron jobs for specific user (root only)"

# Edit cron jobs
crontab -e                          # "Edit current user's cron jobs"
sudo crontab -e -u username         # "Edit cron jobs for specific user"

# Remove all cron jobs
crontab -r                          # "Remove all cron jobs (be careful!)"

# === CRON SYNTAX EXPLAINED ===
echo "⏰ Cron Syntax: * * * * * command"
echo "Position 1: Minute (0-59)"
echo "Position 2: Hour (0-23)"
echo "Position 3: Day of month (1-31)"
echo "Position 4: Month (1-12)"
echo "Position 5: Day of week (0-7, where 0 and 7 are Sunday)"
echo ""
echo "Special characters:"
echo "* = Any value"
echo ", = List separator (1,3,5)"
echo "- = Range (1-5)"
echo "/ = Step values (*/5 = every 5)"

# === BASIC CRON EXAMPLES ===
echo "📅 Basic Cron Examples:"

# Every minute
echo "* * * * * /path/to/script.sh        # Every minute"

# Every hour at minute 0
echo "0 * * * * /path/to/script.sh        # Every hour"

# Every day at 2:30 AM
echo "30 2 * * * /path/to/script.sh       # Daily at 2:30 AM"

# Every Sunday at midnight
echo "0 0 * * 0 /path/to/script.sh        # Every Sunday at midnight"

# Every weekday at 9 AM
echo "0 9 * * 1-5 /path/to/script.sh      # Weekdays at 9 AM"

# Every 5 minutes
echo "*/5 * * * * /path/to/script.sh      # Every 5 minutes"

# === COMMON CRON PATTERNS ===
echo "🎯 Common Cron Patterns:"
echo "0 0 * * *     = Daily at midnight"
echo "0 0 * * 0     = Weekly on Sunday at midnight"
echo "0 0 1 * *     = Monthly on the 1st at midnight"
echo "0 0 1 1 *     = Yearly on January 1st at midnight"
echo "*/15 * * * *  = Every 15 minutes"
echo "0 */2 * * *   = Every 2 hours"
echo "0 9-17 * * 1-5 = Every hour from 9 AM to 5 PM, weekdays only"

# === CRON SPECIAL STRINGS ===
echo "🎪 Cron Special Strings:"
echo "@reboot       = Run once at startup"
echo "@yearly       = Run once a year (0 0 1 1 *)"
echo "@annually     = Same as @yearly"
echo "@monthly      = Run once a month (0 0 1 * *)"
echo "@weekly       = Run once a week (0 0 * * 0)"
echo "@daily        = Run once a day (0 0 * * *)"
echo "@midnight     = Same as @daily"
echo "@hourly       = Run once an hour (0 * * * *)"

# Examples with special strings
echo "@daily /home/user/backup.sh         # Daily backup"
echo "@reboot /home/user/startup.sh       # Run at boot"
echo "@hourly /usr/bin/cleanup.sh         # Hourly cleanup"

# === CRON ENVIRONMENT ===
echo "🌍 Cron Environment:"
echo "Cron runs with minimal environment variables"
echo "Always use full paths in cron jobs"
echo "Set PATH and other variables if needed"

# Example cron job with environment
cat << 'EOF'
# Set environment variables
PATH=/usr/local/bin:/usr/bin:/bin
MAILTO=admin@example.com

# Jobs
0 2 * * * /usr/local/bin/backup.sh
*/5 * * * * /usr/bin/check_disk.sh
EOF

# === CRON LOGGING ===
echo "📜 Cron Logging:"
echo "Cron logs are usually in:"
echo "/var/log/cron (Red Hat/CentOS)"
echo "/var/log/syslog (Debian/Ubuntu)"
echo "journalctl -u cron (systemd systems)"

# View cron logs
tail -f /var/log/cron                # "Follow cron log (Red Hat)"
tail -f /var/log/syslog | grep CRON  # "Follow cron log (Debian)"
journalctl -u cron -f               # "Follow cron log (systemd)"

# === TESTING CRON JOBS ===
echo "🧪 Testing Cron Jobs:"
echo "1. Start with frequent schedule for testing"
echo "2. Use full paths for all commands"
echo "3. Redirect output to files for debugging"
echo "4. Test the command manually first"

# Example test cron job
echo "*/1 * * * * /usr/bin/date >> /tmp/cron_test.log 2>&1"

# === THE CRON CHEAT SHEET ===
echo "🤖 Cron Quick Reference:"
echo "crontab -l              = List cron jobs"
echo "crontab -e              = Edit cron jobs"
echo "crontab -r              = Remove all cron jobs"
echo "* * * * * command       = Cron syntax"
echo "@daily command          = Run daily"
echo "@reboot command         = Run at startup"
echo "*/5 * * * * command     = Every 5 minutes"`
      },
      {
        title: '2. Advanced Scheduling - Time Mastery 🕰️',
        content: 'Once you understand basic cron, it\'s time to become a scheduling wizard! Advanced cron techniques involve complex time patterns, conditional execution, error handling, and creating robust automation systems. This is where you go from running simple scripts to orchestrating complex workflows that adapt to different conditions and handle failures gracefully.',
        codeExample: `# === ADVANCED CRON PATTERNS ===
echo "🕰️ Advanced Cron Scheduling Patterns:"

# Complex time patterns
echo "0 2 * * 1-5    = 2 AM on weekdays only"
echo "0 */4 * * *    = Every 4 hours"
echo "15,45 * * * *  = At 15 and 45 minutes past every hour"
echo "0 9-17/2 * * * = Every 2 hours from 9 AM to 5 PM"
echo "0 0 1,15 * *   = 1st and 15th of every month"
echo "0 0 * * 1#1    = First Monday of every month (some cron versions)"

# Business hours only
echo "0 9-17 * * 1-5 /path/to/business_script.sh"

# Avoid peak hours
echo "0 2-5 * * * /path/to/maintenance.sh"

# === CONDITIONAL CRON JOBS ===
echo "🎯 Conditional Cron Jobs:"

# Run only if file exists
echo "0 2 * * * [ -f /tmp/run_backup ] && /usr/local/bin/backup.sh"

# Run only if not already running
echo "*/5 * * * * pgrep -f my_script.sh || /path/to/my_script.sh"

# Run with lock file to prevent overlaps
cat << 'EOF'
*/5 * * * * (
    flock -n 9 || exit 1
    /path/to/script.sh
) 9>/var/lock/my_script.lock
EOF

# === ERROR HANDLING IN CRON ===
echo "🛡️ Error Handling in Cron:"

# Redirect output and errors
echo "0 2 * * * /path/to/script.sh >> /var/log/backup.log 2>&1"

# Send email on error only
echo "0 2 * * * /path/to/script.sh || echo 'Backup failed' | mail -s 'Backup Error' admin@example.com"

# Comprehensive error handling
cat << 'EOF'
0 2 * * * (
    /path/to/backup.sh
    if [ $? -eq 0 ]; then
        echo "$(date): Backup successful" >> /var/log/backup.log
    else
        echo "$(date): Backup failed" >> /var/log/backup.log
        echo "Backup failed at $(date)" | mail -s "Backup Error" admin@example.com
    fi
) 2>&1
EOF

# === CRON JOB MONITORING ===
echo "📊 Cron Job Monitoring:"

# Create monitoring script
cat << 'EOF' > /usr/local/bin/cron_monitor.sh
#!/bin/bash
# Monitor cron job execution

LOG_FILE="/var/log/cron_monitor.log"
ALERT_EMAIL="admin@example.com"

# Function to log with timestamp
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S'): $1" >> "$LOG_FILE"
}

# Check if backup ran today
if ! grep -q "$(date +%Y-%m-%d)" /var/log/backup.log; then
    log_message "WARNING: Daily backup did not run"
    echo "Daily backup missing for $(date)" | mail -s "Backup Alert" "$ALERT_EMAIL"
fi

# Check for failed cron jobs
if grep -q "FAILED" /var/log/cron; then
    log_message "ERROR: Failed cron jobs detected"
    grep "FAILED" /var/log/cron | tail -5 | mail -s "Cron Failures" "$ALERT_EMAIL"
fi
EOF

chmod +x /usr/local/bin/cron_monitor.sh

# Schedule the monitor
echo "0 8 * * * /usr/local/bin/cron_monitor.sh"

# === CRON BEST PRACTICES ===
echo "⭐ Cron Best Practices:"

# 1. Use full paths
echo "# Good:"
echo "0 2 * * * /usr/bin/rsync -av /home/ /backup/"
echo ""
echo "# Bad:"
echo "0 2 * * * rsync -av /home/ /backup/"

# 2. Set environment variables
cat << 'EOF'
# Set PATH and other variables
PATH=/usr/local/bin:/usr/bin:/bin:/sbin
SHELL=/bin/bash
MAILTO=admin@example.com

# Your cron jobs here
0 2 * * * /usr/local/bin/backup.sh
EOF

# 3. Use locking to prevent overlaps
cat << 'EOF' > /usr/local/bin/safe_script.sh
#!/bin/bash
LOCKFILE="/var/lock/safe_script.lock"

# Check if already running
if [ -f "$LOCKFILE" ]; then
    echo "Script already running, exiting"
    exit 1
fi

# Create lock file
echo $$ > "$LOCKFILE"

# Cleanup function
cleanup() {
    rm -f "$LOCKFILE"
    exit
}

# Set trap to cleanup on exit
trap cleanup INT TERM EXIT

# Your actual script logic here
echo "Running script at $(date)"
sleep 60  # Simulate work

# Lock file will be removed by trap
EOF

chmod +x /usr/local/bin/safe_script.sh

# === CRON ALTERNATIVES ===
echo "🔄 Cron Alternatives:"
echo "anacron    = Run missed jobs when system comes up"
echo "systemd timers = Modern alternative to cron"
echo "at         = One-time job scheduling"
echo "fcron      = Enhanced cron with more features"

# Anacron example
echo "# /etc/anacrontab"
echo "1  5  daily.backup  /usr/local/bin/backup.sh"
echo "7  10 weekly.cleanup /usr/local/bin/cleanup.sh"

# Systemd timer example
cat << 'EOF'
# /etc/systemd/system/backup.timer
[Unit]
Description=Daily backup timer

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
EOF

# === THE ADVANCED CRON CHEAT SHEET ===
echo "🕰️ Advanced Cron Quick Reference:"
echo "0 9-17 * * 1-5 cmd     = Business hours weekdays"
echo "*/5 * * * * cmd        = Every 5 minutes"
echo "0 2 1,15 * * cmd       = 1st and 15th monthly"
echo "cmd >> log 2>&1        = Redirect all output"
echo "flock -n 9 cmd 9>lock  = Prevent overlapping runs"
echo "@reboot cmd            = Run at system startup"`
      },
      {
        title: '3. Practical Automation - Real-World Cron Jobs 🏭',
        content: 'This is where cron becomes incredibly useful in real-world scenarios! We\'re going to create practical automation solutions that solve actual problems - from system maintenance to data processing. These are the kind of cron jobs that make you look like a automation wizard and save hours of manual work.',
        codeExample: `# === SYSTEM MAINTENANCE AUTOMATION ===
echo "🏭 Practical Cron Automation Examples:"

# === BACKUP AUTOMATION ===
echo "💾 Backup Automation:"

# Daily incremental backup
echo "0 2 * * * /usr/bin/rsync -av --delete /home/ /backup/daily/\\$(date +\\%Y\\%m\\%d)/"

# Weekly full backup
echo "0 1 * * 0 /usr/bin/tar -czf /backup/weekly/full_backup_\\$(date +\\%Y\\%m\\%d).tar.gz /home /etc /var/www"

# Monthly backup cleanup (keep only last 3 months)
echo "0 3 1 * * find /backup/monthly -name '*.tar.gz' -mtime +90 -delete"

# Database backup
cat << 'EOF'
# Daily MySQL backup
0 3 * * * /usr/bin/mysqldump --all-databases --single-transaction --routines --triggers | gzip > /backup/mysql/mysql_backup_$(date +\%Y\%m\%d).sql.gz

# PostgreSQL backup
0 3 * * * /usr/bin/pg_dumpall | gzip > /backup/postgres/postgres_backup_$(date +\%Y\%m\%d).sql.gz
EOF

# === LOG MANAGEMENT ===
echo "📜 Log Management Automation:"

# Rotate and compress logs
echo "0 4 * * * /usr/sbin/logrotate /etc/logrotate.conf"

# Clean old log files
echo "0 5 * * 0 find /var/log -name '*.log' -mtime +30 -delete"

# Archive application logs
echo "0 6 * * * gzip /var/log/myapp/\\$(date -d yesterday +\\%Y\\%m\\%d).log"

# === SYSTEM MONITORING ===
echo "📊 System Monitoring Automation:"

# Disk space monitoring
cat << 'EOF' > /usr/local/bin/disk_monitor.sh
#!/bin/bash
THRESHOLD=80
EMAIL="admin@example.com"

df -h | awk 'NR>1 {print \\$5 " " \\$6}' | while read output; do
    usage=\\$(echo \\$output | awk '{print \\$1}' | sed 's/%//')
    partition=\\$(echo \\$output | awk '{print \\$2}')

    if [ \\$usage -ge \\$THRESHOLD ]; then
        echo "Disk usage alert: \\$partition is \\$\\{usage\\}% full" | \\\\
        mail -s "Disk Space Alert" \\$EMAIL
    fi
done
EOF

chmod +x /usr/local/bin/disk_monitor.sh
echo "*/30 * * * * /usr/local/bin/disk_monitor.sh"

# Memory monitoring
cat << 'EOF' > /usr/local/bin/memory_monitor.sh
#!/bin/bash
THRESHOLD=90
EMAIL="admin@example.com"

MEMORY_USAGE=\\$(free | awk 'NR==2{printf "%.0f", \\$3*100/\\$2}')

if [ \\$MEMORY_USAGE -ge \\$THRESHOLD ]; then
    echo "Memory usage is \\$\\{MEMORY_USAGE\\}%" | \\\\
    mail -s "High Memory Usage Alert" \\$EMAIL
fi
EOF

chmod +x /usr/local/bin/memory_monitor.sh
echo "*/15 * * * * /usr/local/bin/memory_monitor.sh"

# === SECURITY AUTOMATION ===
echo "🔒 Security Automation:"

# Failed login monitoring
cat << 'EOF' > /usr/local/bin/security_monitor.sh
#!/bin/bash
LOG_FILE="/var/log/auth.log"
ALERT_EMAIL="security@example.com"
THRESHOLD=5

# Check for failed SSH attempts
FAILED_ATTEMPTS=\\$(grep "Failed password" \\$LOG_FILE | grep "\\$(date +%b\\\\ %d)" | wc -l)

if [ \\$FAILED_ATTEMPTS -ge \\$THRESHOLD ]; then
    echo "Security Alert: \\$FAILED_ATTEMPTS failed SSH attempts today" | \\\\
    mail -s "Security Alert" \\$ALERT_EMAIL
fi

# Check for new user accounts
if grep "new user" \\$LOG_FILE | grep -q "\\$(date +%b\\\\ %d)"; then
    echo "New user account created today" | \\\\
    mail -s "New User Alert" \\$ALERT_EMAIL
fi
EOF

chmod +x /usr/local/bin/security_monitor.sh
echo "0 */2 * * * /usr/local/bin/security_monitor.sh"

# === WEB APPLICATION MAINTENANCE ===
echo "🌐 Web Application Automation:"

# Clear application cache
echo "0 3 * * * rm -rf /var/www/myapp/cache/*"

# Update SSL certificates
echo "0 4 1 * * /usr/bin/certbot renew --quiet"

# Website health check
cat << 'EOF' > /usr/local/bin/website_check.sh
#!/bin/bash
WEBSITE="https://example.com"
EMAIL="admin@example.com"

if ! curl -f -s \\$WEBSITE > /dev/null; then
    echo "Website \\$WEBSITE is down!" | \\\\
    mail -s "Website Down Alert" \\$EMAIL
fi
EOF

chmod +x /usr/local/bin/website_check.sh
echo "*/5 * * * * /usr/local/bin/website_check.sh"

# === DATA PROCESSING ===
echo "📊 Data Processing Automation:"

# Daily report generation
cat << 'EOF' > /usr/local/bin/daily_report.sh
#!/bin/bash
REPORT_DIR="/var/reports"
DATE=\\$(date +%Y-%m-%d)

# Generate system report
{
    echo "Daily System Report - \\$DATE"
    echo "=========================="
    echo "System Load: \\$(uptime)"
    echo "Memory Usage: \\$(free -h | grep Mem)"
    echo "Disk Usage: \\$(df -h | grep -v tmpfs)"
    echo "Top Processes: \\$(ps aux --sort=-pcpu | head -5)"
} > "\\$REPORT_DIR/system_report_\\$DATE.txt"

# Email the report
mail -s "Daily System Report" admin@example.com < "\\$REPORT_DIR/system_report_\\$DATE.txt"
EOF

chmod +x /usr/local/bin/daily_report.sh
echo "0 7 * * * /usr/local/bin/daily_report.sh"

# === THE PRACTICAL AUTOMATION CHEAT SHEET ===
echo "🏭 Practical Automation Quick Reference:"
echo "0 2 * * * backup_script.sh     = Daily backup at 2 AM"
echo "*/30 * * * * monitor_disk.sh   = Check disk every 30 min"
echo "0 4 * * 0 cleanup_logs.sh      = Weekly log cleanup"
echo "*/5 * * * * health_check.sh    = Website health check"
echo "0 7 * * * daily_report.sh      = Morning reports"`
      },
      {
        title: '4. Troubleshooting and Debugging - Cron Detective 🕵️',
        content: 'When cron jobs don\'t work as expected, you need to become a detective! Troubleshooting cron involves understanding common pitfalls, debugging techniques, and monitoring strategies. This section will turn you into a cron troubleshooting expert who can diagnose and fix any scheduling issue.',
        codeExample: `# === COMMON CRON PROBLEMS ===
echo "🕵️ Cron Troubleshooting and Debugging:"

# === DEBUGGING TECHNIQUES ===
echo "🔧 Cron Debugging Techniques:"

# 1. Test with frequent schedule first
echo "# Start with this for testing:"
echo "*/1 * * * * /path/to/script.sh >> /tmp/debug.log 2>&1"
echo "# Then change to desired schedule once working"

# 2. Add debugging to scripts
cat << 'EOF' > /usr/local/bin/debug_script.sh
#!/bin/bash
# Enable debugging
set -x

# Log start time
echo "Script started at $(date)" >> /var/log/myscript.log

# Log environment
echo "PATH: $PATH" >> /var/log/myscript.log
echo "USER: $USER" >> /var/log/myscript.log
echo "PWD: $PWD" >> /var/log/myscript.log

# Your actual script logic here
echo "Doing work..." >> /var/log/myscript.log

# Log completion
echo "Script completed at $(date)" >> /var/log/myscript.log
EOF

# 3. Comprehensive logging cron job
echo "*/5 * * * * /usr/local/bin/myscript.sh >> /var/log/myscript.log 2>&1"

# === COMMON ISSUES AND SOLUTIONS ===
echo "⚠️ Common Cron Issues:"

echo "Issue 1: Command not found"
echo "Problem: PATH is different in cron"
echo "Solution: Use full paths"
echo "# Bad:"
echo "*/5 * * * * python script.py"
echo "# Good:"
echo "*/5 * * * * /usr/bin/python /home/user/script.py"

echo ""
echo "Issue 2: Script works manually but not in cron"
echo "Problem: Different environment"
echo "Solution: Set environment in crontab"
cat << 'EOF'
PATH=/usr/local/bin:/usr/bin:/bin
HOME=/home/user
SHELL=/bin/bash

*/5 * * * * /home/user/script.sh
EOF

echo ""
echo "Issue 3: Cron job runs but doesn't work"
echo "Problem: No output/error visibility"
echo "Solution: Redirect output to log file"
echo "*/5 * * * * /path/to/script.sh >> /var/log/script.log 2>&1"

echo ""
echo "Issue 4: Job runs multiple times"
echo "Problem: Previous job still running"
echo "Solution: Use locking mechanism"
cat << 'EOF'
*/5 * * * * (
    flock -n 9 || exit 1
    /path/to/script.sh
) 9>/var/lock/script.lock
EOF

# === CRON DEBUGGING TOOLS ===
echo "🛠️ Cron Debugging Tools:"

# Check if cron is running
echo "systemctl status cron          # Check cron service"
echo "ps aux | grep cron             # Check cron processes"

# View cron logs
echo "tail -f /var/log/cron          # Red Hat/CentOS"
echo "tail -f /var/log/syslog | grep CRON  # Debian/Ubuntu"
echo "journalctl -u cron -f          # systemd systems"

# Test cron syntax
cat << 'EOF' > /usr/local/bin/test_cron.sh
#!/bin/bash
# Test cron job syntax

if [ $# -eq 0 ]; then
    echo "Usage: $0 'cron_expression'"
    echo "Example: $0 '0 2 * * *'"
    exit 1
fi

CRON_EXPR="$1"
echo "Testing cron expression: $CRON_EXPR"

# Add test job
echo "$CRON_EXPR echo 'Test job ran at \$(date)' >> /tmp/cron_test.log" | crontab -

echo "Test job added. Check /tmp/cron_test.log for output."
echo "Remove with: crontab -r"
EOF

chmod +x /usr/local/bin/test_cron.sh

# === MONITORING CRON JOBS ===
echo "📊 Monitoring Cron Jobs:"

# Create cron monitoring script
cat << 'EOF' > /usr/local/bin/cron_health_check.sh
#!/bin/bash
ALERT_EMAIL="admin@example.com"
LOG_FILE="/var/log/cron_health.log"

log_message() {
    echo "$(date): $1" >> "$LOG_FILE"
}

# Check if cron service is running
if ! systemctl is-active --quiet cron; then
    log_message "ERROR: Cron service is not running"
    echo "Cron service is down" | mail -s "Cron Service Alert" "$ALERT_EMAIL"
fi

# Check for recent cron activity
if ! grep -q "$(date +%b\ %d)" /var/log/cron 2>/dev/null; then
    log_message "WARNING: No cron activity today"
fi

# Check for failed jobs
FAILED_JOBS=$(grep "$(date +%b\ %d)" /var/log/cron 2>/dev/null | grep -c "FAILED" || echo 0)
if [ "$FAILED_JOBS" -gt 0 ]; then
    log_message "ERROR: $FAILED_JOBS failed cron jobs today"
    echo "$FAILED_JOBS cron jobs failed today" | mail -s "Cron Failure Alert" "$ALERT_EMAIL"
fi

log_message "Health check completed"
EOF

chmod +x /usr/local/bin/cron_health_check.sh
echo "0 8 * * * /usr/local/bin/cron_health_check.sh"

# === CRON JOB VALIDATION ===
echo "✅ Cron Job Validation:"

# Validate cron job before adding
cat << 'EOF' > /usr/local/bin/validate_cron.sh
#!/bin/bash
validate_cron_expression() {
    local expr="$1"

    # Basic validation
    field_count=$(echo "$expr" | awk '{print NF}')
    if [ "$field_count" -ne 5 ]; then
        echo "Error: Cron expression must have 5 fields"
        return 1
    fi

    # Validate each field
    minute=$(echo "$expr" | awk '{print $1}')
    hour=$(echo "$expr" | awk '{print $2}')
    day=$(echo "$expr" | awk '{print $3}')
    month=$(echo "$expr" | awk '{print $4}')
    weekday=$(echo "$expr" | awk '{print $5}')

    echo "Validating: $expr"
    echo "Minute: $minute (0-59)"
    echo "Hour: $hour (0-23)"
    echo "Day: $day (1-31)"
    echo "Month: $month (1-12)"
    echo "Weekday: $weekday (0-7)"

    return 0
}

if [ $# -eq 0 ]; then
    echo "Usage: $0 'minute hour day month weekday'"
    exit 1
fi

validate_cron_expression "$1"
EOF

chmod +x /usr/local/bin/validate_cron.sh

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ Cron Performance Optimization:"

echo "1. Avoid running too many jobs at the same time"
echo "# Spread jobs across different times"
echo "0 2 * * * backup_job1.sh"
echo "15 2 * * * backup_job2.sh"
echo "30 2 * * * backup_job3.sh"

echo ""
echo "2. Use nice/ionice for resource-intensive jobs"
echo "0 3 * * * nice -n 19 ionice -c 3 /path/to/heavy_job.sh"

echo ""
echo "3. Limit concurrent executions"
echo "*/5 * * * * [ \\$(pgrep -f myscript.sh | wc -l) -lt 2 ] && /path/to/myscript.sh"

# === THE DEBUGGING CHEAT SHEET ===
echo "🕵️ Cron Debugging Quick Reference:"
echo "tail -f /var/log/cron          = Watch cron logs"
echo "systemctl status cron          = Check cron service"
echo "*/1 * * * * cmd >> /tmp/test.log 2>&1 = Test with 1-minute schedule"
echo "which command                  = Find full path of command"
echo "env                           = Check environment variables"
echo "crontab -l                    = List current jobs"
echo "flock -n 9 cmd 9>/tmp/lock    = Prevent overlapping runs"`
      },
      {
        title: '5. Cron Mastery - Advanced Automation 🧙‍♂️',
        content: 'Welcome to cron mastery - where you become the automation wizard who can orchestrate complex workflows, handle edge cases, and create self-healing systems! This is advanced cron usage that goes beyond simple scheduling to create intelligent automation systems that adapt, monitor themselves, and handle failures gracefully.',
        codeExample: `# === ADVANCED CRON ORCHESTRATION ===
echo "🧙‍♂️ Advanced Cron Mastery Techniques:"

# === INTELLIGENT JOB DEPENDENCIES ===
echo "🔗 Job Dependencies and Workflows:"

# Create dependency management system
cat << 'EOF' > /usr/local/bin/job_manager.sh
#!/bin/bash
JOB_DIR="/var/lib/cron_jobs"
LOG_DIR="/var/log/cron_jobs"

mkdir -p "$JOB_DIR" "$LOG_DIR"

# Function to mark job as started
job_start() {
    local job_name="$1"
    echo "\\$(date)" > "\\$JOB_DIR/\\$\\{job_name\\}.started"
    echo "\\$(date): Job \\$job_name started" >> "\\$LOG_DIR/job_manager.log"
}

# Function to mark job as completed
job_complete() {
    local job_name="$1"
    local exit_code="$2"

    rm -f "\\$JOB_DIR/\\$\\{job_name\\}.started"

    if [ "\\$exit_code" -eq 0 ]; then
        echo "\\$(date)" > "\\$JOB_DIR/\\$\\{job_name\\}.completed"
        echo "\\$(date): Job \\$job_name completed successfully" >> "\\$LOG_DIR/job_manager.log"
    else
        echo "\\$(date)" > "\\$JOB_DIR/\\$\\{job_name\\}.failed"
        echo "\\$(date): Job \\$job_name failed with code \\$exit_code" >> "\\$LOG_DIR/job_manager.log"
    fi
}

# Function to check if job completed successfully
job_completed() {
    local job_name="$1"
    [ -f "\\$JOB_DIR/\\$\\{job_name\\}.completed" ]
}

# Function to wait for job completion
wait_for_job() {
    local job_name="$1"
    local timeout="$2"
    local count=0

    while [ \\$count -lt \\$timeout ]; do
        if job_completed "\\$job_name"; then
            return 0
        fi
        sleep 60
        count=\\$\\(\\(count + 1\\)\\)
    done

    return 1
}

# Execute based on command
case "\\$1" in
    "start")
        job_start "\\$2"
        ;;
    "complete")
        job_complete "\\$2" "\\$3"
        ;;
    "wait")
        wait_for_job "\\$2" "\\$3"
        ;;
    "check")
        job_completed "\\$2" && echo "completed" || echo "not completed"
        ;;
esac
EOF

chmod +x /usr/local/bin/job_manager.sh

# Example dependent jobs
echo "# Job A - runs first"
echo "0 2 * * * /usr/local/bin/job_manager.sh start jobA && /path/to/jobA.sh && /usr/local/bin/job_manager.sh complete jobA \\$?"

echo "# Job B - waits for Job A"
echo "5 2 * * * /usr/local/bin/job_manager.sh wait jobA 30 && /path/to/jobB.sh"

# === SELF-HEALING SYSTEMS ===
echo "🔄 Self-Healing Cron Systems:"

# Create self-healing backup system
cat << 'EOF' > /usr/local/bin/smart_backup.sh
#!/bin/bash
BACKUP_DIR="/backup"
SOURCE_DIR="/home"
LOG_FILE="/var/log/smart_backup.log"
ALERT_EMAIL="admin@example.com"
MAX_RETRIES=3

log_message() {
    echo "$(date): $1" >> "$LOG_FILE"
}

# Function to check backup integrity
verify_backup() {
    local backup_file="$1"

    if [ -f "$backup_file" ]; then
        # Check if file is not empty and not corrupted
        if [ -s "$backup_file" ] && tar -tzf "$backup_file" >/dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

# Function to perform backup with retries
perform_backup() {
    local attempt=1
    local backup_file="\\$BACKUP_DIR/backup_\\$(date +%Y%m%d_%H%M%S).tar.gz"

    while [ \\$attempt -le \\$MAX_RETRIES ]; do
        log_message "Backup attempt \\$attempt of \\$MAX_RETRIES"

        # Perform backup
        if tar -czf "\\$backup_file" "\\$SOURCE_DIR" 2>>"\\$LOG_FILE"; then
            # Verify backup
            if verify_backup "\\$backup_file"; then
                log_message "Backup successful: \\$backup_file"

                # Cleanup old backups (keep last 7 days)
                find "\\$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +7 -delete

                return 0
            else
                log_message "Backup verification failed, removing corrupted file"
                rm -f "\\$backup_file"
            fi
        else
            log_message "Backup creation failed"
        fi

        attempt=\\$\\(\\(attempt + 1\\)\\)

        # Wait before retry (exponential backoff)
        if [ \\$attempt -le \\$MAX_RETRIES ]; then
            sleep_time=\\$\\(\\(attempt * 60\\)\\)
            log_message "Waiting \\$\\{sleep_time\\} seconds before retry"
            sleep \\$sleep_time
        fi
    done

    # All attempts failed
    log_message "ERROR: All backup attempts failed"
    echo "Backup failed after \\$MAX_RETRIES attempts" | mail -s "Backup Failure" "\\$ALERT_EMAIL"
    return 1
}

# Check disk space before backup
available_space=$(df "$BACKUP_DIR" | awk 'NR==2 {print $4}')
required_space=$(du -s "$SOURCE_DIR" | awk '{print $1}')

if [ "$available_space" -lt "$required_space" ]; then
    log_message "ERROR: Insufficient disk space for backup"
    echo "Insufficient disk space for backup" | mail -s "Backup Space Alert" "$ALERT_EMAIL"
    exit 1
fi

# Perform the backup
perform_backup
EOF

chmod +x /usr/local/bin/smart_backup.sh
echo "0 3 * * * /usr/local/bin/smart_backup.sh"

# === DYNAMIC SCHEDULING ===
echo "📅 Dynamic Cron Scheduling:"

# Create dynamic scheduler
cat << 'EOF' > /usr/local/bin/dynamic_scheduler.sh
#!/bin/bash
CONFIG_FILE="/etc/cron_config.conf"
TEMP_CRON="/tmp/dynamic_cron"

# Read configuration and generate cron jobs
generate_cron_jobs() {
    > "$TEMP_CRON"

    while IFS='=' read -r key value; do
        case "$key" in
            "BACKUP_ENABLED")
                if [ "$value" = "true" ]; then
                    echo "0 3 * * * /usr/local/bin/smart_backup.sh" >> "$TEMP_CRON"
                fi
                ;;
            "MONITORING_INTERVAL")
                echo "*/$value * * * * /usr/local/bin/system_monitor.sh" >> "$TEMP_CRON"
                ;;
            "CLEANUP_DAY")
                echo "0 4 * * $value /usr/local/bin/cleanup.sh" >> "$TEMP_CRON"
                ;;
        esac
    done < "$CONFIG_FILE"

    # Install new crontab
    crontab "$TEMP_CRON"
    rm -f "$TEMP_CRON"
}

# Check if config file changed
if [ "$CONFIG_FILE" -nt "/var/lib/cron_last_update" ]; then
    generate_cron_jobs
    touch "/var/lib/cron_last_update"
fi
EOF

chmod +x /usr/local/bin/dynamic_scheduler.sh
echo "*/10 * * * * /usr/local/bin/dynamic_scheduler.sh"

# === CRON ANALYTICS ===
echo "📊 Cron Job Analytics:"

# Create analytics system
cat << 'EOF' > /usr/local/bin/cron_analytics.sh
#!/bin/bash
ANALYTICS_DIR="/var/lib/cron_analytics"
REPORT_FILE="$ANALYTICS_DIR/cron_report_$(date +%Y%m%d).txt"

mkdir -p "$ANALYTICS_DIR"

# Analyze cron job performance
analyze_performance() {
    {
        echo "Cron Job Performance Report - $(date)"
        echo "====================================="
        echo ""

        # Job execution frequency
        echo "Job Execution Frequency (last 24 hours):"
        grep "$(date +%b\ %d)" /var/log/cron | \
        awk '{print $6}' | sort | uniq -c | sort -nr

        echo ""

        # Failed jobs
        echo "Failed Jobs:"
        grep "$(date +%b\ %d)" /var/log/cron | grep -i "failed\|error" || echo "No failures"

        echo ""

        # System load during cron execution
        echo "System Load Analysis:"
        echo "Average load: $(uptime | awk -F'load average:' '{print $2}')"

        echo ""

        # Disk space trends
        echo "Disk Space Trends:"
        df -h | grep -v tmpfs

    } > "$REPORT_FILE"

    # Email weekly reports
    if [ "$(date +%u)" -eq 1 ]; then
        mail -s "Weekly Cron Analytics" admin@example.com < "$REPORT_FILE"
    fi
}

analyze_performance
EOF

chmod +x /usr/local/bin/cron_analytics.sh
echo "0 23 * * * /usr/local/bin/cron_analytics.sh"

# === THE MASTERY TOOLKIT ===
echo "🧙‍♂️ Cron Mastery Toolkit:"
echo "=========================="
echo "/usr/local/bin/job_manager.sh     = Job dependency management"
echo "/usr/local/bin/smart_backup.sh    = Self-healing backup system"
echo "/usr/local/bin/dynamic_scheduler.sh = Dynamic cron scheduling"
echo "/usr/local/bin/cron_analytics.sh  = Performance analytics"

# === CONGRATULATIONS! ===
echo "🎓 CRON JOBS MASTERY COMPLETE!"
echo "==============================="
echo "You now understand:"
echo "✅ Cron fundamentals and syntax mastery"
echo "✅ Advanced scheduling patterns and techniques"
echo "✅ Practical automation for real-world scenarios"
echo "✅ Troubleshooting and debugging expertise"
echo "✅ Advanced orchestration and self-healing systems"
echo "✅ Dynamic scheduling and analytics"
echo "✅ Professional automation workflows"
echo ""
echo "⏰ You are now a TIME MASTER!"
echo "Automate everything and let your system work while you sleep! 🤖"
echo ""
echo "Remember: The best system administrator is a lazy one who automates everything!"
echo "Use your cron powers to create self-managing systems! 💪"`
      }
    ]
  }
}