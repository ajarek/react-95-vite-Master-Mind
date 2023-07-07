import Board from './components/Board/Board'
import Panel from './components/Panel/Panel'
import { createContext, useState } from 'react'
export const AppContext = createContext()
function App() {
  const [selectedBackground, setSelectedBackground] = useState('')

  return (
    <div style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>
        <AppContext.Provider
        value={{selectedBackground, setSelectedBackground}}>
      <Board/>
      <Panel/>
      </AppContext.Provider>
    </div>
  )
}

export default App
