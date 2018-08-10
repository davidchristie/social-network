# Social Network Template

## Deployment

### Namespace

Apply the `prisma` namespace by executing:

```console
kubectl apply -f namespace.yml
```

You should see the following on a fresh Kubernetes cluster:

```console
$ kubectl get namespaces
NAME            STATUS    AGE
default         Active    1d
kube-public     Active    1d
kube-system     Active    1d
prisma          Active    2s
```

### Database

Request a MySQL database by executing:

```console
kubectl apply -f database.yml
```
