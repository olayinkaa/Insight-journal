## ENUM
```dart

enum EmployeeType {
    swe,
    finance,
    marketing  
}

enum EmployeeType {
    swe(2000),
    finance(3000),
    marketing(5000);

    final int salary;
    const EmplyeeType(this.salary)
}

class Employee {
    final String name;
    final String type;
    Employee(this.name, this.type)
}
```

## EXCEPTION
```dart
try {
    print(10~/0)
} catch(e){
    print(e)
} finally {

}
```
## FUTURE
```dart
// Futures (Promises)
Future<String> giveResultAfter2sec() {
    return Future((){
        return "Hello"
    })
}

Future<String> giveResultAfter2sec() async {
    return "Hello"
}


Future<String> giveResultAfter2sec() async {
    return Future.delayed(Duration(seconds:2),(){
        return "Hellooo"
    })
}

//usage
final result = await giveResultAfter2sec();
//
giveResultAfter2sec().then((val){
    print(val)
})
```
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() async {
    var url = uri.https("baseURL", "path")
    final res = await http.get(url)
    print(res.body)
    print(jsonEncode(res.body)) // convert to json
    print(jsonDecode(res.body))
}

void main() async {
    var url = uri.https("baseURL", "path")
    try  {
        final res = await http.get(url)
        print(res.body)
        print(jsonDecode(res.body))
    } catch(e){
        print(e)
    }
}
void main(){
    var url = uri.https("baseURL", "path")
    http.get(url).then((val){
        print(jsonDecode(val.body))
    }).catchError((err){
        print(err)
    });
}
```
## STREAM
```dart
import 'dart:async';
void main() async {
   print(await countDown().first())
   countDown().listen((val){
    print(val)
   }, onDone:(){
    print('HEY I COMPLETED IT')
   }, onError:(){

   })
}
Stream<int> countDown() async* {
    for(int i=5; i > 0; i--){
        yield i
    }
}
Stream<int> countDown(){
    final controller = StreamController<int>();
    //controller.stream
    //controller.sink.done
    controller.sink.add(1)
    controller.sink.close()
    controller.sink.addError("Hey, Error")
    
    controller.stream.onListen((val){
        print(val)
    }, onError: (err){
        print(err)
    })

    controller.close()

    return Stream.periodic(Duration(seconds: 1),(val){
        return val;
    })
}
```
## RECORD
```dart
final list = [1,2,3,4]
final [a,b,c,...] = list
final [a,b,c,...d] = list

final records = (4.5, 'Hi', true)
records.$2

// destructure
final jsoned = {
    "userId":1,
    "id":1,
    "title": "Hello"
}

final {'userId':userId, 'title': title} = jsoned
if(jsoned case  {'userId': int userId, 'title': String title} ){
    print(userId)
} else {
    print("Error")
}
switch(jsoned){
    case {'userId':userId, 'title': title}:
        print(userId)
    default:
        print("Error")
}
```
```dart
final human = Human("Nice Name", 2)
final Human(:name, :age) = human
final Human(name:namee, age:agee) = human

class Human {
    final String name;
    final int age;

    Human(this.name, this.age)
}
```

```dart
void main(){
    String motivation = 'this is a good world'
    motivation = motivation.capitaliseFirstLetter()
}

extension CapitaliseFirstLetter on String {
    String capitaliseFirstLetter(){
        return this[0].toUpperCase() + substring(1)
    }
}

```