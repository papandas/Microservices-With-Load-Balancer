FROM node:latest

WORKDIR /home/node/app

COPY app/index.js /home/node/app
COPY app/package.json /home/node/app

RUN npm install

CMD npm run start

EXPOSE 3000