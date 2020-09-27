import React from 'react'

function Cover(props){

    let content = '';
    if(props.book.data){
        content = 
            <img 
                className="inline-block"
                src={`http://covers.openlibrary.org/b/ISBN/${props.book.data.isbn}-M.jpg`}>
        </img>
    }

    return(
        <div>
            <div
            className="text-center text-gray-700 
            px-4 py-2 m-2 
            bg-gradient-to-r from-white to-gray-300
            "
            >  
             {content}
            </div>
           
        </div>
    )
}

//background-image: url('http://covers.openlibrary.org/b/ISBN/222108909X-L.jpg')

export default Cover