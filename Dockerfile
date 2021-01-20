# build environment
FROM node:14.15.4-alpine3.10 as build
WORKDIR /app
COPY package.json ./
RUN apk update && \
    apk upgrade && \
    apk add git
RUN npm i 
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/get-env.sh /usr/share/nginx/html/get-env.sh
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod +x /usr/share/nginx/html/get-env.sh
RUN cat /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD sh /usr/share/nginx/html/get-env.sh && nginx -g 'daemon off;'
