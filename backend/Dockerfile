# backend/Dockerfile

FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose backend port
EXPOSE 3000

# Start the backend server
CMD ["npm", "run", "dev"]
