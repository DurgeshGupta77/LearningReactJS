import React from "react";
import reactDom from "react-dom";

//Importing our CSS file
import './index.css';

/*
  Using Traditional Function
*/

// function Greetings() {
//   return (
//     <div>
//       <h4>Hey, I am learning React. This is my First Component.</h4>
//     </div>
//   )
// }

/*
==============================================================================================================================
Using Arrow Function 
*/

// const Greetings = () => {
//   return (
//     <div className="learn-react">
//       <Person />
//       <Message />
//     </div>
//   )
// };

// const Person = () => <h1>Hey, I am learning React. This is my First Component.</h1>;
// const Message = () => {
//   return (
//     <p>Myself Durgesh Prasad Gupta</p>
//   );
// };


/*
===============================================================================================================================
Using React.createElement to create a element 
*/

//Use an arrow function to create function greetings and return using function instead of HTML
//You need to return a div with a h1
//So the structure will be
/*
  <div>
    <h1>Durgesh is learning React. Hello World! </h1>
  </div>
*/
// const Greetings = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Durgesh is learning React. Hello World!'));
// };

/*
  Creating a Simple Book
*/
function BookList() {
  return (
    <section className="book-lists">
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
    </section>
  );
}

const Books = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img className="image-book" src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" alt="Image of Book" />
const Title = () => {
  return <h1>I Love You to the Moon and Back Board book - Illustrated, March 3, 2015</h1>
};
const Author = () => {
  //Here we will use inline CSS rather than importing from index.css
  return <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '10px', letterSpacing: '5px' }}>by Amelia Hepworth</h4>
};


reactDom.render(<BookList />, document.getElementById("root"));