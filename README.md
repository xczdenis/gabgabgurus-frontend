## Запуск разработки в режиме production

1. Меняем docker-compose.dev.yml
```docker
    web:
        <<: *base-dev-service
        build:
            context: .
            dockerfile: deploy/web/Dockerfile
            args:
                IMG: ${NODE_IMG}
                BASE_API_URL: ${NEXT_PUBLIC_BASE_API_URL?Variable not set}
                BASE_WS_URL: ${NEXT_PUBLIC_BASE_WS_URL?Variable not set}
        environment:
            NODE_ENV: production
#            NODE_ENV: development
#        command: ["npm", "run", "dev"]
```

2. Файл `.env` должен выглядеть так:
```dotenv
# ---------------------------------------------
# Web app settings for building app
# ---------------------------------------------
# When running on docker with nginx, host should be app 127.0.0.1, else 127.0.0.1:8000
NEXT_PUBLIC_BASE_API_URL=http://127.0.0.1/api/v1
NEXT_PUBLIC_BASE_WS_URL=ws://127.0.0.1/ws/api/v1

#NEXT_PUBLIC_BASE_API_URL=http://127.0.0.1:8000/api/v1
#NEXT_PUBLIC_BASE_WS_URL=ws://127.0.0.1:8000/ws/api/v1

# ---------------------------------------------
# Web app sturtup settings
# ---------------------------------------------
PORT=3000
PROXY_LISTEN_PORT=80
```

3. Файл `.env.production.local` должен выглядеть так:
```dotenv
# ---------------------------------------------
# Backend settings
# ---------------------------------------------
# If backend has started on localhost, BACKEND_HOST should be 127.0.0.1
#BACKEND_HOST=127.0.0.1

# If backend has started on docker, BACKEND_HOST should be app
BACKEND_HOST=app
BACKEND_PORT=8000

# ---------------------------------------------
# Web app runtime settings
# ---------------------------------------------
BASE_API_URL=http://$BACKEND_HOST:$BACKEND_PORT/api/v1

# ---------------------------------------------
# Other
# ---------------------------------------------
DOMAIN=gabgabgurus.ru
```

4. Файл `.env.development.local` должен выглядеть так:
```dotenv
# ---------------------------------------------
# Backend settings
# ---------------------------------------------
# If backend has started on localhost, BACKEND_HOST should be 127.0.0.1
#BACKEND_HOST=127.0.0.1

# If backend has started on docker, BACKEND_HOST should be app
BACKEND_HOST=app
BACKEND_PORT=8000

# ---------------------------------------------
# Web app runtime settings
# ---------------------------------------------
BASE_API_URL=http://$BACKEND_HOST:$BACKEND_PORT/api/v1

# ---------------------------------------------
# Other
# ---------------------------------------------
DOMAIN=gabgabgurus.ru
```

## Запуск разработки в режиме development

1. Запустить на бэкенде make run-db
2. Запустить на бэкенде приложение локально
3. Файл `.env` должен выглядеть так:
```dotenv
# ---------------------------------------------
# Web app settings for building app
# ---------------------------------------------
# When running on docker with nginx, host should be app 127.0.0.1, else 127.0.0.1:8000
#NEXT_PUBLIC_BASE_API_URL=http://127.0.0.1/api/v1
#NEXT_PUBLIC_BASE_WS_URL=ws://127.0.0.1/ws/api/v1

NEXT_PUBLIC_BASE_API_URL=http://127.0.0.1:8000/api/v1
NEXT_PUBLIC_BASE_WS_URL=ws://127.0.0.1:8000/ws/api/v1

# ---------------------------------------------
# Web app sturtup settings
# ---------------------------------------------
PORT=3000
PROXY_LISTEN_PORT=80
```
4. Файл `.env.development.local` должен выглядеть так:
```dotenv
# ---------------------------------------------
# Backend settings
# ---------------------------------------------
# If backend has started on localhost, BACKEND_HOST should be 127.0.0.1
BACKEND_HOST=127.0.0.1

# If backend has started on docker, BACKEND_HOST should be app
#BACKEND_HOST=app
BACKEND_PORT=8000

# ---------------------------------------------
# Web app runtime settings
# ---------------------------------------------
BASE_API_URL=http://$BACKEND_HOST:$BACKEND_PORT/api/v1

# ---------------------------------------------
# Other
# ---------------------------------------------
DOMAIN=gabgabgurus.ru
```