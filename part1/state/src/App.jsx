import { useState } from 'react';
import Display from './Display.jsx';
import Button from './Button.jsx';

const App = () => {
    const [counter, setCounter] = useState(0);


    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);
    const zeroCounter = () => setCounter(0);
    
    return(
        <>
            <Display counter={counter}/>
            <Button text="Incrementar" onClick={incrementCounter}/>
            <Button text="Decrementar" onClick={decrementCounter}/>
            <Button text="Cero" onClick={zeroCounter}/>
        </>
    )
}

export default App;