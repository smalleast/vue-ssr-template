#!bin/bash

cd /var2/deploy/node/zhulogic-ssr
rm -rf .nuxt.bak/
mv .nuxt/ .nuxt.bak/
unzip nuxt.zip
forever stopall
forever start -c "npm start" ./
