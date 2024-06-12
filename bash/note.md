### Commands
```shell
NAME="Ibrahim Olayinka"
echo "Hello, $NAME" > /tmp/hello
```

```sh
DATE=$(date +%H-%M-%S)
DB_HOST=$1
DB_PASSWORD=$2
DB_NAME=$3

mysqldump -u root -h $DB_HOST -p$DB_PASSWORD DB_NAME > /tmp/db-$DATE.sql

# usage
# /tmp/script.sh db_host 1234 testdb
```