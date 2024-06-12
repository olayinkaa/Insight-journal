# Restore volume to a different app
```sh
docker run -it --privileged --pid=host debian nsenter -t 1 -m -u -i sh
```

The command you provided is using `nsenter` to enter the namespaces of the host system, which allows you to interact with the host system from within a Docker container. Here's a breakdown of the command:

- `docker run`: Starts a new Docker container.
- `-it`: Allocates a pseudo-TTY and attaches stdin for interaction with the container.
- `--privileged`: Runs the container in privileged mode, which gives it access to all devices on the host.
- `--pid=host`: Shares the PID namespace of the host with the container, allowing it to see and interact with processes on the host.
- `debian`: Specifies the Docker image to use for the container (in this case, the Debian image).
- `nsenter -t 1 -m -u -i sh`: Runs the `nsenter` command inside the container. `nsenter` is a tool for entering namespaces, and in this command:
  - `-t 1`: Specifies the target PID (process ID) whose namespace we want to enter. PID 1 is typically the init process on Linux systems, and entering its namespace provides access to the host namespaces.
  - `-m -u -i`: Specifies the namespaces to enter (mount, UTS, and IPC namespaces).
  - `sh`: Launches the shell (`sh`) inside the namespace.

In summary, this command allows you to enter the host system's namespaces from within a Docker container, giving you access to host processes and resources. It should be used with caution, especially in production environments, as it provides elevated privileges to the container.


```sh
# jenkins-data_jenkins_data is the named volume
cd /var/lib/docker/volumes/jenkins-data_jenkins_data/_data
cp -r . /tmp/backup

docker run --rm -v /host-backup:/host-backup debian cp -r /tmp/backup/* /tmp/host-backup

```