# docker-compose
- docker compose takes care of creating a common network

```yml
version: "3"
services:
    react-app:
        image: react-app
        build: ./client/     # path to dockerfile on client folder
        stdin_open: true
        tty: true
        ports:
            - "3000:3000"
        env_file: # environment file
          - ./.env
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

```yml
services:
  api:
    image: avatars-api
    build:
      context: .
      dockerfile: ./deploy/api.dockerfile
    ports:
      - 5734:80
    develop:
      watch:
        - path: api/requirements.txt
          action: rebuild
        - path: api/
          target: /app/api/
          action: sync

  web:
    image: avatars-web
    build:
      context: .
      dockerfile: ./deploy/web.dockerfile
    ports:
      - 5735:5173
    develop:
      watch:
        - path: web/package.json
          action: rebuild
        - path: web/yarn.lock
          action: rebuild
        - path: web/
          target: /app
          action: sync
```

```shell
services:
    web:
        build:
            context: .
        ports:
            - 5173:5173
        volumes:
            - .:/app
            - /app/node_modules
```
# compose yaml file
```yml
# specify the version of docker-compose
version: "3.8"

# define the services/containers to be run
services:
  # define the frontend service
  # we can use any name for the service. A standard naming convention is to use "web" for the frontend
  web:
    # we use depends_on to specify that service depends on another service
    # in this case, we specify that the web depends on the api service
    # this means that the api service will be started before the web service
    depends_on: 
      - api
    # specify the build context for the web service
    # this is the directory where the Dockerfile for the web service is located
    build: ./frontend
    # specify the ports to expose for the web service
    # the first number is the port on the host machine
    # the second number is the port inside the container
    ports:
      - 5173:5173
    # specify the environment variables for the web service
    # these environment variables will be available inside the container
    environment:
      VITE_API_URL: http://localhost:8000

    # this is for docker compose watch mode
    # anything mentioned under develop will be watched for changes by docker compose watch and it will perform the action mentioned
    develop:
      # we specify the files to watch for changes
      watch:
        # it'll watch for changes in package.json and package-lock.json and rebuild the container if there are any changes
        - path: ./frontend/package.json
          action: rebuild
        - path: ./frontend/package-lock.json
          action: rebuild
        # it'll watch for changes in the frontend directory and sync the changes with the container real time
        - path: ./frontend
          target: /app
          action: sync

  # define the api service/container
  api: 
    # api service depends on the db service so the db service will be started before the api service
    depends_on: 
      - db

    # specify the build context for the api service
    build: ./backend
    
    # specify the ports to expose for the api service
    # the first number is the port on the host machine
    # the second number is the port inside the container
    ports: 
      - 8000:8000

    # specify environment variables for the api service
    # for demo purposes, we're using a local mongodb instance
    environment: 
      DB_URL: mongodb://db/anime
    
    # establish docker compose watch mode for the api service
    develop:
      # specify the files to watch for changes
      watch:
        # it'll watch for changes in package.json and package-lock.json and rebuild the container and image if there are any changes
        - path: ./backend/package.json
          action: rebuild
        - path: ./backend/package-lock.json
          action: rebuild
        
        # it'll watch for changes in the backend directory and sync the changes with the container real time
        - path: ./backend
          target: /app
          action: sync

  # define the db service
  db:
    # specify the image to use for the db service from docker hub. If we have a custom image, we can specify that in this format
    # In the above two services, we're using the build context to build the image for the service from the Dockerfile so we specify the image as "build: ./frontend" or "build: ./backend".
    # but for the db service, we're using the image from docker hub so we specify the image as "image: mongo:latest"
    # you can find the image name and tag for mongodb from docker hub here: https://hub.docker.com/_/mongo
    image: mongo:latest

    # specify the ports to expose for the db service
    # generally, we do this in api service using mongodb atlas. But for demo purposes, we're using a local mongodb instance
    # usually, mongodb runs on port 27017. So we're exposing the port 27017 on the host machine and mapping it to the port 27017 inside the container
    ports:
      - 27017:27017

    # specify the volumes to mount for the db service
    # we're mounting the volume named "anime" inside the container at /data/db directory
    # this is done so that the data inside the mongodb container is persisted even if the container is stopped
    volumes:
      - anime:/data/db

# define the volumes to be used by the services
volumes:
  anime:
```

```yml
# docker-compose.yaml
version: "3.8"
services: 
    my-app:
        image: 66453930.dkr.eu-cental-1.amazonaws.com/my-app:1.0
        ports: 3000:3000

    mongodb:
        image: mongo
        ports:
            - 27017:27017
        environment:
            - MONGO_INITDB_ROOT_USERNAME=${MONGO_USERNAME}
            - MONGO_INITDB_ROOT_PASSWORD=${MONGO_PASSWORD}
        volumes:
            - da-data:/var/lib/mysql/data
    mongo-express:
        image: mongo-express
        ports:
            - 8080:8080
        environment:
            - ME_CONFIG_MONGODB_ADMINUSERNAME=${MONGO_USERNAME}
            - ME_CONFIG_MONGODB_ADMINPASSWORD=${MONGO_PASSWORD}
            - ME_CONFIG_MONGODB_SERVER=mongodb
volumes:
    db-data:
        driver:local
```
```yml
services:
  web:
    build: .
    develop:
      watch:
        - action: rebuild
          path: package.json
```

```yml
version: '3'
services:
  react-app:
    stdin_open: true
    tty: true
    build: 
      context: .
      dockerfile: Dockerfile.prod
      # passing arguments
      args:
        - REACT_APP_NAME=olayinka
    ports:
      - "4006:8080"
```

```yml
version: '3.8'
services:
  myservice:
    image: myimage
    env_file: ${ENV_FILE}
    ports:
      - "8080:8080"

# usage 
docker-compose -f docker-compose.yml -e ENV_FILE=.env.dev up
```