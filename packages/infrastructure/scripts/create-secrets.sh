# Load environment variables
export $(grep -v '^#' ../../.env | xargs)

# Generate certificate authority root
openssl genrsa -des3 -out /tmp/ca.key 2048
openssl req -x509 -new -nodes -key /tmp/ca.key -sha256 -days 1825 -out /tmp/ca.pem

# Create CA-signed certificate
openssl genrsa -out /tmp/www.social-network.com.key 2048
openssl req -new -key /tmp/www.social-network.com.key -out /tmp/www.social-network.com.csr

# Create TLS
openssl x509 -req -in /tmp/www.social-network.com.csr \
  -CA /tmp/ca.pem \
  -CAkey /tmp/ca.key \
  -CAcreateserial \
  -out /tmp/www.social-network.com.crt \
  -days 1825 -sha256 \
  -extfile www.social-network.com.ext

# Create namespace
scripts/create-namespace.sh

# Create secrets
kubectl create secret generic authentication \
  --namespace=social-network \
  --from-literal=jwt-secret=$JWT_SECRET || true
kubectl create secret tls tls \
  --namespace=social-network \
  --key /tmp/www.social-network.com.key \
  --cert /tmp/www.social-network.com.crt || true
