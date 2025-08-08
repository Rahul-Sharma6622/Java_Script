//chapter 4 : Array in JS.
//collections of items.

// let arr = ["Rahul","Gulshan","Aman","Arun"];
// console.log(arr.length);

// const marks = [50,60,70,80,90];
// console.log(marks);
// console.log(marks.length);  //property

// let heroes = ["ironman","superman","thor","hulk"];
// console.log(heroes);
// console.log(typeof heroes);  //object
// console.log(heroes[2]);  //thor


// let mark1 = [10,20,30,40,50,60];
//   let m = mark1[2]=90;
//   console.log(m);

//string immutable hota hai mean no change
// array mutable hota hai mtlb array ke ander change kar sakte hai.

//looping over an array
// let name = ["Raj","virat","rohit","shubham","dhoni","sachin"];
// for(let index = 0; index <name.length;index ++ ){
//     console.log(name[index]);
// }

// for(let values of name){
//     console.log(values);
// }

// let city =["pune","mumbai","hyderabad","gurgaon","bihar"];
// for(let values of city){
//     console.log(values);
//     console.log(values.toLocaleUpperCase());

// }

//practice set to find average mark of given array.

// let marks = [85,97,44,37,76,60];
// let sum = 0;
//  for(let val of marks){
//     sum = sum+val;
//  }
//  let average = sum/marks.length;
//  console.log(sum)
//  console.log(`average of given array is ${average}`);

//practice set

// let items = [250,645,300,900,50];
//   for(let i = 0;i<items.length;i++){
//     let offers = items[i]/10;
//     items[i] = items[i]-offers;
//   }
//   console.log(items)


//array method

// let foodItems =["potato","apple","tomato","litchi","pineapple"];
// console.log(foodItems);
// console.log(foodItems.push("chips","paneer","burger"));
// let deletedItems = foodItems.pop();
// console.log(deletedItems);  //burger delete.

// console.log(foodItems.toString());


// let marvelHeroes = ["thor","spiderman","ironman",];
// let dcHeroes = ["superman","batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// marvelHeroes.unshift("shahrukh khan");  //add to start
// console.log(marvelHeroes);

// marvelHeroes.shift();  //delet from start
// console.log(marvelHeroes);


// let item3 = ["sugar","gram","oil","soap","pens"];
//  console.log(item3.slice(0,3));
//  console.log(item3);

let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// arr.splice(2,2,101,102);
// console.log(arr);

// //add element
// arr.splice(2,0,104);
// console.log(arr);

//delete element
// arr.splice(3,1);
// console.log(arr);


// //replace element
// arr.splice(3,1,101);
// console.log(arr);


//practise set 
//create a array to store companies-> "Bloomberg","Microsoft","uber","Google","IBM","Netflix",
//remove the first company from the array.
//remove the uber and add ola in its place.
//add amazon at the end.

let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "netflix"];

console.log(companies);
companies.shift();  //remove the first company from the array
console.log(companies);

companies.splice(1, 1, "ola");  //remove uber and add ola in its palce
console.log(companies);

companies.push("Amazon");
console.log(companies);


