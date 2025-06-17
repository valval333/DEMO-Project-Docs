# Sprint Generation Guidelines

When planning a sprint, your main job is to **logically group issues** (and their related user stories) so they can be completed together by students, agents, or both. Use these concise steps to do this effectively.

---

## Grouping Issues Into a Sprint

- **Align with Sprint Goal:** Choose issues that, together, accomplish a meaningful user or project milestone.
- **Group Logically:** Combine small, closely related, or dependent user stories/issues into a single sprint if this supports parallel or agentic work. Avoid mixing unrelated features.
- **Consider Dependencies:**  
    - Only include issues that can realistically be completed this sprint.
    - For issues that depend on others, plan for stubbing/mocking or sequence them accordingly.
- **Balance Workload:** Make sure the sprint scope is achievable within the time period.
- **Be Explicit:**  
    - Document why and how issues were grouped in "Sprint Planning Notes."
    - If missing info (dates, assignments, dependencies), ask for it—do not guess.

---

## How to Plan a Sprint

1. **Review open issues.**
2. **Identify logical groupings for this sprint’s goal.**
3. **Assign issues and clarify dependencies.**
4. **Document your reasoning and assumptions.**
5. **If unsure about groupings or scope, pause and request clarification.**

---

> **Goal:** Each sprint should deliver a coherent, valuable unit of progress—issues that make sense to tackle together, considering dependencies and workload.

---

## Sprint Template

```markdown
# Sprint [Number] — [Start Date] to [End Date]

## Sprint Goal
(State the overall objective or theme for this sprint.)

---

## Issues in this Sprint

| Issue # | Title                       | User Stories Covered     | Assignee(s) | Status    | Dependencies        |
|---------|-----------------------------|-------------------------|-------------|-----------|---------------------|
| #15     | Orders: History & Details   | #3, #4                  | Alice       | In Progress | #10, #12           |
| #18     | Profile Editing             | #5, #6                  | Bob         | To Do      | #12                |
| ...     | ...                         | ...                     | ...         | ...        | ...                |

---

## Key Documents

- requirements.md (project vision)
- user-stories.md (user needs)
- issue-generation-guidelines.md

---

## Sprint Planning Notes

- (How/why issues were grouped, priorities, dependencies, blockers, etc.)

---

## Retrospective (after sprint ends)

- What went well:
    - ...
- What could be improved:
    - ...
- Actions for next sprint:
    - ...

---

> **Note:** Issues in the sprint are mapped to user stories, not the raw stories themselves. Some issues may cover multiple related user stories if grouped logically.
