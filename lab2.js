class User {

    constructor(name, password) {
        this.name = name;
        this.password = password
        this.cart = []
    }

    /**
     * Adds a product to the cart array.
     * @param {object} product - product object to be add to cart. 
     * @param {string} product.name - name of the product
     * @param {number} product.price - price of the product
     */
    // test this function's logic 
    addToCart(product) {
        this.cart.push(product)
    }



    /**
     * @return {number} the cart array total price. 
     */
    // test this function's logic 
    calculateTotalCartPrice() {
        return this.cart.reduce((accPrice, prd) => accPrice + prd.price, 0)
    }
}

module.exports = User