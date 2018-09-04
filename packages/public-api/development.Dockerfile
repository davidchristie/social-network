FROM davidchristie/social-network

EXPOSE 4000

WORKDIR /app/packages/public-api

CMD ["yarn", "start"]
