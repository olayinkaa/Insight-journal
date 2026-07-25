## installation
Note: git must be setup and atleast one commit must have been done, otherwise it will throw error
```shell
npm install husky --save-dev
```
```shell
# to add "prepare": "husky install" to the scripts in package.json
npm pkg set scripts.prepare="husky install"
```
```shell
npm run prepare
```
### Hook
````shell
npx husky add .husky/pre-commit "npx lint-staged"
git add .husky/pre-commit
```