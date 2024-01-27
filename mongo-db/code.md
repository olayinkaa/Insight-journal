## using shell to login to mongodb container
```shell
# mongo -u your_username -p your_password --authenticationDatabase your_auth_database
mongo --username root --password password --authenticationDatabase admin

mongo -u root -p password 
```
## database
```shell
# list databases
show dbs
# create database
use databaseName
# show current database
db
# exit database
exit
```

## collection
```shell
# create collection
db.createCollection("users" )

# delete collection
db.collectionName.drop()
db.people.drop() # people is the collectionName

# Read document within a collection
db.people.find()
db.people.find({name:"ibrahim"})
db.people.find({name:"ibrahim", "address.country": "kenya"})
db.people.find({name: { $in:["Navi","Alice","Bob"]} })

db.people.find().limit(2)
db.people.find({age:10}).limit(3)
db.people.find({age:10},{name:true, age:true. _id:false})
db.people.find({},{name:true}).sort({name:1}) # sort in ascending order
db.people.find({},{name:true}).sort({name: -1}) # sort in descending order
db.people.find({},{name:true}).sort({name: -1}).skip(1)
db.people.find({
    $and: [
        {name: {$exists:true}}, # if the name property is true (not an empty string or null)
        {name: {$in:["Navi","Alice","Bob"]}} # and name property is either one of the element in the array
    ]
})

#  Insert document
db.people.insertOne({name:"Ibrahim"})
db.people.insertMany([
    {name:"Dayo"},
    {name:"Kemi"}
])
#  update document
db.people.updateOne({name:"Navi"},{$set: {name: "Bob"}})
# db.people.updateMany()

# delete document
db.people.deleteOne({name:"ibrahim"})
db.people.deleteMany({name:"ibrahim"})

```
