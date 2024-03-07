import { BasePage } from "./base";

class CartPage extends BasePage {
    locators = {
        placeOrder: 'button[type="button"]:contains("Place Order")',
        name: '#name',
        card: '#card',
        purchase: 'button[onclick="purchaseOrder()"]',
        confirmButton: 'button.confirm:contains("OK")',
        productName: '#tbodyid',
        totalPrice: '#totalp'
    }
    placeOrder(orderDetails) {
        cy.get(this.locators.placeOrder).click()
        cy.wait(500)
        cy.get(this.locators.name).type(orderDetails.name)
        cy.get(this.locators.card).type(orderDetails.card)
        cy.get(this.locators.purchase).click()
        cy.wait(500)
        cy.get(this.locators.confirmButton).click()
    }
    verifyPresenceOfProduct(prodName) {
        cy.get(this.locators.productName).contains(prodName).should('exist')
    }
    verifyTotalCost(expectedTotalCost) {
        cy.wait(5000)
        cy.get(this.locators.totalPrice).invoke('text').then(text => {
            expect(text).to.be.equal(expectedTotalCost)
        })
    }
}

export const cart = new CartPage()