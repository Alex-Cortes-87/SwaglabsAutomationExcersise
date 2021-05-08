import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../Pages/login/loginPage'
import InventoryPage from '../Pages/inventory/inventoryPage'
import SummaryPage from '../Pages/summary/summaryPage'
import CheckOutPage from '../Pages/checkout/checkoutPage'
import OverviewPage from '../Pages/overview/overviewPage'
import ConfirmationPage from '../Pages/confirmation/confirmationPage'

Given('I fill the swaglabs page with {string} and {string} credentials', (username, password) => {
    LoginPage.navigateLoginPage()
    LoginPage.fillLoginCredentials(username, password)
})

When('I login the page', () => {
    LoginPage.sendLoginCredentials()
})

When('I add lowest and highest price products to the shopping cart', () => {
    InventoryPage.addToCart()
    InventoryPage.goToShoppingCart()
    SummaryPage.goToCheckOut()
})

When('I complete the checkout process with {string}, {string} and {string} information', (firstName, lastName, postalCode) => {
    CheckOutPage.fillCustomerData(firstName, lastName, postalCode)
    CheckOutPage.goToConfirmationPage()
})

When('I finish the checkout process', () => {
    OverviewPage.finishPuchase()
})

Then('I see the {string} in the confirmation page', (message) => {
    ConfirmationPage.validateConfirmationMessageVisibility(message)
    ConfirmationPage.logoutSwaglabs()
})