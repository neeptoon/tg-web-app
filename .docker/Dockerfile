FROM node:14-alpine

RUN mkdir -p /var/www/front/node_modules && chown -R node:node /var/www/front

WORKDIR /var/www/front

COPY package*.json ./
RUN npm install

COPY --chown=node:node ./public /var/www/front/public
COPY --chown=node:node ./src /var/www/front/src

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
