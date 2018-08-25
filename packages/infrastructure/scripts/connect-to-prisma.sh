PRISMA_POD_NAME=$(kubectl get pods --namespace social-network | grep -o "prisma[^ ]*")
kubectl port-forward --namespace social-network $PRISMA_POD_NAME 4467:4466
