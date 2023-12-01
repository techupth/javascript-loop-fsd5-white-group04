// Exercise #2: Sum the Numbers
let numbers = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here
for (const number of numbers) {
  // ใช้ for of loop เพื่อวน loop ใน array numbers
  total += number; // เอา total บวกกับ number แล้ว assign ค่าใหม่ให้กับ total
}

console.log(total); // 150
