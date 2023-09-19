import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-6xl font-bold  w-7/12'>{title}</h1>
        <p className='py-6 text-lg w-1/2 text-justify'>{overview}</p>
        <div>
            <button className='bg-white text-black text-xl rounded-lg p-2 px-10 hover:bg-opacity-80 cursor-pointer'> ▶️ Play</button>
            <button className='bg-gray-500 text-white text-xl rounded-lg p-2 px-10 bg-opacity-50 mx-2 cursor-pointer'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;