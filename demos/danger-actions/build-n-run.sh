#!/bin/bash

# Build app
echo "Building app"
yarn build

# Build docker
echo "Building docker image"
IMAGE_SHA=$(docker build . -q)

echo "Image SHA: $IMAGE_SHA"

# Run it
echo "Running image"
docker run -it -p 3000:3000 "$IMAGE_SHA"
