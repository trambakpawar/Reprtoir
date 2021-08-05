Feature: Check the Artists Page in Contributor


Scenario: Add the artists
 Given I login into system and goto artists page
  When I filled all the artists data
  Then Artists should get added to system

Scenario: Edit the artists
 Given I login into system and goto artists page
  When I select the artist and edit the country data
  Then Artists should get displayed


Scenario: Delete the artist
 Given I login into system and goto artists page
  When I select the artists and delete it
  Then Artists should not displayed on webpage

