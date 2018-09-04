FROM davidchristie/social-network

EXPOSE 3000

WORKDIR /app/packages/web-client

CMD ["yarn", "start"]
