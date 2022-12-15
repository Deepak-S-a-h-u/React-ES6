// arrow functions allows us write our functions using shorter syntax. Before ES6

import React from 'react'

function ArrowFunctions() {

    var greetings = function() {   //or     function greetings2() {
        console.log("Hello World Deepak!")
      }

    //   arrow function
      var greetings1 = () => {
        console.log("Hello World Akash!")
      }


  return (
    <div><h1>ArrowFunctions</h1>
        {greetings1()}
        <br></br>
        {greetings()}
        
    </div>
  )
}

export default ArrowFunctions