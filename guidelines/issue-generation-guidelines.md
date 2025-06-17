# Issue Generation Guidelines

These guidelines are intended for anyone (student, developer, or agent) creating issues for this project. The goal is to ensure that every issue is clear, actionable, and well-supported by our project documentation, enabling both asynchronous teamwork and effective agentic (AI-assisted) workflows.

---

## 1. Reference Core Project Documents

When generating issues, always use and reference:
- `requirements.md`
- `user-stories.md`
- `ui-wireframes.md`
- `database-schema.md`
- `api.md`

---

## 2. Scope and Structure Each Issue

- **Actionable:** Each issue should describe a complete, self-contained chunk of work—ideally covering one or more closely related user stories.
- **Balanced:** Avoid issues that are too small (single UI field) or too large (entire application).
- **Grouped when Logical:** If several user stories naturally fit together (e.g., all “Order history” flows), combine them for efficient agentic work.

---

## 3. Include All Relevant Context

- **User Stories:** List the story text from `user-stories.md` that this issue addresses.
- **Requirements:** Reference the section(s) of `requirements.md` most relevant to the work.
- **Wireframes:** Link or describe the corresponding parts of `ui-wireframes.md`.
- **Schema:** Specify the entities or fields from `database-schema.md` involved.
- **API Contracts:** Reference endpoints or data shapes in `api.md`, if applicable.

---

## 4. Address Dependencies and Async Work

- **List Dependencies:** Clearly state any other issues or features that must be completed first (e.g., “Depends on #12: User authentication”).
- **Suggest Stubs/Mocks:** Where dependencies are not ready, provide or reference mock data, fake API responses, or contract definitions that can be used to proceed asynchronously.
- **Encourage Contract-First:** Define and reference data shapes and interfaces up front to enable parallel work.

---

## 5. Define Acceptance Criteria

- Use clear checklists to describe what “done” looks like for the issue.
- Criteria should map directly to user needs, UI/UX, and data requirements.

---

## 6. Branching and PR Instructions

- Suggest a branch naming convention (e.g., `feature/issue-title`)

---

## 7. Clarity and Readability

- Be concise but specific.
- Always link to or quote sections from supporting docs, not just mention them.

---

## 8. Example Structure

```markdown
# Issue Template

## Title
_What is the short, descriptive title for this issue or feature?_

### Description
_Describe the feature or issue in detail._

**Narrative Example:**
Jane is a frequent customer who often forgets what she ordered last time. When she logs in, she should see a list of her previous orders, each with details and a "Reorder" button. This will help her quickly repeat past purchases, improving her experience and increasing sales.
<small>(Example only. Replace with your actual description and narrative.)</small>

---

## User Stories Covered
_Which user stories does this issue address? List by number and copy their text from user-stories-template.md._

- US-001: As a customer, I want to see my past orders so I can remember what I bought.  
- US-005: As a customer, I want to view the details of a specific order.  
  <small>(Examples only. Replace with your actual user stories.)</small>

_See `user-stories-template.md`._

---

## Requirements & Supporting Documents
_Which documents or sections support this issue?_
- project-requirements.md, section [relevant section or heading]
- ui-wireframes.md, wireframes [1 & 2] for layouts and flow
- database-schema.md, entities: Order, User
- api.md, endpoints: `/orders`, `/orders/{id}`
  <small>(Examples only. Replace with your actual user stories.)</small>
---

## Acceptance Criteria
_What must be true for this issue to be considered complete?_
- [ ] All user stories listed above are fully implemented and testable.
- [ ] UI matches provided wireframes.
- [ ] Data is loaded from the backend, using schema and API contracts as specified.
- [ ] Handles loading, error, and empty states gracefully.
- [ ] (Add any additional, specific criteria relevant to this feature.)
  <small>(Examples only. Replace with your actual user stories.)</small>
---

## Dependencies
_What other issues or features must be completed first?_
- Depends on:
  - US-008: User authentication
  - US-010: Order API backend available  
    <small>(Example only. Replace as needed.)</small>

---

## Stubbing & Mocks
_If dependencies are not ready, what stubs or mock data can be used to proceed? use documentaition as a contract_
```
