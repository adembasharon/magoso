import React from 'react'
import Image from 'next/image'
import img2 from "../../../magosoimg/credo.png"
import styles from "./Donation.module.css"
const Donation = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.img}>
      
        <div className={styles.border}>
          <div className={styles.align}>
          <div className={styles.credential1}>
            <div className={styles.column}>
<label>First Name</label>
<input type="text" className={styles.input1}/>
</div>

<div className={styles.column}>
<label>Last Name</label>
<input type="text" className={styles.input1}/>
</div>
</div>

<div className={styles.credential2}>
<div className={styles.column}>
<label>Email</label>
<input type="currency" className={styles.input1}/>
</div>

<div className={styles.column}>
<label>Contact</label>
<input type="number" className={styles.input1}/>
</div>

</div>
</div>


<div className={styles.button1}>
<button className={styles.btn1}>Donate One Time</button>
<button className={styles.btn1}>Donate Monthly</button>


</div>

<div className={styles.customize}>

<div className={styles.direct}>
  <button className={styles.items}>200$ </button>
  <button className={styles.items}>200$</button>
  <button className={styles.items}>200$</button>
  <button className={styles.items}>200$</button>
  <button className={styles.items}>200$</button>
  <button className={styles.items}>200$</button>
  <button className={styles.items}>200$</button>
  <button className={styles.items}>200$</button>
</div>

<div>
<input type="number" placeholder='customize' className={styles.inputcustomize}/>
</div>

</div>

<div className={styles.gateway}>
<div>
<h2>Payment Method</h2>
</div>
<div className={styles.payment}>
  <div>
    <input type="radio"/>
    </div>
    <div>
    <Image src={img2} width={"20px"} height={"19px"}/>
    </div>
    <div>
    <p>Credit/Bank</p>
    </div>
</div>

<div className={styles.payment}>
  <div>
    <input type="radio"/>
    </div>
    <div>
    <Image src={img2} width={"20px"} height={"19px"}/>
    </div>
    <div>
    <p>Mpesa</p>
    </div>
</div>


<div className={styles.payment}>
  <div>
    <input type="radio"/>
    </div>
    <div>
    <Image src={img2} width={"20px"} height={"19px"}/>
    </div>
    <div>
    <p>PayPal</p>
    </div>
</div>
</div>

        </div>
        </div>
    </div>
  )
}

export default Donation
