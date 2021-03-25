// const counter = document.getElementById("counter");

// const increment = document.getElementById("increment");

// const decrement = document.getElementById("decrement");

// increment.style.display = "none";   ==> SOMIT KANN ICH ÜBERPRÜFEN, OB MEIN getElementById funzt.



// The State of this app will be just a number. 
// Not an object. Remember that the reducer is a function. 
// It expects the State and an action. It returns the new State.

// const reducer = function(state = 0, action) {
//     // ...
// }

// // Create the store with this reducer.
// const store = Redux.createStore(reducer);

// function render() {
//     const counterEl = document.getElementById('counter');
//     const state = store.getState();
//     // your code here
// }

// const render = () => {
//     const element = document.getElementById('counter');
//     element.innerHTML = ...;
//   };
//   const incrementButton = document.getElementById('increment');
//   incrementButton.addEventListener('click', () => {
//     console.log('in da click');
//   });

// render();


// ----------------------------------------------------------


//Get DOM Elements
const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

// https://www.robinwieruch.de/javascript-reducer
// The concept of a Reducer became popular in JavaScript with the rise 
// of Redux as state management solution for React. 
// But no worries, you don't need to learn Redux to understand Reducers. 
// Basically reducers are there to manage state in an application. 
// For instance, if a user writes something in an HTML input field, 
// the application has to manage this UI state (e.g. controlled components).

// Let's dive into the implementation details: In essence, a reducer is a 
// function which takes two arguments -- the current state and an action -- 
// and returns based on both arguments a new state. In a pseudo function 
// it could be expressed as:
// (state, action) => newState

// ---------------------------------------------------------
// Another good explanation:
// A reducer is a function that determines changes to an application's state. 
// It uses the action it receives to determine this change. 
// We have tools, like Redux, that help manage an application's state changes 
// in a single store so that they behave consistently
// ---------------------------------------------------------



//Create Store
const reducer = (state = 0, action) => {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return (state = state + 1);
      break;
    case "DECREMENT":
      return (state -= 1);
      break;
    default:
      return state;
  }
};

// Create the store with this reducer.
const store = Redux.createStore(reducer);

// Render Initial Counter:
const render = () => {
    counter.innerHTML = store.getState().toString();
};


// Call the function
render();


// Subscribe to the Store:
// The store has a method that will notify us every time the State changes.
// When the state changes, we will want to call this render function.
store.subscribe(render);
// subscribe is a method that expects a function as a parameter -a callback-. 
// This function will be called every time the State changes.


// Buttons:
// Now you add event listeners to each button.
// The increment button should dispatch an action that will increment the State.
// The decrement button should dispatch an action that will decrement the State.
// 1. Add the listeners.
// 2. Dispatch a different action in each of them.
// 3. Complete the reducer to act accordingly to every different action.


increment.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});

decrement.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'});
});


// Redux Counter Application in HTML & Vanilla Javascript Full Project: https://morioh.com/p/09d6370f2af0
