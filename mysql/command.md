## SQL COMMANDS
```sql
create database testdb
-- use database_name
use testdb
create table info(name varchar(20), lastname varchar(20), age int(2));
show tables;
desc info
insert into info values('ricardo','gomez',21)
```
```sql
mysqldump -u root -h mysql_host -p testdb > /tmp/db.sql
```
# run script biodata.sql
```sql
source /path/to/biodata.sql
```