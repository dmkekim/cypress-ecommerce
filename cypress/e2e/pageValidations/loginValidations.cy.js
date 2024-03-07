import { faker } from "@faker-js/faker"
import { login } from "../../../pageObjects/login"
import { signUp } from "../../../pageObjects/signup"

describe('Verify Login Page validations', () => { 
    beforeEach('Opening login page modal', () => {
        login.openWebsite()
    })

    it('Verify presence of the different web elements', () => {
        login.openLoginModal()
        login.verifyPresenceOfWebElements()
    })

    it('Username should be mandatory', () => {
        login.openLoginModal()
        login.login('', 'somepassword')
        login.verifyMandatoryAlertToBePresent()
    })

    it('Password should be mandatory', () => {
        login.openLoginModal()
        login.login('someusername', '')
        login.verifyMandatoryAlertToBePresent()
    })

    it('Invalid username should not be allowed to log in', () => {
        login.openLoginModal()
        login.login('invalidusername', 'dmuser002')
        cy.wait(2000)
        login.verifyUserDoesNotExistAlertIsPresent()
    })

    it('Invalid password should not allow user to login', () => {
        login.openLoginModal()
        login.login('dmuser002', 'invalidpassword')
        login.verifyWrongPasswordAlertIsPresent()
    })

    it('Valid username and password combination should be allowed to log in', () => {
        login.openLoginModal()
        login.login('dmuser002', 'dmuser002')
        login.verifyWelcomeUserLinkIsPresent()
    })
})