@smoke
Feature: Dashboard manipulations

@jira(AT-25) 
Scenario: Creation of the dashboard
    Given The page is loaded as "admin" user

    When the "Dashboards" page is switched to
    Then "Dashboards" page should be opened
    And the "Add new dashboard top right button" element should be visible
    
    When "Add new dashboard top right button" element is clicked
    Then the 'Add new dashboard popup' element should be visible
    And 'Add new dashboard title' should contain "ADD NEW DASHBOARD" text
    And 'Dashboard name field' should contain 'Enter dashboard name' placeholder
    And 'Dashboard description field' should contain 'Enter dashboard description' placeholder
    And the "Active off button" element should be visible

    When the 'Dashboard name field' element is filled with 'test dashboard' text
    And the 'Dashboard description field' element is filled with 'test dashboard' text
    And 'Add button' element is clicked
    Then the "Dashboard breadcrumb" element should be visible
    And Elements of "Dashboard buttons" are equal to:
    | Add New Dashboard  |
    | Add new widget     |
    | Add shared widget  |
    | Edit               |
    | Full screen        |
    | Delete             |
    | Print              |
    | Add new widget     |

@jira(AT-27) 
Scenario Outline: Widgets creation (<Name>)
    Given The page is loaded as "admin" user

    When the "Dashboards" page is switched to
    Then "Dashboards" page should be opened

    When 'Dashboards link' element is clicked
    And 'First dashboard' element is clicked
    Then the "Dashboard breadcrumb" element should be visible
    And 'Dashboard breadcrumb' should contain "TEST DASHBOARD" text
    
    When "Add new widget button" element is clicked
    And '<Radiobutton>' element is clicked
    And 'Next step button first' element is clicked
    And 'Demo filter button' element is clicked
    And 'Next step button second' element is clicked
    And the 'Widget name field' element is filled with '<Name>' text
    And the 'Widget description field' element is filled with '<Description>' text
    And 'Add button' element is clicked
    Then '<Widget>' should contain '<Name>' text

Examples:
|Radiobutton                                 | Name          | Description       | Widget                                  |
|Launch statics chart widget radiobutton     |Demo widget 1  |some information 1 | Launch statics chart widget title       |
|Launches duration chart widget radiobutton  |Demo widget 2  |some information 2 | Launches duration chart widget title    |

@jira(AT-28) 
Scenario: Dashboard delition
    Given The page is loaded as "admin" user

    When the "Dashboards" page is switched to
    Then "Dashboards" page should be opened
    
    When 'Dashboards link' element is clicked
    And 'Delete icon' element is clicked
    And 'Delete button' element is clicked
    Then Elements of "Dashboard table header" are equal to:
    | DASHBOARD NAME |
    | DESCRIPTION    |
    | OWNER          |
    | SHARED         |
    | EDIT           |
    | DELETE         |
    And 'First part of message' should contain 'You have no dashboards' text
    And 'Second part of message' should contain 'Add your first dashboard to analyse statistics' text