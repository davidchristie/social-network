FROM davidchristie/social-network AS build

RUN yarn web-client build

FROM nginx:stable

EXPOSE 3000

WORKDIR /app

COPY ./packages/web-client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/web-client/build .

CMD ["nginx", "-g", "daemon off;"]
