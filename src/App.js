import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';


const App = () => {
  const [charData, setCharData] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res=> {
      console.log(res.data.results)
      setCharData(res.data.results)
    }).catch(err => {

    })
  }, [])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App"> 
      <h1 className="Header">Cast</h1>
      {charData.map((char) => {
        return <Character name={char.name} danger={char.name === 'Darth Vader'}/>
      })}
    </div>
  );
}

export default App;
