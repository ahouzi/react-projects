import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDispaly from "./SeasonDispaly";
import Spinner from "./Spinner";



class App extends React.Component{


    state={ lat : undefined , errorMsg : ''};

    componentDidMount() {
        console.log('My component was rendered to the screen');

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errorMsg : err.message})
        );

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('My component was just updated - it re-rendered!');
    }


    renderContent(){

        if (this.state.errorMsg && !this.state.lat) {
            return <div>Error : {this.state.errorMsg}</div>;
        }

        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDispaly lat = {this.state.lat}/>;
        }

        return <Spinner/>;
    }



    // must have function
    render() {
        return (
            <div>{this.renderContent()}</div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
