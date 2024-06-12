## ZSH TERMINAL
- code $HOME/.zshrc

# SKILLS
- [ ] React Native
- [ ] Typescript
- [ ] Next JS
- [ ] Dart
- [ ] Flutter
- [ ] Docker
- [ ] Jenkins
- [ ] AWS
- [ ] Algorithm
- [ ] Vue JS


##
The error message you're encountering (`EADDRINUSE: address already in use :::8000`) indicates that the port 8000 is already in use by another process. This typically happens when you try to start your Express.js server, but there's already another application or instance of your server running on the same port.

To resolve this issue, you can follow these steps:

1. **Identify the Conflicting Process**: Determine which process is already using port 8000. You can use the following command to find the process ID (PID) of the process using the port:

   ```bash
   lsof -i :8000
   ```

   This command will list the details of the process using port 8000, including its PID.

2. **Stop the Conflicting Process**: Once you've identified the conflicting process, you can stop it using the following command:

   ```bash
   kill <PID>
   ```

   Replace `<PID>` with the process ID obtained from the previous step.

3. **Retry Starting Your Express Server**: After stopping the conflicting process, retry starting your Express.js server. Run the command again, and it should start successfully without encountering the `EADDRINUSE` error.

If you're unable to identify or stop the conflicting process, you can consider changing the port number used by your Express.js server to a different available port. You can do this by modifying the port number in your Express.js application code or by passing a different port number via environment variables.