import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
function ContactDetails(props) {
    console.log(props);
    const{ name, email} = props.history.location.state.contacts;
    return (
        <div style={{position:'absolute', top:'20%', left:'30%'}}>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    {email}
                </Card.Description>
                </Card.Content>
           </Card>
           <Link to="/">
           <button class="ui blue  button">Go back</button>
           </Link>
         
        </div>
    )
}

export default ContactDetails
