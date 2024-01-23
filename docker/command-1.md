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
docker network create mongo-network

# connecting mongo and mongo-express
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongodb \
--net mongo-network \

docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
--net mongo-network \
--name mongo-express \
- e ME_CONFIG_MONGODB_SERVER=mongodb \
mongo-express
```

## Docker compose
- docker compose takes care of creating a common network
```shell
# docker-compose.yaml
version: "3"
services: 
    my-app:
        image: 66453930.dkr.eu-cental-1.amazonaws.com/my-app:1.0
        ports: 3000:3000

    mongodb:
        image: mongo
        ports:
            - 27017:27017
        environment:
            - MONGO_INITDB_ROOT_USERNAME=admin
            - MONGO_INITDB_ROOT_PASSWORD=password
        volumes:
            - da-data:/var/lib/mysql/data
    mongo-express:
        image: mongo-express
        ports:
            - 8080:8080
        environment:
            - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
            - ME_CONFIG_MONGODB_ADMINPASSWORD=password
            - ME_CONFIG_MONGODB_SERVER=mongodb
volumes:
    db-data:
        driver:local
```
## start & stop docker compose
```shell
# if file name is not docker-compose.yaml
# start docker compose
docker-compose -f mongo.yaml up

# stop docker compose
# also remove the network created
docker-compose -f mongo.yaml down
```
## Dockerfile
- blueprint for create images
- when you adjust the dockerfile, you must rebuild the image!
```shell
FROM node:13-apine
ENV MONGO_DB_USERNAME=admin\
    MONGO_DB_PWD=password
RUN mkdir -p /home/app
COPY ./app /home/app
# CMD = entrypoint command
CMD ["node","server.js"]
```
## Build dockerfile
```shell
# file in current directory
docker build -t my-app:1.0 .
```

## Image Naming in Docker Registries
registryDomain/imageName:tag
```shell
docker pull mongo:4.2
# the actual name
docker pull docker.io/library/mongo:4.2
```

## Docker Registry
```shell
# AWS ECR , tagging the image
docker tag my-app:1.0 66453930.dkr.eu-cental-1.amazonaws.com/my-app:1.0
docker push 66453930.dkr.eu-cental-1.amazonaws.com/my-app:1.0
```
## Docker volume
use for data persistence
```shell

```