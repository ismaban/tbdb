import React from 'react'

function Details(props){

    let content='';


    if(props.book.data){
        content =   <div className="py-4 px-3">
                    <span className="text-3xl  font-black tracking-wide">{props.book.data.title}</span><br/>
                    (<span className="subpixel-antialiased">{props.book.data.author} </span>)<br />
                    Published in: {props.book.data.year} <br />
                    ISBN: {props.book.data.isbn}
                    </div>
    }


    return(
        <div 
        className="text-center text-gray-700 px-4 py-2 m-2 bg-gradient-to-r from-gray-300 to-white">
            {content}
        </div>
    )
}

export default Details