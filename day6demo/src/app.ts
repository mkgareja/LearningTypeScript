//intersection type 


// type Admin = {
//     name: string; //admin
//     privileges: string[]; //level 1 access
// };

// type Employee = {
//     name: string;
//     startDate: Date;
//     age:number;
// };

// type Department = {
//     departmentName:string
// };

// type Address = {
//     address:string
// };


// // interface ElevatedEmployee extends Employee, Admin {}

// type ElevatedEmployee = Admin & Employee & Department & Address;

// const emp1: ElevatedEmployee = {
//     name: 'Mahesh',
//     privileges: ['create-server'],
//     startDate: new Date(),
//     age:23,
//     departmentName:'dept name',
//     address:'Gandhinager'
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// let temp:Universal = 123;





//type guard

// type Admin = {
//     name: string;
//     privileges: string[];
//   };
  
//   type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   // interface ElevatedEmployee extends Employee, Admin {}
  
//   type ElevatedEmployee = Admin & Employee;
  
//   const e1: ElevatedEmployee = {
//     name: 'Max',
//     privileges: ['create-server'],
//     startDate: new Date()
//   };
  
//   type Combinable = string | number;
//   type Numeric = number | boolean;
  
//   type Universal = Combinable & Numeric;

  
//   function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//       return a.toString() + b.toString();
//     }
//         return a + b;
    
    
//   }

// //   add('a','b') //ab
// //   add(1,2) //3
// //   add(1,'2') //12
  
//   type UnknownEmployee = Employee | Admin;
  
//   function printEmployeeInformation(emp: UnknownEmployee) {
//     // console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//       console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//       console.log('Start Date: ' + emp.startDate);
//     }
//     return emp;
//   }
  
// //   printEmployeeInformation({ name: 'Manu', privileges: ['admin']});
  
//   class Car {
//     drive() {
//       console.log('Driving...');
//     }
//   }
  
//   class Truck {
//     drive() {
//       console.log('Driving a truck...');
//     }
  

//     loadCargo(amount: number) {
//       console.log('Loading cargo ...' + amount);
//     }
//   }
  
//   type Vehicle = Car | Truck;
  
 
  
//   function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//       vehicle.loadCargo(1000);
//     }
//   }
  
//   const v1 = new Car();
//   const v2 = new Truck();
//   useVehicle(v1);
//   useVehicle(v2);



//Type casting 
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('input1');
// // const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there!';
// }
// // userInputElement.value="hey"





//index properties 


// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
//     [prop: string]: string;
//     // email:string;
//     // username:string;
//     // err:string;
//   }
  
//   const errorBag: ErrorContainer = {
//     '1': 'Not a valid email!',
//     '2': 'Must start with a capital character!',
//     '4':'erro'
//   };




//Function Overloading


// function add(a:string, b:string):string;

// function add(a:number, b:number): number;

// function add(a: any, b:any): any {
//     return a + b;
// }

// add("Hello ", "Steve"); // returns "Hello Steve" 
// add(10, 20); // returns 30 









//generic


// function getArray(items : any[] ) : any[] {
//     return new Array().concat(items);
// }

// let myNumArr = getArray([100, 200, 300]);
// let myStrArr = getArray(["Hello", "World"]);

// myNumArr.push(400); // OK
// myStrArr.push("Hello TypeScript"); // OK

// myNumArr.push("Hi"); // OK
// myStrArr.push(500); // OK

// console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
// console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]




// ===>

// function getArray<U>(items : U[] ) : U[] {
//     return new Array<U>().concat(items);
// }

// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(["Hello", "World"]);

// myNumArr.push(400); // OK
// myStrArr.push("Hello TypeScript"); // OK

// myNumArr.push("Hi"); // Compiler Error
// // myStrArr.push(500); // Compiler Error






//Constraints

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// console.log(mergedObj);



//keyof


function extractAndConvert(obj:any,key:any) {
    return 'Value: ' + obj[key];
  }
console.log( extractAndConvert({ name: 'Max' }, 'name1'))

// function extractAndConvert<T extends object, U extends keyof T>(obj: T,key: U) {
//     return 'Value: ' + obj[key];
//   }
  
//   extractAndConvert({ name: 'Max' }, 'name');






//generic with class


// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];
  
//     addItem(item: T) {
//       this.data.push(item);
//     }
  
//     removeItem(item: T) {
//       if (this.data.indexOf(item) === -1) {
//         return;
//       }
//       this.data.splice(this.data.indexOf(item), 1); // -1
//     }
  
