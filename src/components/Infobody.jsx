import React from 'react'
import musica from'../assets/landing.png'
const Infobody = () => {
  return (
    <div className='bg-white w-full py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4' src={musica} alt="/"/>
            <div className='flex flex-col justify-center'>
                <h1 className='font-bold text-3xl md:text-5xl sm:text-4xl py-5'>You don't have a Spotify account?</h1>
                <p>Create one. Click on the following button.</p>
                <a href='https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F' className='bg-[#2d2965] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white text-center'>Create Account</a>
            </div>
        </div>
        
    </div>
    
  )
}

export default Infobody
