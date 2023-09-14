import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const App = () => {
 const [nrClicks,setNrClick] = useState(0)

  return (
    <div className="App">
      <h2>clickuri date: {nrClicks}</h2>
      <br/>
      <br/>
      <button style={{padding: '1rem', margin: '2rem'}}
      onClick={() => {
        let updateClicks = nrClicks+1;      
        setNrClick(updateClicks)

      }}
      on
      >+</button>
      <button style={{padding: '1rem', margin: '2rem'}}
       onClick={() => {
        let updateClicks = nrClicks-1;
        setNrClick(updateClicks)
       }}
       >-</button>
    </div>
  );
}

export default App;
