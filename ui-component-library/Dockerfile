# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the container at /usr/src/app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Build the app for production
RUN npm run build

# Install `serve` to run the app
RUN npm install -g serve

# Make port 8083 available to the world outside this container
EXPOSE 8083

# Run serve when the container launches
CMD ["serve", "-s", "build", "-l", "8083"]
