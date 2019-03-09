import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{

    state={ time : new Date().toLocaleTimeString()};

    componentDidMount() {

        setInterval(()=> this.setState({time : new Date().toLocaleTimeString()}),1000);

    }

    render() {
        return (
            <div> the time is : {this.state.time}</div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
