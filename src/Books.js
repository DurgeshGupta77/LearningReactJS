import React from "react";

// The children keyword is used to access children props
const Books = (props) => {
    // Destructuring props using Object Destruction
    const { imageUrl, bookTitle, authorName } = props;

    const eventHandler = () => {
        alert("Hello World!");
    };

    const complexEventHandler = (authorName) => {
        console.log(authorName)
    };

    return (
        <article className="book" onMouseOver={() => { console.log(bookTitle); }}>
            <Image imageUrl={imageUrl} />
            <Title bookTitle={bookTitle} />
            {/* {props.children} */}
            <Author authorName={authorName} />
            <button type="submit" onClick={eventHandler}>Submit Example Reference</button>
            <button type="submit" onClick={() => complexEventHandler(authorName)}>Complex Event Handler</button>
        </article>
    );
}

const Image = (props) => <img className="image-book" src={props.imageUrl} alt="" />


const Title = (props) => {
    return <h1>{props.bookTitle}</h1>
};



const Author = (props) => {
    //Here we will use inline CSS rather than importing from index.css
    return <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '10px', letterSpacing: '5px' }}>by {props.authorName}</h4>
};

export default Books