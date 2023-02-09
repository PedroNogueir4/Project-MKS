import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, ContainerTop, ContainerMain, ContainerBottom, } from "./styles";
import Products from "../../components/products";
import Cart from '../../assets/Vector.png'


function App() {
  const [products, setProducts] = useState([]);

  const receberDados = async () => {

        const resposta = await api.get("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products", {
      params: {
        page: 1,
        rows: 8,
        sortBy: 'id',
        orderBy: 'DESC',
      },
    });
    console.log(resposta.data.products)
    setProducts(resposta.data.products)

  };

  useEffect(() => {

    receberDados();

  }, [])


  return (
    <Container>
      <ContainerTop>
        <h1>
          MKS <h5>Sistemas</h5>
          </h1>
        <button>
          <img alt="carrinho" src={Cart}></img>
          <p>0</p>
        </button>
      </ContainerTop>
      <ContainerMain>
        <div className="container-itens">
          {products &&
           products.map((newProduct) => (
            
              <Products props={newProduct} key={newProduct.id}></Products>
              
          ))}
        
        </div>
      </ContainerMain>
      <ContainerBottom> <h4>MKS sistemas © Todos os direitos reservados</h4></ContainerBottom>
    </Container>
  );
}

export default App;
