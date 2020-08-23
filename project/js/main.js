'use strict';

class GoodsItem {
    constructor(title, price, img = 'http://placehold.it/150x100/b0b0b0', id) {
        this.img = img;
        this.title = title;
        this.price = price;
        this.id = id;
    }
    
    render() {
        return `<div class="col-md-auto">
                    <div class="card" style="width: 15rem;">
                        <img src="${this.img}" class="card-img-top" alt="${this.title}">
                        <div class="card-body">
                            <h3 class="card-title">${this.title}</h3>
                            <p class="card-text">${this.price}</p>
                            <button class="btn btn-success">Добавить в корзину</button>
                        </div>
                      </div>
                </div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }
    
    fetchGoods() {
        this.goods = [
          {id: 1, title: 'Notebook', price: 20000},
          {id: 2, title: 'Mouse', price: 1500},
          {id: 3, title: 'Keyboard', price: 5000},
          {id: 4, title: 'Gamepad', price: 4500},
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.title, good.price, good.img);
          listHtml += goodItem.render();
        });
        document.querySelector('.row').innerHTML = listHtml;
    }
    
    goodsPrice() {
        let cartPrice = 0;
        this.goods.forEach(good => {cartPrice += good.price});
        document.querySelector('.navbar').innerHTML += `Сумма товаров: ${cartPrice}`;
    }
}


class Cart {
    constructor() {
        this.goods = [];
    }
    
    addItem(cartItem) {
        this.good.push(cartItem);
    }
    
    deleteItem() {
        
    }
    
    clearCart() {

    }
}

class CartItem {
    constructor(quantity) {
        this.quantity = quantity;
    }
    
    changeQuantity() {
        
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.goodsPrice();

