// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000]; // variable numbers เป็น array มี 4 poperty คือ 100, 20, 3, 1000
let minNumber; // variable minNumber เป็น undefined
// Start coding here
minNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  //เขียน loop condition เพื่อหาค่าที่น้อยที่สุดใน array
  if (numbers[i] < minNumber) {
    //ถ้า numbers[i] มีค่าน้อยกว่า minNumber ให้เปลี่ยนค่า minNumber เป็น numbers[i]
    minNumber = numbers[i]; // assign ค่าใหม่ให้กับ minNumber
  }
}

console.log(minNumber); // 3
