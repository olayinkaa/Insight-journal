## What is cloud computing
clould computing is the on-demand delivery of IT resources over the internet with pay as you go pricing. Instead of buying, owning and maintaining physical data centers and servers, you can access technology services such as computing power, storage and databases.

## Cloud Computing Model
- Public cloud: They are owned and operated by thirdparty cloud service providers which deliver their computing resources like servers and storage over the internet
  
- Private cloud: Cloud computing resources used exclusively by a single business or organisation. A private cloud can be physically located on the company's on-site datacenter
  
- Hybrid cloud: combine both, bound together by technology that allows data and applications to be shared between them.

## Cloud Computing Services
- SaaS : Software as a Service - Software on remote servers
- PaaS: Platform as a Service - Application development and deployment
- LaaS: Infrastructure as a Service - Servers, Storage , Operating Systems

## Benefits of cloud computing
- Reduced IT costs
- Scalability
- Global Infrastructure
- Up-to-date
- Reliable data backup and disaster recovery

## What  is Amazon EC2
Amazon Elastic Compute Cloud provides scalable computing capacity in the amazon web services cloud. Using EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster. It enables you to scale up or down to handle changes in requirements or spikes in popularity, reducing your need to forecast traffic

- The virtual computing servers are known as instances in EC2
- An Amazon Machine Image (AMI) is a template that contains a software configuration (for example, an oeprating system, an appication server and applications). From an AMI you launch an instance, which is a copy of the AMI running as a virtual server in the cloud.
- The root device for your instance contains the image used to boot the instance. The root device is either an Amazon Block Store (Amazon EBS) volume or an instance store volume.

- When you launch an instance, the instance type that you specify determines the hardware of the host computer used for your instance. Each instance type offers different compute, memory and storage capabilities and is grouped in an instance family based on these capabilities

- Amazon EC2 provides you with flexible cost effective and easy to use data storage options for your instances. Each option has a unique combination of performance and durability. These storage options can be used independently or in combination to suit your requirements.
* Amazon EFS, EBS, S3

## What is Amazon VPC ?
Amazon virtual private cloud enables you to launch aws resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using scalable infrastructure of aws.
Amazon VPC is the networking layer for amazon EC2.

- Virtual private cloud : virtual network dedicated to your aws account
- subnet : A range of IP addresses in your VPC
- Route Table - A set of rules called routes that are used to determine where network traffic is directed
- internet gateway : a gateway that attach to your VPC to enable communication between resources in your VPC and the internet
- VPC endpoint : Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by privateLink without requiring an internet gatewat, NAT device, VPN connection or AWS direct connect connection.
- CIDR block : Classless Inter-Domain Routing. A internet protocol address allocation and route aggregation methodology.

## IAM : Permissions
- Users or Groups can be assigned JSON documents called policies
- These policies define the permissions of the users
- In AWS, you apply the least privilege principle don't give more permissions than a user needs

## MFA devices options in AWS
Virtual MFA device
1. Google Authenticator (phone only)
2. Authy (multi-device)
3. Universal 2nd Factor (U2F) security key
4. Hardware Key Fob MFA device

## How can users access AWS ?
1. AWS management console (protected by password + MFA)
2. AWS command line interface CLI (protected by access keys)
3. AWS Software Developer Kit (SDK) for code (protected by access keys)

Access keys are generated through the AWS console
Users manage their own access keys

What's the AWS CLI ?
- A tool that enables you to interact with AWS services using commands in your command-line shell
- Direct access to the public APIS of AWS services
- You can develop scripts to manage your resources

What's the AWS SDK ?
- AWS software Development Kit (AWS SDK)
- Language-specific APIs (set of libraries)
- Enables you to access and manage AWS services programmtically
- Embedded withing your application
- AWS CLI is built on AWS SDK for python

## IAM Roles for services
- Some AWS service will need to perform actions on your behalf
- To do so, we will assign permissions to AWS services with IAM Roles
- Common Roles: EC2 instance Roles, Lamba function Roles, Roles for cloudformation

