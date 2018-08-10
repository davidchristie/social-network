# Social Network Template

## Deployment

### Namespace

Apply the `prisma` namespace by executing:

```bash
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

```bash
kubectl apply -f database/pvc.yml
```

Apply the MySQL deployment definition:

```bash
kubectl apply -f database/deployment.yml
```

Check the Pod has been scheduled by executing:

```console
$ kubectl get pods --namespace prisma
NAME                       READY     STATUS    RESTARTS   AGE
database-69958ddb6-zvlml   1/1       Running   0          1m
```

Apply the MySQL service definition:

```bash
kubectl apply -f database/service.yml
```

To verify that the service is up, execute:

```console
$ kubectl get services --namespace prisma
NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
database   ClusterIP   10.19.241.160   <none>        3306/TCP   33s
```
