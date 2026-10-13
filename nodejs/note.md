## Installation
```sh
pnpm init -y
npm install -D typescript tsx @types/node
```
## Script
```json
"scripts": {
    "dev": "tsx watch src/index.ts"
}
```

## Modules
```ts
path module
file module
crypto module
os module
process object
Node.js URL module
EventEmitter: listeners, on, emit, and once

import path from "node:path"
import fs from "node:fs"
const projectRoot = process.cwd()
const userId = 42;
const originalName = "profile.png"

const uploadFilePath = path.join(projectRoot, "uploads", "users", userId, originalName)
const fileName = path.basename(uploadFilePath) // => 
const fileExtension = path.extname(uploadFilePath) // => 
const parentFolder = path.dirname(uploadFilePath) // => 

```
```ts
new URLSearchParams({
    search: "",
    page: "1",
    limit: "5"
})
```

## express.d.ts
```ts
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                email: string;
            }
        }
    }
}

export {}
```

## tsconfig
```sh
npm install --save-dev @tsconfig/node22
```
```json
{
    "extends": "@tsconfig/node22/tsconfig.json",
    "compilerOptions": {
        "rootDir": "src",
        "outDir": "dist"
    }
}
```