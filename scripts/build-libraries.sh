set -e

echo Build libraries
yarn data-model build
yarn design-system build
yarn kafka-client build
yarn test-utilities build
