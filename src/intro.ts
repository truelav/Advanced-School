// Types !!!

//     Number          String          Boolean
    
//     Null            Undefined       Void

//     Object          Array           Tuples

//     Any             Never           unknown

const numArray:number[] = [1, 2, 3, 4]
const numsArray:Array<number> = [1, 2, 3]
const stringArray:string[] = ['1', '2', '3']


let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";



// Functions !!!

// Parameter type Annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }


  // Return type Annotation
function greetNew(name: string): string {
    return ("Hello, " + name.toUpperCase() + "!!");
  }



// Anonymous Functions !!!

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
//   console.log(s.toUppercase());
//   Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
//   console.log(s.toUppercase());
//   Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});



// Object Types !!!

// Optional Properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

function printName(obj: { first: string; last?: string }) {

}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });




// Union Types !!!

// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.

// Defining a Union Type
// The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

// Let’s write a function that can operate on strings or numbers:

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });




// Type Aliases !!!
type Point = {
    x: number;
    y: number;
  };

// Exactly the same as the earlier example
function printCoordObj(pt: { x: number, y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
       
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });

//   For example, a type alias can name a union type:
type ID = number | string;




// Differences Between Type Aliases and Interfaces !!!

// Extending an interface
interface Animal1 {
  name: string
}

interface Bear1 extends Animal1 {
  honey: boolean
}

// const bear1 = getBear() 
// bear1.name
// bear1.honey
        
// Extending a type via intersections
type Animal2 = {
  name: string
}

type Bear2 = Animal2 & { 
  honey: boolean 
}

// const bear2 = getBear();
// bear2.name;
// bear2.honey;




// Literal Types !!!

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");
//   printText("G'day, mate", "centre");
//   Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.





                        // REAL USE CASES
            
// class User {
//     email: string
//     name: string
//     readonly city: string = "Chisinau"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }

// another option


class User {
    readonly city: string = "Chisinau"
    constructor(public email: string, public name: string){
    }
}


const hitesh = new User('h@h.com', 'Hitesh')
// hitesh.city = "Balti"
// Cannot assign value Balti to readonly variable




//   Interfaces

