## Vscode Mongodb example
```js
const database = "db"
const collectionName = "collection"
use(database)
const collection = db.getCollection(collectionName)

const user = [
    {name: "Ibrahim", age: 45},
    {name: "Olayinka", age: 25}
]

collection.insertMany(users)
collection.find()
```