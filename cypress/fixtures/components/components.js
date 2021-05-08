const URL = 'https://www.saucedemo.com/'

const loginPageComponents = {
    "LOGIN_USER": "#user-name",
    "LOGIN_PASSWORD" : '#password',
    "LOGIN_BUTTON" : '#login-button',
    "LOCKED_ERROR_MESSAGE" : "h3"
}

const inventoryPageComponents = {
    "ITEM_DETAIL_LINK" : ".inventory_item_name",
    "SHOPPING_CART_BUTTON" : ".shopping_cart_link"
}

const productDetailPageComponents = {
    "ADD_TO_CART_BUTTON" : "Add to cart",
    "BACK_TO_PRODUCTS_BUTTON" : "#back-to-products"
}

const summaryPageComponents = {
    "GO_TO_CHECKOUT_BUTTON" : "#checkout"
}

const checkoutPageComponents = {
    "CUSTOMER_FIRST_NAME" : "#first-name",
    "CUSTOMER_LAST_NAME" : "#last-name",
    "CUSTOMER_POSTAL_CODE" : "#postal-code",
    "CONTINUE_TO_CONFIRMATION_PAGE_BUTTON" : "#continue"
}

const overviewPageComponents = {
    "PURCHASE_FINISH_BUTTON" : "#finish"
}

const confirmationPageComponents = {
    "THANK_YOU_MESSAGE" : "h2",
    "HAMBURGER_MENU_BUTTON" : "#react-burger-menu-btn",
    "LOGOUT_BUTTON" : "#logout_sidebar_link"
}

export { URL, loginPageComponents, inventoryPageComponents, productDetailPageComponents, summaryPageComponents, checkoutPageComponents, overviewPageComponents, confirmationPageComponents }