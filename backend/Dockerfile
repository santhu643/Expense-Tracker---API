# Step 1: Use official Node.js image as a base image
FROM node:16-alpine

# Step 2: Install build dependencies (needed for bcrypt)
RUN apk add --no-cache make gcc g++ python3

# Step 3: Set the working directory in the container
WORKDIR /app

# Step 4: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 5: Install dependencies
RUN npm install

# Step 6: Rebuild bcrypt from source if required
RUN npm rebuild bcrypt --build-from-source

# Step 7: Copy the rest of the project files into the container
COPY . .

# Step 8: Expose the port on which the Node.js app will run
EXPOSE 5173

# Step 9: Start the Node.js server
CMD ["npm", "start"]
