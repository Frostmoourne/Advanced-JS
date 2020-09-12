Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="row justify-content-md-center">
      <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>
  `
});

Vue.component('goods-item', {
  props: ['good'],
  template: `
    <div class="col-md-auto">
        <div class="card" style="width: 15rem;"> <img src="http://placehold.it/150x100/b0b0b0" class="card-img-top" :alt="good.product_name">
            <div class="card-body">
                <h3 class="card-title">{{good.product_name}}</h3>
                <p class="card-text">{{good.price}}</p>
                <button class="btn btn-success" @click="$parent.$emit('add-item', good.id_product)">Добавить в корзину</button>
            </div>
        </div>
    </div>
  `
});