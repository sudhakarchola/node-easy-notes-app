FROM node:10.7.0-alpine
MAINTAINER Sudhakar Mani <mail4sudhakar@gmail.com>

RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --quiet node-gyp -g

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/node-easy-notes-app && cp -a /tmp/node_modules /opt/node-easy-notes-app

# Setup workdir
WORKDIR /opt/node-easy-notes-app
COPY . /opt/node-easy-notes-app

# run
EXPOSE 3000
CMD ["npm", "start"]
