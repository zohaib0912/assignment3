import './App.css';
import Dashboard from './views/Dashboard';
import Detail from './views/Detail';
import PostAd from './views/PostAd';
import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState()
  
  function showScreen(screen) {
    setScreen(screen)
  }

  return (
    <div className="App">
      <header className="App-header">

        <div style={{ display: 'flex' }}>
          <button onClick={() => showScreen('Detail')}>Detail</button>
          <button onClick={() => showScreen('PostAd')}>POSTAD</button>
        </div>

        <Dashboard />
        {screen === 'Detail' && <Detail />}
        {screen === 'PostAd' && <PostAd />}

      </header>
    </div>
  )
}

export default App;