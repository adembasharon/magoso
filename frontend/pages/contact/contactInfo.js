import Image from "next/image";
import email from "../../public/images/email.svg"
import location from "../../public/images/location.svg"
import phone from "../../public/images/phone.svg"
import styles from "./contact.module.css"
import school from "../../public/images/schoolOverview.jpg"

const ContactInfo=()=>{
    return(
        <div>

<div>
        <div className={styles.contact_school_image}>
            <Image src={school} alt=""/>
        </div>

       


        
    <div>
        
    <div className={styles.contact_nav_text}>
    <h4>GET IN TOUCH    </h4>
    <div className={styles.contact_paragraph}>
    <h5>W'D LOVE TO HEAR FROM YOU</h5>
    <p>If you have any questions, please feel free to drop a line, We're here to answer any question.  </p>
    </div>
    </div>
    </div>

  



    <div className={styles.contact_location_details_container}>
        <div className={styles.contact_icons_container}>
<div className={styles.contact_icon}>
    <div>
    <Image src={email} alt="" width={23}/>
    </div>
    <div>
    <p>
      magoso@gmail.com  
    </p>
    </div>
</div>

<div className={styles.contact_icon}>
    <div>
    <Image src={location} alt="" width={23}/>
    </div>
    <div>
    <p>
      Lainisaba, kibera
    </p>
    </div>
</div>

<div className={styles.contact_icon}>
    <div>
    <Image src={phone} alt="" width={23}/>
    </div>
    <div>
    <p>
      07111111111 <br/> or <br/> 07654321788
    </p>
    </div>
</div>
    </div>

    <div>
        <div>
<div className={styles.contact_input_container}>
<div>
    <input type="text" placeholder="YOUR NAME"/>
</div>
<div>
    <input type="email" placeholder="YOUR EMAIL"/>
</div>
</div>

<div className={styles.contact_input_container}>
<div>
    <input type="number" placeholder="PHONENUMBER"/>
</div>
<div>
    <input type="text" placeholder="YOUR ADRESS"/>
</div>
</div>
</div>

<div>
    <div className={styles.contact_textArea}>
    <textarea placeholder="WRITE YOUR MESSAGE"/>
    </div>
    <div className={styles.contact_button}>
    <button>SUBMIT</button>
    </div>
</div>

    </div>
</div>
{/* </div> */}
</div>

        </div>
    )
}
export default ContactInfo