set -e

echo Build libraries
yarn design-system build

echo Build services
yarn authentication build
yarn data-model build
yarn public-api build
yarn web-client build
yarn desktop-client build
