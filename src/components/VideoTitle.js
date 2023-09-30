import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-2xl md:text-6xl font-bold  md:w-7/12'>{title}</h1>
        <p className='hidden md:block py-6 text-lg w-1/2 text-justify'>{overview}</p>
        <div className='mt-4 md:mt-0 flex'>
            <button className='bg-white text-black text-md md:text-xl rounded-lg md:p-2 py-1 px-3 md:px-10 hover:bg-opacity-80 cursor-pointer'> ▶️ Play</button>
            <button className='hidden md:block bg-gray-500 text-white text-xl rounded-lg p-2 px-10 bg-opacity-50 mx-2 cursor-pointer'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;