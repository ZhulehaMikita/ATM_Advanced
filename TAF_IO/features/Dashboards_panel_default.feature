@smoke
Feature: Dashboards panel verification
@jira(AT-26) @sauce
Scenario: Verification of Dashboards pannel without added items (default state)
    Given The page is loaded as "default" user

    When the "Dashboards" page is switched to
    Then "Dashboards" page should be opened
    And 'All dashboards title' should contain 'ALL DASHBOARDS' text
    And 'Search input field' should be disabled
    And the 'Add new dashboard central button' element should be visible
    And the 'Add new dashboard top right button' element should be visible
    And the 'Default active button' element should be visible
    And Elements of "Dashboard table header" are equal to:
    | DASHBOARD NAME |
    | DESCRIPTION    |
    | OWNER          |
    | SHARED         |
    | EDIT           |
    | DELETE         |
    And 'First part of message' should contain 'You have no dashboards' text
    And 'Second part of message' should contain 'Add your first dashboard to analyse statistics' text