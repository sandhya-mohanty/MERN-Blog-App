import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Sandhya's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Sandhya's Blog! This blog was created by Sandhya
              as a personal project to share his thoughts and ideas with the
              world. Sandhya is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
