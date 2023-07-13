function fixCartBug(cart) {
  //using map we can doubled
  let fixedCart = cart.map((quantity) => quantity * 2);
  return fixedCart;
}

let cart = [2, 4, 1, 3];
let fixedCart = fixCartBug(cart);
console.log("Fixed Cart:", fixedCart);
