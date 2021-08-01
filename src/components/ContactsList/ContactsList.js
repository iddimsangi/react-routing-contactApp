import React from 'react'
import ContactCard from './ContactCard/ContactCard'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
function ContactsList(props) {
//    console.log(props);
   const deletContId = (id) => {
       props.getContactId(id);
   }
const style ={
    width:"45%",
    position: "absolute",
    top: "20%",
    left: "25%"
}
//  const contactArrLst = [
//     {
//       id:'001',
//       name:'iddi Msangi',
//       email:'mxang@icloud.co.tz'
//     },
//     {
//       id:'002',
//       name:'kalebu',
//       email:'mgoord@icloud.co.tz'
//     },
//     {
//       id:'003',
//       name:'Harith',
//       email:'Harith@icloud.co.tz'
//     }
//   ]

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
             <div style={{marginBottom:'40px'}}>
                 <Link to="/AddContact">
                 <Button color='orange' floated='right'>Add Contact</Button>
                 </Link>
                
                {/* <Button floated='left'>Left Floated</Button> */}
             </div>
           {contactLst}
        </div>
    )
}

export default ContactsList
