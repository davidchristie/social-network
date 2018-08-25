# Load environment variables
export $(grep -v '^#' ../../.env | xargs)

# Delete secrets
kubectl delete secrets \
  --namespace=social-network \
  --all

# Create secrets
kubectl create secret generic authentication \
  --namespace=social-network \
  --from-literal=jwt-secret=$JWT_SECRET

# Apply definitions
kubectl apply -f namespace.yml
kubectl apply -f database/pvc.yml
kubectl apply -f database/deployment.yml
kubectl apply -f database/service.yml
kubectl apply -f prisma/configmap.yml
kubectl apply -f prisma/deployment.yml
kubectl apply -f prisma/service.yml
kubectl apply -f public-api/deployment.yml
kubectl apply -f public-api/service.yml
