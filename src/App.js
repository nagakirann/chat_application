import React from 'react';
import Chat from './Chat.js'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className='center'>
      <h1 style={{textAlign:"center",paddind:'10px',color:'#4d945d'}}>Chat Application</h1>
      <Chat />
      </div>
    </div>
  );
};

export default App;