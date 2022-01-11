#!/bin/sh

#sh -c "cd ./packages/website && yarn build"
mkdir ./release
cp -r ./packages/website/build ./release/website
rsync -avr --filter=':- ./packages/server/.gitignore' ./packages/server ./release
zip -r release.zip ./release/* -x "*.env*" -x "certs"
rm -rf ./release