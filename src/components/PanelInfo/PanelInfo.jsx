import { React, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import './PanelInfo.css'

const PanelInfo = () => {
  const {
    selectedBackground,
    setSelectedBackground,
    arrayAllInfo,
    setArrayAllInfo,
  } = useContext(AppContext)
  return (
    <div className='panel-info'>
      <div className='item'>
        {arrayAllInfo[0]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
      <div className='item'>
        {arrayAllInfo[1]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
      <div className='item'>
        {arrayAllInfo[2]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
      <div className='item'>
        {arrayAllInfo[3]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
      <div className='item'>
        {arrayAllInfo[4]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
      <div className='item'>
        {arrayAllInfo[5]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
      <div className='item'>
        {arrayAllInfo[6]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
      <div className='item'>
        {arrayAllInfo[7]?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='circle'
              style={{ background: item }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default PanelInfo
