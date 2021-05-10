import { useState } from 'react';
import Logo from '/public/assets/react-logo.jpeg';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <img src={Logo} alt="react logo" />
            <h1>React & TypeScript</h1>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </>
    );
};

export default App;
