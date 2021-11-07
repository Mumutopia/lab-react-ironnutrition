import React, { Component } from 'react'

export class Search extends Component {
    state = {
        name : "",
    }

    handleInput = (evt) => {
        this.setState ({
            [evt.target.id]: evt.target.value,

        }, () => {this.props.handler(this.state)}
        )
        
    }


    render() {
        return (
            
            
    <input onChange={this.handleInput} id="name"  value={this.state.name} className="input" type="text"/>

    
           
        )
    }
}

export default Search
