FROM node:8.11.1 as builder
RUN mkdir /usr/src/index
WORKDIR /usr/src/index
ENV PATH /usr/src/index/node_modules/.bin:$PATH
COPY package.json /usr/src/index/package.json
RUN npm install --silent
RUN npm install react-scripts@16.12.0 -g --silent
COPY . /usr/src/index
RUN npm run build


FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/index/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

# docker build -t ivettef/react.app:18963929-5 .
# docker run -it -p 3000:80 ivettef/react.app:18963929-5
# docker run -it ivettef/react.app:18963929-5
# docker push ivettef/react.app:18963929-5


########## PROD ENVIROMENT
# build environment
# FROM node:8.11.1 as builder
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY package.json /usr/src/app/package.json
# RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent
# COPY . /usr/src/app
# RUN npm run prod

# # production environment
# FROM nginx:1.13.9-alpine
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]



# docker build -t clripley.azurecr.io/ripley.pay.core:20190913-PROD .
# docker run -it clripley.azurecr.io/ripley.pay.core:20190913-PROD
# docker push clripley.azurecr.io/ripley.pay.core:20190913-PROD
