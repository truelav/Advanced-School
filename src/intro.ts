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