import { checkoutPageComponents } from '../../../../fixtures/components/components'

class CheckOutPage {
    static fillCustomerData(firstName, lastName, postalCode){
        cy.get(checkoutPageComponents.CUSTOMER_FIRST_NAME).type(firstName)
        cy.get(checkoutPageComponents.CUSTOMER_LAST_NAME).type(lastName)
        cy.get(checkoutPageComponents.CUSTOMER_POSTAL_CODE).type(postalCode)
    }

    static goToConfirmationPage(){
        cy.get(checkoutPageComponents.CONTINUE_TO_CONFIRMATION_PAGE_BUTTON).click()
    }
}

export default CheckOutPage