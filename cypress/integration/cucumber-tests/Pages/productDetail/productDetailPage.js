import { productDetailPageComponents } from '../../../../fixtures/components/components'

class ProductDetail {
    static addToCart(){
        cy.contains(productDetailPageComponents.ADD_TO_CART_BUTTON).click()
    }

    static returnToInventoryPage(){
        cy.get(productDetailPageComponents.BACK_TO_PRODUCTS_BUTTON).click()
    }
}

export default ProductDetail