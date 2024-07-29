// data.js
const questionsData = [
  {
    question:
      'What are Arrow Functions in ES6, and how do they differ from traditional function expressions?',
    options: [
      {
        id: '1',
        label:
          'Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target`. They are shorter and more concise.',
        value: 'option1',
      },
      {
        id: '2',
        label:
          'Arrow functions are the same as traditional function expressions but with different syntax.',
        value: 'option2',
      },
      {
        id: '3',
        label: 'Arrow functions are used for creating classes and inheritance.',
        value: 'option3',
      },
      {
        id: '4',
        label: 'Arrow functions only work with promises and async operations.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question:
      'What is the purpose of the `let` and `const` keywords in ES6, and how do they differ from `var`?',
    options: [
      {
        id: '1',
        label:
          '`let` and `const` are block-scoped variables, whereas `var` is function-scoped and can lead to issues with hoisting.',
        value: 'option1',
      },
      {
        id: '2',
        label:
          '`let` and `const` are used for asynchronous programming, while `var` is used for synchronous code.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          '`let` and `const` create global variables, whereas `var` creates local variables.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          '`let` is for constants, and `const` is for variables that can be reassigned.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question:
      'Explain the concept of template literals in ES6 and provide an example.',
    options: [
      {
        id: '1',
        label:
          'Template literals are enclosed by backticks and allow for embedded expressions using `${}`. Example: `Hello, ${name}!`.',
        value: 'option1',
      },
      {
        id: '2',
        label:
          'Template literals are a way to define functions and handle promises.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          'Template literals are used for object destructuring and property shorthand.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          'Template literals are regular strings with no special features.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question: 'What are default parameters in ES6, and how are they used?',
    options: [
      {
        id: '1',
        label:
          "Default parameters allow function parameters to have default values if no argument is passed. Example: function greet(name = 'Guest') { return `Hello, ${name}`; }.",
        value: 'option1',
      },
      {
        id: '2',
        label:
          'Default parameters are used for defining functions with variable numbers of arguments.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          'Default parameters are used for setting default values for object properties.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          'Default parameters are used for defining classes with default properties.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question:
      'What is the `spread` operator, and how is it different from the `rest` operator in ES6?',
    options: [
      {
        id: '1',
        label:
          'The `spread` operator expands iterable elements into individual elements, while the `rest` operator collects multiple elements into an array.',
        value: 'option1',
      },
      {
        id: '2',
        label:
          'The `spread` operator is used for object destructuring, while the `rest` operator is used for array manipulation.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          'The `spread` operator is used in template literals, while the `rest` operator is used for default parameters.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          'The `spread` and `rest` operators are identical and can be used interchangeably.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question:
      'Describe the concept of destructuring assignment in ES6 with an example.',
    options: [
      {
        id: '1',
        label:
          "Destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables. Example: const [a, b] = [1, 2]; const {name, age} = {name: 'John', age: 30};.",
        value: 'option1',
      },
      {
        id: '2',
        label:
          'Destructuring assignment is used for importing and exporting modules.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          'Destructuring assignment is used for creating classes and inheritance.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          'Destructuring assignment is a method to handle asynchronous operations.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question:
      'What are `classes` in ES6, and how do they differ from constructor functions?',
    options: [
      {
        id: '1',
        label:
          'ES6 classes are syntactic sugar over prototype-based inheritance and provide a familiar syntax for creating objects and inheritance. Constructor functions use function-based syntax for the same purpose.',
        value: 'option1',
      },
      {
        id: '2',
        label:
          'ES6 classes are a type of function that can only be used for object-oriented programming, whereas constructor functions are used for functional programming.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          'ES6 classes provide a way to handle asynchronous operations, while constructor functions do not.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          'ES6 classes are used for creating modules, while constructor functions are used for data encapsulation.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question:
      'Explain the `Promise` object introduced in ES6 and provide an example of its usage.',
    options: [
      {
        id: '1',
        label:
          "`Promise` represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Example: const promise = new Promise((resolve, reject) => { setTimeout(() => resolve('Done'), 1000); }); promise.then(result => console.log(result));",
        value: 'option1',
      },
      {
        id: '2',
        label:
          '`Promise` is used for handling synchronous operations and data processing.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          '`Promise` is a method for defining classes and handling inheritance.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          '`Promise` is used for destructuring assignment and default parameters.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question:
      'What are `Modules` in ES6, and how do you import and export them?',
    options: [
      {
        id: '1',
        label:
          "ES6 Modules allow code to be divided into reusable pieces. Use `export` to expose variables/functions from a module and `import` to bring them into another file. Example: // module.js export const greet = () => 'Hello'; // main.js import { greet } from './module'; console.log(greet());",
        value: 'option1',
      },
      {
        id: '2',
        label:
          'ES6 Modules are used for handling promises and asynchronous operations.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          'ES6 Modules provide a way to define classes and object prototypes.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          'ES6 Modules are a method for creating default parameters and destructuring assignments.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
  {
    question: 'What is the `Symbol` data type in ES6, and what is its use?',
    options: [
      {
        id: '1',
        label:
          '`Symbol` is a primitive data type for creating unique identifiers. They are often used as property keys to avoid naming collisions.',
        value: 'option1',
      },
      {
        id: '2',
        label:
          '`Symbol` is used for handling asynchronous operations and promises.',
        value: 'option2',
      },
      {
        id: '3',
        label:
          '`Symbol` is a way to define default parameters and destructuring assignments.',
        value: 'option3',
      },
      {
        id: '4',
        label:
          '`Symbol` is used for creating classes and handling inheritance.',
        value: 'option4',
      },
    ],
    correctAnswer: 'option1',
  },
];

export default questionsData;
