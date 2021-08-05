import { login } from "../../pageObjects/LoginPage/LoginPage"
import { label } from "../../pageObjects/contributors/labels"

const lp = new login()
const lb = new label()
const labeldata = require("../../../fixtures/Userdata/labeldata.json")
const create = "#pane-list > div > div > div.content > div > div > div > div > div > div.description > div.actions > a.btn.btn-primary"

Given(/^I login into system and goto labels page$/, function () {
    lp.login()
    lb.labelpage()
});

When(/^I filled all the labels data$/, function () {
    cy.get(".description").then(($btn) => {
        if ($btn.text().includes('Create a Record Label')) {
            cy.log("New Label")
            cy.get(create).click()
            lb.createlabel()
        }
        else {
            cy.log("All ready Label is present")

        }

    })
});


Then(/^Labels should get added to system$/, function () {
    cy.reload()
    cy.contains(labeldata.name).should("be.visible")
    cy.screenshot()
    lp.logout()
});
