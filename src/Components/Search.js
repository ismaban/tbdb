import React, { useState } from 'react'
import Axios from 'axios';
import SearchResults from './SearchResults';


function Search(props){
    const[results,setResults] = useState({
        loading :false,
        data    :null,
        error   :null
    });

    const[resultsVisibility, setResultsVisibility] = useState("hidden")

   
    //lifting the state
    var setBook = (book) =>{
        props.updateBook(book)
    }

    var SearchBooks = (event) => {
        if(event.key === 'Enter'){
            setResults({
                loading :true,
                data    :null,
                error   :false
             })
             props.updateBook({
                loading :true,
                data    :null,
                error   :false
             })
             Axios.get(`http://openlibrary.org/search.json?q=${event.target.value}`)
             .then(response => setResults({
                loading :false,
                data    :response.data,
                error   :false
             }))
             .catch(error => console.log(error))
        }
        else{
            setResults({
                loading: false,
                data: null,
                error:false
            });
        }
    }

    return(
        <div>
            <input 
                className="bg-white focus:outline-none focus:shadow-outline 
            border border-gray-300 rounded-lg 
            py-2 px-4 place-self-center
            block w-full appearance-none leading-normal"
                placeholder="Enter your search query here"
                onKeyPress={(event) => SearchBooks(event)}
                onClick={() => setResultsVisibility("")}>
            </input>
            
            <SearchResults 
                results={results} 
                bookSelected={setBook} 
                resultsVisibility={resultsVisibility} 
                showHideResults={setResultsVisibility}/>
        </div>
    )
}

export default Search