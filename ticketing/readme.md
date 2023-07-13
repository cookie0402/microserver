some command line:
```vim ~/.bash_profile    
source ~/.bash_profile    
code /etc/hosts
skaffold dev 
```

* Error checks
1) error handler middleware
2) custom error
3) serialize error
4) asy error
* Database
doucument vs collections
1) connect mongodb
  - write yaml
  ```
  apiVersion: v1
kind: Service
metadata:
  name: auth-mongo-srv
spec:
  selector:
    app: auth-mongo
  ports:
    - name: db
      protocol: TCP
      port: 27017
      targetPort: 27017
```
2) signup workflow
3) model
    - using interface to ensure the correctness of input info
    - static properties
    - add error handler for checking existing users
  4) hasing
    - crypto: scrypt randombytes
* Authentication
1) cookie
2) jwt


* Testing


