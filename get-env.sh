#!/bin/bash
rm /usr/share/nginx/html/env.js
touch /usr/share/nginx/html/env.js
echo "window.env = {}; window.env.REACT_APP_API_URL = '${REACT_APP_API_URL}'" >> /usr/share/nginx/html/env.js