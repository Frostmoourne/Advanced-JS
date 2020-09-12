Vue.component('search', {
    props: ['visibility', 'search-line', 'showCart'],
    template: `
        <nav class="navbar navbar-light bg-light">
            <form @submit.prevent class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2 search-field" type="search" placeholder="Поиск" v-model="$root.searchLine">
                <button class="btn btn-outline-success my-2 my-sm-0 search-button" @click="$parent.filterGoods()" type="button">Искать</button>
            </form>
            <button  type="button" class="btn btn-primary" @click="$root.showCart = !$root.showCart"> Корзина </button>
            <div class="cart-price">Сумма товаров: {{ $root.goodsPrice }}</div>
        </nav>
    `
});