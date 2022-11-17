FROM node:14-alpine

RUN mkdir -p /var/www/web/node_modules && chown -R node:node /var/www/web

WORKDIR /var/www/web

COPY package*.json ./
RUN npm install

COPY --chown=node:node ./public /var/www/web/public
COPY --chown=node:node ./src /var/www/web/src

RUN npm run build

EXPOSE 3000

CMD [ "node" ]
