docker-compose \
  -f docker-compose.testing.yml \
  build end-to-end
docker-compose \
  -f docker-compose.testing.yml \
  up end-to-end
