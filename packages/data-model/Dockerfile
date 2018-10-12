FROM build-packages

CMD ["sh", "-c", "yarn wait-for-prisma && yarn data-model deploy && yarn data-model seed"]
