import React from 'react';
import Book from '../Book/Book';
import './booklist.css';

const BookList = (props) => {
    return(
        <div className="booklist">
        {(props.books) && props.books.map(function(book,i){
            return <Book 
            key = {i}
            name={book.title} 
            authors={book.authors}
            imageUrl={(book.thumbnailUrl)?book.thumbnailUrl:null}
            genre={book.categories}
            isbn={book.isbn?book.isbn:null}
            click={() => props.showBook(book)}/>
        })}
        </div>
    )
}

export default BookList;