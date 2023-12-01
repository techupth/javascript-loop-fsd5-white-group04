// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length - 1; i >= 0; i--) {
  // ประกาศตัวแปร i มีค่าเท่ากับความยาวของ companyName - 1 (- 1 จะเริ่มนับ index สุดท้ายของ string )ถ้า i มากกว่าหรือเท่า 0 (loop จะทำงานจน i เท่ากับ 0 )ให้ลดค่า i ลงทีละ 1 ตัวทุกรอบของการวน loop
  reversedCompanyName += companyName[i]; // reassign ค่าให้ reversedCompanyName โดยเอาค่าจาก companyName ที่ i มาต่อกัน จนวนรอบเท่ากับความยาวของ companyName
}

console.log(reversedCompanyName); // console.log ออกมาเป็น "dnaliaht pUhceT"
