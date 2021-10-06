// Example-1 Find sum of all values
let arr = [ 1, 2 ,3,4,5,6,7,8,9,10];
const sum = arr.reduce((acc,curr) => acc + curr,0);
console.log("Sum : ",sum);

// Example-2 Join char in given array and create str
let arr2 = ["i", "l" , "o", "v", "e","J","S"];
const stream = arr2.reduce((a,c) => a+c,"");
console.log("Stream : ",stream);

//Example-3 Join char in given array,reverse the string
let arr3 = ["a","b","c","d"];
const reversedStream = arr3.reduceRight((a,c) => a+c,"");
console.log("reverse Stream : ",reversedStream);

//Example-4   Find max. value 
let arr4 = [1, 500, 56, -4 , 99 , 564.8, 99.0 , 571, 8];
const maxVal = arr4.reduce((a,c) => {
    if(a < c){
        a = c;  
    }
    return a;
} ,0);
console.log("MAx  : ",maxVal);



//Example-5  Find the array of names whose age is > 40
let arr5 = [
    { name : "John" , department : "Detective" , age : 40},
    { name : "David" , department : "Sales" , age : 41},
    { name : "Sarah" , department : "Purchase" , age : 48},
    { name : "Lauren" , department : "IT" , age : 28},
    { name : "Kevin" , department : "Management" , age : 32}
];

// sol-1 Using filter & map
console.log(" using filter + map : ",arr5.filter(i => i.age > 40).map(i => i.name));

// sol-2 Using reduce
const result = arr5.reduce((a,c) => {
    if(c.age > 40){
        a.push(c.name);
    }
    return a;
},[]);
console.log("using reduce : ",result);






//Example-6 Find the frequency of same aged users from given array. 
// expected o/p : { 40 : 1 , 41 : 1 , 48 : 2 , }
let users = [
    { name : "John" , department : "Detective" , age : 40},
    { name : "David" , department : "Sales" , age : 41},
    { name : "Sarah" , department : "Purchase" , age : 48},
    { name : "Lauren" , department : "IT" , age : 48},
    { name : "Kevin" , department : "Management" , age : 32}
];

const output = users.reduce((a,c) => {
    a[c.age] ? (a[c.age] = ++a[c.age]) : (a[c.age] = 1);
    return a;
},{});
console.log(" Expected o/p : ",output);