FROM node:8

# Create app directory
WORKDIR /root/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install mongoose
RUN npm install mocha
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /root/app

EXPOSE 8080 27017

ENTRYPOINT ["sh","-c","npm run test"]
