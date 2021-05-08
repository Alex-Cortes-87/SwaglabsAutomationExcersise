import { summaryPageComponents } from '../../../../fixtures/components/components'

class SummaryPage {
    static goToCheckOut() {
        cy.get(summaryPageComponents.GO_TO_CHECKOUT_BUTTON).click()
    }
}

export default SummaryPage