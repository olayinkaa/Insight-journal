# typeof & keyof
```ts
const person = "Ibrahim"
type Person = typeof person
```
```ts
const obj = {
    name: "Ibrahim",
    age: 50
}
type Person = keyof typeof obj 
```
 
# ReturnType
```ts
const func = () => {
    const val = "result"
    return val
}

type Return = ReturnType<type of func>
type Return = Awaited<ReturnType<type of func>> // if function is async

```

# Interface & Type
```ts
interface MainType {
    name:string
    age:number
}
type NestedType = MainType & {
    isDeveloper: boolean;
}

type Prettify<T> = {
    [K in typeof T]: T[K]
} & {}

type idk = Prettify<NestedType>

```