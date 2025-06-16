pushd ./vite-src
npm run build
rm -rf ../app/*
cp -r ./dist/* ../app