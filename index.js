import"./assets/styles-JE8YjOlG.js";import{a as n}from"./assets/vendor-N5iQpiFS.js";const i="https://dummy/json.com/products",a=12;n.defaults.baseURL=i;async function u(t){const s=(t-1)*a,{data:o}=await n(`?limit=${a}&skip=${s}`);return o}function l(t){const s=t.map(({id:o,thumbnail:r,title:c,brand:d,category:e,price:p})=>`
<li class="products__item" data-id="${o}">
    <img class="products__image" src="${r}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${d}</p>
    <p class="products__category">Category: ${e}</p>
    <p class="products__price">Price:$${p}</p>
 </li>
  `).join("");refs.productsList.insertAdjacentHTML("beforeend",s)}async function _(){try{const{products:t,total:s}=await u();l(t)}catch(t){console.log(t)}}fetch("https://dummyjson.com/products").then(t=>t.json()).then(t=>{console.log(t.products)});document.addEventListener("DOMContentLoaded",_);
//# sourceMappingURL=index.js.map
