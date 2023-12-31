import React, { useState } from 'react';

function ShowHabitants() {
 const [data, setData] = useState([
    { 
      id: 1, 
      name: 'Doe', 
      surname: 'John',
      birth: '15/02/1986',
      destination: '26 rue des Coquelicots',
      email: 'doe.john@email.com',
      phone: '0652144553'
    },
 ]);

 const addRow = () => {
    setData([...data, { 
      id: data.length + 1, 
      name: 'Doe', 
      surname: 'John',
      birth: '15/02/1986',
      destination: '26 rue des Coquelicots',
      email: 'doe.john@email.com',
      phone: '0652144553' 
    }]);
 };

 const editFunction = (id) => {
    alert('Fonction d\'édition pour l\'utilisateur ' + id);
 };

 const deleteFunction = (id) => {
    setData(data.filter((item) => item.id !== id));
 };

 return (
    <div>
      <h3>Tableau</h3>

      <table>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Date de naissance</th>
          <th>Adresse</th>
          <th>Email</th>
          <th>Téléphone</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.birth}</td>
            <td>{item.destination}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <button onClick={() => editFunction(item.id)}>Editer</button>
              <button onClick={() => deleteFunction(item.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </table>

      <button onClick={addRow}>Ajouter une ligne</button>
    </div>
 );
};

export {ShowHabitants};