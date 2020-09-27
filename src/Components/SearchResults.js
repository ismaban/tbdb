import React, { useState } from 'react'
import Loader from './Loader'

function SearchResults(props){

    const selectBook = (book) =>{
        let isbn;
        book.cover_i ? isbn=book.isbn[0]:isbn=null
        props.bookSelected({
            loading :false,
            data    : {
                title   : book.title_suggest,
                author  : book.author_name,
                year    : book.first_publish_year,
                isbn    : isbn,
                subtitle: book.subtitle
            },
            error   :false
        })
        props.showHideResults("hidden")
    }

    let content = '';
    if(props.results.data){
        //We only want data where a Cover is available
        //A Cover is available if "cover_i" and "isbn" are available
        content = 
            props.results.data.docs.filter(doc => (doc.cover_i != null && doc.isbn != null)).slice(0,15).map((book) =>  
            <div 
                key={book.cover_i} 
                className="py-1 px-4 text-left hover:bg-green-200 cursor-pointer"
                onClick={()=>selectBook(book)}>
                    {book.title_suggest} {book.subtitle} - {book.author_name}
            </div> 
    )}

    if(props.results.loading){
        content = <span><Loader /></span>
    }
    

    return(
        <div className={`bg-white border-b border-l border-r divide-y divide-gray-400 ${props.resultsVisibility}`}>
            {content}
        </div>
    )
}

export default SearchResults

