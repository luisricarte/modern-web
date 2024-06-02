import React, { useState } from 'react'


const UseStateStudy = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    return (
        <>
                {count}
                <button onClick={increment}>increments</button>
        </>
    )
} 

export default UseStateStudy