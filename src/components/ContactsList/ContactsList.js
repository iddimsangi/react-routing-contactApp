import React from 'react'
import ContactCard from './ContactCard/ContactCard'
function ContactsList(props) {
//    console.log(props);
   const deletContId = (id) => {
       props.getContactId(id);
   }
const style ={
    width:"45%",
    position: "absolute",
    top: "55%",
    left: "25%"
}
//    .contactList{
//     width:45%;
//     position: absolute;
//     top: 55%;
//     left: 25%;
//   }
   const contactLst = props.contactArrLst.map(contactObj => {
    //    return  <ContactCard 
    //    name={contact.name} 
    //    email={contact.email}/>
    return <ContactCard 
    contact={contactObj}
    key={contactObj.id}
    removeContact={deletContId}/>
    
   })
    return (
        <div style={style}>
           {contactLst}
        </div>
    )
}

export default ContactsList
