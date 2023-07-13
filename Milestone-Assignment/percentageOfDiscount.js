const calDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  
let originalPrice = 100;
let discountPrice = 90;
  console.log("Discount Percentages:",calDiscountPercentage(originalPrice,discountPrice));