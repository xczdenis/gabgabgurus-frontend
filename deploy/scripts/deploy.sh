#!/bin/bash

# Exit in case of any error
set -e

. ./deploy/scripts/utils/logger.sh

log_info "Go to project root directory"
cd "$SERVER_PROJECT_ROOT_DIR"

log_info "Pull from remote git repository"
git pull

log_info "Pull docker images"
docker pull "$APP_IMG"

log_info "Create a shared docker network if it doesn't exist"
if ! docker network ls | grep -q "$GGG_EXTERNAL_NETWORK"; then
    docker network create "$GGG_EXTERNAL_NETWORK"
fi

log_info "Down docker containers"
COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME docker compose -f docker-compose.yml -f docker-compose.prod.yml --profile default down

log_info "Up docker containers"
COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME docker compose -f docker-compose.yml -f docker-compose.prod.yml --profile default up -d --build

log_info "Remove all unused containers, networks and images"
docker system prune -f
