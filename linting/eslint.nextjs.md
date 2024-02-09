## npm install plugins, config
```shell
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
npm install --save-dev lint-staged husky
```
## airbnb
```shell
npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^6.0.0 \
            @typescript-eslint/parser@^6.0.0 \
            --save-dev


npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^5.13.0 \
            @typescript-eslint/parser@^5.0.0 \
            --save-dev           
```
## eslint config
```json
{
    "extends": [
        "next/core-web-vitals",
        "airbnb",
        "airbnb-typescript"
    ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "rules": {
        "react/jsx-props-no-spreading": "off"
    }
}
```
```json
{
    "extends": [
        "eslint:recommended",
        "next",
        "next/core-web-vitals",
        "prettier"
    ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "rules": {
        "react/jsx-props-no-spreading": "off"
    }
}
```

## prettierignore
.next/
package-lock.json

## .prettierrc
```js
{
    "trailingComma":"es5",
    "tabWidth":4,
    "printWidth":80,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "bracketSpacing": true
}
```

## package.json
```json
{
     "scripts": {
        "lint": "eslint . --ext js,jsx,ts,tsx --report-unused-disable-directives --max-warnings 0",
        "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "lint:fix": "eslint src --ext js,jsx,ts,tsx --fix",
        "lint:fix": "eslint --fix",
        "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,html}'",
    },
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged",
            "pre-push": "npm run lint && npm run format"
        }
    },
    "lint-staged": {
        "src/**/*.{ts,tsx,js,jsx}":[
            "npm run lint",
            "npm run format"
        ]
    }
}
```


