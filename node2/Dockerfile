# Use a Node.js base image
FROM node:16-alpine

# Create app directory
WORKDIR /api1

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 4000
EXPOSE 4001

# Command to start the application
CMD ["npm ", "start"]
