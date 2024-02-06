## Pre-request script
```js
var repositoryName = pm.variables.replaceIn('$randomInt')
pm.environment.set("repository", repositoryName)
```