#!/bin/bash

echo 'Moving files from build to main directory'
cp -u /build/index.html /index.html
cp -u /build/transformed.js /transformed.js

echo 'Committing and pushing to git'
git add .
git commit -m "Deploying Update"
git push

echo 'Deploy successful!'
