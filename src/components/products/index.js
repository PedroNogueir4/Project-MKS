import React from "react";
import { Product } from "./styles";
//import api from "../../services/api";
import Bag from "../../assets/shopping-bag.png";

function  Products(props) {

    

return <Product>
    <img></img>
    <h3></h3>
    <div><h5>R$</h5></div>
    <p>Redesigned from scratch and completely revised.</p>
    <button><img src={Bag} alt="sacola-de-compras"/> Comprar</button>
</Product>

}

export default Products;