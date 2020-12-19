import React, { Component } from 'react'

class form extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            PhoneNumber: '',
            Address: '',
            Discription: ''


        }
    }
    handlefirstNameChange = event =>
    {
        this.setState({
            firstName: event.target.value
        })
    }

    handleDiscriptionChange = event =>
    {
        this.setState({
            Discription: event.target.value
        })
    }
    render()
    {
        return (
            <form>
                <div>
                    <label>firstName</label>
                    <input type="text" value={this.state.firstName} onChange={this.handlefirstNameChange} />
                    <label>LastName</label>
                    <input type="text" />
                    <labe>Phone Number</labe>
                    <input type="text" />
                    <label> Address</label>
                    <input type="text" />
                    <div>
                        <label>Discription</label>
                        <textarea value={this.state.Discription} onChange={this.handleDiscriptionChange} ></textarea>
                    </div>
                    <div>
                        <label>Products</label>
                        <select>
                            <option value="Inverters"></option>
                            <option value="Batteries"></option>
                            <option value="Solar Panels"></option>
                        </select>
                    </div>
                    <button></button>
                </div>
            </form >
        )
    }
}

export default form
