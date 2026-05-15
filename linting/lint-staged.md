## installation

```shell
npm install --save-dev lint-staged
```

## inside package.json

```json
{
	"scripts": {
		"lint": "next lint", // next js 14
		"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
		"lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
		"lint:fix": "eslint --fix"
	},
	"lint-staged": {
		"*.{js,jsx,ts,tsx,md,html,css}": "prettier --write"
	},
	"lint-staged": {
		"src/**/*": ["npm run lint", "npm run format"]
	}
}
```
