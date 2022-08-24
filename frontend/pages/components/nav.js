import React from "react";
import styled from "styled-components"

const Navconteiner=styled.div`
width:100%;

`
const Logo=styled.div`
width:80px;
height:80px;
background:red;
border-radius:50%;
`

const Nav = () =>{
return(
    <Navconteiner className="nav">
<ul className="navlinks">
    <Logo>
    </Logo>
    <li><a>Home</a></li>
    <li><a>OB-OG</a></li>
    <li><a>Gallery</a></li>
    <li><a>About us</a></li>
    <li><a>Donation</a></li>
    <li><a>Choose Language</a></li>
    
</ul>
    </Navconteiner>
)
}

export default Nav;