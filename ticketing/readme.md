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
1) cookie: cookie 存储在客户端： cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。  

2) jwt: JSON Web Token
它将用户信息加密到token里，服务器不保存任何用户信息。服务器通过使用保存的密钥验证token的正确性，只要正确即通过验证。
可以使用 HMAC 算法或者是 RSA 的公/私秘钥对 JWT 进行签名。因为数字签名的存在，这些传递的信息是可信的。
    - generate jwt and store in session
    - generate jwt algorithm using secrete
    ```
    kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf



  - option1: order service rely on auth service
    - downside: 如果auth service crush - >fail
  - option2: each service check jwt/cookie
    - upside: no dependency
    - downsides: when users need to be baned




* Testing


