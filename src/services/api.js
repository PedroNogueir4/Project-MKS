import axios from 'axios';

function api() {
    const Url ="https://mks-challenge-api-frontend.herokuapp.com/api/v1/products"
    const [itens, setItens] = useState([]);

    axios
        .get(Url, {
            params: {
                page: 1,
                rows: 8,
                sortBy: 'id',
                orderBy: 'DESC',
            }
        })
        .then(products => setItens(products.data.products))
        .catch(error => console.log(error))
        
}

export default api;