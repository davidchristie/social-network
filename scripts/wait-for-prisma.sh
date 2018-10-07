until curl $PRISMA_ENDPOINT; do
  echo "Prisma is unavailable - sleeping"
  sleep 1
done
