#!/bin/sh
set -e

. ./scripts/logger.sh

./scripts/wait-dependencies.sh

#./scripts/start.sh

exec "$@"
