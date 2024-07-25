import React, { useState } from 'react'

import { assets } from '../../assets/assets'
import './Contact.css'

const Contact = () => {
  const [result , setResult] = useState("")
    
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8e7d2c16-3eee-4477-8951-3cc537cccada");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
    <div className="contact-col">
        <h3><img src={assets.msg_icon} alt="" />    Send us a Message</h3>
        <p>If you have a website, it might not seem like the page you need to prioritize, but that’s a huge mistake, especially considering that it’s one of the most valuable pages on your website and, typically, one of the most visited site pages. </p>
       <ul>
          <li> <img src={assets.mail_icon} alt="" /> santosh@gmail.com</li>
          <li> <img src={assets.phone_icon} alt="" /> +91 9589050819</li>
          <li><img src={assets.location_icon} alt="" /> 448 , Ashok Vihar , Ashoka Garden,Bhopal (M.P)</li>
       </ul>
     </div>

     <div className="contact-col">
       <form onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' />
          <label >Contact No</label>
         <input type="tel" name='phone'  placeholder='Enter your Mobile Number'/>
         <label >Write your messahes here</label>
         <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
         <button type='submit' className='btn dark-btn'>Submite now <img src={assets.white_arrow} alt="" /> </button>
       </form>
       <span>{result}</span>
     </div>
 </div>
  )
}

export default Contact