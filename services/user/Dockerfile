FROM node:12.18-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

ENV DB_CONN_URL="mongodb://root:root@user-db:27017/users?authSource=admin"

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install && mv node_modules ../

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
