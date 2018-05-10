import React from 'react';
import './Book.css';

const Book = (props) => {
    return (
        <div className="Book" onClick= {props.click}>
            <img src={props.imageUrl} width="120px" height="160px" alt="Unavailable" />

            <div className="details">
                <h5> {props.name} </h5>
                <p> {props.authors} </p>
                <p> <b> Genre : </b>{(props.genre)?props.genre:'unknown'}</p>
                <p> {props.isbn ? props.isbn : null}</p>
            </div>

        </div>
    )

}

export default Book;

//props.isbn.map((id) => {return id.identifier})