import React from "react";
import reactDom from "react-dom";

//Importing our CSS file
import './index.css';

//Importing book.js file because it contains our API
//We are using named import here
import { booksObject } from './book';

//Importing Books.js file because it contains our smaller components
//We are using default import here
import Books from './Books';

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
      {booksObject.map((book) => {
        return <Books key={book.id} {...book}></Books>
      })};

      {/* {newNames} */}
      {/* <Books
        imageUrl={booksObject[0].imageUrl}
        bookTitle={booksObject[0].bookTitle}
        authorName={booksObject[0].authorName}
      /> */}

      {/* For the second Book we will also pass children prop
       */}
      {/* <Books
        imageUrl={booksObject[1].imageUrl}
        bookTitle={booksObject[1].bookTitle}
        authorName={booksObject[1].authorName}
      >
        <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum </p>
      </Books> */}

    </section>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));