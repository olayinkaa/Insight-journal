# Annotation
```ts
let myVar: type = value;
let myName: string = "James";
let myAge: number = 34;
let isMoney: boolean = true;
let color:any = "Crimson"
```

```ts
function addOne(num:number){
    return num + 1
}
const double = (x:number, y:number): number => x * y
```

# Default params value
```ts
function greet(person:string = "Ibrahim"){
    return `Hello ${person}`
}
```

# Never
```ts
function throwError(msg:string): never {
    throw new Error(msg)
}
function infinitLoop():never {
    while(true){

    }
}
// a variable that never have a value
let x: never;
x = infiniteLoop()
```

# Array
```ts
const numbers: number[] = [2,4,5,1,6,7]
const names: Array<string> = ["Jame", "Victoria", "Kemi"]
```

```ts
const multiDi: number[][] = [[1,2,4,5]]
```

```ts
type Person = {
    name: string;
    email?:string; // optional
    age: number;
    readonly location: string;
}
const user:Person  = {
    name: "James",
    email: "ibrahim@gmail",
    age: 25,
    location: "Lagos"
}
```

# Intersection
```ts
type Person = {
    name:string;
    age: number;
}

type Employee = {
    id: number;
    title: string;
}

type PersonEmployee = Person & Employee

const alice: PersonEmployee = {
    name: "Alice",
    age: 30,
    id: 123,
    title: "Manager"
}
```

# Union 
```ts
let password: string | number = 20;

type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

let user: UserInfo | AccountDetails = {
    email: "ibrahim@gmail.com",
    password: "1234xc"
}

const items :(number | string)[] = [1, 5, 34, "hello"]
```

# Literal Type
```ts
let color: "red" | "yellow" | "green"
color = "red" // valid
color= "black" // invalid
```

# Tuple
```ts
let myTuple: [string, number] = ["hello", 42]
```

# Enum
```ts
enum WeatherConditions {
    sunny,
    cloudy,
    rainy,
    snowy
}
enum WeatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy"
}
```

# Class 
```ts
class Human {
    public name:string;
    private age: number;
    location:string;
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName: string, age:number){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

class Person extends Human {
    constructor(firstName:string, lastName:string, age: number){
        super(firstName, lastName, age)
    }
}

const person = new Person("John", 20)
```

# Getters & Setters
```ts
class MyClass {
    private _myProperty: number = 0;
    get myProperty(): number {
        return this._myProperty
    }

    set myProperty(value:number) {
        this._myProperty = value
    }
}
const myInstance = new MyClass()
console.log(myInstance.myProperty)
myInstance.myProperty = 45 // using the setters
```

# Interface
```ts
interface Person {
    firstName: string;
    lastName: string;
    readOnly age: number;
    location?: string;
    sayHello():void;
}
// interface for function
interface MathOperations {
    (x:number, y: number): number
}
// usage for function
const add:MathOperations = (a, b) => a + b
```
```ts
interface Song {
    songName: string;
    singerName:string;
    printSongInfo(songName:string, singerName:string):string
}

interface Genre extends Song {
    genre: string
}

cons song1: Song = {
    songName: "Natural",
    singerName: "Imagin Drigon",
    printSongInfo: (songName, singerName)=> {
        return `${songName} ${singerName}`
    }
}

```

# Interface for class
```ts
interface Vehicle {
    start():void;
    stop(): void;
}

class Car implements Vehicle {
    start(){
        console.log("Car started")
    }
    stop(){
        console.log("Car stopped")
    }
}
// usage
const myCar = new Car();
myCar.stop()
myCar.start()
```
# Declaration Merging
```ts
// original interface
interface Car {
    brand: string;
    stop():void;
}

// Declaration merging (interface extension)
interface Car {
    model: string;
    stop(): void;
}

const my Car: Car = {
    brand: "BMW",
    model: "M3",
    start(){
        //
    },
    stop(){
        //
    }
}
```

# Generics
```ts
function printInfo<T>(x:T): T{
    return x
}
function uniqueDataType<T, U>(item:T, defaultValue:U): [T, U]{
    return [item, defaultValue]
}

const str = printInfo<string>("great")
const newData = uniqueDataType<string, number>("Natural",50)
```
```ts
class Box<T> {
    private content: T;
    constructor(initialContent:T){
        this.content = initialContent
    }
}
const a = new Box<string>("James")
```

# Index key signature
```ts
interface MyObject {
  [key: string]: any;
}

// Example usage
const myObj: MyObject = {
  name: 'John',
  age: 25,
  city: 'Example City',
};
```
# Instanceof
```ts
class Dog {
    bark():void {

    }
}
class Cat {
    meow():void{

    }
}

function animalSound(animal:Dog | Cat){
    if(animal instanceof Dog){
        animal.bark()
    } else {
        animal.meow()
    }
}
const myDog = new Dog()
animalSound(myDog)
```

# Tsconfig
```ts
{
    "compilerOption":{
        "outDir": "./dist"
    },
    "include": [],
    "exclude": []
}

```

# Library example
```ts
import axios , {AxiosResponse} from "axios

interfact ITodo {
    userId:  number;
    id: number;
    title:string;
    completed: boolean;
}

const fetchData = async ()=> {
    try {
        const res: AxiosResponse<Todo> = await axios.get("URL")
    } catch (error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}
```