Feature: Check the Album in audio manager


Scenario: Add the album to system
 Given I login into system and goto album page
  When I filled all the album data
  Then Album should get added to system

