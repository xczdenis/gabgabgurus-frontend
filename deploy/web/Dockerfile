ARG IMG=node:20.10.0-alpine
ARG WORK_DIR=app
ARG BASE_API_URL
ARG BASE_WS_URL

FROM ${IMG} AS base

ARG WORK_DIR
ARG BASE_API_URL
ARG BASE_API_URL


FROM base AS deps
WORKDIR /${WORK_DIR}

COPY package.json package-lock.json ./

RUN apk add --no-cache libc6-compat \
    && npm ci --omit=dev


FROM base AS builder
WORKDIR /${WORK_DIR}

COPY --from=deps /${WORK_DIR}/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_BASE_API_URL=${BASE_API_URL} \
    NEXT_PUBLIC_BASE_WS_URL=${BASE_API_URL}

RUN echo NEXT_PUBLIC_BASE_API_URL=$NEXT_PUBLIC_BASE_API_URL
RUN echo NEXT_PUBLIC_BASE_WS_URL=$NEXT_PUBLIC_BASE_WS_URL

RUN npm run build


FROM base AS runner
WORKDIR /${WORK_DIR}

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1


COPY --from=builder /${WORK_DIR} ./

CMD ["npm", "start"]
