import { confirmationPageComponents } from '../../../../fixtures/components/components'
/*const THANK_YOU_MESSAGE = 'h2'
const HAMBURGER_MENU_BUTTON = '#react-burger-menu-btn'
const LOGOUT_BUTTON = '#logout_sidebar_link'*/

class ConfirmationPage {
    static validateConfirmationMessageVisibility(message){
        cy.get(confirmationPageComponents.THANK_YOU_MESSAGE).should('contain', message)
    }

    static logoutSwaglabs() {
        cy.get(confirmationPageComponents.HAMBURGER_MENU_BUTTON).click()
        cy.get(confirmationPageComponents.LOGOUT_BUTTON).click()

    }
}

export default ConfirmationPage