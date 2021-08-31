import React from 'react';
import Navbar from './Componenets/Navbar/Navbar';
import{action,orginals,ComedyMovies,HorrorMovies,Romantic,Documenteries}from './urls';
import './App.css';
import Banner from './Componenets/Banner/Banner';
import RowPost from './Componenets/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Banner/>
     <RowPost url={orginals} title='TRENDING'/>
     <RowPost url={action} title='ACTION' isSmall/>
     <RowPost url={ComedyMovies} title='COMEDY' isSmall/>
     <RowPost url={HorrorMovies} title='HORROR' isSmall/>
     <RowPost url={Romantic} title='ROMANTIC' isSmall/>
     <RowPost url={Documenteries} title='DOCUMENTERIES' isSmall/>
     
    </div>
  );
}

export default App;
