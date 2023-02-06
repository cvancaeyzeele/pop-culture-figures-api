FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# if you are building your code for production
# RUN npm ci --only=production

COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]