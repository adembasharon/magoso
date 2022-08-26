import React,{useState} from 'react'
import Payment from './Payment/Payment'
import styles from "./Donation.module.css"

const Donation = () => {
  const [amount,setAmount]=useState(0)
  const [formData,setFormData]=useState({
phone:"",
amount:""

  })



  return (
    <div className={styles.flex}>

   
      <div className={styles.img}>
      

        <div className={styles.border}>
        <h2 className={styles.title}>DONATE TO MAGOSO PRIMARY SCHOOL</h2>
          <div className={styles.align}>
          <div className={styles.credential1}>
            <div className={styles.column}>
{/* <label>First Name</label> */}
<input type="text" className={styles.input1} placeholder="First Name"/>
</div>

<div className={styles.column}>
{/* <label>Last Name</label> */}
<input type="text" className={styles.input1} placeholder="Last Name"/>
</div>
</div>

<div className={styles.credential2}>
<div className={styles.column}>
{/* <label>Email</label> */}
<input type="currency" className={styles.input1} placeholder="Email"/>
</div>

<div className={styles.column}>
{/* <label>Contact</label> */}
<input type="number" className={styles.input1} placeholder="Contact"/>
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
<input type="number" placeholder='customize' className={styles.inputcustomize} 
onChange={(e)=>setAmount(e.target.value)}

/>
</div>

</div>

<div className={styles.gateway}>
<div>
<h2 className={styles.heading1}>Payment Method</h2>
</div>
<div className={styles.payment}>
<button className={styles.mpesa}>Mpesa</button>

</div>

<div className={styles.payment}>
  <Payment amount={amount} setAmount={setAmount}/>

</div>


<div className={styles.payment}>
  
</div>
</div>

        </div>
        </div>
    </div>
  )
}

export default Donation
