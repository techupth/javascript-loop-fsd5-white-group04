// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";
// let f = 1;
// // Start coding here
// for (let i of companyName) {
//   console.log(`Number ` + f + ` character is ` + i);
//   f++;
// }
for (let i in companyName) {
  console.log(`Number ${Number(i) + 1} character is  + ${companyName[i]}`);
}
