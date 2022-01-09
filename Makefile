.DEFAULT_GOAL := help

setup: ## Setup an app to start locally
	@docker run -it -w /app -v `pwd`:/app --rm -it node:17.3 npm install
	@docker-compose build

run: ## Run app locally
	@docker-compose down
	@docker-compose up -d && docker-compose exec app npm start

run-tests: ## Run tests
	@docker-compose down
	@docker-compose up -d && docker-compose exec app npm run test

run-production: ## Build an app for production and run
	@docker-compose down
	@docker-compose up -d && docker-compose exec app npm run build && docker-compose exec app serve -s ./build

down: ## Kill an app
	@docker-compose down

help: SHELL := /bin/sh
help: ## List available commands and their usage
	@awk 'BEGIN {FS = ":.*?##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[\/0-9a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2 } ' $(MAKEFILE_LIST) 
