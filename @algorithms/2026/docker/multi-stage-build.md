## Multi-stage build REACT APP
```dockerfile
FROM node as build
# RUN mkdir -p home/app 
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV  REACT_APP_NAME=corporatePay
RUN npm run build

FROM nginx
COPY --from=build /app/build /user/share/nginx/html
```

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ARG REACT_APP_NAME
ENV REACT_APP_NAME=$REACT_APP_NAME
RUN npm run build


FROM nginx:1.23.4-alpine
COPY --from=build /app/build /usr/share/nginx/html
```