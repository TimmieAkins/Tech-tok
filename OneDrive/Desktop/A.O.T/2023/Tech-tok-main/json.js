

const allCard = document.querySelector(".all-card");
const otherCard = document.querySelector(".other-card");
const highCard = document.querySelector(".high-card");

const data = [
    {
      "id": 1,
      "name": "Demin Jacket",
      "price": 359,
      "des": "Our jackets are made with the highest quality materials to ensure maximum comfort and durability.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603808/mnz-m1m2EZOZVwA-unsplash-removebg-preview_eial1g.png "
    },
    {
      "id": 2,
      "name": "Demin Shirt",
      "price": 350,
      "des": "Our t-shirts are made with soft and comfortable materials, ensuring that you feel great all day long.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603865/alex-haigh-fEt6Wd4t4j0-unsplash__1_-removebg-preview_bxajqs.png "
    },
    {
      "id": 3,
      "name": "flare jeans",
      "price": 520.90,
      "des": "Made from 100% cotton, these trousers are both comfortable and durable",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603817/ihor-rapita-bdHdnhfFpt4-unsplash-removebg-preview_djq9jy.png "
    },
    {
      "id": 4,
      "name": "Pajamass",
      "price": 120,
      "des": "A piece of loose fitting cloth that provides comfort and instant joy",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603863/rocknwool-GUzkgot7LN8-unsplash-removebg-preview_umkjey.png "
    },
    {
      "id": 5,
      "name": "Salty Crush Mini",
      "price": 280,
      "des": "Elevate your style game with a white skirt that adds a crisp dose of brightness.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603822/lensabl-5pmpSRctZb0-unsplash-removebg-preview_wxc1r9.png "
    },
  ];

  const data2 = [
    {
      "id": 1,
      "name": "Ia Blouse",
      "price": 178.09,
      "des": "Have a glance baring upper garment worn with a saree, lehenga and other ethnic wear.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603812/eugenivy_now-8YSzM8_Ns4M-unsplash-removebg-preview_lfobn2.png "
    },
    {
      "id": 2,
      "name": "ferragamo bag",
      "price": 520.90,
      "des": "Expertly crafted from the finest materials, this handbag combines style and functionality.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603839/kitera-dent-U9OnUX40uUQ-unsplash-removebg-preview_rpodne.png "
    },
    {
      "id": 3,
      "name": "locket",
      "price": 300,
      "des": "Weather you’re dressing up for a special occasion, these necklace are perfects finishing touch.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603847/andres-vera-CmmYT6Mm948-unsplash-removebg-preview_o7hdvr.png "
    },
    {
      "id": 4,
      "name": "Backstay Stiff",
      "price": 800,
      "des": "A stay leading aft from the upper part of a mast to the deck or stern.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603808/anubhav-arora-g1vk_Bef2Xk-unsplash-removebg-preview_nzgauv.png "
    },
    {
      "id": 5,
      "name": "Loafer Heel",
      "price": 560,
      "des": "Take your style to the next level with this sleek and stylish heel shoes.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603865/alex-hudson-Plg3KC7cV0o-unsplash-removebg-preview_zrhegl.png "
    },
  ];

  const data3 = [
    {
      "id": 1,
      "name": "All Stars",
      "price": 520.90,
      "des": "these shoe consists of a stitched upper portion, and a toe cap and outsole usually made of rubber.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603812/huyen-nguy-IjzhMi4Cw3w-unsplash-removebg-preview_uhak2n.png "
    },
    {
      "id": 2,
      "name": "Patent leather",
      "price": 650,
      "des": " Explore our high-gloss, grain-free leather, which has been gloss-finished on the surface.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603824/kier-in-sight-b4Xk6bzgQWU-unsplash-removebg-preview_cjglav.png "
    },
    {
      "id": 3,
      "name": "Beach Shoes",
      "price": 980,
      "des": "These shoes are the perfect finishing touch, with a range of colors and sizes to choose from.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603838/raoul-croes-94KcLYsihLY-unsplash-removebg-preview_qteskd.png "
    },
    {
      "id": 4,
      "name": "The Fila Hover",
      "price": 1280,
      "des": "A pair of Fila shoe that combine style, comfort and durability in one.",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603836/tom-radetzki-SzVXG6FFh0Q-unsplash-removebg-preview_wmkwh3.png "
    },
    {
      "id": 5,
      "name": "Nike loafer",
      "price": 1320,
      "des": "These cushioned and insole and padded collar provide superior comfort and support for all-day wear",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603808/revolt-164_6wVEHfI-unsplash-removebg-preview_zruqkx.png "
    },
    {
      "id": 6,
      "name": "Adidas pair ",
      "price": 2500,
      "des": "These durable rubber outsole delivers excellent traction and grip on a variety surfaces ",
      "btn": "add to cart",
      "img": "https://res.cloudinary.com/dwyccayuh/image/upload/v1677603848/matus-hatala-pFzxaKhdFME-unsplash-removebg-preview_outxtt.png "
    }
  ];
  
