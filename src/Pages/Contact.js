import "./Contact.css"
import conactUs from "../image/ContactUs.png"
import letter from "../image/contact_pic.png"
import { useState } from "react"

const Contact = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  
  const [users, setUsers] = useState([])

  const formSubmit = (event) =>{
    event.preventDefault()

    if ( fullName && email ) {
      const oneUser = {fullName: fullName, email: email, phone: phone, subject:subject, message:message}
      setUsers( (users) => {
        return [...users, oneUser]
      })
    } else {
      console.log("Něco nebylo vyplněno!");
    }
    setFullName("")
    setEmail("")
    setPhone("")
    setSubject("")
    setMessage("")
  }

  return (
  <div className="all-contact">
    <div className="text-contact">
      < img src={conactUs} alt=""/>
      <div className="adres">
       <div className="adres-first"> <p>39 Emanuel Ln,</p>
        <p>Rosebery NSW 2018</p>
        <p>Australia</p></div>
        <div className="adres-second"><p>For technical support for our products please email us on:</p>
        <p>support@hopsoft.com.au</p>
        <p>admin@hopsoft.com.au</p>
        <p>ABN: 82 639 873 064</p></div>
      </div>
      <img src={letter} alt="" className="letter"/>
    </div>

    <article>
    <form onSubmit={formSubmit}>
      <label htmlFor="fullName">Name
      <input  Name
        className="userInfo" 
        type="text" 
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      </label>
      <label htmlFor="email">Email
      <input 
        className="userInfo" 
        type="email"  
        value={email}
        onChange = { (event) => setEmail(event.target.value) }
      />
      </label>
      <label htmlFor="phone">Phone
      <input
        className="userInfo"
        type="number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      </label>
      <label htmlFor="subject">Subject
      <input
        className="userInfo"
        type="text"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
      </label>
      <label htmlFor="message">Message
      <input
        className="userInfo1"
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      </label>
      <input type="submit" value="SUBMIT" className="submit"/>
    </form>
  </article>
</div>
  )
}

export default Contact
