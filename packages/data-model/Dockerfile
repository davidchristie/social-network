FROM davidchristie/social-network

CMD ["sh", "-c", "yarn wait-for-prisma && yarn data-model deploy && yarn data-model seed"]
