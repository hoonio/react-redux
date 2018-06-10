FROM node:alpine

# Bundle app source
COPY . app/
WORKDIR app/

ENV NODE_ENV production

# Install app dependencies
RUN npm install && \
  npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