//     getItems() {
//       return [...this.data];
//     }
//   }
  
//   const textStorage = new DataStorage<string>();
//   textStorage.addItem('Max');
//   textStorage.addItem('Manu');
//   textStorage.removeItem('Max');
//   console.log(textStorage.getItems());
  
//   const numberStorage = new DataStorage<number>();





///generic with interface and inbuilt generic types

// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntil: Date;
//   }
  
//   function createCourseGoal(
//     title: string,
//     description: string,
//     date: Date
//   ): CourseGoal {
//     let courseGoal: Partial<CourseGoal> = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntil = date;
//     return courseGoal as CourseGoal;
//   }
  
//   const names: Readonly<string[]> = ['Max', 'Anna'];







//public and private ,shorthand init, readonly

// class Department {
// //   name: string;
// //   employees: string[] = [];

//   constructor(public name: string,public employees:string[]) {
// //   constructor(n: string) {
//     // this.name = n;
//   }

//   describe(this: Department) {
//     console.log('Department: ' + this.name);
//   }

//   addEmployee(employee: string) {
//     //   this.id='www';
//     // validation etc
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// // const accounting = new Department('id','Accounting',[]);
// const accounting = new Department('Accounting',['mahesh1']);

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// accounting.employees[2] = 'Mahesh';

// // accounting.describe();
// // accounting.name = 'NEW NAME';
// accounting.printEmployeeInformation();



// detp = IT help tech, HR:Admin,
//name 


///inheritance 

// class Department {
//     // private readonly id: string;
//     // private name: string;
//     employees: string[] = [];
  
//     constructor(private readonly id: string, public name: string) {
//       // this.id = id;
//       // this.name = n;
//     }
  
//     describe(this: Department) {
//       console.log(`Department (${this.id}): ${this.name}`);
//     }
  
//     addEmployee(employee: string) {
//       // validation etc
//       // this.id = 'd2';
//       this.employees.push(employee);
//     }
  
//     printEmployeeInformation() {
//       console.log(this.employees.length);
//       console.log(this.employees);
//     }
//   }
  
//   class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, admins: string[]) {
//       super(id, 'IT');
//       this.admins = admins;
//     }
//   }
  
//   class AccountingDepartment extends Department {
//     constructor(id: string, private reports: string[]) {
//       super(id, 'Accounting');
//     }
  
//     addReport(text: string) {
//       this.reports.push(text);
//     }
  
//     printReports() {
//       console.log(this.reports);
//     }
//   }
  
//   const it = new ITDepartment('d1', ['Max']);
  
//   it.addEmployee('Max');
//   it.addEmployee('Manu');
  
//   it.employees[2] = 'Anna';
  
// //   it.describe();
// //   it.name = 'NEW NAME';
//   it.printEmployeeInformation();
  
//   console.log(it);
  
//   const accounting = new AccountingDepartment('d2', ['Something went wrong...']);

//   accounting.addEmployee('ac1');
//   accounting.addEmployee('ac2');
  
// //   accounting.addReport('Something went wrong...');
  
// console.log(accounting);




//method overriding and protected

// class Department {
//     // private readonly id: string;
//     // private name: string;
//     public employees: string[] = [];
  
//     constructor(private readonly id: string, public name: string) {
//       // this.id = id;
//       // this.name = n;
//     }
  
//     describe(this: Department) {
//       console.log(`Department (${this.id}): ${this.name}`);
//     }
  
//     addEmployee(employee: string) {
//       // validation etc
//       // this.id = 'd2';
//       this.employees.push(employee);
//     }
  
//     printEmployeeInformation() {
//       console.log(this.employees.length);
//       console.log(this.employees);
//     }
//   }
  
//   class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, admins: string[]) {
//       super(id, 'IT');
//       this.admins = admins;
//     }
//   }
  
//   class AccountingDepartment extends Department {
//     constructor(id: string, private reports: string[]) {
//       super(id, 'Accounting');
//     }
  
//     addEmployee(name: string) {
//       if (name != 'Max') {
//         return false;
//       }else{
//         this.employees.push(name);
//       }
      
//     }
  
//     addReport(text: string) {
//       this.reports.push(text);
//     }
  
//     printReports() {
//       console.log(this.reports);
//     }
//   }
  
//   const it = new ITDepartment('d1', ['Max']);
// //   it.employees=['mahesh']
  
//   it.addEmployee('Max');
//   it.addEmployee('Manu');
  
