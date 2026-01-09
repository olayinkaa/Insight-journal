# BIND MOUNTS
Allow container to read and modify files on your machine

share data with application on the host machine

Access the host docker engine socket from within a container

volumes manage the lifecycle of persistand application data

-v /host_path:/container_path:ro

--mount=type=bind, source=/host_path, target=/container_path,readonly

# COMPOSE WATCH
- compose watch keeps your development containers up-to-date as you code
- designed with hot reload in mind
- sync from your machine to container