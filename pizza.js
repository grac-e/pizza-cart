function pizzaCart() {
    return {
        cart: { small: 0, medium: 0, large: 0 },
        message: '',
        paymentAmount: '',
        change: 0,
        showPayment: false,
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
            return this.cart.small * 30 + this.cart.medium * 55 + this.cart.large * 90;
        },
        get hasPizzas() {
            return this.totalCost > 0;
        },
        processPayment() {
            if (this.paymentAmount >= this.totalCost) {
                this.change = this.paymentAmount - this.totalCost;
                this.message = 'Enjoy your pizzas!';
                this.cart = { small: 0, medium: 0, large: 0 };
                this.paymentAmount = '';
                this.updateTotalCost();
                this.showPayment = false;
            } else {
                this.message = 'Sorry, that is not enough money!';
                this.change = 0;
            }
            // setTimeout(() => this.message = '', 3000);
            setTimeout(() => {
                this.message = '';
                this.change = 0;
            }, 3000);
        },
        updateTotalCost() {
            this.totalCost;
        }
    }
}