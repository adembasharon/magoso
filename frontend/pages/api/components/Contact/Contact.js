import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import styles from "./Contact.module.css"
const Contact = () => {
  return (
    <div className={styles.bgcontact1}>
      <div className={styles.bgcontact}>
<h2 className={styles.contact}>Contact us</h2>
      </div>
      <div className={styles.contactflex}>
      <div className={styles.form}>
        <h2 className={styles.heading}>Send us message</h2>
      <div className={styles.initials}>
    <input type="text" placeholder='First Name' className={styles.textarea}/>
    <input type="text" placeholder='Last Name' className={styles.textarea}/>
    </div>
    <div>
    <input type="text" placeholder='Email' className={styles.textarea1}/>
    </div>
    <div>
    <input type="number" placeholder='phone number' className={styles.textarea1}/>
    </div>
    
    <div>
    <textarea placeholder='message' className={styles.message}/>
    </div>
    <div>
      <button className={styles.submit}>Submit</button>
    </div>
   </div>


<div>
   <div>
    <div>
<div className={styles.icontext}>
  <div>
<PhoneIcon  className={styles.icon}/>
</div>
<div>
<h3 className={styles.info}>Adress</h3>
</div>
</div>
<div>
  <h3 className={styles.contactinfo}>Mashimoni Drive,Off DC Road,Po Box 01000-40185,Nairobi,Kenya</h3>
</div>
</div>

<div>
<div className={styles.icontext}>
  <div>
<PhoneIcon  className={styles.icon}/>
</div>
<div>
<h3 className={styles.info}>Adress</h3>
</div>
</div>
<div>
  <h3 className={styles.contactinfo}>Mashimoni Drive,Off DC Road,Po Box 01000-40185,Nairobi,Kenya</h3>
</div>
</div>

<div>
<div className={styles.icontext}>
  <div>
<PhoneIcon className={styles.icon}/>
</div>
<div>
<h3 className={styles.info}>Adress</h3>
</div>
</div>
<div>
  <h3 className={styles.contactinfo}>Mashimoni Drive,Off DC Road,Po Box 01000-40185,Nairobi,Kenya</h3>
</div>
</div>
</div>

   </div>
   </div>




   
   </div>
  )
}

export default Contact
