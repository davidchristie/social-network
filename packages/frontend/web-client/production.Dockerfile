FROM node:10-alpine AS build

ARG API_ENDPOINT

ENV REACT_APP_API_ENDPOINT=$API_ENDPOINT

WORKDIR /app

COPY ./packages/frontend/design-system ./packages/frontend/design-system
COPY ./packages/frontend/web-client ./packages/frontend/web-client
COPY ./packages/libraries/test-utilities ./packages/libraries/test-utilities
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./tslint.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile
RUN yarn web-client build

FROM nginx:stable

EXPOSE 3000

WORKDIR /app

COPY --from=build /app/packages/frontend/web-client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/frontend/web-client/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
