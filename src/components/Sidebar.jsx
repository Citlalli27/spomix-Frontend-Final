import React from 'react'

import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-[#080830] w-[80px]'>
      <button onClick={() => navigate("/home")}>   Home</button>
      <button onClick={() => navigate("/newgroup")}>   My Groups</button>
    </div>
  )
}

export default Sidebar
