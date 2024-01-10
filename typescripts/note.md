# Installation & command
- npm install -g typescript
- npm i -g ts-node

# Vscode extensions
- Javascript and typescript nightly
- code runner

# Annotations
Annotations are used to specify the data types of a variable, parameter, function return value and other types of values. Help developers catch errors early in development by allowing them to specify what types of values can be assigned to a given variable or passed as an argument to a function.
  
# Type Inference
Type inference is a feature in typescript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, typescript will try to infer the type based on the value you assign to it

# Any type
When a variable is annotated with any type, typescript will allow it to have any value and disable all type checking for that variable and its properties.
Over use of any can lead to `untyped code` and make it harder to catch type-related bugs during development.

# Function Parameters Annotations
In typescript are used to specify the expected types of the parameters that a function takes.

# Void in typescript
represents the `absence` of any value. It is often used as the return type for functions that do not return a value

# Never
The `never` keyword is used to indicate that a function will `not return anything` or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached or that certain values are impossible. It can help catch errors at compile-time instead of runtime.
- a function that always throw an error
- a function that has an infinite loop
- a variable tha can never have a value

# Arrays Types
Arrays are a type of object that can store multiple values of the `same data` type. You can specify the type of values that an array can hold.
Two types of arrays

- using the square bracket notation `[]` to indicate an array of a specific type
- using the generic `Array<type>` notation to indicate an array of a specific type.
  
# Multi Dimensional
A multi-dimensional array is an array that contains other arrays as its elements. Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays but with nested square brackets.

# Objects
An object in Typescript is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have `specific types` and the object itself can be annotated with a type, often defined using an interface or a type alias. Typescript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.

# Type Aliases
A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.
Type aliases are defined using the `type keyword` followed by the name for the alias, an equal sign (=) and the type it refers to.

# Optional Properties
You can make a certain property optional in an object type by adding a question mark `(?)` after the property name.

# Intersection Types
An intersection type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the `&` symbol.

# Unions

Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.
The syntax for defining a union type in typescript uses the pipe symbol `|`

# Literal Types
Literal types allow you to specify a value that can only be `one specific literal value`. This means that a variable with a literal type can only have one specific value and no other.

# Tuples
Tuple is a type that represents an array with a fixed number of elements, where each element can have different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays but they have a specific structure and can be used to model finite sequences with know lengths.

# Enums
Enum is a way to define a set of `named constants`. Enums allow you tp define a collection of related values that can be used interchangeably in your code.

# Class Properties Annotations
You can annotate class properites with a type. This allows you to define the data type of the property and ensure that it is always consistent.

# Access Modifiers
In Typescript, you can use access modifiers to control the visibilty of class members(properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.

Public: Members marked as public can be accessed from anywhere, both inside and outside the class.

Private: Members marked as private can only be accessed from within the class they are defined in.

Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

# Getters & Setters
Getters and Setters are used to access and modify class properties. Getters and Setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

# Interface
Interface is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

while interfaces are commonly sed to define the structure of objects, they are not limited to just objects. Interfaces in Typescript can also be used to `describe the shape` of functions and classes.

