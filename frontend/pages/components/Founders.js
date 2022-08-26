import React from "react";
import styled from "styled-components";




const Foundercontainer=styled.div`
border:2px solid red;

`
const Founderimg=styled.div`

colour:red;
`

const Foundercontent=styled.div`
font-size:2rem;
`
const Founders = ()=>{
    return(
        <Foundercontainer>
          <Founderimg>
             <div>
              
          <img
            src="../images/3.jpg"
            className="founder"
            alt="..."
          />
          
        
        
        </div>

        <Foundercontent>
<p>
SAN FRANCISCO--(BUSINESS WIRE)--NEXT.JS CONF -- Vercel, a comprehensive platform for creating unsurpassed web user experiences and creator of Next.js, the leading React and JavaScript framework for frontend web development, today announced Next.js 11, accelerating frontend developers’ ability to build the next big thing through speed and collaboration. New innovations include significantly faster starts and changes, real-time feedback, instantaneous live collaboration and significant image optimization enhancements. In addition, the Aurora team in Google Chrome developed Conformance for Next.js, a system that provides carefully crafted solutions and rules to support optimal loading; Next.js script prioritization and font enhancement automations that reduce First and Largest Contentful Paint times. Together, these enhancements enable developers to improve Core Web Vitals scores, which are now being used by Google to influence search rankings. Developers can try these new capabilities by visiting nextjs.org/11.
</p>


        </Foundercontent>
        </Founderimg>
        </Foundercontainer>
    )
}

export default Founders;