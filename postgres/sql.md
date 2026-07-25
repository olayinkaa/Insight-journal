## Command
```sh
psql -U postgres -d postgres -f folder/fileName.sql

SELECT current_database();
SELECT current_user;
SELECT version()
\l --> see all db
\dt --> see all table
\q --> quit
```

## Create table, database
```sql
CREATE DATABASE newDb;
CREATE SCHEMA IF NOT EXISTS basics;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```

```sql
DROP TABLE IF EXISTS basics.students;

CREATE TABLE basics.students (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    about VARCHAR(100) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    nickname TEXT,
    age INTEGER CHECK (age >= 18),
    stock INTEGER DEFAULT 0,
    total_views BIGINT DEFAULT 0,
    price NUMERIC(10,2),
    bid_price NUMERIC(10,2) NOT NULL CHECK (bid_price >=0),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE basics.app_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_name TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP DEFAULT NOW()
)


```

## Insert
```sql
INSERT INTO basics.students (name, email, age, nickname) 
VALUES ("sangam", "sangam@gmail.com", 55, null)
RETURNING id, name, age
---------------------------------->

INSERT INTO basics.app_events (event_name, metadata)
VALUES 
('sign_up', '{"browser":"chrome" }'),
('sign_in', '{"user":"sangam" }'),
```

## Select
```sql
SELECT * FROM basics.product;

SELECT event_name, metadata --> 'browser' As browser
FROM basics.app_events
WHERE metadata ? 'browser';

SELECT * FROM basics.product WHERE nickname IS NULL;
SELECT 
name AS product_name
price AS cost_price
FROM products
WHERE category = 'electronics'
OR category = 'furniture'
AND price > 100
----------------------->
WHERE NOT category = 'furniture'
WHERE (category = 'electronics' OR category = 'furniture')

WHERE category IN ("electronic","furniture")

WHERE category NOT IN ("electronic","furniture")
AND price > 100
------------------------>
WHERE name LIKE 'wireless%'
WHERE name ILIKE '%desk%'
WHERE price BETWEEN 100 AND 2000
WHERE description IS NOT NULL

-------------------------->
FROM products
ORDER BY price DESC, category ASC
LIMIT 5 OFFSET 0
```

## Update
```sql
UPDATE products
SET price = 1199.50, stock = 23
WHERE sku = 'ELECT-KEY-001'
------------------>
UPDATE products
SET price = ROUND(price * 1.10, 2), stock = 23
WHERE sku = 'ELECT-KEY-001'
```

## Delete
```sql
DELETE FROM products
WHERE sku = 'ELECT-TEMP-123'
```

## Relationship
```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL
)

CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    title TEXT NOT NULL
    status TEXT NOT NULL DEFAULT 'draft'
            CHECK (status IN ('draft', 'publish')),
    views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0)
)

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID NOT NULL REFERENCES posts(id),
    body TEXT NOT NULL
)

CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
)

CREATE TABLE post_tags (
    post_id UUID PRIMARY KEY DEFAULT posts(id),
    tag_id UUID PRIMARY KEY DEFAULT tags(id),
    PRIMARY KEY (post_id, tag_id)
)

```

