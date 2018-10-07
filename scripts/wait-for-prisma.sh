printf "Waiting for Prisma server"

until curl $PRISMA_ENDPOINT --silent; do
  printf "."
  sleep 1
done

printf "\n"
