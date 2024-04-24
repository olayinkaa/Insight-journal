## check version
```shell
docker --version
```
## Docker Images
```shell
# list images
docker images
docker image ls
# remove image
docker rmi nginx:latest
```

## Docker Container
```shell
# Remove container
docker rm my_container_name
# -f = force, -v= remove the volume
# rm: This option stands for "remove", indicating that you want to remove the container.
# -f, --force: This option forces the removal of a running container. If the container is running, it will be stopped before it is removed.
# -v, --volumes: This option removes any volumes associated with the container. Volumes are not removed by default when you remove a container, but using this option will delete them as well.
docker rm -fv container_name
# Stop and remove all running containers
# -q stands for "quiet" or "query." When used with certain commands, it instructs Docker to output only the container or image IDs (short form) rather than additional information.
# -a stands for "all." When used with certain commands, it instructs Docker to include stopped or all containers or images in the output, not just the running or active ones.
docker rm $(docker ps -aq)

# list container running
docker ps
# list of all containers both running and not running
docker ps -a
#  start container
docker start container_id
# stop container
docker stop container_id
# 
docker container prune

```

## Docker Run 
```shell
# docker run will pull and start image at the same time
docker run image-name:version-number

# run a container with a name
docker run -it --name my-ubuntu ubuntu:22.04

# datached mode
docker run -d redis
```

## Docker Pull
```shell
docker pull image-name:tag
docker pull redis
```

## Port mapping/binding
```shell
# docker run -p host_port:container_port [other options] image_name
docker run -p 8080:80 nginx

# You can map the same container port to multiple host ports, and vice versa.
docker run -p 8080:80 -p 8081:80 nginx
docker run -d -p 8080:80 -p 8081:80 nginx
```

## Docker Log
```shell
docker logs my_container_name
docker-compose logs container_name
docker compose logs -f -t
```

## exec (execute command inside a running container)
```shell
docker exec -it container_name command
docker exec -it container_id command
# go inside a container as root user
docker exec -it -u root jenkins bash
```

# Network
```shell
# list of network 
docker network ls
# creating network
docker network create mongo-network
# remove network
docker network rm network_name

# connecting mongo and mongo-express
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--net mongo-network \
--name mongodb \
mongo

docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
- e ME_CONFIG_MONGODB_SERVER=mongodb \
--net mongo-network \
--name mongo-express \
mongo-express
```

## docker compose
```shell
# if file name is not docker-compose.yaml
# start docker compose
docker-compose -f mongo.yaml up

# stop docker compose
# also remove the network created
docker-compose -f mongo.yaml down
docker-compose -f mongo.yaml stop
docker-compose -f mongo.yaml start
docker-compose -p projects -f mongo.yaml start
docker-compose -p projects -f mongo.yaml stop
docker-compose --project-name projects -f mongo.yaml up -d 

# stop docker compose and remove the created volume
docker-compose down -v
docker compose down # also valid command

# stop a particular docker compose project
# ecommerce-rest-api is the project name
docker compose -p ecommerce-rest-api down  

# stop a service in a docker compose
docker compose stop container_id

# start a service in a docker compose
docker compose start container_id

# watch
docker compose watch
```

## Dockerfile
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
# dockerfile with a different name
docker build -t your_custom_image_name -f ./app/Dockerfile.prod /your-project-root

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
## Docker volume: 
use for data persistence
- Remove volume
```shell
docker volume rm volume_name

# This command removes all unused volumes, which are volumes not currently attached to any containers
docker volume prune

# If you want to skip the confirmation prompt, you can use the -f or --force option:
docker volume prune -f

docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker
```

# Publish
```shell
docker login
# docker tag local_image_name your_dockerhub_username/repository_name:tag
docker tag react-docker username/react-docker
docker push username/react-docker:tag
```

## Docker scout


```shell
docker init
```

## Copy from host to docker container
```shell
# docker cp filename container_name:/path
docker cp script.sh jenkins:/tmp/script.sh
docker cp remote-key jenkins_server:/tmp
```