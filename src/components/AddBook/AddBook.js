import React from 'react';
import Input from '../Input/Input';
import './AddBook.css';
import '../Input/Input.css';

const AddBook = (props) => {
    return <div className="AddBook">
        <h3>Add new Book :</h3>
        
            <Input className='Input InputElement' name='isbn' inputtype='input' type="text" label='ISBN' onInputChange={props.onInputChange} value={props.updatedState.isbn}/>
            <button className='Button' onClick={props.onAddBook}> Add Book </button>            
            <Input className='Input InputElement' name='title' inputtype='input' type="text" label='Title' onInputChange={props.onInputChange} value={props.updatedState.title}/>
            <Input className='Input InputElement' name='authors' inputtype='input' type="text" label='Authors' onInputChange={props.onInputChange} value={props.updatedState.authors}/>
            <Input className='Input InputElement' name='description' inputtype='textarea' type="text" label='Description' onInputChange={props.onInputChange} value={props.updatedState.description}/>
            <Input className='Input InputElement' name='thumbnailUrl' inputtype='image'  label='Cover' onInputChange={props.onInputChange} value={props.updatedState.thumbnailUrl}/>
            <button className='Button' onClick={props.onSubmitBook}>Submit Book</button>
        
    </div>
}

export default AddBook;