echo "Apply prisma namespace"

kubectl apply -f namespace.yml

echo "Request MySQL database"

kubectl apply -f database/pvc.yml

echo "Apply MySQL deployment definition"

kubectl apply -f database/deployment.yml

echo "Apply MySQL service definition"

kubectl apply -f database/service.yml

echo "Deploy Prisma ConfigMap"

kubectl apply -f prisma/configmap.yml

echo "Apply Prisma deployment definition"

kubectl apply -f prisma/deployment.yml

echo "Apply Prisma service definition"

kubectl apply -f prisma/service.yml

echo "Apply graphql-server deployment definition"

kubectl apply -f graphql-server/deployment.yml

echo "Apply graphql-server service definition"

kubectl apply -f graphql-server/service.yml
