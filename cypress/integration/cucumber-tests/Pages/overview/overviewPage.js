import { overviewPageComponents } from '../../../../fixtures/components/components'

class OverviewPage {
    static finishPuchase() {
        cy.get(overviewPageComponents.PURCHASE_FINISH_BUTTON).click()
    }
}

export default OverviewPage