const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price = 0, img = 'http://placehold.it/150x100/b0b0b0') => {
  return `<div class="col-md-auto">
            <div class="card" style="width: 15rem;">
                <img src="${img}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-text">${price}</p>
                    <button class="btn btn-success">Добавить в корзину</button>
                </div>
              </div>
            </div>`;
            
};

const renderProducts = (list) => {
  const productList = list.map((product) => {
      return renderProduct(product.title, product.price);
  });
  document.querySelector('.row').innerHTML = productList.join('');
}

renderProducts(products);
