import { inventoryPageComponents } from '../../../../fixtures/components/components'
import ProductDetail from '../productDetail/productDetailPage'

class InventoryPage {

    static addToCart() {
        cy.get('select').select('Price (low to high)')
        cy.get(inventoryPageComponents.ITEM_DETAIL_LINK).first().click()
        ProductDetail.addToCart()
        ProductDetail.returnToInventoryPage()
        cy.get('select').select('Price (high to low)')
        cy.get(inventoryPageComponents.ITEM_DETAIL_LINK).first().click()
        ProductDetail.addToCart()
        ProductDetail.returnToInventoryPage()
    }

    static goToShoppingCart(){
        cy.get(inventoryPageComponents.SHOPPING_CART_BUTTON).click()
    }
    

}

export default InventoryPage