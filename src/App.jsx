import Board from './components/Board/Board'
import Panel from './components/Panel/Panel'
import PanelInfo from './components/PanelInfo/PanelInfo'
import { createContext, useState } from 'react'
export const AppContext = createContext()
function App() {
  const [selectedBackground, setSelectedBackground] = useState('')
  const [arrayAllInfo, setArrayAllInfo] = useState([])
  const [counter, setCounter] = useState(0)

  return (
    <div style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>
        <AppContext.Provider
        value={{selectedBackground, setSelectedBackground, arrayAllInfo, setArrayAllInfo,counter, setCounter}}>
      <Board/>
      <PanelInfo/>
      <Panel/>
      </AppContext.Provider>
    </div>
  )
}

export default App
