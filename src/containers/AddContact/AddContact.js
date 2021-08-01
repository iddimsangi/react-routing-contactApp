import React, { Component } from 'react'
import './AddContact.css'
// import { Button, Checkbox, Form } from 'semantic-ui-react'

export class AddContact extends Component {
    state = {
        name:"",
        email:""
    }
    addContact = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert('All fields are Mandatory!');
            return
        }
        // console.log(this.state);
        this.setState({
            name:"",
            email:""
        })
        console.log(this.props);
        this.props.history.push("/");
        this.props.addContactHandler(this.state);
    }
    render() {
        return (
            <div className="form-container">
                <form class="ui form" onSubmit={this.addContact}>
                            <div class="field">
                                <label>Full Name</label>
                                <input 
                                placeholder="Full Name"
                                value={this.state.name}
                                onChange={(e) =>{this.setState({name:e.target.value})}}/>
                            </div>
                            <div class="field">
                                    <label>Your Email</label>
                                    <input 
                                    placeholder="Your Email" 
                                    value={this.state.email}
                                    onChange={(e) =>{this.setState({email:e.target.value})}}/>
                            </div>
                        <button type="submit" class="ui button">Submit</button>
                    </form>
            </div>
        )
    }
}

export default AddContact
