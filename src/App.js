import React from 'react';
import Branding from './components/Branding';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App container'>
      <h1>Stardust</h1>

      <div className='component'>
        <h2>Branding</h2>
        <Branding />
      </div>

      <div className='component'>
        <h2>Profile</h2>
        <Profile
          user={{
            name: 'Ben de Jesus',
            picture: 'http://placekitten.com/200/200'
          }}
        />
      </div>
    </div>
  );
}

export default App;
