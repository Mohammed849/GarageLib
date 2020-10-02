import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Apropos from './Apropos';
import Contact from './Contact';
import Navbar from './CNavbar';
import Login from './Login';
// import axios from 'axios';
import '../assets/css/App.css';

// const App = () => {

//   // On déclare nos constantes pour appeler nos états qui seront peuplés par nos données
//   const [data, setData] = useState();

//   // On appelle notre fetch asynchrome pour ramener les données depuis notre serveur
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('http://localhost:3005/');
//       setData(result.data);
//     };

//     fetchData();
//   }, []);

//   // On retourne nos données dans notre application à la racine
//   return (
//     <div className="App">
//       {data && data.map(data => (
//         <>
//           <h1>{data.title}</h1>
//           <p>{data.welcome}</p>
//         </>
//       ))}
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/Apropos' component={Apropos} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Login' component={Login} />
    </Router>
  );
}

export default App;