const product = data.map((item) => {

  // const star = `item-${id}`;
  return `
  <div class="product-card">
      <div class="img-container">
          <i class="icon fa-regular fa-heart"></i>
          <img src="${item.img}" alt="" class="product-img">
      </div>
      <div class="product-info">
          <div class="product-name">
              <h3>${item.name}</h3>
              <h4>$<span>${item.price}</span></h4>
          </div>
          <div class="product-descri">
              <p>${item.des}</p>
              <div class="rating">
                  <div class="star-rating" id="star">
                      <input type="radio" name="rating1" id="rating1">
                      <label for="rating1" class="fa fa-star"></label>
                      <input type="radio" name="rating2" id="rating2">
                      <label for="rating2" class="fa fa-star"></label>
                      <input type="radio" name="rating3" id="rating3">
                      <label for="rating3" class="fa fa-star"></label>
                      <input type="radio" name="rating4" id="rating4">
                      <label for="rating4" class="fa fa-star"></label>
                      <input type="radio" name="rating5" id="rating5">
                      <label for="rating5" class="fa fa-star"></label>
                      <h4>(<span>154</span>)</h4>
                  </div>
              </div>
              <button class="add-btn">${item.btn}</button>
          </div>
      </div>
  </div>
  `
});


allCard.innerHTML = product.join('');
console.log(allCard);

const otherProducts = data2.map((item, id) => {

  const star = `item-${id}`;
  return `
  <div id="${star}" class="product-card">
      <div class="img-container">
          <i class=" icon fa-regular fa-heart"></i>
          <img src="${item.img}" alt="" class="product-img">
      </div>
      <div class="product-info">
          <div class="product-name">
              <h3>${item.name}</h3>
              <h4>$<span>${item.price}</span></h4>
          </div>
          <div class="product-descri">
              <p>${item.des}</p>
              <div class="rating">
                  <div class="star-rating" id="star">
                      <input type="radio" name="rating1" id="rating1">
                      <label for="rating1" class="fa fa-star"></label>
                      <input type="radio" name="rating2" id="rating2">
                      <label for="rating2" class="fa fa-star"></label>
                      <input type="radio" name="rating3" id="rating3">
                      <label for="rating3" class="fa fa-star"></label>
                      <input type="radio" name="rating4" id="rating4">
                      <label for="rating4" class="fa fa-star"></label>
                      <input type="radio" name="rating5" id="rating5">
                      <label for="rating5" class="fa fa-star"></label>
                      <h4>(<span>154</span>)</h4>
                  </div>
              </div>
              <button class="add-btn">${item.btn}</button>
          </div>
      </div>
  </div>
  `
});


otherCard.innerHTML = otherProducts.join('');
console.log(otherCard);

const highProducts = data3.map((item, id) => {

  const star = `item-${id}`;
  return `
  <div id="${star}" class="product-card">
      <div class="img-container">
          <i class="icon fa-regular fa-heart"></i>
          <img src="${item.img}" alt="" class="product-img">
      </div>
      <div class="product-info">
          <div class="product-name">
              <h3>${item.name}</h3>
              <h4>$<span>${item.price}</span></h4>
          </div>
          <div class="product-descri">
              <p>${item.des}</p>
              <div class="rating">
                  <div class="star-rating" id="star">
                      <input type="radio" name="rating1" id="rating1">
                      <label for="rating1" class="fa fa-star"></label>
                      <input type="radio" name="rating2" id="rating2">
                      <label for="rating2" class="fa fa-star"></label>
                      <input type="radio" name="rating3" id="rating3">
                      <label for="rating3" class="fa fa-star"></label>
                      <input type="radio" name="rating4" id="rating4">
                      <label for="rating4" class="fa fa-star"></label>
                      <input type="radio" name="rating5" id="rating5">
                      <label for="rating5" class="fa fa-star"></label>
                      <h4>(<span>154</span>)</h4>
                  </div>
              </div>
              <button class="add-btn">${item.btn}</button>
          </div>
      </div>
  </div>
  `
});


highCard.innerHTML = highProducts.join('');
console.log(highCard);









