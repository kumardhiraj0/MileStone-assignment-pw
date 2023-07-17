// fn to cnvrt usd to inr
function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
  }
  
  // Function to convert prices in the store's inventory
  function convertPricesToINR(inventory) {
    const inventoryINR = inventory.map(item => {
      const priceINR = convertToINR(item.priceUSD);
      return { ...item, priceINR };
    });
    return inventoryINR;
  }
  
  // inventory data in usd
  const storeInventoryUSD = [
    { item: "laptop", priceUSD: 150},
    { item: "mouse", priceUSD: 50 },
    { item: "keyboard", priceUSD: 60 },
  ];
  
  // Convert prices to INR
  const storeInventoryINR = convertPricesToINR(storeInventoryUSD);
  
  // print converted data
  console.log("Store's Inventory (in INR):");
  console.log(storeInventoryINR);
  