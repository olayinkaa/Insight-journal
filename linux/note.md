## Permissions (numeric mode)
In numeric mode, permissions are represented using octal (base-8) numbers. Each digit in the numeric mode represents the permissions for a specific category: user (owner), group, and others (everyone else). The permissions themselves are represented by combinations of three bits, where:

- 4 represents read permission (r)
- 2 represents write permission (w)
- 1 represents execute permission (x)

To determine the numeric value for each permission combination, you add the values of the corresponding bits:

- Read (r): 4
- Write (w): 2
- Execute (x): 1

Here's a breakdown of how the numeric mode works:

1. **User (Owner):** The first digit represents the permissions for the owner of the file.

2. **Group:** The second digit represents the permissions for the group that the file belongs to.

3. **Others:** The third digit represents the permissions for everyone else (others).

For example:

- `chmod 755 file.txt`: Sets read, write, and execute permission for the user, and read and execute permission for the group and others.
  - User: read (4) + write (2) + execute (1) = 7
  - Group: read (4) + execute (1) = 5
  - Others: read (4) + execute (1) = 5

- `chmod 644 file.txt`: Sets read and write permission for the user, and read-only permission for the group and others.
  - User: read (4) + write (2) = 6
  - Group: read (4) = 4
  - Others: read (4) = 4

The numeric mode provides a concise way to represent permissions, making it easy to specify permissions using a single number. It's particularly useful for scripting and automation tasks, where symbolic representations may be less convenient. However, it's essential to understand how the numeric values correspond to the individual permissions to use numeric mode effectively.

### Permissions (symbolic mode)
In symbolic mode, permissions are represented using symbols and letters to specify the permissions to add (`+`), remove (`-`), or set (`=`) for the user (owner), group, and others (everyone else). Symbolic mode provides a more intuitive and flexible way to modify permissions compared to numeric mode. Here's an overview of how symbolic mode works:

## Symbolic Representation:

1. **Permissions:** Each permission (read, write, execute) is represented by a letter:
   - `r`: Read permission
   - `w`: Write permission
   - `x`: Execute permission

2. **Categories:** The permissions can be applied to three categories:
   - `u`: User (owner)
   - `g`: Group
   - `o`: Others (everyone else)

3. **Operators:**
   - `+`: Adds the specified permissions.
   - `-`: Removes the specified permissions.
   - `=`: Sets the specified permissions, replacing existing permissions.

### Examples:

- `chmod u+x file.txt`: Adds execute permission (`x`) for the user (owner) on the file `file.txt`.
- `chmod go-w file.txt`: Removes write permission (`w`) for the group (`g`) and others (`o`) on the file `file.txt`.
- `chmod o=r file.txt`: Sets read-only permission (`r`) for others (`o`) on the file `file.txt`.

### Advanced Usage:

- **Combining Permissions:** You can specify multiple permissions and categories in a single command. For example:
  - `chmod u+rw,go-w file.txt`: Adds read and write permissions for the user (owner) and removes write permissions for the group and others on the file `file.txt`.
- **Setting Permissions Recursively:** You can apply permissions recursively to directories and their contents using the `-R` option:
  - `chmod -R u+rw directory`: Adds read and write permissions for the user (owner) to the directory and all its files and subdirectories.

### Default Permissions:

- If no category is specified, `chmod` applies the permissions to all categories (user, group, and others).
- If no permissions are specified after the operator, the permissions are removed or set to none.

### Permissions Summary:

- Symbolic mode offers a more intuitive way to modify permissions compared to numeric mode, as it allows you to specify permissions using familiar symbols and letters.
- It provides flexibility in adding, removing, and setting permissions for different categories of users.
- Symbolic mode is particularly useful for interactive use and scripting, as it allows for more expressive and readable permission modifications.

Symbolic mode is commonly used when you need to modify permissions manually or as part of a script, offering greater readability and flexibility compared to numeric mode.


## PM2
https://pm2.keymetrics.io/