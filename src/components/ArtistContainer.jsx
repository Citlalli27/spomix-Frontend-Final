import React from 'react'


const ArtistContainer = (props) => {
  return (
    <div className=''>
      <h1 className='text-w font-bold  md:text-7xl sm:text-6xl text-5xl px-32 py-16 md:text-left text-center'>TOP ARTISTS</h1>
      <div className='flex flex-wrap justify-center gap-10 '>
        {props.children}
      </div>
    </div>
  )
}

export default ArtistContainer
