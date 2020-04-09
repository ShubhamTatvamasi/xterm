FROM node:12.16.2

WORKDIR /usr/src/app

RUN npm install xterm

RUN npm install xterm-addon-attach

RUN npm install -S xterm-addon-web-links
