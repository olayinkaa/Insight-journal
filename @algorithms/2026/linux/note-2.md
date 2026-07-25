# WHat is Operating System ?
An operating system is system software that manages computer hardware and software resources and provides common services for computer programs

An operating system is software that acts as a middleman or a bridge between computer hardware and the computer user. it provides a user interface and controls the computer hardware so that software can function

Types of operating systems
1. Desktop operating system e.g Ms Windows, macOs, Linux such as ubuntu
2. Server Operating systems e.g Window server, linux distributions like CentOS, Red Hat enterprise linux
3. Mobile Operating systems: Android, Ios, windos mobile
4. Embedded Operationg systems used in devices like routers, smart Tvs, automobiles, home appliances etc
5. Real-Time Operating systems used in critical systems like medical equipment, Car ECUs, aerospace, defense, network firewalls,home security system etc

# What is Linux ?
It is a free and open source operating system
Linux is very popular for its stability, security and flexibility. It can be modified and distributed by anyone which has led to many different versions know as distribution and each distribution is tailored for different users

# Access to Linux System
There are 2 types of access
1. console
2. remote

The console is a direct access to an operating system when it is connected through VGA, HDMI, DVI etc

The 2nd type of access is remote where you can connect to your operating system remotely over the network

# Command Prompts
It is a short text at the start of the command line followed by prompt symbol on a command line interface

# File System
It is a system used by an operating system to manage files. The system controls how data is saved or retrieved
Operating system store files and directories in an organized and structure way
- Different file system
  * ext3, ext4,xfs, NTFS, FAT etc

# File system structure
- /boot  contain file that is used by the boot loader
- /root root user home directory. It is not the same as /
- /dev system devices(e.g disk, cdrom, speakers, flashdrive, keyboard etc)
- /etc  configuration files
- /bin -> /usr/bin   Everyday user commands
- /sbin -> usr/sbin    system/filesystem commands
- /opt   option add-on applications
- /proc Running processes (only exist in memory)
- /lib -> usr/bin  C programming library files needed by commands and apps
- /tmp Directory for temporary files
- /home Directory for user
- /var system logs
- /run system daemons that start very early (e.g systemd and udev) to store temporary runtime file lik PID files
- /mnt to mount external filesystme e.g NFS
- /media for cdrom mounts

# Linux File types
- Regular file
d directory
l lin
c special file or device file
s socket
p Named pipe
b Block device

# ROOT
There are 3 types of root in linux system
1. Root account: root is an account or username on linux machine and it is the most powerful account which has access to all commands and files
2. Root as / : the very first directory in linux is also referred to as root directory
3. Root home directory: the root nuser account also has a directory located in /root which is called the root home directory

# File System Paths
- There are two paths to navigate in a file system
  * absolute path
  * relative path
- absolute path always begin with "/" e.g cd /var/log/samba  whic h indicate that the paths starts at the root directory
- relative path does not begin with a "/". It identifies a location relative to your current position. e.g cd log, cd /var

# NOTE
if "locate" command does not output any result, then as root run "updatedb"

Also make sure you have "mlocate"
Package installed
To check= rpm -qa | grep mlocate
to install= yum install mlocate

# Wildcards
Is a character that can be used as a substitute for any of a class of characters in a search
* - represents zero or more characters
? - represents a single character
[] - represents a range of characters

# Soft and hard link
- inode : Pointer or number of a file on the hard disk
- soft link - link will be removed if file is removed or rename
- Hard link - deleting renaming or moving the original file will not affect the hard link
- You cannot creat soft or hard lin within the same directory with the same name.

link is like shortcut on window

# File Permissions
UNIX is a multi-user system. Every file and directory in your account can be protected from or made accessible to other users by changing its access permissions. Every user has responsibiulty for controlling access to theri files

There are 3 types of permissions
r - read
w - write
x - execute = running a program

Each permission can be controlled at three level
u  - user = yourself
g - group = can be people in the same project
o - other = everyone on the system

command to change permissions
- chmod

# File ownership
THere are two owners of file or directory
- user
- group

# Input and Output Redirects

- There are 3 redirects in linux
1. standard input - stdin and it has file descriptor number as 0
2. standard output -stdout ---- 1
3. standard error - stderr ---- 2

By default when running a command its output goes to the terminal
the output of a command can be routed to a file using >
 
# TEE command
is used to store  and view the output of command at the same time

# Pipes
A pipe is used by the shell to connect the output of one command directly to the input of another command