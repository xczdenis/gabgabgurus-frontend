#!/bin/bash

cd $SERVER_PROJECT_ROOT_DIR

docker pull $APP_IMG

if [ -z "$(docker network ls | grep $GGG_EXTERNAL_NETWORK)" ]; then
    docker network create $GGG_EXTERNAL_NETWORK
fi

COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME docker compose -f docker-compose.yml -f docker-compose.prod.yml --profile default down
COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME docker compose -f docker-compose.yml -f docker-compose.prod.yml --profile default up -d --build

docker system prune -f
