import React, { Component } from 'react'

export class AddNewFood extends Component {
    state = {
        name : "",
        calories: "",
        image:"",
    }

    handleChange = (evt) => {
        
        this.setState({
            [evt.target.id]: evt.target.value,
        });
    }

    handleSubmit = (evt) => {

        evt.preventDefault();
        
        this.props.handler(this.state);
        
    }

    render() {
       
        if (this.props.form) {
            return ( 
                <form onSubmit={this.handleSubmit} className="form">
                    <h2>Add new Food</h2>
                    <label htmlFor="name" className="label" >
                    Name
                    </label>
                    <input id="name" className="input" type="text" onChange={this.handleChange} />
    
                    <label htmlFor="image" className="label">
                    Image Source :
                    </label>
                    <input id="image" className="input" type="text" onChange={this.handleChange} />
    
                    <label htmlFor="calories" className="label" >
                    Calories :
                    </label>
                    <input id="calories" className="input" type="number" onChange={this.handleChange} />
                    <button>Add</button>
                </form>
            )
        } else return null;
        
    }
}

export default AddNewFood
