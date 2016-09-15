#!/bin/bash

echo 'Moving files from build to main directory'
cp /build/index.html /index.html
cp /build/transformed.js /transformed.js

echo 'Committing and pushing to git'
git add .
git commit -m "Deploying Update"
git push

echo 'Deploy successful!'
