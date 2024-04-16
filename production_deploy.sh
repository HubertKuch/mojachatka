#!/bin/bash

# Remove modules
rm -rf ./client/homez/node_modules/
echo Removed client modules
rm -rf ./server/node_modules/
echo Removed server modules
rm -r ./client/homez/.next

# Tar files
cd ..
rm -rf mojachatka.tar.gz
tar -czf mojachatka.tar.gz mojachatka-kurwa 
echo Tared files

# Make backup
ssh ubuntu@57.128.194.146 "rm -rf ~/mojachatka.tar.gz && mv ~/mojachatka-kurwa ~/backup/$(date +%s)"

# Send it
scp -r ~/projects/mojachatka.tar.gz ubuntu@57.128.194.146:/home/ubuntu/
echo Sended files

ssh ubuntu@57.128.194.146 "tar -xvf ~/mojachatka.tar.gz" 

ssh ubuntu@57.128.194.146 "sudo forever stopall && sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill && cd ~/mojachatka-kurwa/server && npm install"
echo Installed backend and killed on port 80
ssh ubuntu@57.128.194.146 "cd ~/mojachatka-kurwa/client/homez && npm install --force && cp -r ~/toreplace/* ~/mojachatka-kurwa/server"
echo Installed front-end and copied https config

ssh ubuntu@57.128.194.146 "cd ~/mojachatka-kurwa/client/homez && sudo npm run build"
echo Builded front-end

ssh ubuntu@57.128.194.146 "cd ~/mojachatka-kurwa/client/homez && sudo forever start -c \"sudo npm run start\" ./"
echo Front-end started

ssh ubuntu@57.128.194.146 "cd ~/mojachatka-kurwa/server && npx prisma db push"
echo Synchronized database

ssh ubuntu@57.128.194.146 "cd ~/mojachatka-kurwa/server && sudo forever start index.js"
echo  Backend started

