set -e

apollo-codegen introspect-schema \
  https://api.social-network.davidchristie.io \
  --output schema.json \
  --insecure
