const productsList = document.querySelector(".products");
const productsList2 = document.querySelector(".products2");

const roductItem2 = [
  {
    name: "PAPER POUCH",
    price: 46.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-1-500x500.jpg",
    desc: "Premium coffee paper pouch",
  },
  {
    name: "PAPER BAG",
    price: 79.0,
    oldPrice: 98.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-2-500x500.jpg",
    desc: "Specialty coffee paper bag",
    sale: true,
  },
  {
    name: "PLASTIC POUCH",
    price: 27.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-3-500x500.jpg",
    desc: "Fresh coffee plastic pouch",
  },
  {
    name: "COFFEE POT",
    price: 71.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-4-500x500.jpg",
    desc: "Premium coffee pot",
  },
];

const productItem = [
  {
    name: "PAPER POUCH",
    price: 46.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-1-500x500.jpg",
  },
  {
    name: "PAPER BAG",
    price: 79.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-2-500x500.jpg",
  },
  {
    name: "PLASTIC POUCH",
    price: 27.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-3-500x500.jpg",
  },
  {
    name: "COFFEE POT",
    price: 71.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-4-500x500.jpg",
  },
  {
    name: "TEA POT",
    price: 54.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-5-500x500.jpg",
  },
  {
    name: "PAPER CUP",
    price: 31.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-6-500x500.jpg",
  },
  {
    name: "CHOCO BITES",
    price: 63.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-7-1-500x500.jpg",
  },
  {
    name: "GROUND COFFEE",
    price: 75.0,
    image:
      "https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-8-1-500x500.jpg",
  },
];

const renderProduct = (items, parentElement) => {
  const html = items
    .map(
      (item) => `
    <div class="rounded-lg group overflow-hidden relative transition-all duration-500 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-[3px]">
      <div class="relative overflow-hidden h-[350px]">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="object-cover w-full h-full"
        />
        <div class="absolute w-full bottom-0 h-[45px] bg-[#cc9f83] transition-transform group-hover:translate-y-0 duration-300 translate-y-full flex items-center justify-center gap-2 text-white">
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="font-bold">ADD TO CART</span>
        </div>
      </div>
      <div class="p-4 group-hover:text-[#cc9f83]">
        <h3 class="text-xl font-semibold mb-2">${item.name}</h3>
        <p class="mb-4">Delicious coffee product</p>
        <p class="text-lg font-bold text-primary">$${item.price.toFixed(2)}</p>
      </div>
    </div>
  `
    )
    .join("");

  parentElement.innerHTML = html;
};

// renderProduct(productItem, productsList);
// renderProduct(productItem2, productsList2);
