let BillSplitter = (costOfDish,numOfPeoples)=>{
    let eachPersonPaid = costOfDish/numOfPeoples;
    return eachPersonPaid;
}
let costOfDish = 500;
let numOfPerson = 5;
console.log("Each will paid :" , BillSplitter(costOfDish,numOfPerson));