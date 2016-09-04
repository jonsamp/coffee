#!/bin/bash
echo 'Committing and pushing to git'
git add .
git commit -m "Deploying Update"
git push

echo 'Deploy successful!'
