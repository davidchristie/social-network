docker-compose \
  -f docker-compose.yml \
  -f docker-compose.production.yml \
  -f docker-compose.testing.yml \
  up --detach
docker-compose \
  -f docker-compose.yml \
  -f docker-compose.production.yml \
  -f docker-compose.testing.yml \
  ps
docker-compose \
  -f docker-compose.yml \
  -f docker-compose.production.yml \
  -f docker-compose.testing.yml \
  logs end-to-end
