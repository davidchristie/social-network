PRISMA_POD_NAME=$(kubectl get pods --namespace prisma | grep -o "prisma[^ ]*")
kubectl port-forward --namespace prisma $PRISMA_POD_NAME 4467:4466
