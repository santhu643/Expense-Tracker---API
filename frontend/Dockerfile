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

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Serve the React app
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port
EXPOSE 3000
