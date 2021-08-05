Feature: Check the Labels Page in Contributor


Scenario: Create the new labels
 Given I login into system and goto labels page
  When I filled all the labels data
  Then Labels should get added to system