//===========================================================================================================================================

// 1) sumTo(n) — 1 dan n gacha yig‘indi
// Vazifa:
// sumTo(n) nomli function yozing. U n sonini qabul qiladi va 1 dan n gacha bo‘lgan sonlar
// yig‘indisini qaytarsin.
// Shartlar:
// ● n har doim butun son bo‘ladi.
// ● Agar n <= 0 bo‘lsa, 0 qaytaring.
// ● Array metodlardan foydalanmang (reduce va h.k. yo‘q).
// ● Natijani return qiling.
// Misollar:
// ● sumTo(5) → 15 (1+2+3+4+5)
// ● sumTo(1) → 1
// ● sumTo(0) → 0
// ● sumTo(-10) → 0

// javob:::

// function sumTo(n) {
//   if (n <= 0) {
//     return 0;
//   }

//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumTo(5));

//=================================================================================================================================================

// 2) isPrime(n) — tub son tekshirish
// Vazifa:
// isPrime(n) function yozing. U n sonini qabul qiladi va n tub son bo‘lsa true, aks holda
// false qaytarsin.
// Shartlar:
// ● Tub son: 1 dan katta va faqat 1 va o‘ziga bo‘linadigan son.
// ● n butun son bo‘ladi.
// ● n <= 1 bo‘lsa, false qaytaring.
// ● Juda katta tekshiruv qilmaslik uchun tekshiruvni i*i <= n usulida qiling (ixtiyoriy, lekin
// tavsiya).
// Misollar:
// ● isPrime(2) → true
// ● isPrime(3) → true
// ● isPrime(4) → false

// javobi:::

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(17));

//==========================================================================================================================================

// 3) reverseStr(str) — stringni teskari qilish
// Vazifa:
// reverseStr(str) function yozing. U str (string) qabul qiladi va stringni teskari qilib
// qaytarsin.
// Shartlar:
// ● split(), reverse(), join() ishlatmang.
// ● Loop (for) yoki while ishlatib bajaring.
// ● Natijani return qiling.
// Misollar:
// ● reverseStr("salom") → "molas"
// ● reverseStr("abc") → "cba"
// ● reverseStr("") → ""

// javobi::::

// function reverseStr(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseStr("salom"));

//==================================================================================================================================================

// 4) countVowels(str) — unlilar sonini topish
// Vazifa:
// countVowels(str) function yozing. U str qabul qiladi va string ichidagi unlilar (a, e, i,
// o, u) sonini qaytarsin.
// Shartlar:
// ● Katta-kichik harflarni bir xil hisoblang (A ham a).
// ● Unlilar faqat: a, e, i, o, u.
// ● return son qaytarsin.
// ● regex ishlatish mumkin, lekin ishlatmasangiz ham bo‘ladi.
// Misollar:
// ● countVowels("Salom") → 2 (a, o)
// ● countVowels("JAVA") → 2 (A, A)
// ● countVowels("bbb") → 0

// javobi:::

// function countVowels(str) {
//   return str
//     .toLowerCase()
//     .split("")
//     .filter((char) => "aeiou".includes(char)).length;
// }

// console.log(countVowels("assalomu alekum"));

//======================================================================================================================================================

// 5) findMax(arr) — eng katta sonni topish
// Vazifa:
// findMax(arr) function yozing. U arr (sonlardan iborat array) qabul qiladi va eng katta sonni
// qaytarsin.
// Shartlar:
// ● Math.max() ishlatmang.
// ● Array bo‘sh bo‘lsa null qaytaring.
// ● arr ichida kamida bitta son bo‘lishi mumkin.
// ● Loop bilan toping.
// Misollar:
// ● findMax([1, 5, 3]) → 5
// ● findMax([-10, -3, -7]) → -3
// ● findMax([]) → null

// javobi:::

// function findMax(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// console.log(findMax([1, 2, 9]));

//=======================================================================================================================================================

// 6) To‘liq CRUD masala (bitta data bilan)
// “Student Manager” (DOMsiz CRUD)
// Sizda students degan array bor. Har bir student quyidagi ko‘rinishda bo‘ladi:
// {
// id: 1,
// name: "Ali",
// age: 16,
// score: 85
// }
// Siz students bilan ishlaydigan 4 ta asosiy CRUD function yozishingiz kerak.
// let students = [];
// let nextId = 1;

// function addStudent(name, age, score) {
//   const student = { id: nextId++, name, age, score };
//   students.push(student);
//   return student;
// }

