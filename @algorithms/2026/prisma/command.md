# Start Prisma
```sh
npm i -D prisma @prisma/client   
npx prisma init
npx prisma generate
npx prisma studio
npx tsx .db/seed
```

```json
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  }
```

# dependencies for NEON
```sh
npm install @neondatabase/serverless @auth/prisma-adapter ws
npm i -D @types/ws bufferutil
```