import React from 'react'
import map from '../assets/map.jpg'

const About = () => {
  return (
    <div name='about' className='w-full text-white'>
        <div className='pb-8 pl-4 text-center'>
                    <p className='text-4xl font-bold border-b-4 inline border-blue-500'>
                        About
                    </p>
                </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                <div>
                </div>
            </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='space-y-2'>
                        <p className='font-bold text-lg sm:text-right bg-gray-300 bg-opacity-20 rounded-lg p-2'>
                            I've lived in SoCal all my life and have made many great friends in the area. 
                            I only started studying Computer Science in college, but have always had great 
                            interest in technology and have found coding a great fit for me. I strive to put 
                            my all into my projects and enjoy contributing creatively towards them.
                        </p>
                        <p className='font-bold text-lg sm:text-right bg-gray-300 bg-opacity-20 rounded-lg p-2'>
                            <span className='text-red-500'>Home</span>: Foothill Ranch, Lake Forest
                        </p>
                        <p className='font-bold text-lg sm:text-right bg-gray-300 bg-opacity-20 rounded-lg p-2'>
                            <span className='text-blue-500'>College</span>: California State University, Fullerton
                        </p>
                    </div>
                    <div>
                        <img className='rounded-lg' src={map} alt="Logo" style={{width: '1000px'}}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About