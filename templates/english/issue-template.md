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
