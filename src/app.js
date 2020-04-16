import React from 'react';
import ReactDom from 'react-dom';



class App extends React.Component{
    constructor() {
        super();
        this.state = {
            result: ''
        }
    }
    postData () {
        window.fetch('/postTest.json', {
            method: 'POST',
            body: JSON.stringify({name: "kamlesh"})
        }).then(res => res.json())
        .then(data => this.setState({ result: data }))
        .catch(e => this.setState({ result: e }))
    }
    
    getData () {
        window.fetch('/getTest.json').then(res => res.json())
        .then(data => this.setState({ result: data }))
        .catch(e => this.setState({ result: e }))
    }

    render () {
        return (
            <div className="centered container">
                <h2>React Realm</h2>    
                <div className="centered">
                    <button onClick={this.getData.bind(this)}>get test</button>
                    <button onClick={this.postData.bind(this)}>post test</button>
                    <div>
                        <p>Response from webpack-dev-server: </p>
                        <p className="display">{this.state.result}</p>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default App;
ReactDom.render(<App />, document.getElementById("app"));