## TypeScript tutorial
## Resources
[udemy](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/)

```
tsc index.ts
node index.js
====
ts-node index.ts

```
### Catch error
```
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;


});




```

### Anonymous Functions vs Named Functions vs Arrow Functions 
[details](https://dev.to/mathlete/anonymous-functions-vs-named-functions-vs-arrow-functions-57pm)

#### Name function
Function declarations are hoisted, which means they are loaded into memory at compilation.  the function call works even  
**before ** the function declaration appears.

```
function brag(count) {
     return("I can do " + count + " pushups");
} 

console.log(brag(3)) // I can do 3 pushups
```
### Anonymous function
```
var brag = function(count) {
     return("I can do " + count + " pushups");
} 

console.log(brag(3)) // I can do 3 pushups
```
### Arrow function
```
var brag = (count) => ("I can do " + count + " pushups");

console.log(brag(3)) // I can do 3 pushups
```
### Array
*multiple type array
```
const dates:(string|Date)[]=[];
```

### Tuple
```
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
```
```
array
const primaryColors: string[] = ['#ff0000', '#00ff00', '#0000ff'];
```

```
array vs tuple

const nameAge: [string, number] = ['Osinachi', 10011];
console.log(nameAge);

const nameAge: (string | number)[] = ['Osinachi', 10011];
console.log(nameAge);

The structure of the tuple needs to stay the same (a string followed by a number), whereas the array can have any combination of the two types specified (this can be extended to as many types as is required).
```
### Interface

### Class and inheritance