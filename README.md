# Social Network Template

## Deployment

Apply the `prisma` namespace by executing:

```bash
kubectl apply -f namespace.yml
```

You should see the following on a fresh Kubernetes cluster:

```bash
$ kubectl get namespaces
NAME            STATUS    AGE
default         Active    1d
kube-public     Active    1d
kube-system     Active    1d
prisma          Active    2s
```
