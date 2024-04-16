#!/bin/bash

# Make a copy to temp

start_path="$(pwd)"
timestamp="$(date +%s)"
tmp_path="/tmp/$timestamp"
tmp_name="tmp/$timestamp"
tar_name=mojachatka.tar.gz

echo "Start path: $start_path"
echo "Temp path: $tmp_path"
echo "Tar archive: $tar_name"

mkdir -p $tmp_path

cp -r -a "$(pwd)" "$tmp_path/"
cd $tmp_path

# Remove modules
rm -rf ./client/homez/node_modules/
echo Removed client modules
rm -rf ./server/node_modules/
echo Removed server modules

# Tar files
cd ..
rm -rf $tar_name
tar -czf $tar_name $timestamp 
echo Tared files

# Send it
scp -r "/tmp/$tar_name" debian@51.75.66.204:/home/debian/
echo Sended files

ssh debian@51.75.66.204 "tar -xvf ~/$tar_name" 

ssh debian@51.75.66.204 "forever stopall && sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill && cd ~/$timestamp/mojachatka-kurwa/server && npm install"
echo Installed backend and killed on port 80
ssh debian@51.75.66.204 "cd ~/$tmp_name/mojachatka-kurwa/client/homez && npm install --force && cp -r ~/toreplace/* ~/$timestamp/mojachatka-kurwa/server"
echo Installed front-end and copied https config

ssh debian@51.75.66.204 "cd ~/$timestamp/mojachatka-kurwa/client/homez && npm run build"
echo Builded front-end

ssh debian@51.75.66.204 "cd ~/$timestamp/mojachatka-kurwa/client/homez && forever start -c \"npm run start\" ./"
echo Front-end started

ssh debian@51.75.66.204 "cd ~/$timestamp/mojachatka-kurwa/server && npx prisma db push"
echo Synchronized database

ssh debian@51.75.66.204 "cd ~/$timestamp/mojachatka-kurwa/server && forever start index.js"
echo  Backend started

cd $start_path

