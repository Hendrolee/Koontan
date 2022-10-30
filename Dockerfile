FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm test

COPY . .

EXPOSE 3000

CMD ["npm", "start"]