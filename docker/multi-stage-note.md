# Syntax for target in Docker Compose
The target field is specified under the build section of a service in your docker-compose.yml file.

yaml
Copy
Edit
services:
  my-service:
    build:
      context: .
      dockerfile: Dockerfile
      target: <stage_name>
How It Works
In a multi-stage Dockerfile, you define multiple stages using the AS <stage_name> syntax.
The target field in Docker Compose tells Docker to stop building after a specific stage.

```dockerfile
# Stage 1: Base build
FROM node:18 AS base
WORKDIR /app
COPY package.json .
RUN npm install

# Stage 2: Development build
FROM base AS dev
COPY . .
CMD ["npm", "run", "dev"]

# Stage 3: Production build
FROM base AS prod
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
```
```yaml
# docker-compose.yml
version: "3.9"
services:
  dev-service:
    build:
      context: .
      dockerfile: Dockerfile
      target: dev
    ports:
      - "3000:3000"

  prod-service:
    build:
      context: .
      dockerfile: Dockerfile
      target: prod
    ports:
      - "80:3000"
```

Explanation of the Example
dev-service:
Builds the Docker image only up to the dev stage in the Dockerfile.
Suitable for development environments.
Exposes port 3000.

prod-service:
Builds the Docker image only up to the prod stage in the Dockerfile.
Optimized for production environments.
Exposes port 80.
