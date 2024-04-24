## To check the permissions of a file or directory in Unix-like systems
```shell
sudo usermod -aG docker jenkins
chown jenkins:jenkins /tmp/remote-key 
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