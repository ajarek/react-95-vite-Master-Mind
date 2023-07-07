import { React, useContext, useState } from 'react'
import { AppContext } from '../../App'
import {ColorRandom} from '../../helper/ColorRandom'
import './Board.css'
const array = new Array(32).fill('')
const Board = () => {
  const { selectedBackground, setSelectedBackground } = useContext(AppContext)
  const [arraySelectedColors, setArraySelectedColors] = useState([])
  const [arrayRandomColors, setArrayRandomColors] = useState(ColorRandom())


  const addColors = (e) => {
    if (arraySelectedColors.length < 4) {
      e.target.style.background = selectedBackground
      setArraySelectedColors([
        ...arraySelectedColors,
        e.target.style.background,
      ])
    }
  }
  console.log(arrayRandomColors)
  return (
    <div className='board'>
      {array.map((br, index) => {
        return (
          <div
            key={index}
            className='item'
          >
            <div
              className='circle'
              onClick={addColors}
            >
              {br}
            </div>
          </div>
        )
      })}
      {/* podgląd */}
      {arrayRandomColors.map((color, index) =>{

        return  <div
        key={index}
        className='item'
      >
         <div style={{background:color}} className='circle'></div>
         </div>
      })}
    </div>
  )
}

export default Board
