Vue.component('basket-list', {
    props: ['goods', 'visibility'],
    template: `
        <div v-show="visibility" class="goods-list">
            <p v-if="!goods.length">Корзина пуста</p>
            <div class="row justify-content-md-center">
                <basket-item v-for="good in goods" :good="good"></basket-item>
            </div>
        </div>
    `
});

Vue.component('basket-item', {
    props: ['good'],
    template: `
       <div class="col-md-auto">
            <div class="basket-item">
                <img src="http://placehold.it/150x100/b0b0b0" :alt="good.product_name">
                <div class="basket-info">
                    <h3>{{good.product_name}}</h3>
                    <p>{{good.price}}</p>
                </div>
                <button class='deleteItem' @click="$parent.$emit('delete-item', good.id_product)">&times;</button>
            </div>
        </div>
    `
});