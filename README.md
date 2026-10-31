# devops-deployment
Simple express Server Used For the deployement on the k8s

## Build and run with Docker

From this directory, build the image and start the container:

```sh
docker build -t my-ngrok-app .
docker run --rm -p 3000:3000 my-ngrok-app
```

The application is available at http://localhost:3000.
