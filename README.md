## Microservices with Node JS and React
## Resources
[udemy](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/)
## Docker commands:
```
1. docker build 
2. docker build -t chenqian/posts:0.0.1 .
3. docker ps
4. docker push
```
## K8s commands:
```
1. kubectl apply -f posts.yaml/posts-depl.yaml
2. kubectl get pods/deployments
3. kubectl logs [pod_name]
4. kubectl delete pod/deployment [pod_name/depl_name]
5. kubectl exec -it [pod_name][cmd]
```
Updating the image used by a deployment:
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
### k8s services:
1. Cluster IP
2. Load Balancer
3. [ingress nginx](https://github.com/kubernetes/ingress-nginx)
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml
```
4. [skaffold](https://skaffold.dev/docs/install/#managed-ide):
```
skaffold dev
```