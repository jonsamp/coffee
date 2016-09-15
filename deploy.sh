#!/bin/bash

echo 'Moving files from build to main directory'
mv /build/index.html /index.html
mv /build/transformed.js /transformed.js

echo 'Committing and pushing to git'
git add .
git commit -m "Deploying Update"
git push

echo 'Deploy successful!'
