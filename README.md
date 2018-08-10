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
kubectl apply -f database/pvc.yml
```

Apply the MySQL deployment definition:

```console
kubectl apply -f database/deployment.yml
```

Check the Pod has been scheduled by executing:

```console
$ kubectl get pods --namespace prisma
NAME                       READY     STATUS    RESTARTS   AGE
database-69958ddb6-zvlml   1/1       Running   0          1m
```
