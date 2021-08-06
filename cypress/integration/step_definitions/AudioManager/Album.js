import { login } from "../../pageObjects/LoginPage/LoginPage"
import { album } from "../../pageObjects/AudioManager/Album"

const lp = new login()
const ab = new album()
const albumdata = require("../../../fixtures/Userdata/albumdata.json")


Given(/^I login into system and goto album page$/, function () {
    lp.login()
    ab.albumpage()
});

When(/^I filled all the album data$/, function () {
    ab.createalbum()
});


Then(/^Album should get added to system$/, function () {
    cy.reload()
    cy.contains(albumdata.title).should("be.visible")
    cy.screenshot()
    lp.logout()
});
