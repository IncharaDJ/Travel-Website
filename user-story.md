# User Story

**As a** customer,
**I want** to search for gifts by category,
**so that** I can easily find gifts that match my needs.

## Details and Assumptions

* The customer can enter a search term or select a gift category.
* The system should display gifts that match the selected category.
* The search results should provide relevant gift information.
* The customer can view the available gift recommendations.

## Acceptance Criteria

### Scenario: Search for gifts by category

**Given** the customer is on the gift search page
**When** the customer searches for a gift category
**Then** the system displays gifts that match the selected category.

### Scenario: No matching gifts are found

**Given** the customer is on the gift search page
**When** the customer searches for a category with no matching gifts
**Then** the system displays a message indicating that no gifts were found.
