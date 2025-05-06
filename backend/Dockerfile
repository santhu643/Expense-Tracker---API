# backend/Dockerfile
FROM node:23
WORKDIR /app
COPY . .
RUN npm install
RUN chmod +x ./node_modules/.bin/nodemon  # Fix execute permissions for nodemon
EXPOSE 3000
CMD ["npm", "run", "dev"]
