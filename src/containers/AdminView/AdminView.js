import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import AddBook from '../../components/AddBook/AddBook';
import axios from  'axios';
import instance from '../../axios-firebase';

class AdminView extends Component {

    state = {
        fetchedBook : {},
        isbn : '',
        title : '',
        authors : '',
        description : '',
        thumbnailUrl : '',
        categories : ''
    }


    inputChangeHandler(event){
        this.setState({
            [event.target.name] : event.target.value 
        })
    }


    fetchBookDetails(){
        let retrievedBook ={};
        let url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + this.state.isbn;
        axios.get(url)
        .then((response) => {
            retrievedBook = response.data.items[0];
            this.setState({
                title : retrievedBook.volumeInfo.title,
                authors : retrievedBook.volumeInfo.authors,
                description : retrievedBook.volumeInfo.description,
                thumbnailUrl : retrievedBook.volumeInfo.imageLinks.thumbnail,
                categories : retrievedBook.volumeInfo.categories
            })
            console.log(retrievedBook);
        })
        
    }

    onSubmitBook(){
        instance.post('/books.json',{
            title : this.state.title,
            isbn : this.state.isbn,
            authors : this.state.authors,
            description : this.state.description,
            thumbnailUrl : this.state.thumbnailUrl,
            categories : this.state.categories
        }).then(console.log("Book Submitted"));
    }

    render() {
        return (<Aux>
            <h3> Welcome ! Admin </h3>
            <AddBook 
            onAddBook={this.fetchBookDetails.bind(this)} 
            onInputChange={this.inputChangeHandler.bind(this)} 
            updatedState = {this.state}
            onSubmitBook ={this.onSubmitBook.bind(this)}/>
        </Aux>)
    }
}

export default AdminView;