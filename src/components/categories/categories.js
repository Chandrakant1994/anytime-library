import React from 'react';
import './categories.css';

const Categories = (props) => {

    return (
        
            <select className="categories"
            onChange={(event) => props.onCategoryChange(event)}>
                <option>Humor</option>
                <option>Adventure</option>
                <option>Mystery</option>
                <option>Thriller</option>
                <option>Horror</option>
                <option>Science</option>
                <option>History</option>
                <option>Fiction</option>
            </select>
        
    );
}


export default Categories;