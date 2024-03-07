import { home } from "../../../pageObjects/home"
import { details } from "../../../pageObjects/itemDetails"
import { login } from "../../../pageObjects/login"

describe('Verify Item Details Page validations', () => {
    beforeEach('Go to item details page', () => {
        home.openWebsite()
        home.openLoginModal()
        login.login('dmuser002', 'dmuser002')
        home.viewItem('Samsung galaxy s6')
    })
    
    it('Check item details', () => {
        details.verifyItemDetails()
    })
})