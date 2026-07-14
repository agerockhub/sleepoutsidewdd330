import{r as s}from"./utils-DeOcxcF7.js";import{P as i}from"./ProductData-CByqJGXb.js";function c(t){return`
    <li class="product-card">
      <a href="product_pages/?product=${t.Id}">
      <img src="${t.Image.replace("../","")}" alt="Image of ${t.Name}">
        <h3 class="card__brand">${t.Brand.Name}</h3>
        <h2 class="card__name">${t.NameWithoutBrand}</h2>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
  `}class n{constructor(a,e,r){this.category=a,this.dataSource=e,this.listElement=r}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){s(c,this.listElement,a)}}const o=new i("tents"),l=document.querySelector(".product-list"),d=new n("tents",o,l);d.init();
