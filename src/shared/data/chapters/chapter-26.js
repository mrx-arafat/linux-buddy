export const chapter26 = {
  id: '26',
  icon: '💽',
  title: 'MOUNT A VOLUME',
  description: 'Storage and volume management',
  slug: 'mount-a-volume',
  content: {
    overview: 'Welcome to MOUNT A VOLUME - the art of connecting storage to your Linux system! 💽 If your computer is a house, then mounting volumes is like installing new rooms, closets, and storage spaces. In Linux, everything is a file, and mounting is how you make external storage devices, network drives, and virtual filesystems accessible through your directory tree. We\'re going to transform you from someone who struggles with "device not found" errors to a storage wizard who can mount anything, anywhere, anytime! 🚀',
    sections: [
      {
        title: '1. Mount Fundamentals - Understanding Storage Connection 🔌',
        content: 'Mount fundamentals are the foundation of Linux storage management. Mounting is the process of making a filesystem accessible at a specific directory location. It\'s like creating a doorway between your system and external storage - once mounted, you can access the storage as if it were part of your local filesystem.',
        codeExample: `# === MOUNT FUNDAMENTALS ===
echo "🔌 Mount Fundamentals - Understanding Storage Connection"

# === BASIC MOUNT CONCEPTS ===
echo "📚 Basic Mount Concepts:"

echo "Key terms:"
echo "Mount point  = Directory where filesystem is attached"
echo "Device       = Physical or virtual storage device"
echo "Filesystem   = Format of data organization (ext4, ntfs, etc.)"
echo "UUID         = Unique identifier for storage devices"
echo "Label        = Human-readable name for storage devices"

# === VIEWING MOUNTED FILESYSTEMS ===
echo "👀 Viewing Mounted Filesystems:"

# List all mounted filesystems
echo "# List mounted filesystems:"
echo "mount"                          # Show all mounts
echo "mount | column -t"              # Formatted output
echo "df -h"                          # Show disk usage
echo "df -T"                          # Show filesystem types
echo "findmnt"                        # Tree view of mounts
echo "findmnt -D"                     # Show device info

# Show specific filesystem
echo "# Show specific filesystem:"
echo "mount | grep /home"
echo "findmnt /home"
echo "df -h /home"

# === AVAILABLE STORAGE DEVICES ===
echo "🔍 Finding Available Storage Devices:"

# List all block devices
echo "# List block devices:"
echo "lsblk"                          # Tree view of devices
echo "lsblk -f"                       # Show filesystem info
echo "lsblk -o NAME,SIZE,TYPE,MOUNTPOINT,FSTYPE,UUID"

# List disk partitions
echo "# List partitions:"
echo "fdisk -l"                       # All disk partitions
echo "sudo fdisk -l /dev/sda"         # Specific disk
echo "parted -l"                      # Alternative partition tool

# Show device information
echo "# Device information:"
echo "blkid"                          # Show UUIDs and labels
echo "blkid /dev/sda1"                # Specific device info
echo "file -s /dev/sda1"              # Filesystem type

# === BASIC MOUNTING ===
echo "⚡ Basic Mounting:"

# Mount by device name
echo "# Mount by device name:"
echo "sudo mount /dev/sda1 /mnt/usb"
echo "sudo mount /dev/sdb1 /media/external"

# Mount with filesystem type
echo "# Mount with filesystem type:"
echo "sudo mount -t ext4 /dev/sda1 /mnt/data"
echo "sudo mount -t ntfs /dev/sdb1 /mnt/windows"
echo "sudo mount -t vfat /dev/sdc1 /mnt/fat32"

# Mount with options
echo "# Mount with options:"
echo "sudo mount -o ro /dev/sda1 /mnt/readonly"        # Read-only
echo "sudo mount -o rw /dev/sda1 /mnt/readwrite"       # Read-write
echo "sudo mount -o noexec /dev/sda1 /mnt/noexec"      # No execution

# === UNMOUNTING ===
echo "🔓 Unmounting:"

# Basic unmount
echo "# Unmount filesystems:"
echo "sudo umount /mnt/usb"           # By mount point
echo "sudo umount /dev/sda1"          # By device

# Force unmount
echo "# Force unmount:"
echo "sudo umount -f /mnt/usb"        # Force unmount
echo "sudo umount -l /mnt/usb"        # Lazy unmount

# Check what's using the mount
echo "# Check what's using mount:"
echo "lsof /mnt/usb"                  # List open files
echo "fuser -v /mnt/usb"              # Show processes using mount
echo "fuser -km /mnt/usb"             # Kill processes using mount

# === MOUNT POINTS ===
echo "📁 Creating Mount Points:"

# Create mount directories
echo "# Create mount points:"
echo "sudo mkdir -p /mnt/usb"
echo "sudo mkdir -p /mnt/external"
echo "sudo mkdir -p /media/backup"

# Set permissions
echo "# Set mount point permissions:"
echo "sudo chown user:user /mnt/usb"
echo "sudo chmod 755 /mnt/usb"

# === THE MOUNT FUNDAMENTALS CHEAT SHEET ===
echo "💽 Mount Fundamentals Quick Reference:"
echo "mount                           = Show all mounts"
echo "lsblk                           = List block devices"
echo "sudo mount /dev/sda1 /mnt/usb   = Mount device"
echo "sudo umount /mnt/usb            = Unmount"
echo "df -h                           = Show disk usage"
echo "blkid                           = Show device UUIDs"
echo "findmnt                         = Tree view of mounts"
echo "lsof /mnt/point                 = Check what's using mount"`
      },
      {
        title: '2. Filesystem Types & Options - Advanced Mounting 🗂️',
        content: 'Different filesystems have different capabilities and mount options. Understanding filesystem types and mount options allows you to optimize performance, security, and compatibility. It\'s like knowing which tools to use for different jobs - you wouldn\'t use a hammer for everything!',
        codeExample: `# === FILESYSTEM TYPES & OPTIONS ===
echo "🗂️ Filesystem Types & Options - Advanced Mounting"

# === COMMON FILESYSTEM TYPES ===
echo "📋 Common Filesystem Types:"

echo "Linux filesystems:"
echo "ext4     = Default Linux filesystem (journaled, reliable)"
echo "ext3     = Older Linux filesystem (journaled)"
echo "ext2     = Basic Linux filesystem (no journaling)"
echo "xfs      = High-performance filesystem (good for large files)"
echo "btrfs    = Modern filesystem (snapshots, compression)"
echo "zfs      = Advanced filesystem (checksums, RAID)"

echo "Windows filesystems:"
echo "ntfs     = Windows NT filesystem"
echo "fat32    = Compatible with Windows/Mac/Linux"
echo "exfat    = Extended FAT (large files, cross-platform)"

echo "Network filesystems:"
echo "nfs      = Network File System"
echo "cifs     = Common Internet File System (SMB/CIFS)"
echo "sshfs    = SSH Filesystem"

echo "Special filesystems:"
echo "tmpfs    = RAM-based temporary filesystem"
echo "proc     = Process information filesystem"
echo "sysfs    = System information filesystem"

# === MOUNT OPTIONS ===
echo "⚙️ Mount Options:"

# Basic options
echo "# Basic mount options:"
echo "rw       = Read-write (default)"
echo "ro       = Read-only"
echo "exec     = Allow execution of binaries (default)"
echo "noexec   = Prevent execution of binaries"
echo "suid     = Allow set-user-ID (default)"
echo "nosuid   = Prevent set-user-ID"
echo "dev      = Allow device files (default)"
echo "nodev    = Prevent device files"

# Performance options
echo "# Performance options:"
echo "sync     = Synchronous I/O"
echo "async    = Asynchronous I/O (default)"
echo "atime    = Update access times (default)"
echo "noatime  = Don't update access times (faster)"
echo "relatime = Update access times relatively"

# === MOUNTING WITH SPECIFIC OPTIONS ===
echo "🔧 Mounting with Specific Options:"

# Security-focused mounts
echo "# Security-focused mounting:"
echo "sudo mount -o ro,noexec,nosuid,nodev /dev/sda1 /mnt/secure"

# Performance-optimized mounts
echo "# Performance-optimized mounting:"
echo "sudo mount -o noatime,async /dev/sda1 /mnt/fast"

# Windows NTFS with full permissions
echo "# NTFS with permissions:"
echo "sudo mount -t ntfs -o uid=1000,gid=1000,umask=022 /dev/sda1 /mnt/windows"

# FAT32 with specific encoding
echo "# FAT32 with UTF-8 encoding:"
echo "sudo mount -t vfat -o iocharset=utf8,uid=1000,gid=1000 /dev/sda1 /mnt/fat32"

# === NETWORK FILESYSTEMS ===
echo "🌐 Network Filesystems:"

# NFS mounting
echo "# NFS mounting:"
echo "sudo mount -t nfs server:/path/to/share /mnt/nfs"
echo "sudo mount -t nfs -o vers=4,soft,intr server:/share /mnt/nfs4"

# CIFS/SMB mounting
echo "# CIFS/SMB mounting:"
echo "sudo mount -t cifs //server/share /mnt/smb -o username=user,password=pass"
echo "sudo mount -t cifs //server/share /mnt/smb -o credentials=/etc/samba/credentials"

# SSHFS mounting
echo "# SSHFS mounting:"
echo "sshfs user@server:/remote/path /mnt/ssh"
echo "sshfs -o allow_other user@server:/path /mnt/ssh"

# === TEMPORARY FILESYSTEMS ===
echo "💨 Temporary Filesystems:"

# tmpfs (RAM disk)
echo "# tmpfs (RAM disk):"
echo "sudo mount -t tmpfs -o size=1G tmpfs /mnt/ramdisk"
echo "sudo mount -t tmpfs -o size=512M,noexec,nosuid tmpfs /tmp/secure"

# === LOOP DEVICES ===
echo "🔄 Loop Devices (ISO/Image Files):"

# Mount ISO files
echo "# Mount ISO files:"
echo "sudo mount -o loop /path/to/image.iso /mnt/iso"
echo "sudo mount -t iso9660 -o loop,ro /path/to/cd.iso /mnt/cdrom"

# Mount disk images
echo "# Mount disk images:"
echo "sudo mount -o loop /path/to/disk.img /mnt/image"

# Create and mount loop device
echo "# Create loop device:"
echo "sudo losetup /dev/loop0 /path/to/image.img"
echo "sudo mount /dev/loop0 /mnt/loop"

# === BIND MOUNTS ===
echo "🔗 Bind Mounts:"

# Bind mount directories
echo "# Bind mount directories:"
echo "sudo mount --bind /source/directory /target/directory"
echo "sudo mount --bind /home/user/documents /mnt/docs"

# Read-only bind mount
echo "# Read-only bind mount:"
echo "sudo mount --bind /source /target"
echo "sudo mount -o remount,ro /target"

# === THE FILESYSTEM OPTIONS CHEAT SHEET ===
echo "🗂️ Filesystem Options Quick Reference:"
echo "mount -t fstype                 = Specify filesystem type"
echo "mount -o ro,noexec,nosuid       = Security options"
echo "mount -o noatime                = Performance option"
echo "mount -t ntfs -o uid=1000       = NTFS with user ownership"
echo "mount -t tmpfs -o size=1G       = RAM disk"
echo "mount --bind /src /dst          = Bind mount"
echo "mount -o loop image.iso /mnt    = Mount ISO file"`
      },
      {
        title: '3. Persistent Mounting - /etc/fstab Configuration 📋',
        content: 'The /etc/fstab file is your system\'s mounting configuration database. It defines which filesystems should be mounted automatically at boot time and with what options. Mastering fstab is essential for creating reliable, persistent storage configurations.',
        codeExample: `# === PERSISTENT MOUNTING ===
echo "📋 Persistent Mounting - /etc/fstab Configuration"

# === UNDERSTANDING /etc/fstab ===
echo "📚 Understanding /etc/fstab:"

echo "fstab format (6 fields):"
echo "1. Device/UUID     = What to mount"
echo "2. Mount point     = Where to mount"
echo "3. Filesystem type = How to mount"
echo "4. Options         = Mount options"
echo "5. Dump            = Backup flag (0=no, 1=yes)"
echo "6. Pass            = fsck order (0=no check, 1=root, 2=other)"

# View current fstab
echo "# View /etc/fstab:"
echo "cat /etc/fstab"
echo "grep -v '^#' /etc/fstab | grep -v '^\\$'"  # Show only active entries

# === FSTAB EXAMPLES ===
echo "📝 fstab Examples:"

# Basic fstab entries
echo "# Basic fstab entries:"
echo "# Root filesystem"
echo "UUID=12345678-1234-1234-1234-123456789012 / ext4 defaults 0 1"
echo ""
echo "# Home partition"
echo "UUID=87654321-4321-4321-4321-210987654321 /home ext4 defaults 0 2"
echo ""
echo "# Swap partition"
echo "UUID=abcdef12-3456-7890-abcd-ef1234567890 none swap sw 0 0"
echo ""
echo "# External drive"
echo "UUID=fedcba98-7654-3210-fedc-ba9876543210 /mnt/backup ext4 defaults,noauto 0 2"

# Network mounts
echo "# Network filesystem entries:"
echo "# NFS mount"
echo "server:/path/to/share /mnt/nfs nfs defaults,_netdev 0 0"
echo ""
echo "# CIFS/SMB mount"
echo "//server/share /mnt/smb cifs credentials=/etc/samba/credentials,uid=1000,gid=1000,_netdev 0 0"

# Special filesystems
echo "# Special filesystem entries:"
echo "# tmpfs for /tmp"
echo "tmpfs /tmp tmpfs defaults,noatime,nosuid,nodev,noexec,mode=1777,size=2G 0 0"
echo ""
echo "# Bind mount"
echo "/home/user/documents /mnt/docs none bind 0 0"

# === GETTING DEVICE INFORMATION ===
echo "🔍 Getting Device Information for fstab:"

# Get UUID
echo "# Get device UUID:"
echo "sudo blkid /dev/sda1"
echo "lsblk -f /dev/sda1"

# Get all UUIDs
echo "# Get all device UUIDs:"
echo "sudo blkid"
echo "ls -la /dev/disk/by-uuid/"

# Get device labels
echo "# Get device labels:"
echo "sudo blkid -o list"
echo "ls -la /dev/disk/by-label/"

# === ADDING ENTRIES TO FSTAB ===
echo "➕ Adding Entries to fstab:"

# Backup fstab first
echo "# Backup fstab before editing:"
echo "sudo cp /etc/fstab /etc/fstab.backup.\\$(date +%Y%m%d)"

# Edit fstab safely
echo "# Edit fstab:"
echo "sudo nano /etc/fstab"
echo "sudo vim /etc/fstab"

# Add entry for external drive
echo "# Example: Add external drive entry"
echo "# 1. Get UUID"
echo "UUID=\\$(sudo blkid -s UUID -o value /dev/sdb1)"
echo "echo \"UUID=\\$UUID /mnt/external ext4 defaults,noauto,user 0 2\" | sudo tee -a /etc/fstab"

# === TESTING FSTAB ENTRIES ===
echo "🧪 Testing fstab Entries:"

# Test specific mount
echo "# Test specific fstab entry:"
echo "sudo mount /mnt/external"        # Mount using fstab entry
echo "sudo umount /mnt/external"       # Unmount

# Test all fstab entries
echo "# Test all fstab entries:"
echo "sudo mount -a"                   # Mount all fstab entries
echo "sudo mount -av"                  # Verbose output

# Check for errors
echo "# Check for fstab errors:"
echo "sudo mount -fav"                 # Fake mount (test only)

# === COMMON FSTAB OPTIONS ===
echo "⚙️ Common fstab Options:"

echo "Basic options:"
echo "defaults     = rw,suid,dev,exec,auto,nouser,async"
echo "auto         = Mount automatically at boot"
echo "noauto       = Don't mount automatically"
echo "user         = Allow users to mount"
echo "nouser       = Only root can mount (default)"
echo "owner        = Allow device owner to mount"

echo "Security options:"
echo "ro           = Read-only"
echo "rw           = Read-write"
echo "suid         = Allow set-user-ID"
echo "nosuid       = Disallow set-user-ID"
echo "exec         = Allow execution"
echo "noexec       = Disallow execution"

echo "Performance options:"
echo "sync         = Synchronous I/O"
echo "async        = Asynchronous I/O"
echo "atime        = Update access times"
echo "noatime      = Don't update access times"
echo "relatime     = Relative access time updates"

echo "Network options:"
echo "_netdev      = Network device (wait for network)"
echo "soft         = Soft NFS mount"
echo "hard         = Hard NFS mount"
echo "intr         = Allow interruption"

# === TROUBLESHOOTING FSTAB ===
echo "🔧 Troubleshooting fstab:"

# Common issues
echo "# Common fstab issues:"
echo "1. Wrong UUID or device path"
echo "2. Mount point doesn't exist"
echo "3. Wrong filesystem type"
echo "4. Conflicting options"
echo "5. Network not available for network mounts"

# Recovery from bad fstab
echo "# Recovery from bad fstab:"
echo "# 1. Boot into recovery mode"
echo "# 2. Mount root filesystem read-write:"
echo "mount -o remount,rw /"
echo "# 3. Edit fstab to fix issues:"
echo "nano /etc/fstab"
echo "# 4. Test the fix:"
echo "mount -fav"

# === THE FSTAB CHEAT SHEET ===
echo "📋 fstab Quick Reference:"
echo "sudo cp /etc/fstab /etc/fstab.backup = Backup fstab"
echo "sudo blkid                          = Get UUIDs"
echo "sudo nano /etc/fstab                = Edit fstab"
echo "sudo mount -a                       = Mount all fstab entries"
echo "sudo mount -fav                     = Test fstab (fake mount)"
echo "UUID=... /mnt/point fstype options  = fstab entry format"
echo "defaults,noauto,user                = Common options"
echo "_netdev                             = Network device option"`
      },
      {
        title: '4. Advanced Storage Management - LVM & RAID 🏗️',
        content: 'Advanced storage management with LVM (Logical Volume Manager) and RAID provides enterprise-level storage capabilities. LVM allows dynamic resizing and management of storage volumes, while RAID provides redundancy and performance improvements. This is where you become a storage architect!',
        codeExample: `# === ADVANCED STORAGE MANAGEMENT ===
echo "🏗️ Advanced Storage Management - LVM & RAID"

# === LVM BASICS ===
echo "📦 LVM (Logical Volume Manager) Basics:"

echo "LVM hierarchy:"
echo "Physical Volumes (PV) → Volume Groups (VG) → Logical Volumes (LV)"
echo "Disks/Partitions → Storage Pools → Virtual Partitions"

# Install LVM tools
echo "# Install LVM tools:"
echo "sudo apt install lvm2"

# === LVM SETUP ===
echo "🔧 LVM Setup:"

# Create physical volume
echo "# Create physical volume:"
echo "sudo pvcreate /dev/sdb"
echo "sudo pvcreate /dev/sdc"
echo "sudo pvcreate /dev/sdd"

# View physical volumes
echo "# View physical volumes:"
echo "sudo pvdisplay"
echo "sudo pvs"

# Create volume group
echo "# Create volume group:"
echo "sudo vgcreate storage_vg /dev/sdb /dev/sdc"
echo "sudo vgcreate data_vg /dev/sdd"

# View volume groups
echo "# View volume groups:"
echo "sudo vgdisplay"
echo "sudo vgs"

# Create logical volumes
echo "# Create logical volumes:"
echo "sudo lvcreate -L 10G -n home_lv storage_vg"
echo "sudo lvcreate -L 5G -n var_lv storage_vg"
echo "sudo lvcreate -l 100%FREE -n backup_lv data_vg"

# View logical volumes
echo "# View logical volumes:"
echo "sudo lvdisplay"
echo "sudo lvs"

# === LVM FILESYSTEM CREATION ===
echo "💾 LVM Filesystem Creation:"

# Create filesystems on logical volumes
echo "# Create filesystems:"
echo "sudo mkfs.ext4 /dev/storage_vg/home_lv"
echo "sudo mkfs.ext4 /dev/storage_vg/var_lv"
echo "sudo mkfs.xfs /dev/data_vg/backup_lv"

# Mount logical volumes
echo "# Mount logical volumes:"
echo "sudo mkdir -p /mnt/lvm_home /mnt/lvm_var /mnt/lvm_backup"
echo "sudo mount /dev/storage_vg/home_lv /mnt/lvm_home"
echo "sudo mount /dev/storage_vg/var_lv /mnt/lvm_var"
echo "sudo mount /dev/data_vg/backup_lv /mnt/lvm_backup"

# === LVM RESIZING ===
echo "📏 LVM Resizing:"

# Extend logical volume
echo "# Extend logical volume:"
echo "sudo lvextend -L +5G /dev/storage_vg/home_lv"
echo "sudo lvextend -l +100%FREE /dev/storage_vg/var_lv"

# Resize filesystem
echo "# Resize filesystem:"
echo "sudo resize2fs /dev/storage_vg/home_lv"    # ext4
echo "sudo xfs_growfs /mnt/lvm_backup"           # xfs

# Reduce logical volume (ext4 only)
echo "# Reduce logical volume (DANGEROUS!):"
echo "sudo umount /dev/storage_vg/home_lv"
echo "sudo e2fsck -f /dev/storage_vg/home_lv"
echo "sudo resize2fs /dev/storage_vg/home_lv 8G"
echo "sudo lvreduce -L 8G /dev/storage_vg/home_lv"

# === SOFTWARE RAID ===
echo "🛡️ Software RAID:"

# Install mdadm
echo "# Install RAID tools:"
echo "sudo apt install mdadm"

# Create RAID 1 (mirror)
echo "# Create RAID 1 (mirror):"
echo "sudo mdadm --create --verbose /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc"

# Create RAID 5
echo "# Create RAID 5:"
echo "sudo mdadm --create --verbose /dev/md1 --level=5 --raid-devices=3 /dev/sdd /dev/sde /dev/sdf"

# Create RAID 0 (stripe)
echo "# Create RAID 0 (stripe):"
echo "sudo mdadm --create --verbose /dev/md2 --level=0 --raid-devices=2 /dev/sdg /dev/sdh"

# View RAID status
echo "# View RAID status:"
echo "cat /proc/mdstat"
echo "sudo mdadm --detail /dev/md0"

# === RAID MANAGEMENT ===
echo "🔧 RAID Management:"

# Monitor RAID
echo "# Monitor RAID:"
echo "sudo mdadm --monitor --daemonise --mail=admin@example.com /dev/md0"

# Add spare drive
echo "# Add spare drive:"
echo "sudo mdadm --add /dev/md0 /dev/sdi"

# Remove failed drive
echo "# Remove failed drive:"
echo "sudo mdadm --fail /dev/md0 /dev/sdb"
echo "sudo mdadm --remove /dev/md0 /dev/sdb"

# Save RAID configuration
echo "# Save RAID configuration:"
echo "sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf"
echo "sudo update-initramfs -u"

# === LVM ON RAID ===
echo "🏗️ LVM on RAID:"

# Create LVM on RAID
echo "# Create LVM on RAID device:"
echo "sudo pvcreate /dev/md0"
echo "sudo vgcreate raid_vg /dev/md0"
echo "sudo lvcreate -L 50G -n data_lv raid_vg"
echo "sudo mkfs.ext4 /dev/raid_vg/data_lv"

# === STORAGE MONITORING ===
echo "📊 Storage Monitoring:"

# Monitor disk usage
echo "# Monitor disk usage:"
echo "df -h"
echo "du -sh /path/to/directory"
echo "ncdu /path/to/directory"

# Monitor I/O
echo "# Monitor I/O:"
echo "iostat -x 1"
echo "iotop"
echo "sudo iftop"

# Check disk health
echo "# Check disk health:"
echo "sudo smartctl -a /dev/sda"
echo "sudo badblocks -v /dev/sda"

# === THE ADVANCED STORAGE CHEAT SHEET ===
echo "🏗️ Advanced Storage Quick Reference:"
echo "pvcreate /dev/sdb                   = Create physical volume"
echo "vgcreate vg_name /dev/sdb           = Create volume group"
echo "lvcreate -L 10G -n lv_name vg_name  = Create logical volume"
echo "lvextend -L +5G /dev/vg/lv          = Extend logical volume"
echo "resize2fs /dev/vg/lv                = Resize ext4 filesystem"
echo "mdadm --create /dev/md0 --level=1   = Create RAID 1"
echo "cat /proc/mdstat                    = Check RAID status"
echo "smartctl -a /dev/sda                = Check disk health"

# === CONGRATULATIONS! ===
echo "🎓 MOUNT A VOLUME MASTERY COMPLETE!"
echo "==================================="
echo "You now understand:"
echo "✅ Mount fundamentals and basic operations"
echo "✅ Filesystem types and mount options"
echo "✅ Persistent mounting with /etc/fstab"
echo "✅ Advanced storage with LVM and RAID"
echo "✅ Network filesystem mounting"
echo "✅ Storage monitoring and troubleshooting"
echo ""
echo "💽 You are now a STORAGE MASTER!"
echo "Mount and manage storage like a system administrator! 🚀"
echo ""
echo "Remember: Always backup before making storage changes!"
echo "Use your mounting mastery to build reliable storage systems! 💪"`
      }
    ]
  }
}