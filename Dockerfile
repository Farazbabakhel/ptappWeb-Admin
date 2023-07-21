# base image
FROM node:12.20.0 as builder
# set working directory
WORKDIR /ptappWeb-Admin
EXPOSE 8003

# install and cache app dependencies
COPY . .
# RUN npm install 
CMD npm run build:prod

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /ptappWeb-Admin/dist /usr/share/nginx/html