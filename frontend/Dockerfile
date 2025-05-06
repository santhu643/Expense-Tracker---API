# frontend/Dockerfile

FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
