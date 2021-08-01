import React,{ useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import Header from '../components/Header/Header'
import AddContact from '../containers/AddContact/AddContact'
import ContactsList from '../components/ContactsList/ContactsList'
import './App.css';

function App() {
  const[contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';
 const addContact = (contact) => {
  // console.log(contact)
  setContacts([...contacts, {id:uuid(), ...contact}])

  }
  const deleteContact = (id) =>{
    const contactsRemained = contacts.filter(contact =>{
      return contact.id !== id
    })
    setContacts(contactsRemained);
  }
  //GET THE CONTACT FROM LOCAL STORAGE
  useEffect(() => {
  const retrievedContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)))
  if(retrievedContact) setContacts(retrievedContact)
  },[])

  //ADD CONTACT TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])
  // const contacts = [
  //   {
  //     id:'001',
  //     name:'iddi Msangi',
  //     email:'mxang@icloud.co.tz'
  //   },
  //   {
  //     id:'002',
  //     name:'kalebu',
  //     email:'mgoord@icloud.co.tz'
  //   },
  //   {
  //     id:'003',
  //     name:'Harith',
  //     email:'Harith@icloud.co.tz'
  //   }
  // ]

  return (
    <div className="App">
      <header className="App-header">
          <Header />
          <div className="add-contact">
          <AddContact addContactHandler={addContact} />
          </div>
          <div className="contactList">
            <ContactsList 
            contactArrLst={contacts}  
            getContactId={deleteContact }/>
            </div>      
      </header>
    </div>
  );
}

export default App;
