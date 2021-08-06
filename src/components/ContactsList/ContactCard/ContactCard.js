import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
function ContactCard(props) {
    const [open, setOpen] = React.useState(false)
    const{id, name, email } = props.contact;

    console.log(props.contact);
    // console.log(props.contact.name);
    // console.log(props.contact.email);
    const style = {
        width:"100%",
        backgroundColor:'rgb(38, 88, 88)',
        padding:'4px',
        boxShadow:'2px 3px 3px #000',
        borderRadius: '2px',
        marginBottom:'5px'

    }
    const emailStyle = {
        display:'inline-block',
        paddingLeft:'20px',
        fontSize:'80%',
        color:'orange',
        textDecoration:'none'
    }
    return (
        <div >
            <div role="list" class="ui divided middle aligned list" style={style}>
                <div role="listitem" class="item">
                    <div class="right floated content">
                    <Modal
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            trigger={<Button color='red'>Delete</Button>}
                            >
                            <Modal.Header>Delete Contact</Modal.Header>
                            <Modal.Content image>
                                {/* <Image size='medium' src='/images/avatar/large/rachel.png' wrapped /> */}
                                <Modal.Description>
                                {/* <Header</Header> */}
                                <p>
                                    Are you sure you want to delete {name} contact?
                                </p>
                                {/* <p>Is it okay to use this photo?</p> */}
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='black' onClick={() => setOpen(false)}>
                                Nope
                                </Button>
                                <Button
                                content="Yep I'm sure!"
                                labelPosition='right'
                                icon='checkmark'
                                onClick = {() =>props.removeContact(id)}
                                // onClick={() => setOpen(false) && props.removeContact(id)}
                                positive
                                />
                            </Modal.Actions>
                    </Modal>





                        {/* <button 
                        class="ui red button"
                        onClick = {() =>props.removeContact(id)}
                        >delete</button> */}
                        </div>
                       
                        <img src="https://react.semantic-ui.com/images/avatar/small/lena.png" class="ui avatar image"/>
                        <div class="content">{name}</div>
                        <Link to={{pathname:`/ContactDetail/${id}`, state:{contacts: props.contact}}}>    
                        <a href="#" style={emailStyle} >{email}</a>
                        </Link>
                    </div>
            </div>
            {/* <div role="list" class="ui divided middle aligned list" style={style}>
                <div role="listitem" class="item">
                    <div class="right floated content">
                        <button class="ui red button">delete</button>
                        </div><img src="https://react.semantic-ui.com/images/avatar/small/lena.png" class="ui avatar image"/>
                        <div class="content">Lena</div>
                        <a href="#" style={emailStyle} >texr@semantic</a>
                    </div>
            </div> */}
            

        </div>
    )
}

export default ContactCard
