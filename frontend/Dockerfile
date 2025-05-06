# frontend/Dockerfile
FROM node:23
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build   # Optionally build if you want to serve a production version
EXPOSE 5173
CMD ["npm", "run", "dev"]
