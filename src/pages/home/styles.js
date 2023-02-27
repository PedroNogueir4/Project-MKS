import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-rows: 11% 110% 5%;

`

export const ContainerTop = styled.div`
h1{
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size: 40px;
line-height: 19px;
display: flex;
gap: 6px;
}
h5{
    font-weight: 300;
    font-size: 17px;}

background-color: #0F52BA;
color: #FFFFFF;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 2%;

`
export const ContainerMain = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #E5E5E5;

.container-itens{
    width: 61%;
    height: 77%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
}
`
export const ContainerBottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #EEEEEE;

font-family: 'Montserrat';
font-weight: 400;
font-size: 12px;
line-height: 15px
`





