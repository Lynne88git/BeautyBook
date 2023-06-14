# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Set up Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the container's port
EXPOSE 80

# Set the command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
