FROM davidchristie/social-network

EXPOSE 5000

WORKDIR /app/packages/authentication

CMD ["yarn", "start"]