//   // it.employees[2] = 'Anna';
  
//   it.describe();
//   it.name = 'NEW NAME';
//   it.printEmployeeInformation();
  
//   console.log(it);
  
//   const accounting = new AccountingDepartment('d2', []);
  
//   accounting.addReport('Something went wrong...');
  
//   accounting.addEmployee('Max');
//   accounting.addEmployee('Manu');
  
//   accounting.printReports();
//   accounting.printEmployeeInformation();








//getter and setter



// class Department {
//     // private readonly id: string;
//     // private name: string;
//     protected employees: string[] = [];
  
//     constructor(private readonly id: string, public name: string) {
//       // this.id = id;
//       // this.name = n;
//     }
  
//     describe(this: Department) {
//       console.log(`Department (${this.id}): ${this.name}`);
//     }
  
//     addEmployee(employee: string) {
//       // validation etc
//       // this.id = 'd2';
//       this.employees.push(employee);
//     }
  
//     printEmployeeInformation() {
//       console.log(this.employees.length);
//       console.log(this.employees);
//     }
//   }
  
//   class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, admins: string[]) {
//       super(id, 'IT');
//       this.admins = admins;
//     }
//   }
  
//   class AccountingDepartment extends Department {
//     private lastReport: string;
  
//     get mostRecentReport() {
//       if (this.lastReport) {
//         return this.lastReport;
//       }
//       throw new Error('No report found.');
//     }
  
//     set mostRecentReport(value: string) {
//       if (!value) {
//         throw new Error('Please pass in a valid value!');
//       }
//       this.addReport(value);
//     }
  
//     constructor(id: string, private reports: string[]) {
//       super(id, 'Accounting');
//       this.lastReport = reports[0];
//     }
  
//     addEmployee(name: string) {
//       if (name === 'Max') {
//         return;
//       }
//       this.employees.push(name);
//     }
  
//     addReport(text: string) {
//       this.reports.push(text);
//       this.lastReport = text;
//     }
  
//     printReports() {
//       console.log(this.reports);
//     }
//   }
  
//   const it = new ITDepartment('d1', ['Max']);
  
//   it.addEmployee('Max');
//   it.addEmployee('Manu');
  
//   // it.employees[2] = 'Anna';
  
//   it.describe();
//   it.name = 'NEW NAME';
//   it.printEmployeeInformation();
  
//   console.log(it);
  
//   const accounting = new AccountingDepartment('d2', []);
  
//   accounting.mostRecentReport = 'Year End Report';
//   accounting.addReport('Something went wrong...');
//   console.log(accounting.mostRecentReport);
  
//   accounting.addEmployee('Max');
//   accounting.addEmployee('Manu');
  
//   accounting.printReports();
//   accounting.printEmployeeInformation();
  
//   const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
//   accountingCopy.describe();
  






    //default static method and properties 

//   Math.






  // interface : an interface defines the syntax that any entity must adhere to.
  //its not same as class or obj


//   interface Person {
//     name: string;
//     age: number;
  
//     greet(phrase: string): void;
//   }
  
//   let user1: Person;
  
//   user1 = {
//     name: 'Mahesh',
//     age: 30,
//     greet(phrase: string) {
//       console.log(phrase + ' ' + this.name);
//     }
//   };
  
//   user1.greet('Hi there - I am');






//interface with classes

// interface Greetable {
//     name: string;
  
//     greet(phrase: string): void;
//   }
  
//   class Person implements Greetable {
//     name: string;
//     age = 30;
  
//     constructor(n: string) {
//       this.name = n;
//     }
  
//     greet(phrase: string) {
//       console.log(phrase + ' ' + this.name);
//     }
//   }
  
// //   let user1: Greetable;
  
//   let user1 = new Person('Max');
  
//   user1.greet('12');
//   console.log(user1);











//let ,const,var

// console.log('Hello')

// const userName = 'Max';
// // // userName = 'Maximilian';
// let age = 30;

// age = 29;

// let result;
// function add(a: number, b: number) {
 
//   result = a + b;
// //   return result;

// }

// add(1,2)
// console.log(result);
// let age=50;
// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);



//arrow function 


// function add(n1:number,n2:number){
//     return n1+n2;
// }

// const add = (a: number, b: number) => a+b;

// const printOutput: (a: number | string) => void = output => console.log({output});

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5, 2));



//   Default Function Parameters
// they have to be last

// function add(a:number,c:number,b:number=4,d:number=4){
//   console.log(a+b+d+c)
// }

