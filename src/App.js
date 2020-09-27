import React, { useState } from 'react';
import './App.css';
import Search   from './Components/Search';
import Details  from './Components/Details';
import Cover    from './Components/Cover';

function App() {

  const [book,setBook] = useState({
    loading :false,
    data    :null,
    error   :null
  })

  if(book.data && book.data.isbn){
    document.body.style.backgroundImage = `url('http://covers.openlibrary.org/b/ISBN/${book.data.isbn}-M.jpg')`;
  }

  return (
    <div className="App">
      <Search updateBook={setBook}/>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1">
        <Cover  
          book={book}/>
       <Details 
          book={book}/>
      </div>
      
    </div>
  );
}

export default App;
