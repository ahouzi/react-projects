import React from 'react';
import SearchBar from "./SearchBar";
import Axios from "axios";



class App extends React.Component{

    async onSearchSubmit(term) {

       const response = await Axios.get('https://api.unsplash.com/search/photos',{
            headers : {
                Authorization: 'Client-ID fb14897f1610e74ad86c8a338827b3d8f1195e1a227273ca77313649bf284a65'
            },

            params : {query : term }

        });

       console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop : '20px'}}>
                <SearchBar handleSubmit ={this.onSearchSubmit}/>
            </div>
        );
    }


}




export default App;