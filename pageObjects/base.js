export class BasePage {
    basePageLocators = {
        header: {
            home: 'a.nav-link:contains("Home ")',
            signup: '#signin2',
            login: '#login2',
            cart: '#cartur',
            welcome: '#nameofuser'
        }
    }
    openSignUpModal() {
        cy.get(this.basePageLocators.header.signup).click()
        cy.wait(500)
    }
    openLoginModal() {
        cy.get(this.basePageLocators.header.login).click()
        cy.wait(500)
    }
    openCart() {
        cy.get(this.basePageLocators.header.cart).click()
    }

    openWebsite() {
        cy.visit('https://www.demoblaze.com/index.html')
    }
    openHome() {
        cy.get(this.basePageLocators.header.home).click()
    }
    verifyWelcomeUserLinkIsPresent() {
        cy.get(this.basePageLocators.header.welcome).should('exist')
    }
}

// export const basePage = new BasePage()