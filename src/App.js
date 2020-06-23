import React, { useState } from 'react';

import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

function App() {
  const [name, setName] = useState({
    persons:
      [
        { name: 'Susanna', age: 35 },
        { name: 'Ben', age: 35 },
        { name: 'Josh', age: 37 }
      ]
  })

  const changeName = event => {
    setName({
      persons:
        [
          { name: 'Susanna', age: 35 },
          { name: event.target.value, age: 35 },
          { name: 'Josh', age: 37 }
        ]
    })
  }
  return (
    <div className="App">
      <p>Test</p>
      <UserInput changed={changeName} />
      <UserOutput
        name={name.persons[0].name} />
      <UserOutput
        name={name.persons[1].name}
      />
      <UserOutput
        name={name.persons[2].name} />
    </div>
  );
}

export default App;
