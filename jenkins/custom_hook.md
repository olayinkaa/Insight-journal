# Creating custom hook
```sh
cd /var/opt/gitlab/git-data/repositories/jenkins/dsl-jobs.git/
mkdir custom_hooks
touch post-receive

#!/bin/bash

# Get branch name from ref head
if ! [ -t 0 ]; then
    read -a ref
fi
IFS='/' read -ra REF <<< "${ref[2]}"
branch="${REF[2]}"

if ["branch" == "main" ]; then
crumb=${curl -u "jenkins:1234" -s 'http://jenkins:8080/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)'}
curl -u "jenkins:1234" -H "$crumb" -X POST http://jenkins:8080/job/job-dsl/build?delay=0sec

    if [ $? -eq 0]; then
        echo "*** OK"
    else
        echo "*** ERROR"
    fi
fi
```