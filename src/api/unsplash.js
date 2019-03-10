import Axios from "axios";


export default Axios.create({

    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fb14897f1610e74ad86c8a338827b3d8f1195e1a227273ca77313649bf284a65'
    }

});