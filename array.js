// console.log("array-learn");
let names = ["alina", "muskan", "iram"];

for (let name of names) {
       console.log(name);
}

//mutable - push() , pop()
names.push("nashra")
console.log(names);
names.pop("alina")
console.log(names);

//unshift(), shift()
names.unshift("anam");
console.log(names);

names.shift();
console.log(names);

const nums = [1, 2, 3, 4, 5, 7, 11, 13];
nums.forEach((nums) => console.log(nums));

const square = nums.map((num) => Math.pow(num, 3));
console.log(square);

//find()= return first matching element
const forundElement = nums.find((num) => num % 2 !== 0)
console.log(forundElement);

const oddNum = nums.find((num) => {
       let result = null;
       if (num > 5) {
              return num % 2 !== 0;
       }
       else {
              return 0;
       }
});
console.log(oddNum);

//filter se even number
const numGreaterThan5 = nums.filter((num) => num > 5);
console.log(numGreaterThan5);

// console.log(nums.indexOf(5)); check index

//findIndex()
const requerdIndex = nums.findIndex((nums) => nums > 3);
console.log(requerdIndex);

const allindex = [];
for (let i = 0; i < nums.length; i++) {
       if (nums[i] > 5) {
              allindex.push(i);
       }
       console.log("all index", allindex);
}


//slice
const num = [2, 3, 4, 5, 6, 8, 10];
console.log(num.slice(2, 4));

//splice add, remove, replace, changes in orignal array

console.log(num.length, 0, 7, 80);
console.log(num);

// Can we remove first two elements and add 2 element at the end using splice ??
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = fruits.toSpliced(2, 0, "Lemon", "Kiwi");
console.log(fruits2);

//shallow copy 
const animal=["dog","zebra","cat","billi"];
const newAnimal=[...animal,"fox","ox"];
console.log(newAnimal);

//array destructring
const [one,two,three]=animal;
console.log("secondElement",two);


//include ()
console.log(animal.includes("zebra")) // answer true false dega 


