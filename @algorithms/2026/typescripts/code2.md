```ts
function info(z: unknown){
    if(Array.isArray(z)){
        return z
    }

    if(z instanceof Date){
        return new Date()
    }

    if(z instanceof Error){
        return new Error("")
    }

    return "Others"
}
```

## Utils
- Partial
- Required
- Omit
- Pick
- Readonly
- Record
```ts
type User = {l
    name: "Ibrahim",
    email: "ibrahimolayinkaa@gmail.com",
    phone: "2347065643303"
}
type updatedUser = Readonly<User>
type updatedUser = Pick<User, "email" | "name">
type updatedUser = Omit<User, "email" | "name">
type Role = Record<string, number | null>
```
## Fun Utils
- ReturnType
- Parameters
- InstanceType
- ConstructorParameters
```ts
function ExtractUserInfo(id: string, isExtraInfo = false){
    return {
        id,
        name: "sangam",
        log: isExtraInfo ? "details": (undefined as string | undefined)
    }
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>
```
```ts
class PersonN1 {
    constructor(public name:string, public age: number){}
    greet(){
        return `Hi I am this -> ${this.name}`
    }
}

type PersonInstanceN1 = InstanceType<typeof PersonN1>
type PersonConstructorArgsN1 = ConstructorParameters<typeof PersonN1>
```
## Union Helper
- Exclude
- Extract
```ts
type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup"
type Eventype2 = Exclude<EventType1, "keydown">
type EventType3 = Extract<EventType1, "click" | "submit">
```
```ts
type MayBeNumber = number | null | undefined
type CleanNumber = NonNullable<MayBeNumberl>
```
## Await utils and promises
```ts
type Promise1 = Awaited<Promise<number>>
```

```ts
class User {
    id: string;
    name: string;
    email?: string;
    createdAt: Date = new Date()

    constructor(id: string, name: string, email?: string){
        this.id = id;
        this.name = name;
        if(email) this.email = email;
    }
}

const User1 = new User("1", "Ibrahim")

```