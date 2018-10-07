printf "Waiting for web client"

until curl http://localhost:3000 --silent; do
  printf "."
  sleep 1
done

printf "\n"
