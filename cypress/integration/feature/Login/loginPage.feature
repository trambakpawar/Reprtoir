Feature: Check the Login page

Scenario: Login to system
     Given I visit to url
     When I fill username and password
     Then User login successfully
