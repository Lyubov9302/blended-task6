// import { renderCategoriesList } from "./js/render-function";

//Логіка сторінки Home
// fetch('https://dummyjson.com/products/category-list')
// .then(res => res.json())
// .then((data) => {
//     (console.log(data));
//     renderCategoriesList(data);
// });


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    console.log(data.products);
});

import { initHomePage } from "./js/handlers";

document.addEventListener('DOMContentLoaded', initHomePage);

