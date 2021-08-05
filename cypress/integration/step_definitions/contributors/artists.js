import { login } from "../../pageObjects/LoginPage/LoginPage"
import { artists } from "../../pageObjects/contributors/artists"

const lp = new login()
const art = new artists()
const artdata = require("../../../fixtures/Userdata/artistdata.json")
const create = "#pane-list > div > div > div.content > div > div > div > div > div > div.description > div.actions > a.btn.btn-primary"

Given(/^I login into system and goto artists page$/, function () {
    lp.login()
    art.artistspage()
});

When(/^I filled all the artists data$/, function () {
    cy.get("#pane-list > div > div > div.content > div > div.pane-tab-content-center").then(($btn) => {
        if ($btn.text().includes('Create an Artist')) {
            cy.log("New user")
            cy.get(create).click()
            art.createartist()
        }
        else {
            cy.log("All ready user")

        }

    })
});


Then(/^Artists should get added to system$/, function () {
    cy.reload()
    cy.contains(artdata.name).should("be.visible")
    cy.screenshot()
    lp.logout()
});


When(/^I select the artists and delete it$/, function () {
    art.deleteartist()
});

Then(/^Artists should not displayed on webpage$/, function () {
    cy.reload()
    cy.contains(artdata.legalname).should("not.exist")
    cy.screenshot()
    lp.logout()
});


When(/^I select the artist and edit the country data$/, function () {
    art.editartist()
});

Then(/^Artists should get displayed$/, function () {
    cy.reload()
    cy.contains(artdata.country1).should("be.visible")
    cy.screenshot()
    lp.logout()
});

