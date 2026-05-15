```shell
ansible -i hosts -m ping test1
ansible-playbook -i hosts play.yml
```

# AD-HOC COMMANDS
```shell
# check all my inventory hosts are ready to be managed by ansible
ansible all -m ping

# run the uptime command on all hosts in the web group
ansible web -m command -a "uptime"

# collect and display the discovered for the localhost
ansible localhost -m setup
```

# Static inventory example
```shell
[control]
control ansible_host=10.42.0.2

[web]
node-1 ansible_host=10.42.0.6
node-2 ansible_host=10.42.0.7
node-3 ansible_host=10.42.0.8

[all:vars]
ansible_user=vagrant
ansible_ssh_private_key_file=~/.vagrant.d/insecure_private_key
```

```shell
ansible all -i hosts -u vagrant -m ping
ansible all -i hosts -u vagrant -m setup
# install a package using ansible
ansible webservers -i hosts -u vagrant -m yum -a "name=httpd state=present" -b
# uninstall
ansible webservers -i hosts -u vagrant -m yum -a "name=httpd state=absent" -b

```

# Playbook exampl
```yml
- name: install and start apache
  hosts: web
  vars:
    http_port: 80
    max_clients: 200
  remote_user: root

  tasks:
    - name: install http
      yum: pkg=httpd state=latest
    - name: write the apache config file
      template: src=/srv/httpd.j2 dest=/etc/httpd.conf
    - name: start httpd
      service: name=httpd state=started
```