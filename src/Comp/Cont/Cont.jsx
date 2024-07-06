import React from 'react'
import './Cont.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Cont = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "53ae912e-b9ae-4a1a-8c2f-9ca1757088b9");
  
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
    <div className='contact' id ='contact'>
    <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or email us directly- it could be anything a feedback a suggestion a chat about your perfect fit or monday blues healing drama, your favourite actor, director or project an appreciation for this page all which are important so do not hesistate. </p>
        <ul>
            <li> <img src={mail_icon} alt="" />clubblue723@gmail.com</li>
        </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required/>
            <label>Your Fav Drama</label>
            <input type='tel' name='drama' placeholder='Enter Your Fav Drama' required/>
            <label>Write Your Message</label>
            <textarea name="messge" rows='6'placeholder='Enter Your Message' required></textarea>
            <button type='Submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
</div>
  )
}

export default Cont

