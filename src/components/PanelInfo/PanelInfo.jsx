import { React, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import './PanelInfo.css'

const PanelInfo = () => {
  const { selectedBackground, setSelectedBackground, arrayAllInfo, setArrayAllInfo } = useContext(AppContext)
  return (
    <div className='panel-info'>
     {arrayAllInfo?.map((info, index) =>{
      return(
        <div className="item">
          {arrayAllInfo[0]?.map((item,ind) =>{
            return(
              <div key={ind} className="circle" style={{background:item}}></div>
            )
          })}
        </div>
      )
     })}
    </div>
  )
}

export default PanelInfo
