#!/bin/sh
cd /
apk update
apk add ca-certificates wget make g++ libpq-dev
#update-ca-certificates
wget -O Python-2.7.14.tar.xz https://www.python.org/ftp/python/2.7.14/Python-2.7.14.tar.xz
tar -xf Python-2.7.14.tar.xz
rm Python-2.7.14.tar.xz
cp -r Python-2.7.14/ /usr/local/Python-2.7.14
cd /usr/local/Python-2.7.14
./configure
make
ln -s ./python /bin/python
python --version
npm install -g node-gyp
#symlink?
