import React from "react";
import { Product } from "./styles";
//import api from "../../services/api";
import Bag from "../../assets/shopping-bag.png";

function Products(props) {
    return (
        <Product>
             <img src={props.props.photo}/>
            <h3>{props.props.name}</h3>
            <div>
                <h5 >R$ {props.props.price}</h5>
            </div>
            <p>{props.props.description}</p>
            <button><img className="bag" src={Bag} alt="sacola-de-compras" /> Comprar</button>
        </Product>
        
    );
}

export default Products;