---
name: servicenow-table-design
description: Use when creating ServiceNow Fluent Table definitions in this project. Always confirm whether a new table should extend Task before creating it because table extension cannot be changed later.
argument-hint: "[table requirement or entity name]"
---

# ServiceNow Table Design Rules for sn-family-expenses

Use this project-specific skill before creating any new ServiceNow Fluent `Table(...)` definition.

## Mandatory confirmation before creating tables

Before creating any new ServiceNow Fluent `Table(...)` definition, always ask the user whether the table should extend the ServiceNow `task` table.

This confirmation is mandatory because a table's extension relationship cannot be changed after the table is created.
