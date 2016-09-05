#!/bin/bash
echo 'Committing and pushing to git'
cd build
git add .
git commit -m "Deploying Update"
git push

echo 'Deploy successful!'
