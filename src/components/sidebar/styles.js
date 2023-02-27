import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

position: fixed;
top: 0px;
right: 0px;


background: #0F52BA;
height: 100vh;
width: 300px;
box-shadow: -5px 0px 6px 0px #00000021;
animation: showSidebar .4s;
color: white;







@keyframes showSidebar {
    from{
        opacity: 0;
        width: 0;
    }
    to{
        opacity: 1;
        width: 300px;

    }
}

`
export const ContainerTop =styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    

h3{max-width: 9rem;}    

svg {
    cursor: pointer;
width: 40px;
height: 20px;

:hover{opacity: 0.8;}
:active{opacity: 0.5;}

path{color:black}

}

`

export const ContainerItens = styled.div`
height: 75%;
`

export const ListItens = styled.li`

height: 15%;
background: white;
box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
border-radius: 8px;

margin: 8px 12px;
list-style: none;

h4{color:#2C2C2C}
p{color:black}

`


export const ContainerBottom =styled.div`
 flex-direction: column;
 align-items: center;
 height: 11%;
 font-weight: 700;
 

button{
    width: 100%;
    height: 75%;
    background: black;
    font-weight: 700;

    border: none;
    color: white;
    cursor: pointer;

    :hover{opacity: 0.8;}
    :active{opacity: 0.5;}
}

`

