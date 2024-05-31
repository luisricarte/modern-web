// quando o state é alterado o componente é renderizado novamente.
import {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0)

    const incrementa = count => {
        setCount(count+1)
    }

    return (
        <div>
            <span>o valor é: {count}</span>
            <button onClick={incrementa}>Incrementa!</button>
        </div>
    )
}

export default App;