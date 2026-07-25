# Docker commands
```shell
# for watching and rebuilding
docker compose watch
docker compose restart web-nginx
docker compose up --watch
```

# Docker Buildx
```sh
docker buildx version
docker buildx ls
docker buildx du
# remove build cache
docker buildx prune
docker buildx inspect --build default
docker buildx inspect --build desktop-linux
# switch builder
docker context use default
# create and initialize a new builder
docker buildx create --name mybuilder1 --use
# Inspect and initialize the buildx builder
docker buildx create --name mybuilder1 --use --bootstrap
```

# Ping
```sh
apt-get update
apt-get install -y iputils-ping dnsutils

ping container_name

nslookup container_name
```