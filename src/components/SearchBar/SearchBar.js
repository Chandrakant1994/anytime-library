import React from 'react';
import './SearchBar.css';
import Categories from '../categories/categories';


const searchBar = (props) =>{
    return (
        <div className="SearchBar">
            <input type="text" onChange={props.searchHandler} placeholder="Search.."/>
            <Categories onCategoryChange={props.categoryChange}/>
            <button onClick={props.searchHandler}>Search</button>
        </div>
    )
}

export default searchBar;