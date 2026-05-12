# Skills

Agents need instructions to follow. The better the instructions, the more likely the agent will be able to do something useful for/with their user.

This folder is a collection of [agent skills](https://agentskills.io) to steer your agents to build optimal ServiceNow Fluent integrations. Skills in this directory are the canonical source — provider-specific copies live under `providers/*/plugin/skills/`.

## Project-specific skills

- `servicenow-table-design`: Use before creating ServiceNow Fluent `Table(...)` definitions. It requires agents to ask whether each new table should extend `task` before creation because table extension cannot be changed later.
