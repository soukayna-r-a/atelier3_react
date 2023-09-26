import React from 'react';

import List from './Liste';

const UserCard = () => {
    const listeElements = [
        { id: 1, text: "Faire les courses", completed : true },
        { id: 2, text: "Réviser pour l'examen" , completed : false },
        { id: 3, text: "Aller chez le médecin", completed : true },
        { id: 4, text: "Aller chez le médecin", completed : false },
        { id: 5, text: "Aller chez le médecin", completed : true },
       ];
    
    return (
      <div>
        {listeElements.map(e=>
        <List
          id={e.id}
          text={e.text}
          completed={e.completed}
        />
        )}
      </div>
    );
  };
  export default UserCard;