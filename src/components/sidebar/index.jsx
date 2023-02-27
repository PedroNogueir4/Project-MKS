import { React,useState } from "react";
import { FaTimes } from "react-icons/fa"
import { Container, ContainerBottom, ContainerTop, ContainerItens, ListItens } from "./styles";


function Sidebar({ active }) {

const [cart,setCart] =useState([])

    const closeSidebar = () => {
        active(false)
    }

    return (

        <Container sidebar={active}>
            <ContainerTop>
                <h3>Carrinho de Compras</h3>
                <FaTimes onClick={closeSidebar} />
            </ContainerTop>
            <ContainerItens>

                <ul>
                    <ListItens><img/> <h4></h4> <p></p> </ListItens>

                </ul>

            </ContainerItens>
            <ContainerBottom>
                <p>Total:</p>
                <button>Finalizar Compra</button>
            </ContainerBottom>
        </Container>



    )
}

export default Sidebar