// add(1,3)
// add(5)









//  Spread Operator 

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// // hobbies.push('dance')


// activeHobbies.push(...hobbies);
// // console.log({activeHobbies})
// const person = {
//   name: 'Max',
//   age: 30
// };

// const copiedPerson = { ...person };

// console.log({copiedPerson})



////rest param


// const add = (...numbers: any[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     // return curResult + curValue; 
//     if(typeof curValue === 'string' || typeof curValue === 'number'){
//         console.log(curValue.toString()+curValue.toString())
//     }
    
//   }, 0);
// };

// const addedNumbers = add(5, '10', 2, 3.7,[12,2]);
// console.log(addedNumbers);

// let c =1;
//  c =2





//array , object destruction

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// activeHobbies.push(...hobbies);

// const person = {
//   firstName: 'Max',
//   age: 30
// };

// const copiedPerson = { ...person };

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// // console.log ({hobby1});

// const { firstName: userName, age:myAge } = person;

// console.log({myAge});


//##############################



//classes and object 

// class Department {
//   name1: string='hello';

//   constructor(n: string) {
//     this.name1 = n;
//     // console.log('this.name1=>'+this.name1)
//   }

//   describe() {
//     console.log('Department: ' + this.name1);
//   }
  
// }

// const accounting = new Department('Accounting');
// console.log(accounting.name1)
// accounting.describe();

// const accountingCopy = { name1: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();














// console.log('Hello everyone');

// let role:string = 'manager';
// let roles:string[] = ['admin','agent']

// roles.findIndex('')

// let btn = document.querySelector('button')!;

// btn.addEventListener('click',()=>{
//     console.log('clicked!')
// })















// function add(n1, n2) {
//         // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         //     throw new Error('Incorrect input!');
//         // }
//     return n1 + n2;
//   }
  
//   const number1 = '5';
//   const number2 = 2.8;
  
//   const result = add(number1, number2);
//   console.log(result);











// function add(n1: number, n2: number) {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//       throw new Error('Incorrect input!');
//     }
//     return n1 + n2;
//   }
  
//   const number1 = 5;
//   const number2 = 2.8;
  
//   const result = add(number1, number2);
//   console.log(result);














// function add(n1: number, n2: number, showResult: boolean, phrase: string) {


//     console.log("result==>"+n1 + n2)
//     // const result = n1 + n2;
//     // if (showResult) {
//     //   console.log(phrase + result);
//     // } else {
//     //   return result;
//     // }
//   }
  
//   let number1: number;
  
//   number1 = 5;
//   const number2 = 2.8;

//   const printResult = true;
//   let resultPhrase = 'Result is: ';
  
//   add(number1, number2, printResult, resultPhrase);







//object types

// const person = {
//     name: 'Maximilian',
//     age: 30
//   };
  
//   console.log(person.name);



//array types


    // const person = {
    //     name: 'Maximilian',
    //     age: 30,
    //     hobbies: ['Sports', 'Cooking']
    //   };
      
    // //   let favoriteActivities: string[];
    // //   favoriteActivities = ['Sports'];
      
    // //   console.log(person.name);
      
    // //   for (const hobby of person.hobbies) {
    // //     console.log(hobby.toUpperCase());
    // //     // console.log(hobby.map()); 
    // //   }







//tuple



    // const person
    // // : {
    // //     name: string;
    // //     age: number;
    // //     hobbies: string[];
    // //     role: [number, string];
    // //   } 
    //   = {
    //     name: 'Maximilian',
    //     age: 30,
    //     hobbies: ['Sports', 'Cooking'],
    //     role: [2]
    //   };
      
    //   // person.role.push('admin');
    //   // person.role[1] = 10;
      
    //   // person.role = [0, 'admin', 'user'];
      
    // //   let favoriteActivities: string[];
    // //   favoriteActivities = ['Sports'];
      
    //   console.log(person.name);
      
    //   for (const hobby of person.hobbies) {
    //     console.log(hobby.toUpperCase());
    //     // console.log(hobby.map()); // !!! ERROR !!!
    //   }













    //enum  and any


// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

// const person = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [1,'admin']
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

// // if (person.role === Role.AUTHOR) {
// //   console.log('is author');
// // }







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


// function add(n1: number, n2: number){
//     return n1 + n2;
//   }











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

// userInput = 5;
// userInput = 'Max';
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
//   // while (true) {}
// }

// result = generateError('An error occurred!', 500);
// console.log(result)
