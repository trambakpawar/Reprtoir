/// <reference types="Cypress" />
const username = "#user_email"
const password = "#user_password"
const submit = "#login"
const logout = "#navbarDropdownMenuLink"
const signout = "div.site > header > div.header-actions.desktop.show > ul > li:nth-child(6) > a"
const logindata = require('../../../fixtures/logindata.json')
export class login {

    visit() {
        cy.visit(logindata.baseurl)
    }
    loginpage() {
        cy.get(username).type(logindata.username)
        cy.get(password).type(logindata.password)
        cy.get(submit).click()
    }

    login() {
        this.visit()
        this.loginpage()
        cy.log("Login Successfull")
    }
    logout() {
        cy.get(logout).click({ force: true })
        cy.get(signout).click()
    }
}

