import React from "react";
import styled from "styled-components";

const Footerconteiner=styled.div`
background:blue;

`
const Infor =styled.div`
background:red;
padding:2em;
margin:1em;
width:90%;
`
const Footerdisplay =styled.div`
display:flex;
width:100%;



`
const FooterUl=styled.div`
width:100%;
display:flex;
justify-content:space-around;
`

const Footer = ()=>{
    return (
        <Footerconteiner>

<Footerdisplay>
            <div>
            <Infor>
            <p>This is a school home founded by two women with an aim to help the slum kids who are orphans,homeless and have been abandoned and negleted 
by the  society,Therefore in Magoso many kids in kibera find peace and hoping for good future.</p>
            </Infor>
            
            <Infor>
            <p>The google map.</p>
            </Infor>

            </div>

<FooterUl>
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

</FooterUl>

</Footerdisplay>
        </Footerconteiner>
    )}

    export default Footer;