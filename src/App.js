import React, { useState } from 'react'
import Tools from './PropsTest/Tools'
import ArrowFunctions from './Topics/ArrowFunctions'
import Literals from './Topics/Literals'
import SpreadOperator from './Topics/SpreadOperator'
import TestDestructuring from './Topics/TestDestructuring'
import User from './Topics/User'

function App() {
  const name="deepak"
  var tool="tool"
  const [state, setstate] = useState({name})
  
    const changeState = () => {  
        setstate({data:`state/props of parent component 
        is send by onClick event to another component`}); 
       }; 
  return (
    <div>
      <Tools name={state.data} />
      <Tools name tool/>
      <hr/>
      <User/>
      <hr/>
      <TestDestructuring/>
      <hr/>
      <SpreadOperator/>
       <hr/>
      <Literals/>
       <hr/>
      <ArrowFunctions/>
    </div>
  )
}

export default App