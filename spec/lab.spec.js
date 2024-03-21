const User = require('../lab2'); 

describe("User", () => {

    describe("addToCart", () => {
        it("should add a product to the cart", () => {
            let user = new User("Menns", "123");
            const product = { name: "Product A", price: 10 };
            user.addToCart(product);
            expect(user.cart.length).toBe(1);
            expect(user.cart[0]).toEqual(product);
        });
    });

    describe("calculateTotalCartPrice", () => {
        it("should return 0 if the cart is empty", () => {
            let user = new User("Menns", "123");
            const totalPrice = user.calculateTotalCartPrice();
            expect(totalPrice).toBe(0);
        });

        it("should return the correct total price of the cart", () => {
            let user = new User("Menns", "123");
            user.addToCart({ name: "Product1", price: 20 });
            user.addToCart({ name: "Product2", price: 20 });
            user.addToCart({ name: "Product3", price: 30 });

            const totalPrice = user.calculateTotalCartPrice();
            expect(totalPrice).toBe(70); 
        });
    });
});
