import { BasePage } from "./base"

class HomePage extends BasePage {
    locators = {
        categories: {
            sectionHeader: '#cat:contains("CATEGORIES")',
            phones: 'a[onclick="byCat(\'phone\')"]',
            laptops: 'a[onclick="byCat(\'notebook\')"]',
            monitors: 'a[onclick="byCat(\'monitor\')"]'
        },
        content: {
            card: 'div.card',
            cardImage: 'div.card > a',
            cardTitle: 'h4.card-title',
            price: 'h5:contains("$")',
            description: '#article',
            previous: '#prev2',
            next: '#next2'
        },
        name: 'a[class="hrefch"]'
    }

    viewItem(itemName) {
        cy.get(this.locators.name).contains(`${itemName}`).click()
    }

    verifyPresenceOfCategories() {
        cy.get(this.locators.categories.sectionHeader).should('exist')
        cy.get(this.locators.categories.phones).should('exist')
        cy.get(this.locators.categories.laptops).should('exist')
        cy.get(this.locators.categories.monitors).should('exist')
    }
    verifyCardContent() {
        cy.get(this.locators.content.card).eq(0).should('exist')
        cy.get(this.locators.content.cardImage).eq(0).should('exist')
        cy.get(this.locators.content.cardTitle).eq(0).should('exist')
        cy.get(this.locators.content.description).eq(0).should('exist')
        cy.get(this.locators.content.price).eq(0).should('exist')
    }
    verifyNextPreviousButtonsToBePresent() {
        cy.get(this.locators.content.previous).should('exist')
        cy.get(this.locators.content.next).should('exist')
    }
}

export const home = new HomePage()