FROM node:9.11-alpine AS build

ARG API_ENDPOINT

ENV REACT_APP_API_ENDPOINT=$API_ENDPOINT

WORKDIR /app

COPY ./packages/web-client ./packages/web-client
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./tslint.json .
COPY ./yarn.lock .

RUN yarn --frozen-lockfile
RUN yarn web-client build

FROM nginx:stable

EXPOSE 3000

WORKDIR /app

COPY --from=build /app/packages/web-client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/web-client/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
