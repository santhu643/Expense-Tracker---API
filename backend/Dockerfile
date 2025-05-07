# Step 1: Use official Node.js image as a base image
FROM node:16-alpine

# Step 2: Set working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn files) into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all other project files into the container
COPY . .

# Step 6: Expose the port on which the Node.js app will run
EXPOSE 5000

# Step 7: Start the Node.js server
CMD ["npm", "start"]
