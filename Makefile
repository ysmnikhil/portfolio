#
# Exec containers
#
.PHONY: build run start
  
build:
	docker build -t nextjs-blog .

run:
	docker run -p 3000:3000 nextjs-blog

start:
	build run