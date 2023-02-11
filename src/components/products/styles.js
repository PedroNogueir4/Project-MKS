import styled from "styled-components";


export const Product = styled.div`
 
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: grid;
    grid-template-rows: 44% 9% 12% 22% 13%;
    
img{

    width: 8.8rem;
    
}

    h3{
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
    }
    

    p{ 
     font-family: 'Montserrat';
    font-weight: 300;
    font-size: 11px;
    line-height: 12px;
    color: #2C2C2C;
    width: 100%;
    margin-left: 5px;
}
    div{
        background: #373737;
        border-radius: 5px;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        color: #FFFFFF;
        margin-left: 5px;
        

        width: 25%;
        height: 59%;
        align-items: center;
        justify-content: center;
        display: flex;

        h5{
            font-size: 49%; 
        }
    }

    .bag{
        mix-blend-mode: normal;
    opacity: 0.84;

    }

    button{
    cursor: pointer;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    gap: 7px;
    border: none;

    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    :hover{opacity: 0.8;}
    :active{opacity: 0.5;}
    }
`
