FROM node:10
# Create app directory

ENV ENVIROMENTS=PRODUCCION
ENV PORT = 5200
ENV HOST = 0.0.0.0
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5200
CMD [ "npm", "run", "start" ]

# docker build -t ivettef/env.test:189639295 .
# docker run -it ivettef/env.test:189639295
# docker push ivettef/env.test:189639295