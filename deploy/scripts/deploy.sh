#!/bin/bash

echo $SERVER_PROJECT_ROOT_DIR

cd $SERVER_PROJECT_ROOT_DIR
ls -al
## Установка переменных окружения
#SERVER_PROJECT_ROOT_DIR=$1
#APP_IMG=$2
#COMPOSE_PROJECT_NAME=$3
#GGG_EXTERNAL_NETWORK=$4
#
## Переход в корневую директорию проекта на сервере
#cd $SERVER_PROJECT_ROOT_DIR
#
## Обновление репозитория
#git pull
#
## Загрузка образа Docker
#docker pull $APP_IMG
#
## Создание Docker сети, если она еще не существует
#docker network create $GGG_EXTERNAL_NETWORK
#
## Запуск Docker Compose для остановки и запуска сервисов
#COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME docker compose -f docker-compose.yml -f docker-compose.prod.yml --profile default down
#COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME docker compose -f docker-compose.yml -f docker-compose.prod.yml --profile default up -d --build
#
## Очистка неиспользуемых Docker ресурсов
#docker system prune -f
