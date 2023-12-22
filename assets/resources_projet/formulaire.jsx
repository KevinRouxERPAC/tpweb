import React, { Component } from 'react';
import axios from 'axios';

class Formulaire extends Component {
 constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      dateNaissance: '',
      adresse: '',
      telephone: '',
      email: '',
    };
 }

 handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.prenom]: event.target.value });
    this.setState({ [event.target.dateNaissance]: event.target.value });
    this.setState({ [event.target.adresse]: event.target.value });
    this.setState({ [event.target.telephone]: event.target.value });
    this.setState({ [event.target.email]: event.target.value });
    
 };

 handleSubmit = (event) => {
    event.preventDefault();
    const data = {  
      nom : this.state.nom, 
      prenom : this.state.prenom,
      dateNaissance : this.state.dateNaissance,
      adresse : this.state.adresse, 
      telephone : this.state.telephone,
      email : this.state.email
    };

    axios.post('/habitant', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
 };

 render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br></br>
        <label>
          Nom :
          <input type="text" name="nom" onChange={this.handleChange} />
        </label>
        <label>
          Prénom :
          <input type="text" name="prenom" onChange={this.handleChange} />
        </label>
        <label>
          Date de naissance :
          <input type="date" name="dateNaissance" onChange={this.handleChange} />
        </label>
        <label>
          Adresse :
          <input type="text" name="adresse" onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} />
        </label>
        <label>
          Téléphone:
          <input type="text" name="telephone" onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
        <br></br>
      </form>
    );
 }
}

export {Formulaire};