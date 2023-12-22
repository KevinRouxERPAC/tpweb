import React, { useState } from 'react';


function Formulaire() {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');

  const [telephone, setTelephone] = useState('');
  const [dateDeNaissance, setDate] = useState('');
  const [sex, setSex] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Formulaire soumit...`);

    /*InsertToBDD(
      nom,
      prenom,
      adresse,
      telephone,
      sex,
      dateDeNaissance,
      email
    )*/

  }

  const handleChange = (event) => {
    setSex(event.target.value)
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
            <input type="date" name="naissance"
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
            <input type="number" name="postal"
              value={telephone} onChange={(e) => setTelephone(e.target.value)
              }
            />
          </label>
          <label>
            Genre :
            <select value={sex} onChange={handleChange}>
              <option value="M">Homme</option>
              <option value="F">Femme</option>
              <option value="X">Autre</option>
            </select>
          </label>

        </div>
        <input type="submit" value="Envoyer" />
      </form>
      <br></br>
    </div>


  );
}

export { Formulaire };