# Load environment variables
export $(grep -v '^#' ../../.env | xargs)

# Create TLS
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /tmp/tls.key \
  -out /tmp/tls.crt \
  -subj "/CN=docker.local"

# Create namespace
scripts/create-namespace.sh

# Create secrets
kubectl create secret generic authentication \
  --namespace=social-network \
  --from-literal=jwt-secret=$JWT_SECRET || true
kubectl create secret tls tls \
  --namespace=social-network \
  --key /tmp/tls.key \
  --cert /tmp/tls.crt || true
