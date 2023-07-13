let finalOrderPrice = (arrobj)=>{
let total_cost = 0;
    arrobj.forEach((item)=>{
        let item_cost = item.unitPrice*item.quantity;
        total_cost = total_cost+item_cost;
    })
    return total_cost;
}

let arrOfObject = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 5, quantity: 3 },
  { unitPrice: 8, quantity: 1 }
]
console.log("Total cost :",finalOrderPrice(arrOfObject));