```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Set npm registry to use HTTP (optional, if behind a proxy)
RUN npm config set registry http://registry.npmjs.org/

# Increase npm timeout (optional)
#RUN npm set timeout=300000

# Update npm to the latest version (optional)
RUN npm install -g npm@latest

# Install dependencies
RUN npm install --legacy-peer-deps

RUN npm config set proxy https://evms.mpb.mil.ng

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 4173

# Command to run the application
CMD ["npm", "run", "preview"]
```