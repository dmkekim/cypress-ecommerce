import { signUp } from "../../../pageObjects/signup"

describe('Verify Sign Up Page Validations', () => {
    beforeEach('Open website', () => {
        signUp.openWebsite()
        signUp.openSignUpModal()
    })
    it('All fields and buttons should be available', () => {
        signUp.verifyElementsToBePresent()
    })

    it('Username should be mandatory', () => {
        signUp.register('', 'somepassword')
        signUp.verifyMandatoryAlertMessage()
    })

    it('Password should be mandatory', () => {
        signUp.register('username', '')
        signUp.verifyMandatoryAlertMessage()
    })
})