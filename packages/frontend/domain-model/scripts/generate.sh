set -e

npx apollo-codegen generate \
  src/fragments/*.ts \
  src/mutations/*.ts \
  src/queries/*.ts \
  --addTypename \
  --output src/generated/types.ts \
  --schema schema.json \
  --target typescript
