import React from 'react'

function SpreadOperator() {
    const collectionOne = [10, 20, 30];
const collectionTwo = [40, 50, 60];

const allCollections = [...collectionOne, ...collectionTwo];
// The spread operator ... lets you copy all or some parts of an array, object, or string into another array, object, or string. 
console.log(allCollections);


// use the spread operator to output the highest number

const maxNumber = Math.max(...allCollections);
console.log(maxNumber) //60

// spread operator with destructuring
let scores = [500, 400, 300,567];

let [x, ...y] = scores;  //Here, the x variable inherited the first number in the array then the y variable spread across the array and copied everything that was left.

console.log("x =",x); // 500
console.log("y =",y); // [400, 300]

  return (
    <div>
       <label>collection one :</label>&nbsp;&nbsp;&nbsp; {collectionOne}
       <br></br>
       <label>collection two :</label>&nbsp;&nbsp;&nbsp;{collectionTwo}
       <br/>
       <label>collection merged :</label>{allCollections}
    </div>
  )
}

export default SpreadOperator