import { home } from '../../../pageObjects/home'
import { login } from '../../../pageObjects/login'
import { details } from '../../../pageObjects/itemDetails'
import { cart } from '../../../pageObjects/cart'
import { signUp } from '../../../pageObjects/signup'
import { faker } from '@faker-js/faker'

describe('Verify shopping cart functionalities', () => {
    beforeEach('Go to home page', () => {
        const name = faker.person.firstName().toLowerCase()
        const password = faker.string.alphanumeric(10)
        home.openWebsite()
        signUp.openSignUpModal()
        signUp.register(`${name}_01`, password)
        cy.wait(2000)
        login.openLoginModal()
        login.login(`${name}_01`, password)
    })

    it('User item details on the cart', () => {
        const product = 'Samsung galaxy s7'
        const price = '800'
        home.viewItem(product)
        details.addToCart()
        details.verifyAddToCartSuccessfulAlertIsPresent()
        home.openCart()
        cart.verifyPresenceOfProduct(product)
        cart.verifyTotalCost('800')
    })
    it('Total cost should be equal to the sum of each product cost', () => {
        const productDetails = [
            {
                productName: 'Samsung galaxy s7',
                price: '800'
            },
            {
                productName: 'Nexus 6',
                price: '650'
            }
        ]
        productDetails.forEach(prod => {
            home.viewItem(prod.productName)
            details.addToCart()
            home.openHome()
        })

        home.openCart()
        cart.verifyTotalCost('1450')
    })
})