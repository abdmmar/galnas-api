IMAGE_NAME=galnas-api
PORT=8080

build-image: Dockerfile
	docker buildx b . -t $(IMAGE_NAME)

run-image:
	docker run --name $(IMAGE_NAME) -p $(PORT):$(PORT) $(IMAGE_NAME)