import React from 'react'

const SongContainer = (props) => {
  return (
    <div className='my-10'>
      <h1 className='text-w font-bold md:text-7xl sm:text-6xl text-5xl py-16 px-32 md:text-left text-center'>TOP SONGS</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {props.children}
      </div>
    </div>
  )
}

export default SongContainer
