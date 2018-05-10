import React from 'react';
import Aux from '../../hoc/Aux';
import './BookDetails.css';

const bookDetails = (props) => {
    return <Aux>
        <img src={props.book.thumbnailUrl} width="140px" height="190px" alt="Unavailable" />

            <div className="details">
                <h4> {props.book.name} </h4>
                <p> {props.book.authors} </p>
                <p> <b> Genre : </b>{(props.book.categories)?props.book.categories:'unknown'}</p>
                <p> <b> ISBN : </b>{props.book.isbn ? props.book.isbn : 'Not available'}</p>
                <button>Issue Book/Return</button>
                <button>Like/Rate Book</button>
            </div>

    </Aux>
}

export default bookDetails;