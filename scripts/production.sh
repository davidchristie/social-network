$(docker-compose \
  -f docker-compose.yml \
  -f docker-compose.production.yml \
  build --no-cache)
$(docker-compose \
  -f docker-compose.yml \
  -f docker-compose.production.yml \
  up --detach)
docker-compose logs end-to-end
