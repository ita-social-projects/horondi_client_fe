# build environment
FROM node:14.15.4-alpine3.10 as build
WORKDIR /app
COPY package*.json ./
RUN apk update && \
    apk upgrade && \
    apk add git
RUN npm i 
COPY . ./
RUN npm run build

# production environment & SSH access
FROM nginx:stable-alpine
###
# RUN apk add openssh \
#      && echo "root:Docker!" | chpasswd 
# COPY sshd_config /etc/ssh/
###
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/get-env.sh /usr/share/nginx/html/get-env.sh
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod +x /usr/share/nginx/html/get-env.sh && \
    cat /etc/nginx/conf.d/default.conf
###
# RUN mkdir -p /tmp
# COPY ssh_setup.sh /tmp
# RUN chmod +x /tmp/ssh_setup.sh \
#     && (sleep 1;/tmp/ssh_setup.sh 2>&1 > /dev/null)
###
EXPOSE 80 2222
CMD sh /usr/share/nginx/html/get-env.sh && nginx -g 'daemon off;' 
# ; /usr/sbin/sshd

