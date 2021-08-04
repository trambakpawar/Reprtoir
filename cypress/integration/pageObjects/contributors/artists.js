/// <reference types="Cypress" />


const artiststab = ":nth-child(2) > .group-menu > :nth-child(1) > .no-icon"
const newartist = "div > div > div.content > div > div > div > div > div > div.description > div.actions > a.btn.btn-primary"
const name = "#new-resource-modal > div > div > div.modal-body.scroll-zone > div.reprtoir-form-control.type-text.attribute-name > div > div"
const legalname = ".attribute-legal_name"
const ipi = ".attribute-ipi"
const isni = ".attribute-isni"
const notes = ".type-text_area"
const country = "#country_uuid > div > div.css-1hwfws3"
const savebutton = "#new-resource-modal > div > div > div.modal-footer > button.btn.btn-primary"
const optionbutton = "div > div > div.content > div.pane__header-bottom > div.pane__header-bottom-right > div > button.btn.btn-light.dropdown-toggle.dropdown-toggle-split"
const deletebutton = "div > div > div.content > div.pane__header-bottom > div.pane__header-bottom-right > div > div > div:nth-child(3)"
const editbutton = "div > div > div.content > div.pane__header-bottom > div.pane__header-bottom-right > div > button:nth-child(1)"
const artdata = require("../../../fixtures/Userdata/artistdata.json")
const savebutton1= ".buttons > .btn-primary"
export class artists {
    artistspage() {
        cy.get(artiststab).click()

    }

    createartist() {

        cy.get(newartist).click()
        cy.get(name).type(artdata.name)
        cy.get(legalname).type(artdata.legalname)
        cy.get(ipi).type(artdata.ipi)
        cy.get(isni).type(artdata.isni)
        cy.get(country).type(artdata.country)
        cy.get('.css-dt48ek').click()
        cy.get(notes).type(artdata.notes)
        cy.get(savebutton).click()
    }

    deleteartist() {
        cy.contains('.table-row > .table-cell--name', artdata.name).find('a').click()
        cy.get(optionbutton).click({ force: true })
        cy.get(deletebutton).click()
    }

    editartist() {
        cy.contains('.table-row > .table-cell--name', artdata.name).find('a').click()
        cy.get(editbutton).click()
        cy.get(country).type(artdata.country1)

        cy.get('.css-11unzgr').click()
        cy.wait(2000)
        cy.get(".fc-2Iu57").click()
        cy.get(savebutton1).click()
    }
}