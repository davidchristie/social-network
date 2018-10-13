FROM build-packages

EXPOSE 3000

WORKDIR /app/packages/web-client

ENTRYPOINT ["yarn", "start"]
