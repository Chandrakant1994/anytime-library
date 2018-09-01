import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookList from '../../components/BookList/BookList';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import instance from '../../axios-firebase';
import Modal from '../../components/UI/modal/Modal';
import BookDetails from '../../components/BookDetails/BookDetails';

class UserView extends Component {

    state = {
        filteredBooks: [],
        searchTerm: '',
        searched: false,
        categories: '',
        showBookDetails: false,
        book: {},
        userId: null,
        booksIds: null
    }

    componentWillMount() {
        let id = window.location.pathname.slice(window.location.pathname.indexOf(':') + 1)
        console.log('Id :', id);
        this.setState({
            userId: id
        })
    }
    searchHandler(event) {
        let term = event.target.value;
        /* let filteredResult = this.state.books.filter((book) => {
          return book.name.toLowerCase().indexOf(term) !== -1}
        ) */

        /* book.title.toLowerCase().indexOf(term) !== -1 || */

        instance.get('/books.json').then(
            (response) => {
                console.log(response.data);
                let keys = Object.keys(response.data);
                let books = Object.values(response.data);
                let filteredBooks = books.filter((book) => {
                    return (book.title.toLowerCase().indexOf(term) !== -1 || book.authors.toString().toLowerCase().indexOf(term) !== -1)
                })
                console.log(filteredBooks);
                this.setState({
                    filteredBooks: filteredBooks,
                    searched: true,
                    searchTerm: term,
                    booksIds: keys
                })
            })
    }


    categoryChange(event) {
         let term = event.target.value;
       /* let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchedTerm};subject:${term}`;
        axios.get(url)
            .then(
                (response) => {

                    this.setState({
                        filteredBooks: response.data.items,
                    })
                }
            ) */

        instance.get('/books.json').then(
            (response) =>
            {
                let books= Object.values(response.data);
                let filteredBooks = books.filter((book) => {
            return ((book.title.toLowerCase().indexOf(this.state.searchTerm) !== -1) && (book.categories.includes(term)) )
                })
                console.log(filteredBooks);
                this.setState({
                    filteredBooks : filteredBooks
                })
            }
        )    
    }

    showBookDetails(book) {
        this.setState({
            selectedBook: book,
            showBookDetails: true
        })
    }

    hideBookDetails = () => {
        this.setState({
            showBookDetails: false
        })
    }

    issueBook = (event) => {
        event.preventDefault();
        let currentDate = new Date();
        let returnDate = new Date(Date.now() + (30*24*60*60*1000));
        console.log("currentDate :" + currentDate);
        console.log("returnDate :" + returnDate);
         instance.post('/issuedBooks.json', {
            issueDate: currentDate,
            returnDate: returnDate,
            userId: this.state.userId,
            bookId: this.state.selectedBook.id
        }) 
        /* this.state.booksIds.forEach(element => {
            instance.patch('/books/' + element + '.json', {
                id: element
            })
        }); */

    }


    render() {
        return <Aux>
            {this.state.showBookDetails &&
                <Modal show={this.state.showBookDetails}
                    modalClosed={this.hideBookDetails}>
                    <BookDetails click={this.issueBook} book={this.state.selectedBook} />
                </Modal>
            }

            <SearchBar
                searchHandler={this.searchHandler.bind(this)}
                categoryChange={this.categoryChange.bind(this)}
            />
            <BookList
                books={this.state.filteredBooks}
                showBook={this.showBookDetails.bind(this)} />
        </Aux>
    }
}

export default UserView;