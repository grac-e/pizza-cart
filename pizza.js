function pizzaCart() {
    return {
        cart: { small: 0, medium: 0, large: 0 },
        message: '',
        paymentAmount: 0,
        change: 0,
        addPizza(size, price) {
            this.cart[size]++;
            this.updateTotalCost();
        },
        removePizza(size) {
            if (this.cart[size] > 0) {
                this.cart[size]--;
                this.updateTotalCost();
            }
        },
        get totalCost() {
            return this.cart.small * 30 + this.cart.medium * 55 + this.cart.large * 85;
        },
        get hasPizzas() {
            return this.totalCost > 0;
        },
        checkout() {
            if (this.paymentAmount >= this.totalCost) {
                this.change = this.paymentAmount - this.totalCost;
                this.message = 'Enjoy your pizzas!';
                this.cart = { small: 0, medium: 0, large: 0 };
                this.paymentAmount = 0;
                this.updateTotalCost();
            } else {
                this.message = 'Sorry - that is not enough money!';
            }
            // setTimeout(() => this.message = '', 3000);
            setTimeout(() => {
                this.message = '';
                this.change = 0;
            }, 4000);
        },
        updateTotalCost() {
            this.totalCost;
        }
    }
}