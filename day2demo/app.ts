console.log('Hello everyone');



console.log('Hello everyone1');

















// function add(n1, n2) {
//         // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         //     throw new Error('Incorrect input!');
//         // }
//     return n1 + n2;
//   }
  
//   const number1 = 5;
//   const number2 = 2.8;
  
//   const result = add(number1, number2);
//   console.log(result);











// function add(n1:number, n2:number) {
//     // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//     //   throw new Error('Incorrect input!');
//     // }
//     return n1 + n2;
//   }
  
//   const number1 = 5;
//   const number2 = 2.8;
  
//   const result = add(number1, number2);
//   console.log('==>'+result);













// function add(n1: string, n2: number, showResult: boolean, phrase: string) {


//     // console.log("result==>"+ n1 + n2)
//     const result = n1 + n2;
//     if (showResult) {
//       console.log(phrase + result);
//     } else {
//       return result;
//     }
//   }
  
//   let number1:string='6';
 
  
// //   number1 = 5;
//   const number2 = 2.8;
//   number1='7'
//   const printResult = true;
//   let resultPhrase = 'Result is: ';
  
//   add(number1, number2, printResult, resultPhrase);
//   let param:boolean=true;

//   //result==> fdsfsdf
  //Result is: adsad




//object types

// let person:{
//     name:string,
//     age:number
// }= {
//     name: 'Maximilian',
//     age: 34
//   };
  
//   console.log(person.age);



//array types


    // const person = {
    //     name: 'Maximilian',
    //     age: 30,
    //     hobbies: ['Sports', 'Cooking']
    //   };
      
    //   let favoriteActivities: string[];
    //   favoriteActivities = ['Sports'];
      
    // //   console.log(person.name);
      
    //   for (const hobby of person.hobbies) {
    //     console.log(hobby.toUpperCase());
    //     // console.log(hobby.map()); 
    //   }







//tuple



    // const person
    // : {
    //     name: string;
    //     age: number;
    //     hobbies: string[];
    //     role: [number, string,number];
    //   } 
    //   = {
    //     name: 'Maximilian',
    //     age: 30,
    //     hobbies: ['Sports', 'Cooking'],
    //     role: [2,'string',4]
    //   };
      
    //   person.role.push('admin');
    //   person.role[1] = '10';
      
    //   // person.role = [0, 'admin', 'user'];
      
    // //   let favoriteActivities: string[];
    // //   favoriteActivities = ['Sports'];
      
    //   console.log(person.name);
      
    //   for (const hobby of person.hobbies) {
    //     console.log(hobby.toUpperCase());
    //     // console.log(hobby.map()); // !!! ERROR !!!
    //   }













    //enum  and any


// enum Role { SUCCESS = '100', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

// const person = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: 'string'
// };

// // person.role.push('admin');
// // person.role[1] = 10;

// // person.role = [0, 'admin', 'user'];

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); // !!! ERROR !!!
// }
// // Role.AUTHOR='mahesh';

// if (person.role === Role.AUTHOR) {
//   console.log('is author');
// }







// union



// function combine(input1: number | string, input2: number | string) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//       result = input1 + input2;
//     } else {
//       result = input1.toString() + input2.toString();
//     }
//     return result;
//   }
  
//   const combinedAges = combine(30, 26);
//   console.log(combinedAges);
  
//   const combinedNames = combine('Max', 'Anna');
//   console.log(combinedNames);






// Literal :taking input in their usual 


// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text'
// ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
//   // if (resultConversion === 'as-number') {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }
// }

// const combinedAges = combine(30, '26', 'as-text');
// console.log(combinedAges);






// aliases : reusable represeantation 

// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';

// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
//   // if (resultConversion === 'as-number') {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);










// function return type


// function add(n1, n2):string{
//     return n1+n2;
//   }



//   add(1,2)


//   add(2,4)






//function as a type and callback

// function add(n1: number, n2: number) {
//     return n1 + n2;
//   }
  
//   function printResult(num: number): void {
//     console.log('Result: ' + num);
//   }
  
//   function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
//   }
  
//   printResult(add(5, 12));
  
//   let combineValues: (a: number, b: number) => number;
  
//   combineValues = add;
//   // combineValues = printResult;
//   // combineValues = 5;
  
//   console.log(combineValues(8, 8));
  
//   // let someValue: undefined;
  
//   addAndHandle(10, 20, (result) => {
//     console.log(result);
//   });










// type unknown and return never

// let userInput: unknown;
// let userName: string;

// userInput = 5';
// userName = userInput;
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
//   // while (true) {}
// }

// result = generateError('An error occurred!', 500);
// console.log(result)
