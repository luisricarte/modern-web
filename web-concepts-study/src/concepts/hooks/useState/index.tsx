import React, { useState } from 'react'

import Card from '../../../components/card';

const UseStateStudy = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    return (
        <>
            
                <Card title='UseState' />
                {count}
                <button onClick={increment}>increments</button>
            


        </>
    )
} 

export default UseStateStudy