const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id_product: 123,
            product_name: 'Каштан',
            price: 3200,
            quantity: 7,
        },
        {
            id_product: 456,
            product_name: 'Черёмуха',
            price: 1500,
            quantity: 2,
        },
        {
            id_product: 789,
            product_name: 'Слива',
            price: 2700,
            quantity: 4,
        },
        {
            id_product: 112,
            product_name: 'Ольха',
            price: 700,
            quantity: 1,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', () => this.clearCart());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};
cart.init();
