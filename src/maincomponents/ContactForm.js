import { useState } from "react";

function ContactForm({ addContact }) {
    //this is where we will be entering the data in as user
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const contact = {
        firstName,
        lastName,
        address,
     
    };

    addContact(contact);
    setFirstName("")
    setLastName("")
    setAddress("")



return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="text" 
    className="form-label" 
    id="title" 
    placeholder="Enter First Name" value={firstName} 
    >
    First Name
    </label>
      <input
        type="text" className="form-control" id="firstName"
        onChange = {(e) => setFirstName(e.target.value)}
         />

      <label htmlFor="text" className="form-label" id="lastName">
        Last Name
    
        </label>
      <input
        type="text" className="form-control" id="lastName"
        onChange = {(e) => setLastName(e.target.value)}
        />
    
        <button type="submit" className="btn btn-primary">
            Submit</button>
        </form>
    )
}

export default ContactForm