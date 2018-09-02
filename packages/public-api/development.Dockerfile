FROM davidchristie/social-network:v1

EXPOSE 4000

WORKDIR /app/packages/public-api

CMD ["yarn", "start"]
