FROM build-packages

EXPOSE 5000

WORKDIR /app/packages/authentication

ENTRYPOINT ["yarn", "start"]
