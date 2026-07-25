
# Inventory
- is a collection of hosts(nodes) against which ansible can work with
  * Hosts
  * Groups source

# Playbook
- variables: ansible can work with metadata from various sources and manage their context in the form of variables
- variable precedence
  * Extra vars
  * Task vars(only for task)
  * Block vars(only for tasks in the block)
  * Role and include vars
  * Play vars_files
  * Play vars_prompt
  * Play vars
  * Set_facts
  * Registered vars
  * Host facts
  * Playbook host-vars
  * Playbook group_vars
  * inventory host_vars
  * inventory group-vars
  * inventory vars
  * Role defaults
- file: a director should exist
- yum: a package should be installed
- service: a service should be running
- template: render a config file from a template
- get_url: fetch an archive file from a URL
- git: clone a source code repository

- Hanlder tasks 
  Are special tasks that run at the end of a play if notified by another task
  if a configuration file gets changed notify a service restart task it needs to run

- Plays are ordered sets of tasks to execute against host selections from your inventory
- Playbook is a file containing one or more plays.

# ROLES
Roles are a packages of closely related ansible content that can be shared more easily than plays alone