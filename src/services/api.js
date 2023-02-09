import axios from 'axios';


    const api =axios.create({
        
        baseUrl:"https://mks-challenge-api-frontend.herokuapp.com/api/v1/products"
    })
    

export default api;