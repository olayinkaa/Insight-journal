## MONGO DB
- Collection is a list of documents

## Authentication database
In MongoDB, the authenticationDatabase parameter is used to specify the database against which the user's credentials are authenticated. When you create a MongoDB user, you associate that user with a specific database. The authenticationDatabase is the database where MongoDB looks for the user's credentials when authenticating the user.

If the authenticationDatabase is not explicitly specified, MongoDB assumes the admin database as the default authentication database. Therefore, if your user is created in a different database, you need to specify the correct authentication database during the connection.