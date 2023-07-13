// The rental costs are
//  Economy = Rs. 4000 /- per day
//  Midsize = Rs. 10,000 /- per day
//  Luxury = Rs. 20,000 /- per day.
let totalCost = 0;
function calculateRentalCost(carType,numOfDaysRented){
    if(carType==="Economy"){
        totalCost = totalCost + (numOfDaysRented*4000);
    }else if(carType==="Midsize"){
        totalCost = totalCost + (numOfDaysRented*10000);
    }else if(carType==="Luxury"){
        totalCost = totalCost + (numOfDaysRented*20000);
    }
    return totalCost;
}
let cartype = "Economy";
let days = 4
console.log("Total cost :",calculateRentalCost(cartype,days));