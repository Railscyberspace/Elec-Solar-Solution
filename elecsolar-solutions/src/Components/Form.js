import React, { Component } from 'react'

class form extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            Phone_Number: '',
            Address: '',
            Products: '',
            Discription: ''


        }
    }
    handlefirstNameChange = event =>
    {
        this.setState({
            firstName: event.target.value
        })
    }
    handlelastNameChange = event =>
    {
        this.setState({
            lastName: event.target.value
        })
    }

    handlePhone_NumberChange = event =>
    {
        this.setState({
            Phone_Number: event.target.value
        })
    }


    handleAddressChange = event =>
    {
        this.setState({
            Address: event.target.value
        })
    }


    handleDiscriptionChange = event =>
    {
        this.setState({
            Discription: event.target.value
        })
    }
    handleProductsChange = event =>
    {
        this.setState({
            Products: event.targrt.value
        })
    }

    handleSubmit = event =>
    {
        alert(`${ this.state.firstName } ${ this.state.lastName } ${ this.state.Phone_Number } ${ this.state.Products } ${ this.state.Address } {$this.Discription}`)

        event.defaultPrevent()
    }
    render()
    {
        const { firstName, lastName, Phone_Number, Address, Products, Discription } = this.state
        return (
            <form onsubmit={this.handleSubmit}>
                <div>
                    <label>firstName</label>
                    <input type="text" value={firstName} onChange={this.handlefirstNameChange} />
                    <label>LastName</label>
                    <input type="text" value={lastName} onChange={this.state.handlelastNameChange} />
                    <labe>Phone Number</labe>
                    <input type="text" value={Phone_Number} onChange={this.state.handlePhone_NumberChange} />
                    <label> Address</label>
                    <input type="text" valuee={Address} onchange={this.state.handleAddressChange} />
                    <div>
                        <label>Discription</label>
                        <textarea value={Discription} onChange={this.handleDiscriptionChange} />
                    </div>
                    <div>
                        <label>Products</label>
                        <select value={Products} onChange={this.handleProductsChange}>
                            <option value="Inverters">Inverters</option>
                            <option value="Batteries">Batteries</option>
                            <option value="Solar Panels">Solar Panels</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </div >
            </form >
        )
    }
}

export default form
