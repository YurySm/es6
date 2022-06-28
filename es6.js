
// 1. Стрелочные функции
const name = () => {
    console.log("ES6");
  };

// 2. this
const name2 = () => {
    console.log(this); //window
  };

// 3. let и const 
let a;
a = 0;
const b = 1;

// 4. Promises - "Обещание" которое нужно подождать
const wait = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

wait()
  .then(() => {
    console.log("I promised to run after 1s");
    return wait();
  })
  .then(() => console.log("I promised to run after 2s"));



// Промис может быть выполнен успешно - resolved или отклонен - rejected. 
// Когда успешно выполняешь промис, запускается then(), а когда отклоняешь запускается catch()
// Функции resolve/reject принимают ровно один аргумент – результат/ошибку.


// 5. Generators - функции-генераторы, возвращают генератор, сразу не исполняются
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
let generator = generateSequence();

let one = generator.next(); //next() метод вызывающий шаг

// функции-генераторы в цикле
for(let value of generator) {
    alert(value); // 1, затем 2
  }

//  6. Классы
class Person {
    constructor(name) {
      this.name = name;
    }
    hello() {
      return "Hello, I am " + this.name + ".";
    }
  }

class Developer extends Person {
    hello() {
      return super.hello() + " I am a Developer.";
    }

  }


const me = new Developer("Alex");
console.log(me.hello()); // Hello, I am Alex. I am a Frontend Developer.
// Слово super используется для вызова функций, принадлежащих родителю объекта.

// 7. Getters and setters
class Person2 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
      }
  }

let jhon = new Person2('Jhon', 'Smidt')

console.log(jhon.fullName); // Jhon Smidt
jhon.fullName = "Alice Cooper";
console.log(jhon.fullName);  // Alice Cooper

// 8. Шаблонные литералы (Template Literals)
//    `text  ${name}`

const str = 'World';
console.log(`Hello ${str}`) //Hello World

// 9. Параметры по умолчанию
const sayMyName = function (name = "Alex") {
  console.log(name);
};
sayMyName(); // Alex

// 10. Оператор распространения spread
const aa = [1, 2, 3];
const bb = [...a, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
const newObj = { ...oldObj };
const hey = "hey";
const arrayized = [...hey]; // ['h', 'e', 'y']

// 11. Деструктуризация
const person = {
  firstName: "Alex",
  dev: true,
  age: 28,
};
const { firstName: userName, age } = person;

const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;

console.log(first, second); // 1, 2

// 12. Расширенные литералов объекта
const nameA = "Alex";
const x = {
  nameA, // nameA: nameA
};

// 13. Динамические свойства
const xx = {
  ["a" + "_" + "b"]: "z",
};
xx.a_b; // z

// 14. Новые методы объекта
// Object.is справнение 
const test = { a: 1 };
Object.is(test, test); //true

// Object.assign() поверхностраная копия
const obj1 = {
  a: 3,
  b: 'c'
}
const obj2 = Object.assign(obj1)
console.log(obj2) //{ a: 3, b: 'c' }

// Object.setPrototypeOf устанавливает прототип
const obj3 = {}
Object.setPrototypeOf(obj3, obj1);
console.log (obj3.a) // 3