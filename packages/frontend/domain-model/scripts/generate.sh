set -e

npx apollo-codegen generate \
  src/queries/*.ts \
  src/fragments/*.ts \
  src/mutations/*.ts \
  --output src/generated/types.ts \
  --schema schema.json \
  --target typescript