## AWS CLI
```shell
aws --version
## to configure access key
aws configure

aws iam list-users
```
## IAM security tools
- IAM Credentials Report (account-level)
  a report that lists all your account's users and the status of their various credentials
- IAM Access Advisor (User-level)
  Access Advisor shows the service permissions granted to a user and when those services were last accessed
  You can use this information to revise the policies

## IAM Guidelines & Best Practices
- Don't use the root account except for AWS account setup
- One physical user = One AWS user
- Assign users to groups and assign permissions to groups
- Create a strong password policy
- Use and enforce the use of Multi Factor Authentication (MFA)
- Create and use Roles for giving permissions to AWS services
- Use Access Keys for Programmatic Access (CLI/SDK)
- Audit Permissions of your account using IAM credentials Report & IAM Access Advisor
- Never share IAM users & Access Keys

## Shared Responsibilty Model for IAM
- AWS
  1. Infrastructure (global network security)
  2. Configuration and Vulnerability
  3. Compliance Validation

- YOU
  1. Users, Groups, Roles, Policies management and monitoring
  2. Enable MFA on all accounts
  3. Rotate all your keys often
  4. Use IAM tools to apply appropriate permissions
  5. Analyze access patterns and review permissions
   
## AMAZON EC2
- EC2 is one of the most popular of AWS's offering
- EC2 = Elastic compute cloud = Infrastructure as a service
- It mainly consists in the capability of 
  1. Renting virtual machines (EC2)
  2. storing data on virtual drives (EBS)
  3. Distributing load across machines (ELB)
  4. Scaling the services using an auto-scaling group (ASG)

knowing EC2 is fundamental to understand how the cloud works.
EC2 sizing and configuration options
- Operating system: linux, windows, mac os
- how much compute power or cores CPU
- how much random-access-memory RAM
- How much storage space:
   1. Network-attached (EBS & EFS)
   2. hardware (EC2 instance store)
- Network card : speed of the card, Public IP address
- Firewall rules: security group
- Bootstrap script (configure at first launch): EC2 user data

## EC2 User Data
- It is possible to bootstrap our instances using an EC2 User Data script
- bootstrapping means launching commands when a machine starts
- That script is only run once at the instance first start
- EC2 user data is used to automate boot tasks such as::
  1. installing updates
  2. installing software
  3. downloading common files from the internet
  4. anything you can think of
- EC2 user data script runs with the root user, so any command will have the "sudo"
  
EC2 instance types
- you can use different types of ec2 instances that are optimised for different use cases
  * General purpose
  * compute optimized
  * memory optimized
  * accelerated computing
  * storage optimized
  * instance features
  * measuring instance performance
  
instance type example: 
- m5.2xlarge
m: instance class
5: generation (aws improves them over time)
2xlarge: size within the instance class

- Computer Optimized
  Great for compute intensive tasks that require high performance processors:
  * Batch processing workloads
  * media tanscoding
  * High performance web servers
  * High performance computing (HPC)
  * Scientific modelling & machine learning
  * Dedicated gaming servers

- Memory Optimised
  Fast performace for workloads that process large data sets in memory
  * High performance, relational/non-relational databases
  * Distributed web scale cache stores
  * In-memory databases optimized for BI (business intelligence)
  * Applications performing real time processing of big unstructured data

- Storage optimized
  Great for storage-intensive tasks that require high, sequential read and write access to large data sets on local storage.
  * High frequency online transaction processing (OLTP) systems
  * Relational & NoSQL databases
  * Cache for in-memory databases (for example, Redis)
  * Data warehousing applications
  * Distributed file system

`es2instances.info`

## Introduction to Security Groups
- Security groups are the fundamental of network security in AWS
- They control how traffic is allowed into or out of our EC2 instances
- Security groups only contain allow rules
- Security groups rules can reference by IP or by security group
- Security groups are acting as a `firewall` on EC2 instances
- They regulate:
  * Access to ports
  * Authorised IP ranges - IPv4 and IPv6
  * Control of inbound network (from other to the instance)
  * Control of outbound network (from the instance to other)
  
