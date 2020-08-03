#!/bin/bash
if [ -f /usr/share/nginx/html/env.js ] ; then
    rm /usr/share/nginx/html/env.js
fi
touch /usr/share/nginx/html/env.js
echo "window.env = {}; window.env.REACT_APP_API_URL = '${REACT_APP_API_URL}'" >> /usr/share/nginx/html/env.js
