![NextJS](https://img.shields.io/badge/NextJS-14%2B-%23000000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-%233178C6?logo=typescript)
![React](https://img.shields.io/badge/React-18-%2361DAFB?logo=react)
![MUI](https://img.shields.io/badge/MUI-5-%23007FFF?logo=mui)
![RTK](https://img.shields.io/badge/RTK-Query-%23764ABC?logo=redux)
![SWR](https://img.shields.io/badge/SWR-hooks-%23000000?logo=swr)
![Docker](https://img.shields.io/badge/Docker-23-%232496ED?logo=docker)

![GitHub last commit](https://img.shields.io/github/last-commit/xczdenis/gabgabgurus-backend)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/xczdenis/gabgabgurus-backend)

# GabGabGurus (frontend)

* [https://gabgabgurus.ru/](https://gabgabgurus.ru/) - веб сайт
* [https://gabgabgurus.ru/](https://gabgabgurus.ru/api/openapi/swagger/?version=v1) - API в интерфейсе swagger
* [https://gabgabgurus.ru/](https://gabgabgurus.ru/api/openapi/redoc/?version=v1) - API в интерфейсе redoc
* [https://gabgabgurus.ru/](https://github.com/xczdenis/gabgabgurus-frontend) - фронтенд на NextJS (React)
* [https://gabgabgurus.ru/](https://github.com/xczdenis/gabgabgurus-backend) - backend на Django+DRF

[GabGabGurus.ru](https://gabgabgurus.ru/) - это сервис для поиска собеседников для практики иностранных
языков. Здесь можно найти носителя языка по общим увлечениям и практиковаться в свободной речи или переписке.

Сервис состоит из 2х компонент:

* **фронтенд**: NextJS, React, MUI, RTK Query, SWR hooks, TypeScript, Docker;
* **бэкенд**: Django, Django Rest Framework (DRF), ASGI (channels), OpenAPI (swagger), PostgreSQL, Redis, Docker;

## 📖 Содержание

- [🌟 Особенности](#-Особенности-)
- [✅ Описание сервиса](#-Описание-сервиса-)
    - [🎨 Темизация и уникальный дизайн](#-Темизация-и-уникальный-дизайн-)
- [💻 Режим разработки](#-Режим-разработки-)
    - [🛠️ Запуск разработки в режиме development](#-Запуск-разработки-в-режиме-development-)
    - [🏭 Запуск разработки в режиме production](#-Запуск-разработки-в-режиме-production-)

## 🌟 Особенности [🔝](#-содержание)

* **NextJS 14**;
* **MUI**:
    * **Уникальный дизайн**;
    * Темизация: Dark and Light темы;
    * Кастомизированные компоненты;
    * Собственные палеты цветов;
* Соблюдение принципов чистой архитектуры;
* Удобные mock шлюзы данных для локальной разработки;
* Разделение всего приложения на глобальные слои:
    * **public:** страницы для всех посетителей;
    * **protected:** страницы только для авторизованных пользователей;
* Проработанные навигационные шаблоны;
* Осознанное использование `useCallback`;
* Четкая структура, миниатюрные компоненты;
* **OAuth2** + **JWT** авторизация;
* Полная **Docker** интеграция:
    * тонкие образы - **multi-stage сборка**;
    * **docker-compose** для локальной разработки;
* **CI/CD** - workflow для GitHub Actions:
    * сборка образов;
    * использование Docker Registry;
    * Деплой на удаленном сервере через SSH подключение;
* **Makefile** для удобного запуска команд;

## ✅ Описание сервиса [🔝](#-содержание)

### 🎨 Темизация и уникальный дизайн [🔝](#-Описание-сервиса-)

Данный раздел описывает общие подходы к реализации разделения интерфейса на разные темы.

Gabgabgurus (frontend) использует кастомизированные компоненты [MUI](https://mui.com/material-ui/getting-started/).
Все, что относится к темизации и дизайну расположено в каталоге `theme`.

Тема - это объект, содержащий набор свойств таких как цвета, компоненты, тени и т.д. Для того чтобы создать тему, нужно
создать объект, содержащий эти свойства.

Проект содержит 2 темы - `dark` и `light`. Объект, содержащий свойства, характерные для темы, формируется
функцией `createOptions`. Данная функция содержится в каталогах `theme/dark` и `theme/light`. При этом есть базовые
свойства, характерные для обоих тем. Объект, содержащий базовые свойства формируется функцией `createOptions` из
каталога `theme/base`.

Рассмотрим пример создания объекта со свойствами для темной темы:

```typescript
// src/theme/dark/create-options.ts

export const createOptions = (config: IThemeConfig) => {
  const { colorPreset, contrast } = config;

  const palette = createPalette({ colorPreset, contrast });
  const components = createComponents({ palette });
  const shadows = createShadows();

  return {
    components,
    palette,
    shadows,
  };
};
```

Описание используемых функций:

1. `createComponents`: возвращает объект, содержащий компоненты со свойствами, характерными для данной темы;
2. `createPalette`: возвращает объект, содержащий цвета для элементов интерфейса, характерные для данной темы;
3. `createShadows`: возвращает объект, содержащий параметры теней, характерные для данной темы;

Рассмотрим функцию `createComponents` из каталога `theme/base`. Данная функция возвращает базовый
набор компонент с кастомизированными свойствами:

```typescript
// src/theme/base/create-components.tsx

export const createComponents = (): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    ...
  }
```

Аналогичные функции `createComponents` расположены в каталогах `theme/dark` и `theme/light`. Функция `createComponents`
в каталоге `theme/dark` возвращает набор компонент только с теми свойствами, которые должны быть изменены для темной
темы:

```typescript
// src/theme/dark/create-components.tsx

export const createComponents = (): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutral[300],
          color: common.black,
        },
      },
    },
    ...
  }
```

Функция `createComponents`в каталоге `theme/light` возвращает набор компонент только с теми свойствами, которые должны
быть изменены для светлой темы:

```typescript
// src/theme/dark/create-components.ts

export const createComponents = (): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutral[200],
          color: common.black,
        },
      },
    },
    ...
  }
```

Каждая тема имеет свой собственный набор цветов - палету, при этом все цвета хранятся строго в одном
месте - `theme/colors.ts`.

Для примера рассмотрим цвет `netural`:

```typescript
// src/theme/colors.ts

export const neutral: Record<number, string> = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927',
};
```

Функция `createPalette` для темной темы задает свои цвета для элементов интерфейса:

```typescript
// src/theme/dark/create-palette.ts

import { neutral } from '@/theme/colors';

export const createPalette = (paletteOptions: PaletteOptions) => {
  const { colorPreset, contrast } = paletteOptions;

  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[100], 0.38),
      disabledBackground: alpha(neutral[100], 0.12),
      focus: alpha(neutral[100], 0.16),
      hover: alpha(neutral[100], 0.04),
      selected: alpha(neutral[100], 0.12),
    },
    text: {
      primary: '#EDF2F7',
      secondary: '#A0AEC0',
      disabled: 'rgba(255, 255, 255, 0.48)',
    },
    ...
  }
```

Функция `createPalette` для светлой темы также задает свои цвета для элементов интерфейса:

```typescript
// src/theme/light/create-palette.ts

import { neutral } from '@/theme/colors';

export const createPalette = (paletteOptions: PaletteOptions) => {
  const { colorPreset, contrast } = paletteOptions;

  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    ...
  }
```

Итоговая тема создается функцией createTheme:

```typescript
// src/theme/index.ts

import { PaletteMode } from '@/config';
import { IThemeConfig } from '@/lib/types/theme';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { createOptions as createBaseOptions } from './base/create-options';
import { createOptions as createDarkOptions } from './dark/create-options';
import { createOptions as createLightOptions } from './light/create-options';

export const createTheme = (config: IThemeConfig) => {
  let theme = createMuiTheme(
    // Base options available for both dark and light palette modes
    createBaseOptions(config),
    // Options based on selected palette mode, color preset and contrast
    config.paletteMode === PaletteMode.Dark ? createDarkOptions(config) : createLightOptions(config)
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

```

## 💻 Режим разработки [🔝](#-содержание)

### 🛠️ Запуск разработки в режиме development [🔝](#-Режим-разработки-)

1. Запустить на бэкенде `make run-db`
2. Запустить на бэкенде приложение локально
3. Меняем `docker-compose.dev.yml`

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
#            NODE_ENV: production
            NODE_ENV: development
        command: ["npm", "run", "dev"]
```

4. Изменить настройки в файле `.env`:

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

5. Изменить настройки в файле `.env.development.local`:

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

### 🏭 Запуск разработки в режиме production [🔝](#-Режим-разработки-)

1. Запустить на бэкенде `make run`

2. Меняем `docker-compose.dev.yml`

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

3. Файл `.env` должен выглядеть так:

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

4. Файл `.env.production.local` должен выглядеть так:

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
