set -e

yarn authentication test
yarn design-system test
yarn domain-model test
yarn public-api test
yarn web-client test
