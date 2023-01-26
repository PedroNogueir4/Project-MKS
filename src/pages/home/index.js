import React ,{useEffect,}from "react";
import api from "../../services/api";
import { Container, ContainerTop, ContainerMain, ContainerBottom ,} from "./styles";
import Products from "../../components/products";
import Cart from '../../assets/Vector.png'


function App() {

useEffect( ()=> {
api()

},[])


  return (
    <Container>
      <ContainerTop>
        <h1>MKS <h5>Sistemas</h5></h1>
        <button>
          <img  alt="carrinho" src={Cart}></img>
          <p>0</p>
        </button>
      </ContainerTop>
      <ContainerMain>
        <div className="container-itens">
          <Products></Products>
          <Products ></Products>
          <Products ></Products>
          <Products ></Products>
          <Products ></Products>
          <Products ></Products>
          <Products ></Products>
          <Products ></Products>
        </div>
      </ContainerMain>
      <ContainerBottom> <h4>MKS sistemas © Todos os direitos reservados</h4></ContainerBottom>
    </Container>
  );
}

export default App;
