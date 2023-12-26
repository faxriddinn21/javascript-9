// object-1

// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["html", "css", "js", "react"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };
  
//   const output = Object.entries(me).map(([key, value]) => {
//     if (Array.isArray(value)) {
     
//       return `${key}: ${value.join(",")}`;
//     } else {
    
//       return `${key}: ${value}`;
//     }
//   }).join("\n");
  
//   console.log(output);
  





//   object-2

// function createSquaredObject(n) {
//     const result = {};
//     for (let i = 1; i <= n; i++) {
//       result[i] = i * i;
//     }
//     return result;
//   }
  
//   const inputNumber = 5;
//   const outputObject = createSquaredObject(inputNumber);
  
//   console.log(outputObject);
  




// object-3

// const exampleObject = {1: 1, 2: 4, 3: 9, 4: 16, 5: 25};

// const keys = Object.keys(exampleObject);
// const values = Object.values(exampleObject);

// const keysSum = keys.reduce((sum, key) => sum + parseInt(key), 0);
// const valuesSum = values.reduce((sum, value) => sum + value, 0);

// console.log("Kalitlari yig'indisi:", keysSum);
// console.log("Qiymatlari yig'indisi:", valuesSum);





// object-4

// const stringsArray = ["apple", "banana", "orange", "kiwi"];

// const lengthObject = {};

// for (let i = 0; i < stringsArray.length; i++) {
//   const currentString = stringsArray[i];
//   lengthObject[currentString] = currentString.length;
// }

// console.log(lengthObject);





// object-5

// const productsPrices = {
//     "Apelsin": 10000,
//     "Olma": 12000,
//     "Mandarin": 8000,
//     "Banan": 20000
//   };
  
//   const totalValue = Object.values(productsPrices).reduce((sum, price) => sum + price, 0);
  
//   console.log(totalValue);
  





//   object-6

// function defineObject(obj) {
//     const keys = Object.keys(obj);
  
//     for (let key of keys) {
//       if (typeof key !== 'string') {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   const exampleObject = { abc: 1, 123: 2, d: 5 };
//   const result = defineObject(exampleObject);
  
//   console.log(result);
  




//   object-7

// function removeFalsyValues(obj) {
//     const filteredEntries = Object.entries(obj).filter(([key, value]) => value);
  
//     return Object.fromEntries(filteredEntries);
//   }
  
//   const inputObject = { a: false, b: 12, c: true, d: 0 };
//   const outputObject = removeFalsyValues(inputObject);
  
//   console.log(outputObject);
  




//   object-8

// function createFrequencyObject(arr) {
//     const frequencyObject = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const currentNumber = arr[i];
  
//       if (frequencyObject[currentNumber]) {
     
//         frequencyObject[currentNumber] += 1;
//       } else {
//         frequencyObject[currentNumber] = 1;
//       }
//     }
  
//     return frequencyObject;
//   }
  
//   const inputArray = [1, 2, 3, 2, 4, 1, 5, 2];
//   const outputObject = createFrequencyObject(inputArray);
  
//   console.log(outputObject);
  




// object-10

// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${status};`);
//   }
  




// object-11

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   let totalSum = 0;
  
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const discountedPrice = (1 - product.discount / 100) * product.price;
//     const productSum = discountedPrice * product.quantity;
//     totalSum += productSum;
//   }
  
//   console.log("Umumiy summa:", totalSum);
  




// object-12

// const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };
  
//   const resultArray = [];
  
//   for (const key in obj) {
//     resultArray.push(key, obj[key]);
//   }
  
//   console.log(resultArray);
  





// object-14

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};

// function evaluateAnswers(rightAnswers, myAnswers) {
//   let correctCount = 0;
//   let incorrectCount = 0;

//   for (const questionNumber in rightAnswers) {
//     const rightAnswer = rightAnswers[questionNumber];
//     const myAnswer = myAnswers[questionNumber];

//     if (myAnswer === rightAnswer) {
//       correctCount++;
//     } else {
//       incorrectCount++;
//     }
//   }

//   return { correct: correctCount, incorrect: incorrectCount };
// }

// const evaluation = evaluateAnswers(rightAnswers, myAnswers);
// console.log("To'g'ri javoblar:", evaluation.correct);
// console.log("Noto'g'ri javoblar:", evaluation.incorrect);







// object-15

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };

// function getMultipleValues(obj, n) {
//   const result = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = obj[key] * n;
//     }
//   }

//   return result;
// }

// const res = getMultipleValues(obj, n);
// console.log(res);






// object-16

// const product = {
//     name: "Iphone 14",
//     company: {
//       name: "Apple",
//       price: "200 mlrd",
//       founder: {
//         firstName: "Steve",
//         lastName: "Jobs",
//         birthDate: 1950,
//       },
//     },
//   };
  
