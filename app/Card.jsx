import React from 'react'

const Card = () => {
  return (
        <div className="bg-blue-500 p-6 rounded hover:scale-105 w-22 text-center space0-y-4">
          <div className='flex flex-col items-start'>
            <h1 className="text-xl font-semibold mb-4">Kings Of the WORLD</h1>
            <h3>Street Fighter 6</h3>
            <p>25 July 2025</p>
            <p>Attendees : 299</p>
            <button>View Event</button>
          </div> 
        </div>
  )
}

export default Card