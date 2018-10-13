set -e

docker-compose \
  -f docker-compose.yml \
  -f docker-compose.development.yml \
  up --build --detach
./scripts/wait-for-web-client.sh
open http://localhost:3000
