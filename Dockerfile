# Use the official Node.js image as the base image
FROM node:23

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install a production web server (nginx or serve for example)
RUN npm install -g serve

# Expose the port the app will run on (default for Vue dev server is 5173, but we'll use port 5000 for serve)
EXPOSE 5000

# Start the app using the "serve" static server
CMD ["serve", "-s", "dist", "-l", "5000"]
