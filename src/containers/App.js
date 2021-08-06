import React,{ useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../components/Header/Header'
import axios from 'axios';
import AddContact from '../containers/AddContact/AddContact'
import ContactsList from '../components/ContactsList/ContactsList'
import ContactDetails from '../components/ContactDetails/ContactDetails'
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
  axios.get("http://localhost:3006/contacts").then(response =>{
      const receivedData = response.data;
      console.log(receivedData);
      if(receivedData) setContacts(receivedData);
    })
  // const retrievedContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)))
  // if(retrievedContact) setContacts(retrievedContact);

  },[])

  //ADD CONTACT TO LOCAL STORAGE
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
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
          <Router>
            <Switch>
                {/* <Route path="/" exact component={ContactsList } />
                <Route path="/AddContact" component={AddContact } /> */}
                <Route path="/" exact render={(props) =>(
                   <ContactsList {...props} contactArrLst={contacts}  
                   getContactId={deleteContact }/>
                  
                )} />
                 <Route path="/AddContact" render={(props) =>(
                 <AddContact {...props} addContactHandler={addContact}/>
                )} />
                <Route path="/ContactDetail" component={ContactDetails}/>
                  
            </Switch>
           
          </Router>
           {/* <AddContact addContactHandler={addContact} /> */}
          {/* <ContactsList 
            contactArrLst={contacts}  
            getContactId={deleteContact }/> */}
      </header>
    </div>
  );
}

export default App;
