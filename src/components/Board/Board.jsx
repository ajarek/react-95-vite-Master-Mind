import { React, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import _ from 'lodash';
import { ColorRandom } from '../../helper/ColorRandom'
import { compareArray } from '../../helper/compareArray'
import './Board.css'
const array = new Array(32).fill('')
const Board = () => {
  const {
    selectedBackground,
    setSelectedBackground,
    arrayAllInfo,
    setArrayAllInfo,
    counter, setCounter
  } = useContext(AppContext)
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

  let arrayInfo = compareArray(arrayRandomColors, arraySelectedColors)
  useEffect(() => {
    if (arrayInfo[3] !== '') {
      arrayAllInfo.push(arrayInfo)
    }
    if ( _.isEqual(arrayInfo,['black','black','black','black'])===true) {
      alert('You guessed')
    }
  })
  useEffect(() => {
    if (arraySelectedColors.length === 4) {
      setArraySelectedColors([])
    }
  }, [arraySelectedColors])
  useEffect(() => {
    if (arraySelectedColors.length === 4) {
    setCounter(counter+1)
    }
  })

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
      {/* podgląd-------------------------------- */}
      <div className='wrapper-preview'>
        {arrayRandomColors.map((color, index) => {
          return (
            <div
              key={index}
              className='item'
            >
              <div
                style={{ background: color }}
                className='circle'
              ></div>
            </div>
          )
        })}
        {/* -------------------------------------------- */}
      </div>
    </div>
  )
}

export default Board
