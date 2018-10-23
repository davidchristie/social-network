# Create namespace
scripts/create-namespace.sh

# Deploy NGINX
# kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml

# Apply definitions
kubectl apply -f definitions/authentication/deployment.yml
kubectl apply -f definitions/authentication/service.yml
kubectl apply -f definitions/database/pvc.yml
kubectl apply -f definitions/database/deployment.yml
kubectl apply -f definitions/database/service.yml
kubectl apply -f definitions/prisma/configmap.yml
kubectl apply -f definitions/prisma/deployment.yml
kubectl apply -f definitions/prisma/service.yml
kubectl apply -f definitions/public-api/deployment.yml
kubectl apply -f definitions/public-api/service.yml
kubectl apply -f definitions/public-api/ingress.yml
kubectl apply -f definitions/web-client/deployment.yml
kubectl apply -f definitions/web-client/service.yml
kubectl apply -f definitions/web-client/ingress.yml
