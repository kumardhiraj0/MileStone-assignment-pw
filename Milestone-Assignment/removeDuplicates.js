function removeDuplicates(cart) {
    //using set we are removing duplicates
    let uniqueCart = Array.from(new Set(cart));
    return uniqueCart;
  }
  
  let cart = ["item1", "item2", "item1", "item3", "item2"];
  let uniqueCart = removeDuplicates(cart);
  console.log("Cart without duplicates:", uniqueCart);
  