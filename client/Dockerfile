# Use a lighter version of Node as a parent image
FROM node:16

# Set the working directory to /client
WORKDIR /usr/src/client

# copy package.json into the container
COPY package*.json ./

# install dependencies
RUN npm ci

# Copy the current directory contents into the container
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "run", "start"]