//   const { name, company: { name: companyName, price, founder: { firstName, lastName, birthDate } } } = product;
  
//   console.log("Name:", name);
//   console.log("Company Name:", companyName);
//   console.log("Price:", price);
//   console.log("Founder First Name:", firstName);
//   console.log("Founder Last Name:", lastName);
//   console.log("Founder Birth Date:", birthDate);
  





// object-17

// const students = [
//     { name: "Aziz", percentage: 80 },
//     { name: "Farrukh", percentage: 95 },
//     { name: "Munisa", percentage: 75 },
//     // Qolgan o'quvchilar...
//   ];
  
//   function calculateAveragePercentage(students) {
//     let totalPercentage = 0;
  
//     for (let i = 0; i < students.length; i++) {
//       totalPercentage += students[i].percentage;
//     }
  
//     const averagePercentage = totalPercentage / students.length;
//     return averagePercentage;
//   }
  
//   function addProperties(students) {
//     const averagePercentage = calculateAveragePercentage(students);
  
//     const newStudentsArray = students.map(student => {
//       return {
//         ...student,
//         averagePercentage,
//         status: student.percentage >= 80 ? "Top student" : "Regular student",
//       };
//     });
  
//     return newStudentsArray;
//   }
  
//   const updatedStudents = addProperties(students);
  
//   console.log(updatedStudents);
  





// object-18

// const students = [
//     { name: "Aziz", percentage: 80 },
//     { name: "Farrukh", percentage: 95 },
//     { name: "Munisa", percentage: 75 },
//     
//   ];
  
//   function calculateAveragePercentage(students) {
//     let totalPercentage = 0;
  
//     for (let i = 0; i < students.length; i++) {
//       totalPercentage += students[i].percentage;
//     }
  
//     const averagePercentage = totalPercentage / students.length;
//     return averagePercentage;
//   }
  
//   function addProperties(students) {
//     const averagePercentage = calculateAveragePercentage(students);
  
//     const newStudentsArray = students.map(student => {
//       let grade;
  
//       if (student.percentage >= 90) {
//         grade = 5;
//       } else if (student.percentage >= 80) {
//         grade = 4;
//       } else if (student.percentage >= 70) {
//         grade = 3;
//       } else {
//         grade = 2;
//       }
  
//       return {
//         ...student,
//         averagePercentage,
//         status: student.percentage >= 80 ? "Top student" : "Regular student",
//         grade,
//       };
//     });
  
//     return newStudentsArray;
//   }
  
//   const updatedStudents = addProperties(students);
  
//   console.log(updatedStudents);
  





// object-19

const students = [
    { name: "Aziz", percentage: 80 },
    { name: "Farrukh", percentage: 95 },
    { name: "Munisa", percentage: 75 },
  ];
  
  function calculateAveragePercentage(students) {
    let totalPercentage = 0;
  
    for (let i = 0; i < students.length; i++) {
      totalPercentage += students[i].percentage;
    }
  
    const averagePercentage = totalPercentage / students.length;
    return averagePercentage;
  }
  
  function addProperties(students) {
    const averagePercentage = calculateAveragePercentage(students);
  
    const newStudentsArray = students.map(student => {
      let grade;
  
      if (student.percentage >= 90) {
        grade = 5;
      } else if (student.percentage >= 80) {
        grade = 4;
      } else if (student.percentage >= 70) {
        grade = 3;
      } else {
        grade = 2;
      }
  
      return {
        ...student,
        averagePercentage,
        status: student.percentage >= 80 ? "Top student" : "Regular student",
        grade,
        isPassed: student.percentage >= 70 && student.percentage === averagePercentage,
      };
    });
  
    return newStudentsArray;
  }
  
  const updatedStudents = addProperties(students);
  
  console.log(updatedStudents);
  





//   object-20

const pupils = [
    {
      name: "Elbek",
      percentage: 95,
    },
    {
      name: "Zafar",
      percentage: 78,
    },
    {
      name: "Aziz",
      percentage: 83,
    },
    {
      name: "Jasur",
      percentage: 88,
    },
    // Qolgan o'quvchilar...
  ];
  
  function countPassFail(pupils) {
    let passedCount = 0;
    let failedCount = 0;
  
    for (let i = 0; i < pupils.length; i++) {
      const student = pupils[i];
  
      if (student.percentage >= 70) {
        passedCount++;
      } else {
        failedCount++;
      }
    }
  
    return { passed: passedCount, failed: failedCount };
  }
  
  const result = countPassFail(pupils);
  console.log("Imtihondan o'tganlar:", result.passed);
  console.log("Imtihonda o'ta olmaganlar:", result.failed);
  