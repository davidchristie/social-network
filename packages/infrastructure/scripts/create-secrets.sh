# Load environment variables
export $(grep -v '^#' ../../.env | xargs)

# Create secrets
kubectl create secret generic authentication \
  --namespace=social-network \
  --from-literal=jwt-secret=$JWT_SECRET
