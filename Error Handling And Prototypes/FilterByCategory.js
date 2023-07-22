function filterByCategory(products) {
    return function (category) {
      return products.filter(function (product) {
        return product.category === category;
      });
    };
  }
  
  let products = [
    { name: "Shirt", category: "cloth" },
    { name: "Pants", category: "cloth" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  
  let clothingProducts = filterByCategory(products)("cloth");
  
  console.log(clothingProducts);
  