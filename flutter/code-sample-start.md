### Data types
- double
- String
- int
- dynamic
- bool
  

### optional variable
```dart
string? someValue2 = null
init? val
```

### Positional Argument
```dart
void printName(String name, int age, String greeting){
    print(name)
}
printName("Ibrahim", 25, "Hello")
```

### Name Argument
```dart
void printName({required String name, required int age, required String greeting}){
    print(name)
}

void printName({required String name, int? age, required String greeting}){
    print(name)
}

printName(age: 12, greeting: 'Hello', name: 'Ibrahim')
```

### Multiple return
```dart
(int , String) printFunc(){
    return (24, "Ibrahim")
}
final (age, name) = printFunc()

(int , String) printFunc(){
    return (age: 24, name:"Ibrahim")
}

final (age, name) = printFunc()
```

### Arrow function
```dart
String printStuff() => "Ibrahim"
void printStuff()=> print("name")
```

### CLASSES
- Classes are blueprint for creating object
- we use PascalCase not camelCase
- Has properties and methods i.e variable and functions
```dart
class Cookie {
    String shaoe = 'Circle';
    double size = 15.2;

    void baking(){
        return "Baking has started"
    }
    bool isCooling(){
        return false
    }
}

// using the cookie class
Cookie().size
Cookie().baking()

// instance of Cookie
Cookie cookie = Cookie();
cookie.baking()

// 
final cookie = Cookie()
cookie.shape = "rectangle"
```

### Class with constructor

```dart
class Cookie {
    String shape;
    double size;
    Cookie(this.shape, this.size)
}

class Cookie {
    String shape;
    double size;
    Cookie(this.shape, this.size){ // parameterized constructor
        print("cookie constructor called")
        baking()
    }
    void baking(){
        return "Baking has started"
    }
}

final Cookie = Cookie("Rectangle", 20)
```

```dart
class Cookie {
    final String shape;
    final double size;
    Cookie({required this.shape, required this.size}){
        banking()
    }
    int _height = 0 // private variable
    // Getter
    int get height => _height
    // setter
    set setHeight(int h){
        _height = h
    }
}

final cookie = Cookie(shape: "Circle", size: 20)
cookie.setHeight = 15
cookie.height  // calling the getter
```

### Static function & Static Variable
```dart
class Constants {
    static String greeting = "Hello, how are you ?";
    static int amount = 20;

    static int getSomeValue(){
        return 10
    }
    //Note: non-static cannot be use in static
}

print(Constants.greeting)
print(Constants.amount)
Constants.getSomeValue()
```

### Object-oriented programming
* parent class or base class
* child class or sub class
```dart
class Vehicle {
    int speed = 10;
    bool isEngineWorking = false;

    void accelerate(){
        speed+=10
    }
}

class Car extends Vehicle implements otherClass { // inheritance
    int noOfWheels = 4;
    void printWheel(){
        print(noOfWheels)
    }
}
Car car = Car()
car.printWheel()

Vehicle car = Car(); // car is of type Vehicle
print((car as Car).noOfWheels) // treat car as type of car

```

```dart
abstract class Contract {
    void accelerate()
}

class Car extends Contract {
    @override
    void accelerate(){
        print("Good")
    }
}
```
### MIXIN
```dart
mixing Jump {
    int jumping = 10;
}

mixin Scream {
    bool isScreaming = false
}

class Animal with Jump, Scream {
    void fn(){
        print(jumping)
    }
}

class Cat extends Animal {

}
```

### MODIFIER: SEALED CLASS, FINAL CLASS
sealed class is implicitly abstract
```dart
sealed class Animal {}
final class Animal1 {}
base class Animals {} // can be extend but not implemented
interface class Animal3 {} // can be implemented but not extend
mixin class Animal4 {}
```

### LIST : collection of ordered object
```dart
List<dynamic> list = [10,20,30, 'Hello']
list[0]  // 10
list[3] // runtime error
List<int> marks = [10,20,40]
```

```dart
class Student<T> {
    final T name;
    Student(this.name)

    @override
    String toString() => 'Student: $name';
}
final student = Student<int>(20)
print(student.name)

if(student is Student){
    print(student.name);
} else {
    print(student);
}
```