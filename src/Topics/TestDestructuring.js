import { useState } from 'react';

function TestDestructuring() {
    const [grade, setGrade] = useState('A');
    // we created a constant variable grade along with a function setGrade whose purpose is to update the value of the variable. And we set the value of  grade to 'A' using destructuring.
    return(
        <>
        {grade}
        </>
    )
}

export default TestDestructuring