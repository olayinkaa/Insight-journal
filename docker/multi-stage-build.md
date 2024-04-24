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