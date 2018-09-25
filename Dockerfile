FROM node
MAINTAINER Roman Anasal <roman.anasal@academyconsult.de>

WORKDIR /app/

COPY package.json bot.js /app/
RUN npm install

CMD node bot.js
