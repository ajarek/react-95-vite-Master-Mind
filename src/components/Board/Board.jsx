import { React, useContext } from 'react'
import { AppContext } from '../../App'
import './Board.css'
const array= new Array(32).fill('')
const Board = () => {
  const { selectedBackground, setSelectedBackground } = useContext(AppContext)
  return (
    <div className='board'>
      {array.map((br,index)=>{
        return(
          <div key={index} className='item'>
          <div className='circle' onClick={(e)=>e.target.style.background=selectedBackground} >{br}</div>
        </div>
        )
      })}
     
      
    </div>
  )
}

export default Board
