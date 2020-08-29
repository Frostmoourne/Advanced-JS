'use strict';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const makeGETRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject(console.log('error'));  
                }
                else {
                    resolve(xhr.responseText);
                }
            }
        }
        xhr.send();
    });
}

class GoodsItem {
    constructor(product_name, price, img = 'http://placehold.it/150x100/b0b0b0', id_product) {
        this.img = img;
        this.product_name = product_name;
        this.price = price;
        this.id_product = id_product;
    }
    render() {
        return `<div class="col-md-auto">
                    <div class="card" style="width: 15rem;">
                        <img src="${this.img}" class="card-img-top" alt="${this.product_name}">
                        <div class="card-body">
                            <h3 class="card-title">${this.product_name}</h3>
                            <p class="card-text">${this.price}</p>
                            <button class="btn btn-success" onclick='addToCart(${this.id_product})'>Добавить в корзину</button>
                        </div>
                      </div>
                </div>`;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }
    fetchGoods() {
        return fetch(`${API_URL}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.goods = [...data];
                this.filteredGoods = [...data];
                this.render();
            })
            .catch(error => {console.log(error)});
    }
    
    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        this.render();
    }

    
    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.img, good.id_product);
            listHtml += goodItem.render();
        });
        document.querySelector('.row').innerHTML = listHtml;
    }
    

}
class Cart {
    constructor() {
        this.goods = [];
    }
    
    
    addToCart(id_product) {
        let toCart;
        list.goods.forEach(function(item) {
            if(id_product == item.id_product) {
                toCart = {
                    id_product: item.id_product,
                    product_name: item.product_name,
                    price: item.price,
                    img: item.img
                }
            }
        });
        this.goods.push(toCart);
        this.goodsPrice();
        this.render();
    }
    
    deleteItem(id_product) {
        let getId;
        this.goods.forEach(function(item, i) {
            let thisId = item.id_product;
            if(id_product == thisId) {
                getId = i;
            }
            
        });
        this.goods.splice(getId, 1);
        this.render();
        this.goodsPrice();
    }
    
    render () {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new CartItem(good.id_product, good.product_name, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
        this.goodsPrice();
    }
    
    goodsPrice() {
        let cartPrice = 0;
        this.goods.forEach(good => {
            cartPrice += good.price
        });
        document.querySelector('.cart-price').innerHTML = `Сумма товаров: ${cartPrice}`;
        return cartPrice;
    }
    
}
class CartItem {
    constructor(id_product, product_name, price, img = 'http://placehold.it/150x100/b0b0b0') {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
        this.img = img;
    }
    
    render() {
        return `<div class="basket-item">
                    <img src="${this.img}" alt="${this.product_name}">
                    <div class="basket-info">
                        <h3>${this.product_name}</h3>
                        <p>${this.price}</p>
                    </div>
                    <button class='deleteItem' onclick='deleteItem(${this.id_product})'>&times;</button>
                </div>`;
    }
}

let searchField = document.querySelector('.search-field');
let searchButton = document.querySelector('.search-button');


const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
});

list.render();

function showCart() {
    let cart = document.querySelector('.goods-list');
    let cartTitle = document.querySelector('.cart-title');
    cart.classList.remove('hidden');
    }

const cart = new Cart();
function addToCart(id_product) {
    cart.addToCart(id_product);
}

function deleteItem(id_product) {
    cart.deleteItem(id_product);
}

searchButton.addEventListener('click', (e) => {
  const value = searchField.value;
  list.filterGoods(value);
});