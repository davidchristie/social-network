set -e

echo Build services
yarn authentication build
yarn public-api build
yarn web-client build
yarn desktop-client build
