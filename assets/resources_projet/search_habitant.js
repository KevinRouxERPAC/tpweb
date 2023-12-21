import React, { useState } from 'react';

function Search(){

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Formulaire soumit...`);

    /*InsertToBDD(
      nom,
      prenom,
      adresse,
      codePostal,
      sex,
      dateDeNaissance,
      email
    )*/

  }


    return(
        <form onSubmit={handleSubmit}>
        <div>
        <br></br>
          <div>Recherche d'un habitant</div>
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
          <br></br>
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    );
}
export { Search };