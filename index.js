import"./assets/styles-JE8YjOlG.js";function s(t){const e=["All",...t].map(o=>`
    <li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("");refs.categoriesList.innerHTML=e}fetch("https://dummyjson.com/products/category-list").then(t=>t.json()).then(t=>{console.log(t),s(t)});
//# sourceMappingURL=index.js.map