- Can be attached to multiple instances
- Locked down to a region/ VPC combination
- Does live "outside" the Ec2 - if traffic is blocked the EC2 instance won't see it.
- it's good to maintain one separate security group for SSH access
- if your application is not accessible (time out), then it's a security group issue
- if your application gives a "connection refused" error, then it's an application error or it's not launched
- All inbound traffic is blocked by default
- All outbound traffic is authorized by default

## Classic ports to know
1. 22 = SSH (secure shell) - log into a linux instance
2. 21 = FTP (file transfer protocol) - upload files into a file share
3. 22 = SFTP (Secure File Transfer Protocol) - upload files using SSH
4. 80 = HTTP - access unsecured websites
5. 443 = HTTPS - access secured websites
6. 3389 = RDP (Remote Desktop Protocol) - log into a windows instance

## What's an EBS Volume ?
- An EBS (Elastic Block Store) Volume is a network drive you can attach to your instances while they run
- it allows your instances to persist data, even after their termination
- They can only be mounted to one instance at a time (at the CCP level)
- They are bound to a specific availability zone
- Analogy: think of them as a "network USB stick"
  

EBS Volume
- it is a network drive i.e not a physical drive
  * uses the network to communicate the instance, which means there might be a bit of latency
  * it can be detached from an ec2 instance and attached to another one quickly
- It's locked to an availability zone
  * to move a volume across, you first need to snapshot it
- By default , the root EBS Volume is deleted on termination (attribute enabled)
- by default, any other attached EBS volume is not deleted (attribute disabled)

## EBS Snapshots
- Make a backup (snapshot) of your EBS volume at a point in time
- Not necessary to detach volume to do snapshot but recommended
- can copy snapshots across AZ or region

## EBS Snapshots Features
- EBS snapshot archive
  * Move a snapshot to an "archive tier" that is 75% cheaper
  * Takes within 24 to 72 hours for restoring the archive

- Recycle Bin for EBS Snapshots
  * Setup rules to retain deleted snapshots so you can recover them after an accidental deletion
  * specify retention (from 1 day to 1year)

- Fast Snapshot Restore (FSR)
  * Force full initialization of snapshot to have no latency on the first use

## AMI Overview
- AMI = Amazon Machine Image
- AMI are customization of an EC2 instance
  * You add your own software, configuration, operating system, monitoring..
  * Faster boot/configuration time because all your software is pre-packaged
- AMI are built for a specific region and can be copied across regions
- You can launch EC2 instances from:
  * A public AMI: AWS provided
  * Your own AMI: you make and maintain them yourself
  * An AWS Marketplace AMI: an AMI someone else made (and potentially sells)

AMI Process (from an EC2 instance)


EC2 Instance Store
- EBS volumes are network drives with good but limited performance
- If you need a high performance hardware disk, use EC2 instance store
- Better I/O performance
- EC2 instance store lose their storage if they're stopped (ephemeral)
- Good for buffer / cache /scratchdata / temporary content
- Risk of data loss if hardware fails
- Backups and Replication are your responsibility

EBS Volume Types
- EBS volumes come in 6 types
  * gp2/gp3 (SSD): General purpose SSD volume that balances price and performance for a wide variety of workloads
  * io1 / io2 Block Express (SSD): highest performace SSD volume for mission-critical low-latency or high-throughput workloads
  * st 1 (HDD): low cost HDD volume designed for frequently accessed, throughput-intensive workloads
  * sc1 (HDD): lowest cost HDD volume designed for less frequently accessed workloads

- EBS volumes are characterized in size , throughput, IOPS (I/O ops per sec)
- When in doubt always consult the AWS documentation - it's good
- only gp2/gp3 and io1/io2 Block Express can be used as boot volumes


