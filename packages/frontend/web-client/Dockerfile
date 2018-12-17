FROM node:10-alpine AS build

ARG API_ENDPOINT

ENV REACT_APP_API_ENDPOINT=$API_ENDPOINT

WORKDIR /app

# Install dependencies
COPY ./packages/frontend/design-system/package.json ./packages/frontend/design-system/package.json
COPY ./packages/frontend/domain-model/package.json ./packages/frontend/domain-model/package.json
COPY ./packages/frontend/web-client/package.json ./packages/frontend/web-client/package.json
COPY ./packages/libraries/test-utilities/package.json ./packages/libraries/test-utilities/package.json
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn

# Copy source code
COPY ./packages/frontend/design-system ./packages/frontend/design-system
COPY ./packages/frontend/domain-model ./packages/frontend/domain-model
COPY ./packages/frontend/web-client ./packages/frontend/web-client
COPY ./packages/libraries/test-utilities ./packages/libraries/test-utilities
COPY ./tsconfig.json .
COPY ./tslint.json .

RUN yarn web-client build

FROM nginx:stable

EXPOSE 3000

WORKDIR /app

COPY --from=build /app/packages/frontend/web-client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/frontend/web-client/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
