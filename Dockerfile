FROM node:12-alpine

WORKDIR /var/www

COPY package.json /var/www
RUN npm install

COPY . /var/www

RUN npm run build:client

RUN apk add nginx bash
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;pid /tmp/nginx.pid;"]
