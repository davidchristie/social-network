set -e

echo Build libraries
yarn data-model build
yarn design-system build
yarn domain-model build
yarn kafka-client build
yarn page-layouts build
yarn test-utilities build
