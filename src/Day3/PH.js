import { useState } from 'react';

function ToggleState() {
    const [states, setStates] = useState('Kaioken');

    function addTimes() {
            setStates(states === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken');
        }
    

    return (
        <div>
            <h1 className={states}>Hello World</h1>
            <button onClick={addTimes}>clickMe</button>
        </div>
    );
}

export default ToggleState;
