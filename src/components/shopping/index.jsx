 import { React, useState} from "react";
import { HiShoppingCart } from "react-icons/hi"
import {Shoppcart} from "./styles"
import Sidebar from '../sidebar'

function  Shopping() {
    const [sidebar,setSidebar] =useState(false)

const showSideBar = () => setSidebar(!sidebar)


return(

    <Shoppcart > 
    
    <HiShoppingCart onClick={showSideBar}/>
    {sidebar && <Sidebar active={setSidebar} />}

    </Shoppcart>


)}

export default Shopping




