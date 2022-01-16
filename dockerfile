FROM node:16.13.2-alpine
#FROM patwoz/expo-cli:latest

WORKDIR /home/api

ARG NODE_ENV=production
ARG PORT=19006

ENV NODE_ENV $NODE_ENV
ENV PORT $PORT

EXPOSE $PORT 19001 19002 19000

RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

COPY package.json .

RUN npm install

COPY . .

CMD expo start

