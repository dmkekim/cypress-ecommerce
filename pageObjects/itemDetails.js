import { BasePage } from "./base"

class ItemDetailsPage extends BasePage {
    locators = {
        addToCart: 'a:contains("Add to cart")',
        image: '#imgp',
        name: 'h2.name',
        price: 'h3.price-container',
        description: '#more-information',
    }

    addToCart() {
        cy.get(this.locators.addToCart).click()
    }
    verifyItemDetails() {
        cy.get(this.locators.image).should('exist')
        cy.get(this.locators.name).should('exist')
        cy.get(this.locators.price).should('exist')
        cy.get(this.locators.description).should('exist')
        cy.get(this.locators.addToCart).should('exist')
    }

    verifyAddToCartSuccessfulAlertIsPresent() {
        cy.on('window:alert', message => {
            expect(message).to.be.equal('Product added.')
        })
    }
}

export const details = new ItemDetailsPage()