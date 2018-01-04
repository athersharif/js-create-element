build:
	@make test
	@make prettier
	@make docs
	@npm run build

prettier:
	@npm run prettier

docs:
	@npm run docs

test:
	@npm run lint
	@npm run test

lint:
	@npm run lint

.PHONY: build prettier docs test lint
