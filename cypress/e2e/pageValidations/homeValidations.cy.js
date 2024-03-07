import { home } from '../../../pageObjects/home'
import { login } from '../../../pageObjects/login'

describe('Home Page Validations', () => {
    beforeEach('Opening the website', () => {
        home.openWebsite()
        login.openLoginModal()
        login.login('dmuser002', 'dmuser002')
    })

    it('Categories area should be present on the page', () => {
        home.verifyPresenceOfCategories()
    })

    it('Content area should be present on the page, showing details of items', () => {
        home.verifyCardContent()
    })

    it('Verify previous and next buttons are present', () => {
        home.verifyNextPreviousButtonsToBePresent()
    })
})