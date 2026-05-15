##
```shell
which ssh
```
# SSH Config file
```shell
# .ssh/config
Host myserver
    Hostname 172.105.7.26
    Port 22
    user root
Host server2
    Hostname 172.16.249.6
    Port 22
    User Jay
# usage
ssh myserver
ssh server2
ssh root@172.16.249.6
ssh -v root@172.16.249.6
```
# create SSH Key
```shell
# rsa key is the default
ssh-keygen
ssh-keygen -t ed25519 -C "acme"
```

# Copy keys to a remote server
```shell
# this command will copy the public key to the .ssh/authorized_keys file in the remote machine
ssh-copy-id -i ~/.ssh/id_rsa.pub root@172.105.7.26
```

## Cached key in memory
```sh
ps aux | grep ssh-agent
eval "$(ssh-agent)" # PRESS ENTER
ps aux | grep ssh-agent
# add key to ssh-agent
ssh-add ~/.ssh/key_name

ssh root@ip_addresss # log user in directly since the key has been cached in memory
```

```shell
systemctl status sshd
systemctl restart sshd
systemctl stop sshd
systemctl enable sshd
```