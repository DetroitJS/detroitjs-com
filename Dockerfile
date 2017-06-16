FROM node:latest

ADD . /var/www

WORKDIR /var/www

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
