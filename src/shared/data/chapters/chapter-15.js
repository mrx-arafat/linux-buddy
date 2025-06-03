export const chapter15 = {
  id: '15',
  icon: '🪄',
  title: 'TAR & GZIP',
  description: 'File compression and archives',
  slug: 'tar-and-gzip',
  content: {
    overview: 'Welcome to TAR & GZIP - where you become the master of file compression and archiving! 🪄 If you\'ve ever needed to bundle files together, save disk space, or create backups, tar and gzip are your magical tools. TAR (Tape Archive) is like a digital filing cabinet that bundles multiple files into one archive, while GZIP is the compression wizard that shrinks files to save space. Together, they form the dynamic duo of Linux file management. Think of tar as the organizer who puts everything in boxes, and gzip as the vacuum sealer who makes those boxes incredibly compact. Whether you\'re creating backups, distributing software, or just trying to save disk space, mastering these tools will make you a file management wizard! 🚀',
    sections: [
      {
        title: '1. TAR Fundamentals - The Digital Filing Cabinet 📁',
        content: 'TAR is like having a magical filing cabinet that can bundle thousands of files and directories into a single archive file. Originally designed for tape drives (hence "Tape Archive"), tar has become the standard way to package files in Linux. Understanding tar is like learning to organize your digital life - you can bundle related files together, preserve directory structures, and create portable packages that maintain all file permissions and metadata.',
        codeExample: `# === TAR BASICS ===
echo "📁 TAR - The Digital Filing Cabinet"

# Create archives
tar -cf archive.tar file1 file2 file3    # "Create archive from files"
tar -cf backup.tar /home/user/documents  # "Archive entire directory"
tar -cf website.tar *.html *.css *.js    # "Archive web files"

# List archive contents
tar -tf archive.tar                      # "List files in archive"
tar -tvf archive.tar                     # "List with detailed info (like ls -l)"

# Extract archives
tar -xf archive.tar                      # "Extract all files"
tar -xf archive.tar file1.txt           # "Extract specific file"
tar -xf archive.tar -C /destination/    # "Extract to specific directory"

# === TAR OPTIONS EXPLAINED ===
echo "🎯 TAR Options Explained:"
echo "c = Create archive"
echo "x = Extract archive"
echo "t = List contents"
echo "f = Specify filename"
echo "v = Verbose (show progress)"
echo "z = Use gzip compression"
echo "j = Use bzip2 compression"
echo "J = Use xz compression"
echo "C = Change to directory"
echo "p = Preserve permissions"

# === CREATING ARCHIVES ===
echo "📦 Creating TAR Archives:"

# Basic archive creation
tar -cf documents.tar ~/Documents/       # "Archive Documents folder"
tar -cf logs.tar /var/log/*.log          # "Archive all log files"
tar -cf config.tar /etc/apache2/ /etc/nginx/ # "Archive multiple directories"

# Verbose archive creation (see what's being added)
tar -cvf backup.tar /home/user/          # "Create with verbose output"

# Archive with compression (we'll cover this more later)
tar -czf compressed.tar.gz /home/user/   # "Create compressed archive"

# === EXTRACTING ARCHIVES ===
echo "📤 Extracting TAR Archives:"

# Basic extraction
tar -xf archive.tar                      # "Extract to current directory"
tar -xf archive.tar -C /tmp/             # "Extract to /tmp/"

# Verbose extraction
tar -xvf archive.tar                     # "Extract with progress"

# Extract specific files
tar -xf archive.tar file1.txt dir1/     # "Extract only specific items"

# Extract with pattern matching
tar -xf archive.tar --wildcards "*.txt" # "Extract only .txt files"

# === LISTING ARCHIVE CONTENTS ===
echo "📋 Listing Archive Contents:"

# Basic listing
tar -tf archive.tar                      # "List all files"
tar -tf archive.tar | head -10          # "Show first 10 files"

# Detailed listing
tar -tvf archive.tar                     # "Detailed listing (permissions, dates, sizes)"

# Search in archive
tar -tf archive.tar | grep ".txt"       # "Find .txt files in archive"
tar -tf archive.tar | grep "config"     # "Find files with 'config' in name"

# === UPDATING ARCHIVES ===
echo "🔄 Updating TAR Archives:"

# Add files to existing archive
tar -rf archive.tar newfile.txt         # "Add file to existing archive"
tar -rf archive.tar newdir/             # "Add directory to archive"

# Note: You cannot remove files from tar archives directly
# You need to extract, modify, and recreate

# === ADVANCED TAR OPTIONS ===
echo "🚀 Advanced TAR Options:"

# Preserve permissions and ownership
tar -cpf archive.tar /etc/              # "Preserve permissions"
sudo tar -cpf system.tar /etc/ /var/    # "Preserve ownership (needs root)"

# Exclude files and directories
tar -cf backup.tar --exclude="*.log" /home/user/ # "Exclude log files"
tar -cf backup.tar --exclude-from=exclude.txt /home/ # "Exclude from file list"

# Follow symbolic links
tar -chf archive.tar /path/with/symlinks # "Follow symlinks"

# Archive with timestamp
tar -cf "backup_$(date +%Y%m%d).tar" /home/user/

# === TAR WITH FIND ===
echo "🔍 TAR with Find:"

# Archive files modified in last 7 days
find /home/user -mtime -7 -type f | tar -cf recent.tar -T -

# Archive specific file types
find /var/www -name "*.php" | tar -cf php_files.tar -T -

# Archive large files
find /home -size +100M | tar -cf large_files.tar -T -

# === PRACTICAL TAR EXAMPLES ===
echo "💼 Practical TAR Examples:"

# Backup user home directory
tar -cf "home_backup_$(date +%Y%m%d).tar" /home/user/

# Archive web application
tar -cf webapp.tar --exclude="node_modules" --exclude=".git" /var/www/myapp/

# Create incremental backup
tar -cf full_backup.tar /home/user/
tar -cf incremental.tar --newer-mtime="2023-01-01" /home/user/

# Archive with verification
tar -cf archive.tar /important/data/ && tar -tf archive.tar > /dev/null && echo "Archive created successfully"

# === TAR TROUBLESHOOTING ===
echo "🔧 TAR Troubleshooting:"

# Check archive integrity
tar -tf archive.tar > /dev/null && echo "Archive is valid" || echo "Archive is corrupted"

# Compare archive with filesystem
tar -df archive.tar                     # "Compare archive with files on disk"

# Handle long pathnames
tar --format=posix -cf archive.tar /very/long/path/

# === THE TAR CHEAT SHEET ===
echo "📁 TAR Quick Reference:"
echo "tar -cf archive.tar files     = Create archive"
echo "tar -xf archive.tar           = Extract archive"
echo "tar -tf archive.tar           = List contents"
echo "tar -rf archive.tar newfile   = Add to archive"
echo "tar -xf archive.tar -C /path/ = Extract to path"
echo "tar -czf archive.tar.gz files = Create compressed"
echo "tar --exclude='*.log' -cf ... = Exclude files"`
      },
      {
        title: '2. GZIP Mastery - The Compression Wizard 🗜️',
        content: 'GZIP is your compression wizard that can dramatically reduce file sizes, saving disk space and speeding up file transfers. While tar organizes files, gzip compresses them. Understanding gzip is like learning magic spells for shrinking files - you can make gigabytes of data fit into much smaller spaces without losing any information. GZIP uses the DEFLATE algorithm to achieve excellent compression ratios while maintaining fast compression and decompression speeds.',
        codeExample: `# === GZIP BASICS ===
echo "🗜️ GZIP - The Compression Wizard"

# Compress files
gzip file.txt                           # "Compress file.txt to file.txt.gz"
gzip -c file.txt > file.txt.gz          # "Compress keeping original"
gzip *.log                              # "Compress all .log files"

# Decompress files
gunzip file.txt.gz                      # "Decompress to file.txt"
gzip -d file.txt.gz                     # "Alternative decompress syntax"
zcat file.txt.gz                        # "View compressed file without extracting"

# === GZIP OPTIONS ===
echo "⚙️ GZIP Options:"
echo "-1 to -9 = Compression level (1=fast, 9=best compression)"
echo "-c = Write to stdout (keep original)"
echo "-d = Decompress"
echo "-f = Force overwrite"
echo "-k = Keep original file"
echo "-l = List compressed file info"
echo "-r = Recursive (compress directories)"
echo "-t = Test compressed file integrity"
echo "-v = Verbose output"

# === COMPRESSION LEVELS ===
echo "📊 GZIP Compression Levels:"

# Fast compression (level 1)
gzip -1 large_file.txt                  # "Fast compression, larger file"

# Best compression (level 9)
gzip -9 large_file.txt                  # "Best compression, smaller file"

# Default compression (level 6)
gzip large_file.txt                     # "Balanced compression"

# Compare compression levels
echo "Comparing compression levels:"
cp large_file.txt test1.txt && gzip -1 test1.txt
cp large_file.txt test9.txt && gzip -9 test9.txt
ls -lh test*.gz

# === KEEPING ORIGINAL FILES ===
echo "💾 Keeping Original Files:"

# Compress keeping original (newer gzip versions)
gzip -k file.txt                        # "Keep original file"

# Compress keeping original (older versions)
gzip -c file.txt > file.txt.gz          # "Redirect to new file"

# Decompress keeping compressed file
gunzip -c file.txt.gz > file.txt        # "Keep .gz file"
zcat file.txt.gz > file.txt             # "Alternative method"

# === WORKING WITH COMPRESSED FILES ===
echo "🔍 Working with Compressed Files:"

# View compressed files
zcat file.txt.gz                        # "View entire compressed file"
zless file.txt.gz                       # "Page through compressed file"
zmore file.txt.gz                       # "View compressed file page by page"
zhead file.txt.gz                       # "Show first lines (if available)"
ztail file.txt.gz                       # "Show last lines (if available)"

# Search in compressed files
zgrep "pattern" file.txt.gz             # "Search in compressed file"
zgrep -i "error" *.gz                   # "Case-insensitive search in all .gz files"

# Compare compressed files
zdiff file1.txt.gz file2.txt.gz         # "Compare two compressed files"

# === GZIP WITH PIPES ===
echo "🔗 GZIP with Pipes:"

# Compress command output
ps aux | gzip > processes.gz            # "Compress command output"
cat large_file.txt | gzip > compressed.gz

# Decompress and pipe to other commands
zcat data.gz | sort | uniq              # "Process compressed data"
zcat log.gz | grep "ERROR" | wc -l      # "Count errors in compressed log"

# === RECURSIVE COMPRESSION ===
echo "🌳 Recursive Compression:"

# Compress all files in directory tree
gzip -r /path/to/directory/             # "Compress all files recursively"

# Find and compress specific files
find /var/log -name "*.log" -exec gzip {} \\;

# Compress files older than 30 days
find /backup -name "*.txt" -mtime +30 -exec gzip {} \\;

# === TESTING AND VERIFICATION ===
echo "✅ Testing Compressed Files:"

# Test file integrity
gzip -t file.txt.gz                     # "Test if file is valid"
gzip -tv *.gz                          # "Test all .gz files verbosely"

# List compressed file information
gzip -l file.txt.gz                     # "Show compression ratio and sizes"
gzip -lv *.gz                          # "Detailed info for all .gz files"

# === ADVANCED GZIP TECHNIQUES ===
echo "🚀 Advanced GZIP Techniques:"

# Compress with custom suffix
gzip -S .backup file.txt                # "Creates file.txt.backup instead of .gz"

# Force compression of already compressed files
gzip -f file.txt.gz                     # "Force recompression"

# Compress to specific output file
gzip -c input.txt > /backup/compressed.gz

# === GZIP ALTERNATIVES ===
echo "🔄 GZIP Alternatives:"
echo "bzip2  = Better compression, slower"
echo "xz     = Best compression, slowest"
echo "lz4    = Fastest compression"
echo "zstd   = Modern, balanced compression"

# Examples of alternatives
bzip2 file.txt                          # "Creates file.txt.bz2"
xz file.txt                             # "Creates file.txt.xz"

# === PRACTICAL GZIP EXAMPLES ===
echo "💼 Practical GZIP Examples:"

# Compress log files daily
find /var/log -name "*.log" -mtime +1 -exec gzip {} \\;

# Backup and compress
tar -cf backup.tar /home/user/ && gzip backup.tar

# Email compressed files
gzip large_report.txt && mail -a large_report.txt.gz user@example.com

# Web server log compression
gzip /var/log/apache2/access.log.1

# === THE GZIP CHEAT SHEET ===
echo "🗜️ GZIP Quick Reference:"
echo "gzip file.txt              = Compress file"
echo "gunzip file.txt.gz         = Decompress file"
echo "gzip -k file.txt           = Compress keeping original"
echo "gzip -9 file.txt           = Best compression"
echo "zcat file.txt.gz           = View compressed file"
echo "zgrep pattern file.gz      = Search in compressed file"
echo "gzip -l file.gz            = Show compression info"
echo "gzip -t file.gz            = Test file integrity"`
      },
      {
        title: '3. TAR + GZIP Combination - The Ultimate Power Duo 💪',
        content: 'When you combine TAR and GZIP, you get the ultimate file management power duo! This combination gives you both organization (tar) and compression (gzip) in one seamless operation. Most Linux users work with .tar.gz files daily - they\'re the standard format for software distribution, backups, and file sharing. Understanding this combination is like learning to use both hands together - much more powerful than using them separately.',
        codeExample: `# === TAR + GZIP COMBINATION ===
echo "💪 TAR + GZIP - The Ultimate Power Duo"

# Create compressed archives (most common usage)
tar -czf archive.tar.gz /home/user/     # "Create compressed tar archive"
tar -czf backup.tar.gz /etc/ /var/www/  # "Backup multiple directories"
tar -czf "backup_$(date +%Y%m%d).tar.gz" /important/data/

# Extract compressed archives
tar -xzf archive.tar.gz                 # "Extract compressed archive"
tar -xzf archive.tar.gz -C /destination/ # "Extract to specific directory"

# List contents of compressed archives
tar -tzf archive.tar.gz                 # "List files in compressed archive"
tar -tzvf archive.tar.gz                # "List with detailed info"

# === COMPRESSION OPTIONS ===
echo "🗜️ Different Compression Options:"

# GZIP compression (most common)
tar -czf archive.tar.gz files/          # "Create gzip compressed archive"
tar -xzf archive.tar.gz                 # "Extract gzip compressed archive"

# BZIP2 compression (better compression)
tar -cjf archive.tar.bz2 files/         # "Create bzip2 compressed archive"
tar -xjf archive.tar.bz2                # "Extract bzip2 compressed archive"

# XZ compression (best compression)
tar -cJf archive.tar.xz files/          # "Create xz compressed archive"
tar -xJf archive.tar.xz                 # "Extract xz compressed archive"

# === ADVANCED COMPRESSED ARCHIVES ===
echo "🚀 Advanced Compressed Archive Operations:"

# Create with exclusions
tar -czf backup.tar.gz --exclude="*.log" --exclude="tmp/" /home/user/

# Create with verbose output
tar -czvf backup.tar.gz /home/user/     # "See files being added"

# Extract specific files from compressed archive
tar -xzf archive.tar.gz path/to/specific/file.txt

# Extract with pattern matching
tar -xzf archive.tar.gz --wildcards "*.conf"

# === COMPRESSION COMPARISON ===
echo "📊 Compression Method Comparison:"

# Create test archives with different compression
tar -cf test.tar /home/user/documents/
tar -czf test.tar.gz /home/user/documents/
tar -cjf test.tar.bz2 /home/user/documents/
tar -cJf test.tar.xz /home/user/documents/

# Compare sizes
echo "Compression comparison:"
ls -lh test.tar*

# === STREAMING OPERATIONS ===
echo "🌊 Streaming TAR+GZIP Operations:"

# Create archive and stream to remote server
tar -czf - /home/user/ | ssh user@server "cat > backup.tar.gz"

# Stream from remote server and extract
ssh user@server "cat backup.tar.gz" | tar -xzf -

# Pipe through network
tar -czf - /data/ | nc target_server 9999

# === SPLIT LARGE ARCHIVES ===
echo "✂️ Splitting Large Archives:"

# Create and split large archive
tar -czf - /large/directory/ | split -b 1G - backup.tar.gz.

# Reconstruct and extract split archive
cat backup.tar.gz.* | tar -xzf -

# === INCREMENTAL BACKUPS ===
echo "📈 Incremental Backups with TAR+GZIP:"

# Full backup
tar -czf full_backup_$(date +%Y%m%d).tar.gz /home/user/

# Incremental backup (files newer than full backup)
find /home/user/ -newer full_backup_$(date +%Y%m%d).tar.gz | \\
tar -czf incremental_$(date +%Y%m%d_%H%M).tar.gz -T -

# === VERIFICATION AND TESTING ===
echo "✅ Verification and Testing:"

# Test compressed archive integrity
tar -tzf archive.tar.gz > /dev/null && echo "Archive OK" || echo "Archive corrupted"

# Compare archive with filesystem
tar -dzf backup.tar.gz                  # "Compare compressed archive with files"

# Verify extraction without actually extracting
tar -tzvf archive.tar.gz | head -10     # "Preview what would be extracted"

# === PRACTICAL EXAMPLES ===
echo "💼 Practical TAR+GZIP Examples:"

# Website backup
tar -czf "website_backup_$(date +%Y%m%d).tar.gz" \\
    --exclude="logs/" \\
    --exclude="cache/" \\
    --exclude="tmp/" \\
    /var/www/html/

# Database + files backup
mysqldump --all-databases | gzip > db_backup.sql.gz
tar -czf "full_backup_$(date +%Y%m%d).tar.gz" /home/ /etc/ db_backup.sql.gz

# Source code archive
tar -czf project.tar.gz \\
    --exclude=".git/" \\
    --exclude="node_modules/" \\
    --exclude="*.log" \\
    /path/to/project/

# Log archive with rotation
tar -czf "logs_$(date +%Y%m%d).tar.gz" /var/log/*.log
rm /var/log/*.log.1  # Remove old rotated logs after archiving

# === THE POWER DUO CHEAT SHEET ===
echo "💪 TAR+GZIP Quick Reference:"
echo "tar -czf archive.tar.gz files = Create compressed archive"
echo "tar -xzf archive.tar.gz       = Extract compressed archive"
echo "tar -tzf archive.tar.gz       = List compressed archive"
echo "tar -cjf archive.tar.bz2 files = Create bzip2 archive"
echo "tar -cJf archive.tar.xz files  = Create xz archive"
echo "tar -czf - files | ssh ...     = Stream to remote server"`
      },
      {
        title: '4. Archive Management - Professional Techniques 🎯',
        content: 'Professional archive management goes beyond basic compression - it involves strategies for backup rotation, automated archiving, integrity checking, and efficient storage. This is where you become an archive management professional who can design robust backup systems, optimize storage usage, and ensure data integrity across large-scale operations.',
        codeExample: `# === PROFESSIONAL ARCHIVE MANAGEMENT ===
echo "🎯 Professional Archive Management Techniques"

# === BACKUP ROTATION STRATEGIES ===
echo "🔄 Backup Rotation Strategies:"

# Daily backup with 7-day rotation
create_daily_backup() {
    local backup_dir="/backup/daily"
    local source_dir="/home/user"
    local today=$(date +%A)  # Monday, Tuesday, etc.

    mkdir -p "$backup_dir"
    tar -czf "$backup_dir/backup_$today.tar.gz" "$source_dir"
    echo "Daily backup created: backup_$today.tar.gz"
}

# Weekly backup with 4-week rotation
create_weekly_backup() {
    local backup_dir="/backup/weekly"
    local source_dir="/home/user"
    local week=$(date +%U)  # Week number
    local week_mod=$((week % 4 + 1))  # 1-4 rotation

    mkdir -p "$backup_dir"
    tar -czf "$backup_dir/backup_week$week_mod.tar.gz" "$source_dir"
    echo "Weekly backup created: backup_week$week_mod.tar.gz"
}

# Monthly backup with 12-month rotation
create_monthly_backup() {
    local backup_dir="/backup/monthly"
    local source_dir="/home/user"
    local month=$(date +%m)

    mkdir -p "$backup_dir"
    tar -czf "$backup_dir/backup_month$month.tar.gz" "$source_dir"
    echo "Monthly backup created: backup_month$month.tar.gz"
}

# === AUTOMATED ARCHIVE MANAGEMENT ===
echo "🤖 Automated Archive Management:"

# Smart backup script
smart_backup() {
    local source="$1"
    local dest_dir="$2"
    local max_age_days="$3"
    local timestamp=$(date +%Y%m%d_%H%M%S)

    # Create backup
    echo "Creating backup of $source..."
    tar -czf "$dest_dir/backup_$timestamp.tar.gz" "$source"

    # Verify backup
    if tar -tzf "$dest_dir/backup_$timestamp.tar.gz" >/dev/null 2>&1; then
        echo "Backup verified successfully"

        # Clean old backups
        find "$dest_dir" -name "backup_*.tar.gz" -mtime +$max_age_days -delete
        echo "Cleaned backups older than $max_age_days days"
    else
        echo "Backup verification failed!"
        rm -f "$dest_dir/backup_$timestamp.tar.gz"
        return 1
    fi
}

# Usage: smart_backup /home/user /backup/auto 30

# === DIFFERENTIAL BACKUPS ===
echo "📊 Differential and Incremental Backups:"

# Create snapshot file for differential backups
create_snapshot() {
    local source_dir="$1"
    local snapshot_file="$2"

    find "$source_dir" -type f -printf '%T@ %p\\n' > "$snapshot_file"
    echo "Snapshot created: $snapshot_file"
}

# Create differential backup
create_differential_backup() {
    local source_dir="$1"
    local snapshot_file="$2"
    local backup_file="$3"

    # Find files newer than snapshot
    find "$source_dir" -type f -newer "$snapshot_file" | \\
    tar -czf "$backup_file" -T -

    echo "Differential backup created: $backup_file"
}

# === ARCHIVE INTEGRITY MONITORING ===
echo "🔍 Archive Integrity Monitoring:"

# Create checksum database
create_archive_checksums() {
    local archive_dir="$1"
    local checksum_file="$archive_dir/checksums.md5"

    cd "$archive_dir"
    find . -name "*.tar.gz" -exec md5sum {} \\; > "$checksum_file"
    echo "Checksums created in $checksum_file"
}

# Verify archive integrity
verify_archive_integrity() {
    local archive_dir="$1"
    local checksum_file="$archive_dir/checksums.md5"

    if [ -f "$checksum_file" ]; then
        cd "$archive_dir"
        if md5sum -c "$checksum_file"; then
            echo "All archives verified successfully"
            return 0
        else
            echo "Archive integrity check failed!"
            return 1
        fi
    else
        echo "No checksum file found"
        return 1
    fi
}

# === STORAGE OPTIMIZATION ===
echo "💾 Storage Optimization:"

# Analyze archive efficiency
analyze_compression_efficiency() {
    local archive="$1"

    if [[ "$archive" == *.tar.gz ]]; then
        echo "Analyzing compression efficiency for: $archive"

        # Get compressed size
        compressed_size=$(stat -f%z "$archive" 2>/dev/null || stat -c%s "$archive")

        # Get uncompressed size
        uncompressed_size=$(tar -tzf "$archive" --totals 2>&1 | grep "Total bytes" | awk '{print $3}')

        # Calculate compression ratio
        if [ -n "$uncompressed_size" ] && [ "$uncompressed_size" -gt 0 ]; then
            ratio=$(echo "scale=2; $compressed_size * 100 / $uncompressed_size" | bc)
            echo "Compression ratio: $ratio% (smaller is better)"
            echo "Space saved: $(echo "scale=2; ($uncompressed_size - $compressed_size) / 1024 / 1024" | bc) MB"
        fi
    fi
}

# Optimize old archives
optimize_old_archives() {
    local archive_dir="$1"
    local days_old="$2"

    echo "Optimizing archives older than $days_old days..."

    find "\\$archive_dir" -name "*.tar.gz" -mtime +\\$days_old | while read archive; do
        echo "Optimizing: \\$archive"

        # Extract, recompress with maximum compression
        temp_dir=\\$(mktemp -d)
        tar -xzf "\\$archive" -C "\\$temp_dir"
        tar -czf "\\$\\{archive\\}.optimized" -C "\\$temp_dir" .

        # Replace if smaller
        if [ \\$(stat -c%s "\\$\\{archive\\}.optimized") -lt \\$(stat -c%s "\\$archive") ]; then
            mv "\\$\\{archive\\}.optimized" "\\$archive"
            echo "Archive optimized and replaced"
        else
            rm "\\$\\{archive\\}.optimized"
            echo "No optimization benefit, keeping original"
        fi

        rm -rf "\\$temp_dir"
    done
}

# === ARCHIVE CATALOGING ===
echo "📚 Archive Cataloging:"

# Create archive catalog
create_archive_catalog() {
    local archive_dir="$1"
    local catalog_file="$archive_dir/catalog.txt"

    {
        echo "Archive Catalog - Generated $(date)"
        echo "=================================="
        echo ""

        find "\\$archive_dir" -name "*.tar.gz" | while read archive; do
            echo "Archive: \\$(basename "\\$archive")"
            echo "Size: \\$(ls -lh "\\$archive" | awk '{print \\$5}')"
            echo "Date: \\$(ls -l "\\$archive" | awk '{print \\$6, \\$7, \\$8}')"
            echo "Files: \\$(tar -tzf "\\$archive" | wc -l)"
            echo "Contents preview:"
            tar -tzf "\\$archive" | head -5 | sed 's/^/  /'
            echo ""
        done
    } > "$catalog_file"

    echo "Catalog created: $catalog_file"
}

# Search archives
search_in_archives() {
    local archive_dir="$1"
    local search_pattern="$2"

    echo "Searching for '$search_pattern' in archives..."

    find "\\$archive_dir" -name "*.tar.gz" | while read archive; do
        if tar -tzf "\\$archive" | grep -q "\\$search_pattern"; then
            echo "Found in: \\$(basename "\\$archive")"
            tar -tzf "\\$archive" | grep "\\$search_pattern" | sed 's/^/  /'
        fi
    done
}

# === DISASTER RECOVERY ===
echo "🚨 Disaster Recovery:"

# Create recovery information
create_recovery_info() {
    local archive="\\$1"
    local info_file="\\$\\{archive\\}.info"

    {
        echo "Recovery Information for: \\$(basename "\\$archive")"
        echo "Created: \\$(date)"
        echo "Archive size: \\$(ls -lh "\\$archive" | awk '{print \\$5}')"
        echo "Archive checksum: \\$(md5sum "\\$archive" | awk '{print \\$1}')"
        echo "Total files: \\$(tar -tzf "\\$archive" | wc -l)"
        echo "Extraction command: tar -xzf \\$(basename "\\$archive")"
        echo ""
        echo "Directory structure:"
        tar -tzf "\\$archive" | head -20
    } > "\\$info_file"

    echo "Recovery info created: \\$info_file"
}

# === THE PROFESSIONAL TOOLKIT ===
echo "🎯 Professional Archive Management Toolkit:"
echo "============================================"
echo "smart_backup source dest days     = Automated backup with cleanup"
echo "create_snapshot dir snapshot       = Create differential snapshot"
echo "verify_archive_integrity dir       = Check archive checksums"
echo "analyze_compression_efficiency arc = Analyze compression ratio"
echo "create_archive_catalog dir         = Generate archive catalog"
echo "search_in_archives dir pattern     = Search across all archives"

# === CONGRATULATIONS! ===
echo "🎓 TAR & GZIP MASTERY COMPLETE!"
echo "================================"
echo "You now understand:"
echo "✅ TAR fundamentals for file archiving"
echo "✅ GZIP mastery for file compression"
echo "✅ TAR+GZIP combination for ultimate efficiency"
echo "✅ Professional archive management techniques"
echo "✅ Backup rotation and automation strategies"
echo "✅ Storage optimization and integrity monitoring"
echo "✅ Disaster recovery and cataloging systems"
echo ""
echo "🪄 You are now an ARCHIVE WIZARD!"
echo "Compress, organize, and manage files like a master! 📁"
echo ""
echo "Remember: Good backups are like insurance - you hope you never need them, but you're glad they're there!"
echo "Use your archiving powers to protect and organize data! 💪"`
      }
    ]
  }
}