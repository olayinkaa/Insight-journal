# DSL
```js
job("ansible-users-db-dsl"){
    description("Update db backup")
    parameters {
        stringParam("", defaultValue="",description="")
    }

    scm {
        git('https://github.example.com/project_name', 'master')
    }

    trigger {
        cron('H 5 * * 7')
    }

    steps {
        wrappers {
            colorizeOutput(colorMap = "xterm")
        }

        shell("""
            echo "great"
            echo $name
        """)
    }

    ansiblePlaybook(""){
        inventoryPath('')
        tags('')
        forks(1)
        colorizedOutput(true)
        additionParameters('--vault-password-file')
        extraVars {
            extraVar("PEOPLE_AGE", '${AGE}', false)
        }
    }

    publishers {
        mailer('me@example.com',true, true)
    }
}
```