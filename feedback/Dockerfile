FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js", "preview", "--host", "0.0.0.0", "--port", "8080"]