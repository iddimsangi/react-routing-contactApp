import React from 'react'

function ContactCard(props) {
    const{id, name, email } = props.contact;
    // console.log(props.contact)
    console.log(props.contact.name);
    console.log(props.contact.email);
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
                        <button 
                        class="ui red button"
                        onClick = {() =>props.removeContact(id)}
                        >delete</button>
                        </div><img src="https://react.semantic-ui.com/images/avatar/small/lena.png" class="ui avatar image"/>
                        <div class="content">{name}</div>
                        <a href="#" style={emailStyle} >{email}</a>
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
