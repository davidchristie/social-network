set -e

echo Build libraries
yarn data-model build
yarn design-system build
yarn public-api-context build
yarn test-utilities build
