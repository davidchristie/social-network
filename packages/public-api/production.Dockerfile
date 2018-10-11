FROM build-packages

EXPOSE 4000

WORKDIR /app/packages/public-api

CMD ["node", "dist/index.js"]
