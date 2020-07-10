# build environment
FROM node:13.12.0-alpine as build
RUN apk add git openssh-client
WORKDIR /app
COPY package.json ./
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN --mount=type=ssh,id=github npm install
RUN npm i
COPY . ./
RUN npm run build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/get-env.sh /usr/share/nginx/html/get-env.sh
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod +x /usr/share/nginx/html/get-env.sh
CMD /usr/share/nginx/html/get-env.sh && sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'