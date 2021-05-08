import { URL, loginPageComponents } from '../../../../fixtures/components/components'

class LoginPage {
    static navigateLoginPage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(URL)
 
    }

    static fillLoginCredentials(username, password) {
        cy.get(loginPageComponents.LOGIN_USER).type(username)
        cy.get(loginPageComponents.LOGIN_PASSWORD).type(password)
    }

    static sendLoginCredentials() {
        cy.get(loginPageComponents.LOGIN_BUTTON).click()
    }

}

export default LoginPage