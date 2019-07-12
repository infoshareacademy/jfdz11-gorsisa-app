import React, {Component} from 'react'

function Form(props) {
    return <form action="#">
    
    <label>Login: <input type="text"
    value={props.imie}
    onChange={props.imieChanged}
    
    /></label>

    <label>Hasło: <input type="text"
    value={props.haslo}
    onChange={
        props.haslo.Changed}
        
    /></label>
    </form>;
    }
   zmienImie = (evt) => {
       const imie = evt.currentTarget.value;
       this.setState({
           ...this.state,
           imie

        
       });

      

    };
   

 
    

   zmienHaslo = (evt) => {
    const haslo = evt.currentTarget.value;
    this.setState({
        ...this.state,
        haslo
        
    
    
    });
};


render() {}



export default Form