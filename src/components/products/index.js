import React from "react";
import { Product } from "./styles";
import Bag from "../../assets/shopping-bag.png";

function Products(props) {

const addProduct = () => {

const infoCart = {
    photo:props.props.photo,
    price:props.props.price,
    name:props.props.name
}

}

    return (
        <Product>
             <img className="produto" src={props.props.photo}/>
            <h3>{props.props.name}</h3>
            <div>
                <h5 >R$ {props.props.price}</h5>
            </div>
            <p>{props.props.description}</p>
            <button onClick={addProduct}><img className="bag" src={Bag} alt="sacola-de-compras" /> Comprar</button>
        </Product>
        
    );
}

export default Products;