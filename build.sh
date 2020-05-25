webpack  --config ./build/webpack.config.js
cat ./src/head.js ./dist/main.js> ./dist/regular_blacklist.js
rm ./dist/main.js
