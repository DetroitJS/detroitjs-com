FROM node:8-alpine

ADD . /var/www

WORKDIR /var/www

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
