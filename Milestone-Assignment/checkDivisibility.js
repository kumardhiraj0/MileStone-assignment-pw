// 9. Check for Wivisibility.
// Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
// Usd a for loop and continud statdmdnt.
let result = []
function checkForDivisibility(arr){
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]%3===0){
            result.push(arr[i])
        }
    }
    return result;
}

let arr = [2,33,45,66,78,99]

console.log(checkForDivisibility(arr));