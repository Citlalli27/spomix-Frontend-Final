import React from 'react'
import ItemPL from './ItemPL'

const ItemPLContainer = () => {
  return (
    <div className='bg-indigo-800 ml-5 mr-5'>
        <p className='text-center m-5'>Playlist</p>
        <ItemPL/>
        <ItemPL/>
        <ItemPL/>
    </div>
  )
}

export default ItemPLContainer
