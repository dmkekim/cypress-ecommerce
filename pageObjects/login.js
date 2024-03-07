import { BasePage } from "./base";

class LoginPage extends BasePage {
    locators = {
        username: '#loginusername',
        password: '#loginpassword',
        login: 'button[onclick="logIn()"]'
    }

    login(username, password) {
        cy.wait(1000)
        if(username) {
            cy.get(this.locators.username).type(username)
        } else {
            // skip username for mandatory field checking
        }
        if(password) {
            cy.get(this.locators.password).type(password)
        } else {
            // skip password for mandatory field checking
        }     
        cy.get(this.locators.login).click({ force: true })
    }

    verifyPresenceOfWebElements() {
        cy.get(this.locators.username).should('exist')
        cy.get(this.locators.password).should('exist')
        cy.get(this.locators.login).should('exist')
    }
    verifyMandatoryAlertToBePresent() {
        cy.on('window:alert', message => {
            expect(message).to.be.equal('Please fill out Username and Password.')
        })
    }
    verifyUserDoesNotExistAlertIsPresent() {
        cy.on('window:alert', message => {
            expect(message).to.be.equal('User does not exist.')
        })
    }
    verifyWrongPasswordAlertIsPresent() {
        cy.on('window:alert', message => {
            expect(message).to.be.equal('Wrong password.')
        })
    }
}

export const login = new LoginPage()