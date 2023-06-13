import React from 'react'
import Member from './Member'

const MembersContainer = () => {
  return (
    <div className='bg-indigo-400 ml-5 mr-5'>
    <p className='text-center m-5'>Members</p>
        <Member/>
        <Member/>
   </div>
  )
}

export default MembersContainer
