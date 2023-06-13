import React from 'react'

const Artist = (props) => {
  return (
    <div className='overflow-hidden rounded-2xl group w-1/4 flex flex-col items-center justify-center'>
      <img src={props.imagen} alt="" className='transition-transform group-hover:scale-150 duration-200 rounded-full ' />      
      <div >
        <h1 className='text-center'>{props.name}</h1>
      </div>
    </div>
  )
}

export default Artist
