# Start Prisma
```sh
npm i -D prisma @prisma/client   
npx prisma init
npx prisma generate
npx prisma studio
npx tsx .db/seed
npx prisma migrate dev --name add_user_table

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