// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
for (let i = 0; i < scores.length; i++) {
  // ใช้ for loop เพื่อวน loop ใน array scores
  scores[i] = scores[i] - 10; // ให้ scores ที่ i ลบด้วย 10
  console.log(scores[i]); // 79, 60, 50, 40, 90, 61
}
