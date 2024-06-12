## To check the permissions of a file or directory in Unix-like systems
```shell
sudo usermod -aG docker jenkins
chown jenkins:jenkins /tmp/remote-key
# check local IP address on macbook 
ipconfig getifaddr en0
wc -c filename # return total character
```

```shell
sudo apt-get update
```
# Navigating file system
```shell
cd /
cd ..
ls -l
# show hidding files
ls -ltra 
ls -ltr
```

# Change Password
```shell
passwd userid
```

# Create files, directories
```shell
cp filesrc filedst
touch file.txt game.txt
mkdir folder1
vi file.md
# copy directory with -R = recursive
cp -R file1 file2
```

# Find & locate files and directories
```shell
find . -name "filename"
# ensure you run the command "updatedb"
locate filename
```

# Wildcard
```sh
touch abcd{1...9}.txt # create 9 files
rm abcd*
ls -l abc*
rm *.txt # remove file ending with
ls -l ?bcd* # return any file that bcd  `
ls -l *[cd]* # any file that has either c or d
```

# soft , hard lin
```sh
ln -s /tmp/username/filename
```

# File permissions
```sh
chmod g-w filename # remove write permission from group that file is
chmod a-x filename # remove execute permission for all user
```

# File ownership
```sh
chown root ibrahim
chgrp root ibrahim
```

# Access control list ACK
```sh
getfacl filename # display file permission & ownership info
setfacl -m u:username:rw /tmp/filename
setfacl -m u:groupname:rwx /tmp/filename
setfacl -b /tmp/filename # remove all permissions
```

# Help command
```sh
whatis ls
whatis cd
chmod --help
man chmod
man ls
```

# Redirect : adding text to file
```sh
echo "I am great" > file.txt
echo "I am great again" >> file.txt # append the content to previous one
echo "great" | tee filename # tee command 
echo "great" | tee -a filename # tee command to append
echo "great" | tee filename1 filename2 # output to multiple files
```

# Pipe
```sh
ls -la | more
```

# File management
- cp, rm, mv, mkdir, chgrp, chown

# File display 
```sh
cat messages
more messages
less messages
head -2 messages
tail -2 messages
```

# Filters / Text processors commands
```sh
# cut, awk, grep and egrep, sort, uniq, wc
cut --help
man cut
cut --version
cut --cl,2,4 filename
cut --cl filename
cut --cl-5
```
```sh
awk --version
awk '{printt $1,$3}' filename
ls -l | awk '{print $1,$3}'
ls -l | awk '{print $NF}'
awk '/jerry/ {print} fil3'

```