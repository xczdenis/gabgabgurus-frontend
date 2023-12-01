ARG img=node:20.10.0-alpine
ARG work_dir=app

FROM ${img} AS base

ARG work_dir

FROM base AS deps
WORKDIR /${work_dir}

COPY package.json package-lock.json ./

RUN apk add --no-cache libc6-compat \
    && npm ci --production


FROM base AS builder
WORKDIR /${work_dir}

COPY --from=deps /${work_dir}/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build


FROM base AS runner
WORKDIR /${work_dir}

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1


COPY --from=builder /${work_dir} ./

CMD ["npm", "start"]