// function getAll() {
//   return students;
// }

// function getById(id) {
//   return students.find((s) => s.id === id) || null;
// }

// function update(id, newData) {
//   const student = students.find((s) => s.id === id);
//   if (!student) return null;
//   Object.assign(student, newData);
//   return student;
// }

// function remove(id) {
//   const index = students.findIndex((s) => s.id === id);
//   if (index === -1) return null;
//   return students.splice(index, 1)[0];
// }

// addStudent("Ali", 16, 85);
// addStudent("Vali", 17, 90);
// addStudent("Kamol", 15, 70);

// console.log(getAll());
// console.log(getById(2));
// console.log(update(1, { score: 95 }));
// console.log(remove(3));

// ===============================================================================================================================================
// 6.1) CREATE — createStudent(name, age, score)
// Vazifa:
// Yangi student qo‘shing.
// Shartlar:
// ● name bo‘sh bo‘lmasin (bo‘sh bo‘lsa "Invalid name" qaytaring).
// ● age 5 dan kichik bo‘lmasin (kichik bo‘lsa "Invalid age" qaytaring).
// ● score 0..100 oralig‘ida bo‘lsin (aks holda "Invalid score" qaytaring).
// ● id avtomatik berilsin:
// ○ array bo‘sh bo‘lsa id = 1
// ○ aks holda oxirgi element id + 1
// ● yangi student objectni arrayga qo‘shing va o‘sha objectni return qiling.

// let students = [];

// function createStudent(name, age, score) {
//   if (!name || name.trim() === "") return "Invalid name";
//   if (age < 5) return "Invalid age";
//   if (score < 0 || score > 100) return "Invalid score";

//   const id = students.length === 0 ? 1 : students[students.length - 1].id + 1;

//   const student = { id, name, age, score };
//   students.push(student);
//   return student;
// }

// console.log(createStudent("", 12, 80));

// ==========================================================================================================
// 6.2) READ — getStudentById(id)

// Vazifa:
// id bo‘yicha studentni topib qaytaring.
// Shartlar:
// ● topilsa student objectni return qiling.
// ● topilmasa null qaytaring.

// function getStudentById(id) {
//   return students.find((s) => s.id === id) || null;
// }

// console.log(createStudent("Ali", 16, 75));
// console.log(createStudent("Vali", 17, 70));

// console.log(getStudentById(2));

// ==========================================================================================================
// 6.3) UPDATE — updateStudent(id, data)
// Vazifa:
// id bo‘yicha student toping va data ichidagi qiymatlar bilan yangilang.
// Shartlar:
// ● data ichida quyidagilar kelishi mumkin: name, age, score
// ● Faqat kelgan fieldlarni yangilang, qolganiga tegmang.
// ● Agar student topilmasa "Student not found" qaytaring.
// ● Yangilangan student objectni return qiling.
// ● Update paytida ham validatsiya bo‘lsin:
// ○ name bo‘sh bo‘lsa "Invalid name"
// ○ age 5 dan kichik bo‘lsa "Invalid age"
// ○ score 0..100 oralig‘ida bo‘lmasa "Invalid score"

// function updateStudent(id, data) {
//   const student = students.find((s) => s.id === id);
//   if (!student) return "Student not found";

//   if (data.name !== undefined && (!data.name || data.name.trim() === ""))
//     return "Invalid name";
//   if (data.age !== undefined && data.age < 5) return "Invalid age";
//   if (data.score !== undefined && (data.score < 0 || data.score > 100))
//     return "Invalid score";

//   Object.assign(student, data);
//   return student;
// }

// createStudent("Ali", 14, 60);
// createStudent("Vali", 17, 80);
// console.log(updateStudent(99, { score: 90 }));

// ======================================================================================================

// 6.4) DELETE — deleteStudent(id)
// Vazifa:
// id bo‘yicha studentni o‘chiring.
// // Shartlar:
// // ● agar topilsa, arraydan o‘chirib, o‘chirilgan studentni return qiling
// // ● topilmasa null qaytaring
// function deleteStudent(id) {
//   const index = students.findIndex((s) => s.id === id);
//   if (index === -1) return null;
//   return students.splice(index, 1)[0];
// }

// //
// createStudent("Ali", 14, 80);
// createStudent("Vali", 17, 70);
// createStudent("Kamol", 15, 60);

// console.log(deleteStudent(99));
