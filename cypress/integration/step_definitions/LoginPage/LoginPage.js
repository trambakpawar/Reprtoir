import { login } from "../../pageObjects/LoginPage/LoginPage"

const lp = new login()
Given(/^I visit to url$/, function () {
    lp.visit()
});

When(/^I fill username and password$/, function () {
    lp.loginpage()
});

Then(/^User login successfully$/, function () {
    cy.contains('Home').should('be.visible')
    cy.screenshot()
});
