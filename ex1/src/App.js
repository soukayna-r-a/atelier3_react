

import React from 'react';
import UserCard from './composant/UserCard';

const App = () => {
  const utilisateur = {
    nom: "Doe",
    prénom: "John",
    email: "john.doe@example.com",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  };

  return (
    <div className="app">
      <UserCard
        nom={utilisateur.nom}
        prénom={utilisateur.prénom}
        email={utilisateur.email}
        imageUrl={utilisateur.imageUrl}
      />
    </div>
  );
};

export default App;

// function UserCard(props)
// {
//   return <>
//   <img src={props.info.ImageURL} alt='ok' width="100px"/>
//   <p>{props.info.nom}-{props.info.prénom}</p>
//   <p>{props.info.email}</p>
//   </>;
// }
// function App() {
//   const utilisateur = {
//     ImageURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     nom: "Doe",
//     prénom: "John",
//     email: "john.doe@example.com"
//    };
   
// return(
//   <>
//     <UserCard info={utilisateur} />
//   </>
// ); 
// }
