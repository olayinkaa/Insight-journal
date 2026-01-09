- npm show react@18 version
- npm show react-dom@18 version
-  npx npm-check-updates 
-  npm install -g npm@latest
-  npm install -g npm-check-updates
-  Run "npx npm-check-updates -u" to upgrade package.json

```shell
# Update dependencies within version ranges:
npm update
```

- To revert changes in package.json and package-lock.json
```shell
git checkout -- package.json package-lock.json
```

- Update Patches

```sh
npx npm-check-updates -u --target patch
npx ncu -u -t patch
```

- Update Minor Versions
```sh
npx ncu -u -t minor
```

with NCU, you can filter for a specific package by using "--filter or -f" flage
```sh
npx ncu -u -f node-fetch
```