## List of images
```shell
docker images
```
## Remove image
```shell
docker rmi nginx:latest
```
## Remove Container
```shell
docker rm my_container_name
```
## Docker run 
```shell
# docker run = pull and start image at the same time
docker run image-name:version-number

# run a container with a name
docker run -it --name my-ubuntu ubuntu:22.04

# datached mode
docker run -d redis
```

## Pull
```shell
docker pull image-name:tag
docker pull redis
```

## list of running container
```shell
docker ps
# list of all containers both running and not running
docker ps -a
```

## start & stop
```shell
docker start container_id
docker stop container_id
```
## Port mapping/binding
```shell
# docker run -p host_port:container_port [other options] image_name
docker run -p 8080:80 nginx

# You can map the same container port to multiple host ports, and vice versa.
docker run -p 8080:80 -p 8081:80 nginx
docker run -d -p 8080:80 -p 8081:80 nginx
```

## log
```shell
docker logs my_container_name
```

## exec (execute command inside a running container)
```shell
docker exec -it container_name command
docker exec -it container_id command
```

# Network
```shell
# list of network 
docker network ls

# creating network
docker network create monog-network
```