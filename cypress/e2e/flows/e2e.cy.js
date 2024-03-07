import { cart } from "../../../pageObjects/cart.js"
import { home } from "../../../pageObjects/home.js"
import { details } from "../../../pageObjects/itemDetails.js"
import { login } from "../../../pageObjects/login.js"
import { signUp } from "../../../pageObjects/signup.js"
import { faker } from "@faker-js/faker"

describe('Verify E2E shopping flow', () => {
  it('Verify E2E shopping flow', () => {
    const username = faker.person.lastName().toLowerCase()
    const password = faker.string.alphanumeric(10)

    signUp.openWebsite()

    signUp.openSignUpModal()
    signUp.register(`${username}_01`, password)

    login.openLoginModal()
    login.login(`${username}_01`, password)

    home.viewItem('Iphone 6 32gb')

    details.addToCart()
    details.openCart()

    cart.placeOrder(
      {
        name: `${username}_01`,
        card: faker.string.numeric(16)
      }
    )
  })
})