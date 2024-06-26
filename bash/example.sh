#!/bin/bash
counter = 0
while[ $counter -lt 50]; do
    let counter = counter + 1

    name=$(nl people.txt | grep -w $counter | awk '{print $2}' | awk -F ',' '{print $1}')
    lastname=$(nl people.txt | grep -w $counter | awk '{print $2}' | awk -F ',' '{print $1}')
    age=$(shuf -i 20-25 -n 1)

    mysql -u root -ppassword people -e "insert into register values ($counter, '$name', '$lastname', $age)"
done
