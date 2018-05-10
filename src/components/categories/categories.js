import React from 'react';
import './categories.css';

const Categories = (props) => {

    return (
        
            <select className="categories"
            onChange={(event) => props.onCategoryChange(event)}>
                <option>Comedy</option>
                <option>Adventure</option>
                <option>Mystery</option>
                <option>Horror</option>
                <option>Science</option>
                <option>History</option>
                <option>Literature</option>
                <option>Arts</option>
            </select>
        
    );
}


export default Categories;