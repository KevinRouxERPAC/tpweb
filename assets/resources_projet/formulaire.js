//--------------------------------------------------------
/*
import React, { Component } from "react";
import axios from "axios";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      adresse: "",
      email: "",
      telephone: "",
      dateDeNaissance: "",
      genre: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.nom]: event.target.value });
    this.setState({ [event.target.prenom]: event.target.value });
    this.setState({ [event.target.adresse]: event.target.value });
    this.setState({ [event.target.email]: event.target.value });
    this.setState({ [event.target.telephone]: event.target.value });
    this.setState({ [event.target.dateDeNaissance]: event.target.value });
    this.setState({ [event.target.genre]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      adresse: this.state.adresse,
      email: this.state.email,
      telephone: this.state.telephone,
      dateDeNaissance: this.state.dateDeNaissance,
      genre: this.state.genre,
    };
//DATABASE_URL=mysql://root:Mypassword11254*@127.0.0.1:3306/exemple?serverVersion=8.0
    axios
      .post("http://root:password@127.0.0.1:3306/example", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    <div>
      <h3>Formulaire d'ajout d'habitant</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <br></br>
          <label>
            Nom :
            <input
              type="text"
              name="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </label>
          <label>
            Prenom :
            <input
              type="text"
              name="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Date de naissance :
            <input
              type="date"
              name="naissance"
              value={dateDeNaissance}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Genre :
            <select value={genre} onChange={handleChange}>
              <option value="M">Homme</option>
              <option value="F">Femme</option>
              <option value="X">Autre</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Adresse :
            <input
              type="text"
              name="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </label>
          <label>
            Email :
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Téléphone :
            <input
              type="text"
              name="phone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </label>
        </div>

        <input type="submit" value="Envoyer" />
      </form>
      <br></br>
    </div>;
  }
}

export {Formulaire};


import React, { useState } from 'react';
import axios from 'axios';

function Formulaire() {
 const [formData, setFormData] = useState({ name: '', email: '' });

 function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
 }

 async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('/api/submitForm', formData);

      if (response.status === 200) {
        alert('Form submitted successfully');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form');
    }
 }

 return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
 );
}

export {Formulaire};



const mysql = require('mysql');

const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'password',
 database: 'Habitant'
});

connection.connect((err) => {
 if (err) throw err;
 console.log('Connected to MySQL database!');
});

connection.query('INSERT INTO my_table (nom, prenom,adresse,date_naissance) VALUES (?, ?,?,?)', ['John Doe', 'john.doe@example.com'], (err, result) => {
 if (err) throw err;
 console.log('Data inserted into MySQL database!');
});

connection.end();
*/
import React, { useState } from 'react';

function Formulaire() {
 const [formData, setFormData] = useState({});

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add your code to send the form data to the API
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
 );
}

export { Formulaire};
