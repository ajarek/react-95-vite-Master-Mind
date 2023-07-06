import './Panel.css'

const Panel = () => {
  return (
    <div className='panel'>
      <div  className='item item-panel'>
          <div className='circle' style={{background:'red'}}></div>
        </div>
      <div  className='item item-panel'>
          <div className='circle' style={{background:'blue'}}  ></div>
        </div>
      <div  className='item item-panel'>
          <div className='circle' style={{background:'green'}} ></div>
        </div>
      <div  className='item item-panel'>
          <div className='circle' style={{background:'yellow'}}  ></div>
        </div>
      <div  className='item item-panel'>
          <div className='circle' style={{background:'black'}}  ></div>
        </div>
      <div  className='item item-panel'>
          <div className='circle' style={{background:'white'}}  ></div>
        </div>
    </div>
  )
}

export default Panel