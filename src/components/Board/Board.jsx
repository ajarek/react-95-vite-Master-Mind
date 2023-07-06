import './Board.css'
const array= new Array(32).fill('')
const Board = () => {
  return (
    <div className='board'>
      {array.map((br,index)=>{
        return(
          <div key={index} className='item'>
          <div className='circle' onClick={(e)=>e.target.style.background='red'} >{br}</div>
        </div>
        )
      })}
     
      
    </div>
  )
}

export default Board
