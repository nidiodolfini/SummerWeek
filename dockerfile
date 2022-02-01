FROM node:alpine

WORKDIR /usr/app

COPY . /usr/app/

RUN npm install

COPY . /usr/app/

EXPOSE 3000

CMD ["npm", "start" ]