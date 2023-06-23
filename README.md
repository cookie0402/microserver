## Microservices with Node JS and React
## Resources
[udemy](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/)
## Docker commands:
```
1. docker build 
2. docker build -t chenqian/posts:0.0.1 .
3. docker ps (kubectl get pods)
4. docker push
5. docker exec -it [container id] [cmd](kubectl  exec -it [container id] [cmd])
```
## K8s commands:
```
1. kubectl apply -f posts.yaml/posts-depl.yaml #tell k8s to process the config 
2. kubectl get   pods/deployments
3. kubectl logs [pod_name]
4. kubectl delete pod/deployment [pod_name/depl_name]
5. kubectl exec -it [pod_name][cmd] #execute the given command in a running pods 
   kubectl exec -it posts sh #execute shell  in a running pods 
```
Updating the image used by a deployment:(set of pods if any pods crush automatically rebuild)
1. Make a change to your project code
2. Rebuild docker image specifying a new image version
3. Update the version of image in the deployment file: post-depl.yaml 
4. Run command: kubectl apply -f posts-depl.yaml -> deployment configured
### Preferred Method for Updating deployments
1. The deployment must using latest tage in the pod spec section
2. Make an update to your code
3. Build the image
4. Push the image to docker hub
5. Run the command
6. kubectl rollout restart deployment
```
kubectl rollout restart deployment posts-depl 
kubectl logs 常用于将容器中的日志导出
```
```
selector: (take all pods created selected labelled one)
    matchLabels:
      app: client
  template: (which pods to manage  )
    metadata:
      labels:
        app: client
    spec: (pods specification   )
      containers:
        - name: client
          image: cygnetops/client-95
```
### k8s services and communication:
1. Cluster IP (only exposes pods in the cluster)
2. NodePort Services (outside)
 (targetPort node port service) /Port (for pod)
```
spec:
  type: NodePort
  selector:
    app: posts
  ports:
    - name: posts
      protocol: TCP
      port: 4000
      targetPort: 4000
```
3. Load Balancer (make a pod accessible from outside the cluster)


4. [ingress nginx](https://github.com/kubernetes/ingress-nginx)
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml
```
4. [skaffold](https://skaffold.dev/docs/install/#managed-ide):
```
skaffold dev
```
### project update: