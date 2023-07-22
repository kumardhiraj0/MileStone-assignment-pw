// let map = new Map();

// map.set(2.4,1);
// map.set(1,10);
// map.set(true,"hello");
// map.set("hello","welcome");

// console.log(map);

// //loop over map

// //keys
// for(let key of map.keys()){
//     console.log("key",key);
// }

// //values
// for(let val of map.values()){
//     console.log("value",val);
// }

// //entries
// for(let entry of map){
//     console.log("entry",entry)
// }

// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
//   const { name, age, address: { city,country } } = person;

//   console.log(name); // Output: 'John'
//   console.log(age); // Output: 30
//   console.log(city); // Output: 'New York'
//   console.log(country)//output:"USA"
  

let arr = [3,5,1,8,7,10,2]
let sum = 10
//find pair of sum  => [3,7] , [8,2];

let set = new Set();
for(let i = 0 ; i<arr.length; i++){
    if(set.has(sum-arr[i])){
        console.log([sum-arr[i],arr[i]]);
    }
    else{
        set.add(arr[i]);
    }
}