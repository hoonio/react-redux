FROM node:latest

# Bundle app source
COPY . app/
WORKDIR app/

# Install gem Sass
RUN apt-get update \
  && apt-get install -y ruby \
  && gem install sass -v 3.2.19

# Install app dependencies
RUN npm install \
  && npm install -g gulp \
  && gulp build:production

EXPOSE 8080
CMD [ "node", "dist/server.js" ]
