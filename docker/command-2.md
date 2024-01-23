# dockerfile
<!-- 
create ".dockerignore" file
node_modules
 -->
```shell
# first stage
FROM node:14-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# if you are building your code for production
# RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD["yarn", "start"]

```
# build dockerfile
```shell
```shell
# first stage
FROM node:14-slim
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5000
CMD["yarn", "start"]

# second stage
FROM caddy:2.1.1-alpine
ARG CADDYFILE
COPY ${CADDYFILE}
```
# build dockerfile
```shell
docker build -t api-server .
# if the Dockerfile has a different name other than "Dockerfile"
docker build -t containerjj-name -f Dockerfile.production .
```

# docker-compose
```shell
version: "3"
services:
    react-app:
        image: react-app
        build: ./client/     # path to dockerfile on client folder
        stdin_open: true
        ports:
            - "3000:3000"
        networks:
            - mern-app
        volumes:
            - ./client/:/usr/src/app
            - /usr/src/app/node_module
    api-server:
        image: react-app
        restart: unless-stopped
        build: ./server/     # path to dockerfile on server folder
        stdin_open: true
        ports:
            - "5000:5000"
        networks:
            - mern-app
        volumes:
            - ./client/:/usr/src/app
            - /usr/src/app/node_module  
        depends_on:
            - mongo
    mongo:
        image: mongo:4.4-bionic
        ports:
            - "27017:27017"
        networks:
            - mern-app
        volumes:
            - mongo-data:/data/db
networks:
    mern-app:
        driver: bridge
volumes:
    mongo-data:
        driver: local
```