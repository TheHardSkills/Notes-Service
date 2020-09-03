import React from 'react';
import ControlPanel from './ControlPanel.jsx'
let commandsArray = ["Get all notes", "Get specified note", "Create note", "Update note", "Delete note"];
//let commandsArray = ["Update note"];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Get what you want:
        </p>
        {
          commandsArray.map(command => {
            return <ControlPanel command={command} />
          })
        }
      </header>
    </div>
  );
}

export default App;
