const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        basketGoods: [],
        searchLine: '',
        imgCatalog: 'http://placehold.it/150x100/b0b0b0',
        showCart: false,
    },
    methods: {
          makeGETRequest(url) {
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
        },
        
        addToCart(id_product) {
            let toCart;
            this.goods.forEach(function(item) {
                if(id_product == item.id_product) {
                    toCart = {
                        id_product: item.id_product,
                        product_name: item.product_name,
                        price: item.price,
                        img: "http://placehold.it/150x100/b0b0b0"
                    }
                }
            });
            this.basketGoods.push(toCart);
            this.goodsPrice;
        },
        
        deleteItem(id_product) {
            let getId;
            this.basketGoods.forEach(function(item, i) {
                let thisId = item.id_product;
                if(id_product == thisId) {
                    getId = i;
                }

            });
            this.basketGoods.splice(getId, 1);
            this.goodsPrice;
        },           
        
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        }
        
    },
    
    computed: {
        goodsPrice: function () {
            let cartPrice = 0;
            this.basketGoods.forEach(good => {
                cartPrice += good.price
            });
            return cartPrice;
        },    
    },
    
    mounted() {
        return fetch(`${API_URL}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.goods = [...data];
                this.filteredGoods = [...data];
            })
            .catch(error => {console.log(error)});
    
    }
});


