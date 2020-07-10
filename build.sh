#! /bin/bash

npm run build
cd build
cp index.html 404.html
cd ../
mv build docs