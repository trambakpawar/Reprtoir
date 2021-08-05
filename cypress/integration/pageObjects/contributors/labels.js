/// <reference types="Cypress" />

const labeltab = ":nth-child(2) > .group-menu > :nth-child(2) > .no-icon"
const create = "#pane-list > div > div > div.content > div > div > div > div > div > div.description > div.actions > a.btn.btn-primary"
const name = ".attribute-name"
const isni = ".attribute-isni"
const notes = ".type-text_area"
const savebutton = "#new-resource-modal > div > div > div.modal-footer > button.btn.btn-primary"
const labeldata = require("../../../fixtures/Userdata/labeldata.json")
export class label {
    labelpage() {
        cy.get(labeltab).click()
    }

    createlabel() {
    
        cy.get(name).type(labeldata.name)
        cy.get(isni).type(labeldata.isni)
        cy.get(notes).type(labeldata.notes)
        cy.get(savebutton).click()
    }
}