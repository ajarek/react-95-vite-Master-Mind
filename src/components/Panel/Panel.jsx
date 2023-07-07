import { useState } from 'react'
import './Panel.css'

const Panel = () => {
  const [selectedBackground, setSelectedBackground] = useState('yellow')
  
  return (
    <div className='panel'>
      <div className='item item-panel'>
        <div
          className='circle'
          style={{ background: 'red' }}
          onClick={(e) => setSelectedBackground(e.target.style.background)}
        ></div>
      </div>
      <div className='item item-panel'>
        <div
          className='circle'
          style={{ background: 'blue' }}
          onClick={(e)=>setSelectedBackground(e.target.style.background)}
        ></div>
      </div>
      <div className='item item-panel'>
        <div
          className='circle'
          style={{ background: 'green' }}
          onClick={(e)=>setSelectedBackground(e.target.style.background)}
        ></div>
      </div>
      <div className='item item-panel'>
        <div
          className='circle'
          style={{ background: 'yellow' }}
          onClick={(e)=>setSelectedBackground(e.target.style.background)}
        ></div>
      </div>
    </div>
  )
}

export default Panel
