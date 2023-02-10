import ContactForm from "./ContactForm";

const INITIAL_DATA = [
    {
        firstName: "Sally",
        lastName: "Jones",
        address: "102 Cherry rd",
        phone: "555-555-5555",
    }
]

function ContactList () {
const [contacts, setContacts] = useState(INITIAL_DATA);

const contactsHTML = contacts.map((contact, index) => (
    <div key={index}>
        <p>{contact.lastName}, {contact.firstName}</p>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
    </div>
))

return (
<div>I am contact
    <ContactForm addContact={addContact}/>
</div>
);
}

export default ContactList;




//firstName
//lastName
//address
//phoneNumber
//save person to state 
//display each contact when created 