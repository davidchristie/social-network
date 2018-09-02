FROM davidchristie/social-network:v1

EXPOSE 5000

WORKDIR /app/packages/authentication

CMD ["yarn", "start"]
