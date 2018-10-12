FROM build-packages AS build

ARG REACT_APP_API_ENDPOINT

ENV REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT

RUN yarn web-client build

FROM nginx:stable

EXPOSE 3000

WORKDIR /app

COPY --from=build /app/packages/web-client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/web-client/build .

CMD ["nginx", "-g", "daemon off;"]
