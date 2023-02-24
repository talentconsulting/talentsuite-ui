# talentsuite-react-demo

# To run locally for development
npm install --legacy-peer-deps

npm start

# To Build and run docker image

docker build -t talentdemo:dev .
docker run --publish 3001:3000 talentdemo:dev