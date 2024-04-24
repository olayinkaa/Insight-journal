## Devops
- is a way of building and deploying application following the best practices

## CI


## Environment variable
An easy way to obtain the Jenkins environment variables list from your local installation is to append env-vars. html to the server's URL. For a locally hosted Jenkins server, the URL would be: http://localhost:8080/env-vars.html.


## Jenkins
- It is an automation platform that allows you to build, test, deploy software using pipelines
- It can be use to automate any task
- provide a GUI where you can create jobs, task

## Jenkins infrastructure
- Master server which controls pipelines and schedules builds to agents/minions
- Agent/minions which perform the build in their workspace
- Example workflow:
  * developer commits code to git repo
  * jenkin master become aware of the commit and triggers appropriate pipeline
  * Then, distribute the build to one of the agent(agent selected based on configured labels) to run
  * Agent runs build

## Agent types
- Pernament Agents
  * Dedicated servers for running jobs
- Cloud agents
  * Ephemeral/dynamic agents spun up on demand
  * e.g docker, aws, kubernetes
  
## Build Types
1. Freestyle build : simplest method to create a build
- Feels like shell scription
  
2. Pipelines : 
   - use the groovy syntax
   - use stages to break down components of builds
