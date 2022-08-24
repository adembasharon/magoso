import React from "react";
import styled from "styled-components";

const Footerconteiner=styled.div`
background:#000;
color:#fff;
width:100%;
padding:2em
`
const Infor =styled.div`
width:40%;

`
const Footerdisplay =styled.div`
display:flex;
justify-content:space-around;
width:80%;
margin:0 auto;
`
const FooterUl=styled.div`

`

const Footer = ()=>{
    return (
        <Footerconteiner>


<Footerdisplay>
          
            <Infor>
            <p>This is a school home founded by two women with an aim to help the slum kids who are orphans,homeless and have been abandoned and negleted 
by the  society,Therefore in Magoso many kids in kibera find peace and hoping for good future.</p>
          
            
            
            <p>The google map.</p>
        </Infor>



<div className="footerul">

<ul>
    <h4>Useful Links</h4>
    <li>Magos School</li>
    <li>Gallery</li>
    <li>OB-OG Club</li>
    <li>Jumba la Watoto</li>
    
</ul>

</div>



<div className="footerul">

<ul>
    <h4>What We Do</h4>
    <li>Contact Us</li>
    <li>About Us</li>
    <li>Responsibility</li>
    <li>Our Policy</li>
    
</ul>

</div>



<div className="footerul">

<ul>
    <h4>Useful Links</h4>
    <li>Magos School</li>
    <li>Gallery</li>
    <li>OB-OG Club</li>
    <li>Jumba la Watoto</li>
    
</ul>
<button className="donation-btn">Donation</button>

</div>


</Footerdisplay>


        </Footerconteiner>
    )}

    export default Footer;