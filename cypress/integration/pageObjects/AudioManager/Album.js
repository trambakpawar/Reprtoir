/// <reference types="Cypress" />

const trackpage = ":nth-child(4) > .group-menu > :nth-child(1) > .no-icon"
const createbutton = ".actions"
const manualentry = ".dropdown > .dropdown-menu > :nth-child(2)"
const title = ".attribute-title"
const subtitle = ".attribute-subtitle"
const catalog = "#select-with-directory-catalog_uuid"
const upc = ".attribute-upc"
const grid = ".attribute-grid"
const albumreference = ".attribute-album_reference"
const mainartist = ".attribute-main_artists"
const featuredartist = ".attribute-featured_artists"
const recordlabel = ".attribute-producers"
const maingenre = ".attribute-main_subgenre_uuid"
const subgenre = ".attribute-alternate_subgenre_uuid"
const releasedate = "#text-input-0d24e52e-3e8e-4d6b-8717-709fc098e4e9"
const format = ".attribute-format"
const notes = ".attribute-notes"

const albumdata = require("../../../fixtures/Userdata/albumdata.json")
export class album {

    albumpage() {
        cy.get(trackpage).click()
    }

    createalbum() {
        cy.contains("Create an Album").click({force:true})
        cy.get(manualentry).click()
        cy.get(title).type(albumdata.title)
        cy.get(subtitle).type(albumdata.subtitle)
        cy.get(catalog).type(albumdata.catalog)
        cy.get(upc).type(albumdata.upc)
        cy.get(grid).type(albumdata.grid)
        cy.get(albumreference).type(albumdata.albumreference)
        cy.get(mainartist).type(albumdata.mainartist)
        cy.get('.css-1r28p42').click()
        cy.get(featuredartist).type(albumdata.featuredartist)
        cy.get(recordlabel).type(albumdata.recordlabel)
        cy.get(maingenre).type(albumdata.maingenre)
        cy.get(subgenre).type(albumdata.subgenre)
        cy.get(releasedate).type(albumdata.releasedate)
        cy.get(format).type(albumdata.format)
        cy.get(notes).type(albumdata.notes)
    }
}
