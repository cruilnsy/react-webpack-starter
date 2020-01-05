import React from 'react';

import HelloWorld from './components/HelloWorld/HelloWorld';
import HelloClass from './components/HelloClass/HelloClass';

const App = () => {
    return (
        <div className="container">
            <HelloWorld />
            <HelloClass />
        </div>
    )
}

export default App;