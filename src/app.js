import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return (
        <div class="centered">
            <h1>This is react component</h1>    
        </div>
    );
};

export default App;
ReactDom.render(<App />, document.getElementById("app"));