AMAZON EFS - Elastic File System
- Managed NFS (Network file system) that can be mounted on many EC2
- EFS works with EC2 instances in multi-AZ
- Highly available, scalable, expensive (3x gp2), pay per use
- use cases: content management , web serving, data sharing, wordpress
- uses NFSv4.1 protocol
- Uses security group to control access to EFS
- Compatible with Linux based AMI (not windows)
- Encryption at rest using KMS
- POSIX file system (~ Linux) that has a standard file API
- File system scales automatically, pay-per-use, no capacity planning


## Scalability & High Availability
- Scalability means that an application / system can handle greater loads by adapting
- There are two kinds of scalability
  * Vertical scalability
  * Horizontal scalability (elasticity)
- Scalability is linked but different to High Availabilty

- Let's deep dive into the distinction, using a call center as an example

## Vertical Scalability
- Vertically scalability means increasing the size of the instance
- For example, your application runs on a t2.micro
- scaling that application vertically means running it on a t2.large
- Vertical scalability is very common for non-distributed systems such as a database
- RDS, ElasticCache are services that can scale vertically
- There's usually a limit to how much you can vertically scale (hardware limit)

## Horizontal Scalability
- Means increasing the number of instances / systems for your application
- Horizontal scaling implies distributed sytems.
- This is very common for web applications / modern applications
- It's easy to horizontally scale thans to the cloud offerings such as Amazon EC2

## High Availabilty - HA
- HA usually goes hand in hand with horizontal scaling
- HA means running your application /system in at least 2 data centers (== Availabilty Zone)
- The goal of HA is to survive a data center loss
- The HA can be passive (for RDS Multi AZ for example)
- The HA can be active for horizontal scaling

## High Availability & Scalability for EC2
- vertical scaling increas instance size (= scale up / down)
  * from: t2.nano - 0.5G of RAM, 1 vCPU
  * to: u-12tbI.metal - 12.3TB of RAM, 448 vCPUs

- Horizontal scaling increase number of instances (= scale out / in)
  * Auto scaling group
  * Load balance

- High Availabilty : Run instances for the same application across multi AZ

## What is load balancing ?
- Load balances are servers that forward traffic to multiple servers (e.g EC2 instances) downstream
  
## Why use a load balancer ?
1. Spread load across multiple downstream instances
2. Expose a single point of access (DNS) to your application
3. Seamlessy handle failures of downstream instances
4. Do regular health checks to your instances
5. Provide SSL termination (HTTPS) for your websites
6. Enforce stickiness with cookies
7. High availability across zones 
8. Separate Public trafic from private traffic

## Why use an Elastic Load Balancer ?
- An elastic load balance is a managed load balancer
  * AWS guarantees that it will be working
  * AWS takes care of upgrades, maintenance, high availabilty
  * AWS provides only a few configuration knobs

- It costs less to setup your own load balancer but it will be alot more effort on your end
- It is integrated with many AWS offerings /Services
  * EC2, EC2 Auto scaling roups, Amazon ECS
  * AWS Certificat Manager (ACM), CloudWatch
  * Rout 53, AWS WAF, AWS Global Accelerator

## Health Checks
- Health checks are crucial for load balancers
- The enable the load balancer to know if instances it forwards traffic to are available to reply to requests
- The health check is done on a port and a route (/health is common)
- If the response is not 200  (OK) , then the instance is unhealthy

## Types of load balancer on AWS
AWS has 4 kinds of managed load balancer
1. Classic load balancer (v1 - old generation) - 2009 - CLB 
    (HTTP, HTTPS, TCP, SSL (secure TCP))
2. Application Load balancer (v2 - new generation) - 2016 - ALB
   (HTTP,HTTPS, websocket)
3. Network Load balancer (v2 - new generation) - 2017 - NLB
   TCP, TLS (secure TCP), UDP
4. Gateway Load balncer - 2020 - GWLB
   operates at layer 3 (Network Layer) - IP Protocol

Overall, it is recommended to use the newer generation load balancers as they provide more features
some load balancers can be setup as internal (private) or external (public) ELBs