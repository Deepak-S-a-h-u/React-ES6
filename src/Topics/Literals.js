import React from 'react'

function Literals() {

    var me = 'Sahu';
    //   To interpolate a variable into your string, you use ${} with the name of the variable passed into the curly brackets. Always remember that your string must be nested inside back-ticks and not quotation marks.
var fullname = `My name is Deepak ${me}`;

console.log(fullname);
  return (
    <div>{fullname}</div>
  )
}

export default Literals