docker-compose \
  -f docker-compose.yml \
  -f docker-compose.production.yml \
  -f docker-compose.testing.yml \
  build end-to-end
docker-compose \
  -f docker-compose.yml \
  -f docker-compose.production.yml \
  -f docker-compose.testing.yml \
  up end-to-end
