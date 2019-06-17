FROM node:8.11.4-alpine
WORKDIR /app

ENV NPM_VERSION=6.6.0
ENV YARN_VERSION=1.15.2
RUN npm install -g npm@${NPM_VERSION} yarn@${YARN_VERSION}
RUN apk add --no-cache --virtual .gyp python make g++
