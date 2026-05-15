## Amazon linux EC2 user data sample
```bash
#!/bin/bash
# install httpd(linux 2 version)
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>hello world from $(hostname -f)</h1>" > /var/html/indext.html
```