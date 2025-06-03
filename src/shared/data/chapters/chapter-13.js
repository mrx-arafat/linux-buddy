export const chapter13 = {
  id: '13',
  icon: '🪫',
  title: 'PROCESS MANAGEMENT',
  description: 'Managing processes in Linux',
  slug: 'process-management',
  content: {
    overview: 'Welcome to PROCESS MANAGEMENT - where you become the conductor of your Linux orchestra! 🪫 If you\'ve ever wondered what\'s actually running on your system, why your computer sometimes slows down, or how to control the programs that are consuming your resources, this chapter is your backstage pass to the Linux process theater. Every program you run, every command you execute, every service that starts - they\'re all processes, and Linux gives you incredible power to monitor, control, and optimize them. Think of processes as the actors on your Linux stage, and you\'re about to become the director who can start them, stop them, prioritize them, and make them perform exactly as you want. We\'re going to turn you from someone who just runs programs into a process management maestro! 🚀',
    sections: [
      {
        title: '1. Understanding Processes - The Linux Theater 🎭',
        content: 'Every running program in Linux is a process - from your text editor to system services running in the background. Understanding processes is like understanding the cast and crew of a theater production. Each process has a unique ID (PID), a parent process, resource usage, and a current state. Learning to read process information is like learning to read the program notes - it tells you who\'s on stage, what they\'re doing, and how well they\'re performing.',
        codeExample: `# === BASIC PROCESS VIEWING ===
ps                                  # "Show processes in current terminal"
ps aux                              # "Show ALL processes with detailed info"
ps -ef                              # "Show all processes in full format"
top                                 # "Real-time process monitor"
htop                                # "Better top (if installed)"

# === UNDERSTANDING PS OUTPUT ===
echo "🎭 PS Command Output Explained:"
echo "USER    = Who owns the process"
echo "PID     = Process ID (unique identifier)"
echo "PPID    = Parent Process ID"
echo "%CPU    = CPU usage percentage"
echo "%MEM    = Memory usage percentage"
echo "VSZ     = Virtual memory size"
echo "RSS     = Resident memory size (actual RAM used)"
echo "TTY     = Terminal associated with process"
echo "STAT    = Process state"
echo "START   = When process started"
echo "TIME    = CPU time used"
echo "COMMAND = Command that started the process"

# === PROCESS STATES ===
echo "🎪 Process States:"
echo "R = Running or runnable"
echo "S = Sleeping (waiting for event)"
echo "D = Uninterruptible sleep (usually I/O)"
echo "T = Stopped (by signal)"
echo "Z = Zombie (finished but not cleaned up)"
echo "< = High priority"
echo "+ = Foreground process group"
echo "s = Session leader"
echo "l = Multi-threaded"

# === FINDING SPECIFIC PROCESSES ===
ps aux | grep firefox               # "Find Firefox processes"
ps aux | grep -v grep | grep ssh    # "Find SSH processes (exclude grep itself)"
pgrep firefox                       # "Get PIDs of Firefox processes"
pgrep -f "python script.py"         # "Find processes by full command line"
pidof firefox                       # "Get PID of firefox"

# === PROCESS HIERARCHY ===
ps auxf                             # "Show process tree (forest view)"
pstree                              # "Show process tree graphically"
pstree -p                           # "Show process tree with PIDs"
pstree username                     # "Show process tree for specific user"

# === DETAILED PROCESS INFORMATION ===
ps -p 1234 -o pid,ppid,cmd,pcpu,pmem # "Detailed info for specific PID"
ps -eo pid,ppid,cmd,pcpu,pmem --sort=-pcpu # "All processes sorted by CPU usage"
ps -eo pid,ppid,cmd,pcpu,pmem --sort=-pmem # "All processes sorted by memory usage"

# === REAL-TIME MONITORING ===
echo "📊 Real-time Process Monitoring:"
echo "top commands while running:"
echo "  q = quit"
echo "  k = kill process (enter PID)"
echo "  r = renice process (change priority)"
echo "  P = sort by CPU usage"
echo "  M = sort by memory usage"
echo "  T = sort by time"
echo "  u = show processes for specific user"
echo "  1 = toggle individual CPU cores"

# === PROCESS INFORMATION FILES ===
echo "📁 Process Information in /proc:"
echo "/proc/PID/cmdline = Command line that started process"
echo "/proc/PID/environ = Environment variables"
echo "/proc/PID/status  = Detailed process status"
echo "/proc/PID/maps    = Memory mappings"
echo "/proc/PID/fd/     = Open file descriptors"

# Examples:
cat /proc/1/cmdline                 # "Command line of init process"
cat /proc/self/status               # "Status of current shell"
ls -la /proc/self/fd/               # "Open file descriptors of current shell"

# === MONITORING SYSTEM LOAD ===
uptime                              # "System uptime and load average"
w                                   # "Who is logged in and what they're doing"
who                                 # "Who is currently logged in"
last                                # "Recent login history"

# === PROCESS RESOURCE USAGE ===
echo "💾 Process Resource Usage:"
free -h                             # "Memory usage summary"
vmstat 1 5                          # "Virtual memory statistics (1 sec, 5 times)"
iostat 1 5                          # "I/O statistics (if sysstat installed)"
sar -u 1 5                          # "CPU usage statistics (if sysstat installed)"

# === THE PROCESS CHEAT SHEET ===
echo "🎭 Process Viewing Quick Reference:"
echo "ps aux              = Show all processes"
echo "ps auxf             = Show process tree"
echo "top                 = Real-time monitor"
echo "pgrep name          = Find PID by name"
echo "pidof name          = Get PID of program"
echo "pstree              = Show process hierarchy"
echo "uptime              = System load"
echo "free -h             = Memory usage"`
      },
      {
        title: '2. Process Control - Conducting the Orchestra 🎼',
        content: 'Now that you can see what\'s running, it\'s time to learn how to control it! Process control is like being a conductor - you can start new performances, stop problematic ones, pause and resume others, and even change their priority. This is where you go from passive observer to active director of your Linux system.',
        codeExample: `# === STARTING PROCESSES ===
echo "🎼 Starting and Managing Processes:"

# Foreground processes (blocks terminal)
firefox                             # "Start Firefox in foreground"
python script.py                    # "Run Python script in foreground"

# Background processes (doesn't block terminal)
firefox &                           # "Start Firefox in background"
python script.py &                  # "Run Python script in background"
nohup long_running_script.sh &      # "Run script immune to hangup signals"

# === PROCESS CONTROL SIGNALS ===
echo "📡 Process Control Signals:"
echo "SIGTERM (15) = Polite termination request"
echo "SIGKILL (9)  = Immediate termination (cannot be ignored)"
echo "SIGSTOP (19) = Pause process"
echo "SIGCONT (18) = Resume paused process"
echo "SIGHUP (1)   = Hangup (often reloads config)"
echo "SIGINT (2)   = Interrupt (Ctrl+C)"
echo "SIGQUIT (3)  = Quit (Ctrl+\\\\)"

# === KILLING PROCESSES ===
echo "💀 Terminating Processes:"

# Kill by PID
kill 1234                           # "Send SIGTERM to process 1234"
kill -9 1234                        # "Send SIGKILL to process 1234 (force kill)"
kill -TERM 1234                     # "Send SIGTERM (same as kill 1234)"
kill -KILL 1234                     # "Send SIGKILL (same as kill -9)"

# Kill by name
killall firefox                     # "Kill all Firefox processes"
killall -9 firefox                  # "Force kill all Firefox processes"
pkill firefox                       # "Kill processes matching name"
pkill -f "python script.py"         # "Kill by full command line"

# Kill by user
killall -u username                 # "Kill all processes owned by user"
pkill -u username                   # "Alternative syntax"

# === JOB CONTROL ===
echo "🎯 Job Control (for current terminal):"

# Start job in background
command &                           # "Start command in background"

# View jobs
jobs                                # "List active jobs"
jobs -l                             # "List jobs with PIDs"

# Bring job to foreground
fg                                  # "Bring most recent background job to foreground"
fg %1                               # "Bring job 1 to foreground"
fg %command                         # "Bring job starting with 'command' to foreground"

# Send job to background
bg                                  # "Resume most recent stopped job in background"
bg %1                               # "Resume job 1 in background"

# Suspend and resume
# Ctrl+Z                            # "Suspend current foreground job"
# Then use bg to resume in background or fg to resume in foreground

# === PROCESS PRIORITY (NICE VALUES) ===
echo "⚖️ Process Priority Management:"
echo "Nice values: -20 (highest priority) to +19 (lowest priority)"
echo "Default nice value: 0"
echo "Only root can set negative nice values"

# Start process with specific priority
nice -n 10 command                  # "Start command with nice value 10 (lower priority)"
nice -n -5 command                  # "Start command with nice value -5 (higher priority, root only)"

# Change priority of running process
renice 10 1234                      # "Change nice value of PID 1234 to 10"
renice 10 -p 1234                   # "Alternative syntax"
renice 10 -u username               # "Change nice value for all processes of user"

# === ADVANCED PROCESS CONTROL ===
echo "🚀 Advanced Process Control:"

# Process groups and sessions
setsid command                      # "Start command in new session"
nohup command &                     # "Run command immune to hangup"
disown %1                           # "Remove job from shell's job table"

# CPU affinity (bind process to specific CPU cores)
taskset -c 0,1 command              # "Run command on CPU cores 0 and 1"
taskset -p 0x3 1234                 # "Set CPU affinity for existing process"

# I/O priority
ionice -c 3 command                 # "Run command with idle I/O priority"
ionice -c 1 -n 4 command            # "Run with real-time I/O, priority 4"

# === MONITORING PROCESS CHANGES ===
echo "👀 Monitoring Process Changes:"

# Watch for new processes
watch -n 1 'ps aux | head -20'      # "Monitor top processes every second"
watch -d 'ps aux --sort=-pcpu | head -10' # "Highlight changes in top CPU users"

# Monitor specific process
watch -n 1 'ps -p 1234 -o pid,pcpu,pmem,cmd' # "Monitor specific PID"

# === PROCESS DEBUGGING ===
echo "🔧 Process Debugging:"

# Trace system calls
strace -p 1234                      # "Trace system calls of running process"
strace command                      # "Trace system calls of new command"

# Trace library calls
ltrace -p 1234                      # "Trace library calls (if ltrace installed)"

# Generate core dump
gcore 1234                          # "Generate core dump of process 1234"
kill -QUIT 1234                     # "Send SIGQUIT to generate core dump"

# === PRACTICAL EXAMPLES ===
echo "💼 Practical Process Control Examples:"

# Find and kill resource-heavy processes
ps aux --sort=-pcpu | head -10       # "Find top CPU users"
ps aux --sort=-pmem | head -10       # "Find top memory users"

# Kill all processes of a specific program
pkill -f "java.*tomcat"             # "Kill Tomcat Java processes"
killall -9 chrome                   # "Force kill all Chrome processes"

# Start critical service with high priority
sudo nice -n -10 /usr/sbin/sshd     # "Start SSH daemon with high priority"

# Run backup with low priority
nice -n 19 rsync -av /home/ /backup/ # "Run backup with lowest priority"

# === THE PROCESS CONTROL CHEAT SHEET ===
echo "🎼 Process Control Quick Reference:"
echo "command &           = Run in background"
echo "kill PID            = Terminate process"
echo "kill -9 PID         = Force kill process"
echo "killall name        = Kill all processes by name"
echo "jobs                = List background jobs"
echo "fg %1               = Bring job 1 to foreground"
echo "bg %1               = Resume job 1 in background"
echo "nice -n 10 cmd      = Start with low priority"
echo "renice 10 PID       = Change priority of running process"
echo "nohup cmd &         = Run immune to hangup"`
      },
      {
        title: '3. System Services and Daemons - The Background Crew 👻',
        content: 'System services and daemons are the invisible workforce of Linux - they run in the background, keeping your system functioning smoothly. These are the processes that start when your system boots and continue running silently, handling everything from network connections to system logging. Understanding and managing services is like being the stage manager who ensures all the behind-the-scenes operations run perfectly.',
        codeExample: `# === SYSTEMD SERVICE MANAGEMENT ===
echo "👻 SystemD Service Management:"

# View service status
systemctl status ssh                # "Check SSH service status"
systemctl status apache2            # "Check Apache web server status"
systemctl status --all              # "Show status of all services"

# Start and stop services
sudo systemctl start ssh            # "Start SSH service"
sudo systemctl stop ssh             # "Stop SSH service"
sudo systemctl restart ssh          # "Restart SSH service"
sudo systemctl reload ssh           # "Reload SSH configuration"

# Enable and disable services (auto-start at boot)
sudo systemctl enable ssh           # "Enable SSH to start at boot"
sudo systemctl disable ssh          # "Disable SSH from starting at boot"
sudo systemctl enable --now ssh     # "Enable and start SSH immediately"

# === SERVICE INFORMATION ===
echo "📋 Service Information:"
systemctl list-units --type=service # "List all active services"
systemctl list-units --type=service --all # "List all services (active and inactive)"
systemctl list-unit-files --type=service # "List all service unit files"

# Filter services
systemctl list-units --type=service --state=running # "Only running services"
systemctl list-units --type=service --state=failed  # "Only failed services"

# === SERVICE DEPENDENCIES ===
echo "🔗 Service Dependencies:"
systemctl list-dependencies ssh     # "Show what SSH depends on"
systemctl list-dependencies --reverse ssh # "Show what depends on SSH"

# === SERVICE LOGS ===
echo "📜 Service Logs:"
journalctl -u ssh                   # "Show logs for SSH service"
journalctl -u ssh -f                # "Follow SSH logs in real-time"
journalctl -u ssh --since today     # "SSH logs from today"
journalctl -u ssh --since "1 hour ago" # "SSH logs from last hour"
journalctl -u ssh -n 50             # "Last 50 log entries for SSH"

# === CREATING CUSTOM SERVICES ===
echo "🛠️ Creating Custom Services:"
echo "Service file location: /etc/systemd/system/myservice.service"
cat << 'EOF'
[Unit]
Description=My Custom Service
After=network.target

[Service]
Type=simple
User=myuser
WorkingDirectory=/home/myuser/myapp
ExecStart=/home/myuser/myapp/start.sh
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# After creating service file:
sudo systemctl daemon-reload        # "Reload systemd configuration"
sudo systemctl enable myservice     # "Enable the new service"
sudo systemctl start myservice      # "Start the new service"

# === LEGACY INIT SYSTEMS ===
echo "🏛️ Legacy Init Systems (SysV):"
service ssh status                  # "Check service status (legacy)"
sudo service ssh start              # "Start service (legacy)"
sudo service ssh stop               # "Stop service (legacy)"
sudo service ssh restart            # "Restart service (legacy)"

# Update-rc.d (Debian/Ubuntu legacy)
sudo update-rc.d ssh enable         # "Enable service at boot (legacy)"
sudo update-rc.d ssh disable        # "Disable service at boot (legacy)"

# === COMMON SYSTEM SERVICES ===
echo "🔧 Common System Services:"
echo "ssh/sshd     = SSH server for remote access"
echo "apache2/httpd = Web server"
echo "mysql/mariadb = Database server"
echo "nginx        = Web server/reverse proxy"
echo "cron/crond   = Task scheduler"
echo "rsyslog      = System logging"
echo "networkd     = Network management"
echo "firewalld    = Firewall management"

# === MONITORING SERVICES ===
echo "📊 Monitoring Services:"
systemctl is-active ssh             # "Check if service is active"
systemctl is-enabled ssh            # "Check if service is enabled"
systemctl is-failed ssh             # "Check if service has failed"

# Watch service status
watch -n 1 'systemctl status ssh'   # "Monitor SSH service status"

# === TROUBLESHOOTING SERVICES ===
echo "🔧 Troubleshooting Services:"
systemctl status ssh -l             # "Detailed status with full output"
journalctl -u ssh --no-pager        # "Full logs without paging"
systemctl cat ssh                   # "Show service configuration"
systemctl show ssh                  # "Show all service properties"

# Check service file syntax
sudo systemd-analyze verify /etc/systemd/system/myservice.service

# === THE SERVICES CHEAT SHEET ===
echo "👻 Services Quick Reference:"
echo "systemctl status service    = Check service status"
echo "sudo systemctl start service = Start service"
echo "sudo systemctl stop service  = Stop service"
echo "sudo systemctl enable service = Enable at boot"
echo "sudo systemctl disable service = Disable at boot"
echo "journalctl -u service       = View service logs"
echo "systemctl list-units --type=service = List all services"`
      },
      {
        title: '4. Performance Monitoring - The System Health Check 📊',
        content: 'Performance monitoring is like being a doctor for your Linux system - you need to check vital signs, diagnose problems, and prescribe solutions. This involves understanding CPU usage, memory consumption, disk I/O, and network activity. Good performance monitoring helps you spot problems before they become critical and optimize your system for peak performance.',
        codeExample: `# === REAL-TIME SYSTEM MONITORING ===
echo "📊 Real-Time System Monitoring:"

# CPU and process monitoring
top                                 # "Classic process monitor"
htop                                # "Enhanced process monitor (if installed)"
atop                                # "Advanced system monitor (if installed)"

# System resource overview
vmstat 1                            # "Virtual memory statistics every second"
iostat 1                            # "I/O statistics every second"
sar 1                               # "System activity reporter every second"

# === CPU MONITORING ===
echo "🔥 CPU Monitoring:"
cat /proc/cpuinfo                   # "CPU information"
nproc                               # "Number of CPU cores"
lscpu                               # "CPU architecture information"

# CPU usage
grep 'cpu ' /proc/stat              # "Current CPU usage"
mpstat 1 5                          # "CPU usage statistics (5 samples)"
sar -u 1 5                          # "CPU utilization (5 samples)"

# Per-core CPU usage
mpstat -P ALL 1 5                   # "Per-CPU statistics"

# === MEMORY MONITORING ===
echo "💾 Memory Monitoring:"
free -h                             # "Memory usage in human-readable format"
cat /proc/meminfo                   # "Detailed memory information"
vmstat -s                           # "Memory statistics summary"

# Memory usage by process
ps aux --sort=-pmem | head -10      # "Top 10 memory-using processes"
pmap 1234                           # "Memory map of process 1234"

# === DISK I/O MONITORING ===
echo "💿 Disk I/O Monitoring:"
iostat -x 1                         # "Extended I/O statistics"
iotop                               # "I/O usage by process (if installed)"
lsof                                # "List open files"
lsof /path/to/file                  # "What processes are using this file"

# Disk usage
df -h                               # "Disk space usage"
du -sh /*                           # "Directory sizes in root"
du -sh ./* | sort -hr               # "Directory sizes sorted"

# === NETWORK MONITORING ===
echo "🌐 Network Monitoring:"
netstat -tuln                       # "Network connections and listening ports"
ss -tuln                            # "Modern replacement for netstat"
iftop                               # "Network usage by connection (if installed)"
nethogs                             # "Network usage by process (if installed)"

# Network interface statistics
cat /proc/net/dev                   # "Network interface statistics"
ip -s link                          # "Interface statistics with ip command"

# === LOAD AVERAGE MONITORING ===
echo "⚖️ Load Average Monitoring:"
uptime                              # "System uptime and load average"
cat /proc/loadavg                   # "Current load average"
w                                   # "Who is logged in and system load"

echo "Load Average Explanation:"
echo "1-minute average  = Recent load"
echo "5-minute average  = Short-term trend"
echo "15-minute average = Long-term trend"
echo "Load of 1.0 = 100% CPU utilization on single-core system"

# === PROCESS RESOURCE USAGE ===
echo "🎯 Process Resource Usage:"
pidstat 1                           # "Process statistics every second"
pidstat -p 1234 1                   # "Statistics for specific PID"
pidstat -u 1                        # "CPU usage per process"
pidstat -r 1                        # "Memory usage per process"
pidstat -d 1                        # "Disk I/O per process"

# === SYSTEM PERFORMANCE ANALYSIS ===
echo "🔬 System Performance Analysis:"
sar -A                              # "All system activity data"
sar -u 1 10                         # "CPU usage for 10 seconds"
sar -r 1 10                         # "Memory usage for 10 seconds"
sar -b 1 10                         # "I/O statistics for 10 seconds"
sar -n DEV 1 10                     # "Network statistics for 10 seconds"

# === PERFORMANCE BOTTLENECK IDENTIFICATION ===
echo "🚧 Bottleneck Identification:"

# CPU bottlenecks
echo "CPU Bottleneck Signs:"
echo "- Load average > number of CPU cores"
echo "- High %CPU in top"
echo "- Long run queue in vmstat"

# Memory bottlenecks
echo "Memory Bottleneck Signs:"
echo "- High swap usage"
echo "- Low free memory"
echo "- High page faults"

# I/O bottlenecks
echo "I/O Bottleneck Signs:"
echo "- High iowait in top"
echo "- High disk utilization in iostat"
echo "- Long I/O wait times"

# === PERFORMANCE TUNING COMMANDS ===
echo "⚡ Performance Tuning:"

# CPU affinity
taskset -c 0,1 command              # "Run command on specific CPU cores"
taskset -p 0x3 1234                 # "Set CPU affinity for existing process"

# I/O scheduling
echo deadline > /sys/block/sda/queue/scheduler # "Change I/O scheduler"
ionice -c 1 -n 4 command            # "Set I/O priority"

# Memory management
echo 3 > /proc/sys/vm/drop_caches   # "Clear filesystem caches"
sysctl vm.swappiness=10             # "Reduce swap usage tendency"

# === AUTOMATED MONITORING ===
echo "🤖 Automated Monitoring:"

# Create monitoring script
cat << 'EOF' > system_monitor.sh
#!/bin/bash
while true; do
    echo "=== $(date) ==="
    echo "Load: $(cat /proc/loadavg)"
    echo "Memory: $(free -h | grep Mem)"
    echo "Top CPU: $(ps aux --sort=-pcpu | head -2 | tail -1)"
    echo "Top MEM: $(ps aux --sort=-pmem | head -2 | tail -1)"
    echo ""
    sleep 60
done
EOF

chmod +x system_monitor.sh

# === PERFORMANCE ALERTS ===
echo "🚨 Performance Alerts:"

# Simple alert script
cat << 'EOF' > performance_alert.sh
#!/bin/bash
LOAD_THRESHOLD=2.0
MEM_THRESHOLD=80

LOAD=$(cat /proc/loadavg | awk '{print $1}')
MEM_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')

if (( $(echo "$LOAD > $LOAD_THRESHOLD" | bc -l) )); then
    echo "HIGH LOAD ALERT: $LOAD"
fi

if [ \\$MEM_USAGE -gt \\$MEM_THRESHOLD ]; then
    echo "HIGH MEMORY ALERT: \\$\\{MEM_USAGE\\}%"
fi
EOF

# === THE MONITORING CHEAT SHEET ===
echo "📊 Performance Monitoring Quick Reference:"
echo "top                 = Process monitor"
echo "htop                = Enhanced process monitor"
echo "free -h             = Memory usage"
echo "df -h               = Disk usage"
echo "iostat 1            = I/O statistics"
echo "vmstat 1            = Virtual memory stats"
echo "netstat -tuln       = Network connections"
echo "uptime              = Load average"
echo "ps aux --sort=-pcpu = Top CPU processes"
echo "ps aux --sort=-pmem = Top memory processes"`
      },
      {
        title: '5. Process Mastery - Advanced Techniques 🧙‍♂️',
        content: 'This is where you graduate from process user to process master! Advanced process management involves understanding process relationships, implementing automation, creating monitoring systems, and troubleshooting complex scenarios. We\'re talking about the kind of process mastery that makes you the go-to person when systems need optimization or when mysterious performance issues need solving.',
        codeExample: `# === ADVANCED PROCESS ANALYSIS ===
echo "🧙‍♂️ Advanced Process Mastery Techniques:"

# === PROCESS RELATIONSHIPS ===
echo "🔗 Process Relationships:"

# Process tree analysis
pstree -p                           # "Process tree with PIDs"
pstree -u                           # "Process tree with users"
pstree -a                           # "Process tree with arguments"
pstree -p username                  # "Process tree for specific user"

# Parent-child relationships
ps -eo pid,ppid,cmd --forest        # "Process hierarchy"
ps -eo pid,ppid,cmd | grep 1234     # "Find children of process 1234"

# Session and process group analysis
ps -eo pid,sid,pgid,cmd             # "Show session and process group IDs"

# === PROCESS FORENSICS ===
echo "🔍 Process Forensics:"

# Detailed process investigation
cat /proc/1234/cmdline              # "Command line of process 1234"
cat /proc/1234/environ              # "Environment variables"
cat /proc/1234/cwd                  # "Current working directory"
ls -la /proc/1234/fd/               # "Open file descriptors"
cat /proc/1234/maps                 # "Memory mappings"
cat /proc/1234/status               # "Detailed process status"

# Process timing information
ps -eo pid,etime,cmd                # "Process elapsed time"
ps -eo pid,lstart,cmd               # "Process start time"

# === RESOURCE LIMITS ===
echo "⚖️ Resource Limits:"

# View current limits
ulimit -a                           # "Show all limits for current shell"
cat /proc/1234/limits               # "Show limits for specific process"

# Set limits
ulimit -n 4096                      # "Set max open files to 4096"
ulimit -u 1000                      # "Set max user processes to 1000"
ulimit -m 1000000                   # "Set max memory to 1GB (in KB)"

# System-wide limits
cat /etc/security/limits.conf       # "System-wide resource limits"

# === PROCESS SCHEDULING ===
echo "📅 Process Scheduling:"

# Scheduling policies
chrt -p 1234                        # "Show scheduling policy of process"
chrt -f -p 50 1234                  # "Set FIFO scheduling with priority 50"
chrt -r -p 50 1234                  # "Set round-robin scheduling"
chrt -o -p 0 1234                   # "Set normal scheduling"

# Real-time priorities
chrt -f 99 command                  # "Run command with highest real-time priority"

# === CGROUPS (CONTROL GROUPS) ===
echo "🏗️ Control Groups (cgroups):"

# View cgroup information
cat /proc/1234/cgroup               # "Show cgroups for process"
ls /sys/fs/cgroup/                  # "List available cgroup controllers"

# Memory cgroup example
sudo mkdir /sys/fs/cgroup/memory/mygroup
echo 100M > /sys/fs/cgroup/memory/mygroup/memory.limit_in_bytes
echo 1234 > /sys/fs/cgroup/memory/mygroup/cgroup.procs

# === PROCESS AUTOMATION ===
echo "🤖 Process Automation:"

# Process monitoring script
cat << 'EOF' > process_monitor.sh
#!/bin/bash
PROCESS_NAME="$1"
MAX_CPU=80
MAX_MEM=80

while true; do
    PID=$(pgrep "$PROCESS_NAME" | head -1)
    if [ -n "$PID" ]; then
        CPU=$(ps -p $PID -o %cpu --no-headers | tr -d ' ')
        MEM=$(ps -p $PID -o %mem --no-headers | tr -d ' ')

        if (( $(echo "$CPU > $MAX_CPU" | bc -l) )); then
            echo "$(date): $PROCESS_NAME (PID: $PID) high CPU: $CPU%"
            # Could send alert or take action here
        fi

        if (( $(echo "$MEM > $MAX_MEM" | bc -l) )); then
            echo "$(date): $PROCESS_NAME (PID: $PID) high memory: $MEM%"
            # Could send alert or take action here
        fi
    else
        echo "$(date): $PROCESS_NAME not running"
    fi

    sleep 30
done
EOF

chmod +x process_monitor.sh

# === PROCESS RECOVERY ===
echo "🔄 Process Recovery:"

# Auto-restart script
cat << 'EOF' > auto_restart.sh
#!/bin/bash
SERVICE_NAME="$1"
CHECK_INTERVAL=60

while true; do
    if ! pgrep "$SERVICE_NAME" > /dev/null; then
        echo "$(date): $SERVICE_NAME not running, attempting restart"
        systemctl start "$SERVICE_NAME"
        sleep 10

        if pgrep "$SERVICE_NAME" > /dev/null; then
            echo "$(date): $SERVICE_NAME restarted successfully"
        else
            echo "$(date): Failed to restart $SERVICE_NAME"
            # Could send alert here
        fi
    fi

    sleep $CHECK_INTERVAL
done
EOF

chmod +x auto_restart.sh

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ Performance Optimization:"

# CPU optimization
optimize_cpu() {
    local pid="$1"

    # Set high priority
    renice -10 "$pid"

    # Set CPU affinity to fastest cores
    taskset -cp 0,1 "$pid"

    # Set real-time scheduling if needed
    # chrt -f -p 50 "$pid"

    echo "Optimized CPU settings for PID $pid"
}

# Memory optimization
optimize_memory() {
    local pid="$1"

    # Check if process is swapped
    if grep -q "VmSwap:" /proc/"$pid"/status; then
        swap_usage=$(grep VmSwap /proc/"$pid"/status | awk '{print $2}')
        if [ "$swap_usage" -gt 0 ]; then
            echo "Warning: Process $pid is using swap ($swap_usage KB)"
        fi
    fi
}

# === TROUBLESHOOTING TOOLKIT ===
echo "🔧 Troubleshooting Toolkit:"

# Hung process investigation
investigate_hung_process() {
    local pid="$1"

    echo "Investigating hung process: $pid"
    echo "================================"

    echo "Process status:"
    cat /proc/"$pid"/status | grep -E "(State|Threads|VmPeak|VmSize)"

    echo "Stack trace:"
    cat /proc/"$pid"/stack

    echo "Open files:"
    lsof -p "$pid" | head -10

    echo "System calls:"
    strace -p "$pid" -c -f &
    sleep 5
    kill %1
}

# Resource leak detection
detect_resource_leaks() {
    echo "🔍 Resource Leak Detection:"

    # Memory leaks
    echo "Processes with increasing memory usage:"
    ps aux --sort=-pmem | head -10

    # File descriptor leaks
    echo "Processes with many open files:"
    lsof | awk '{print $2}' | sort | uniq -c | sort -nr | head -10

    # Network connection leaks
    echo "Processes with many network connections:"
    netstat -tuln | awk '{print $7}' | sort | uniq -c | sort -nr | head -10
}

# === SYSTEM HEALTH DASHBOARD ===
echo "📊 System Health Dashboard:"

system_health() {
    clear
    echo "🖥️ SYSTEM HEALTH DASHBOARD"
    echo "=========================="
    echo "Time: $(date)"
    echo ""

    echo "📈 Load Average:"
    uptime | awk -F'load average:' '{print $2}'

    echo "💾 Memory Usage:"
    free -h | grep Mem

    echo "🔥 Top CPU Processes:"
    ps aux --sort=-pcpu | head -5 | tail -4

    echo "💿 Top Memory Processes:"
    ps aux --sort=-pmem | head -5 | tail -4

    echo "🌐 Network Connections:"
    netstat -tuln | grep LISTEN | wc -l | awk '{print $1 " listening ports"}'

    echo "⚠️ Failed Services:"
    systemctl --failed --no-legend | wc -l | awk '{print $1 " failed services"}'
}

# === THE MASTERY TOOLKIT ===
echo "🧙‍♂️ Process Mastery Toolkit:"
echo "=============================="
echo "./process_monitor.sh name     = Monitor specific process"
echo "./auto_restart.sh service     = Auto-restart service"
echo "optimize_cpu PID              = Optimize process CPU usage"
echo "investigate_hung_process PID  = Debug hung process"
echo "detect_resource_leaks         = Find resource leaks"
echo "system_health                 = System health dashboard"

# === CONGRATULATIONS! ===
echo "🎓 PROCESS MANAGEMENT MASTERY COMPLETE!"
echo "========================================"
echo "You now understand:"
echo "✅ Process viewing and analysis"
echo "✅ Process control and signals"
echo "✅ System services and daemons"
echo "✅ Performance monitoring and optimization"
echo "✅ Advanced process management techniques"
echo "✅ Troubleshooting and automation"
echo "✅ Resource management and limits"
echo ""
echo "🪫 You are now a PROCESS MANAGEMENT MAESTRO!"
echo "Conduct your Linux orchestra like a master! 🎼"
echo ""
echo "Remember: With great process power comes great system responsibility!"
echo "Use your skills to keep systems running smoothly! 💪"`
      }
    ]
  }
}