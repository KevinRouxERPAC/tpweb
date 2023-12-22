import React, { useState } from 'react';
import axios from 'axios';


function Formulaire() {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [dateDeNaissance, setDate] = useState('');
  const [genre, setGenre] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();

    alert(`Formulaire soumit...`);

    try {
      const habitant = {
          nom,
          prenom,
          adresse,
          email,
          telephone,
          dateDeNaissance,
          genre
      };

      const response = await axios.post('mysql://root:password@127.0.0.1:3306/example', habitant);
      console.log(response.data);

      // Clear the form
      setNom('');
      setPrenom('');
      setAdresse('');
      setEmail('');
      setTelephone('');
      setDate('');
      setGenre('');
      
    } catch (error) {
        console.error(error);
    }

  }

  const handleChange = (event) => {
    setGenre(event.target.value)
  }




  return (
    <div>
      <h3>Formulaire d'ajout d'habitant</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <br></br>
          <label>
            Nom :
            <input type="text" name="nom"
              value={nom} onChange={(e) => setNom(e.target.value)
              }
            />
          </label>
          <label>
            Prenom :
            <input type="text" name="prenom"
              value={prenom} onChange={(e) => setPrenom(e.target.value)
              }
            />
          </label>
        </div>

        <div>
        <label>
            Date de naissance :
            <input type="date" name="birth"
              value={dateDeNaissance} onChange={(e) => setDate(e.target.value)
              }
            />
          </label>
          <label>
            Adresse :
            <input type="text" name="adresse"
              value={adresse} onChange={(e) => setAdresse(e.target.value)
              }
            />
          </label>
        </div>

        <div>
        <label>
            Email :
            <input type="email" name="email"
              value={email} onChange={(e) => setEmail(e.target.value)
              }
            />
          </label>
          <label>
            Téléphone :
            <input type="text" name="phone"
              value={telephone} onChange={(e) => setTelephone(e.target.value)
              }
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
        <input type="submit" value="Ajouter" />
      </form>
      <br></br>
    </div>


  );
}

export { Formulaire };