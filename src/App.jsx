import Board from './components/Board/Board'
import Panel from './components/Panel/Panel'

function App() {
  

  return (
    <div style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>
      <Board/>
      <Panel/>
    </div>
  )
}

export default App
