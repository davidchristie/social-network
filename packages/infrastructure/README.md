# Infrastructure

## Scripts

```bash
yarn infrastructure deploy
```

Deploy to a Kubernetes cluster.

## Deployment

Create a Kubernetes cluster on Google Cloud Platform.

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

### Prisma

Deploy the ConfigMap by executing:

```bash
kubectl apply -f prisma/configmap.yml
```

Apply Prisma server deployment definition:

```bash
kubectl apply -f prisma/deployment.yml
```

To check that the Prisma server has been scheduled on the Kubernetes cluster, execute:

```console
$ kubectl get pods --namespace prisma
NAME                       READY     STATUS    RESTARTS   AGE
database-69958ddb6-zvlml   1/1       Running   0          21m
prisma-98b6b6cbd-q9b82     1/1       Running   0          43s
```

Apply the Prisma service definition by executing:

```bash
kubectl apply -f prisma/service.yml
```

### Connect

To communicate with the Prisma server running in the Kubernetes cluster, perform the following steps:

`kubectl get pods --namespace prisma` to identify the pod name
`kubectl port-forward --namespace prisma <the-pod-name> 4467:4466` – This will forward from `127.0.0.1:4467` -> `kubernetes-cluster:4466`

The Prisma server is now reachable via `http://localhost:4467`.
