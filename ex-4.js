// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0; // index ที่ 0
while (i < restaurants.length) {
  // ใช้ while loop เพื่อวน loop จนกว่าจะหมด array restaurants
  newRestaurants.push("Restaurant Name: " + restaurants[i]); // push ค่าเข้าไปใน array newRestaurants
  i++; // วน loop ทีี่ index ถัดไป
}

console.log(newRestaurants);
