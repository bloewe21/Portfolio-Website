import React from 'react'

import CPlusPlus from '../assets/cplusplus.png'
import CProgram from '../assets/cprogram.png'
import Python from '../assets/python.png'
import Linux from '../assets/linux.png'
import GitHub from '../assets/github.png'
import ReactJS from '../assets/reactjs.png'
import Unity from '../assets/unity.png'
import Ableton from '../assets/ableton.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full font-bold'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='text-center'>
                <p className='text-4xl font-bold border-b-4 inline border-blue-500 text-center'>Skills</p>
            </div>
            <div className='justify-center mx-auto py-4'>
                <h1 className='p-1 bg-gray-300 bg-opacity-20 rounded-lg mx-auto flex justify-center text-lg'>Here's a list of technologies I've worked with:</h1>
            </div>
            {/*Boxes*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-blue-500 hover:scale-110  hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={CPlusPlus} alt="C++ icon" />
                    <p className='my-2'>C++</p>
                </div>
                <div className='shadow-lg shadow-blue-500 hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={CProgram} alt="C++ icon" />
                    <p className='my-2'>C Language</p>
                </div>
                <div className='shadow-lg shadow-blue-500 hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={Python} alt="C++ icon" />
                    <p className='my-2'>Python</p>
                </div>
                <div className='shadow-lg shadow-blue-500 hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={Linux} alt="C++ icon" />
                    <p className='my-2'>Linux</p>
                </div>
                <div className='shadow-lg shadow-blue-500 hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={GitHub} alt="C++ icon" />
                    <p className='pt-3'>Git</p>
                </div>
                <div className='shadow-lg shadow-blue-500 hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={ReactJS} alt="C++ icon" />
                    <p className='pt-5'>React JS</p>
                </div>
                <div className='shadow-lg shadow-blue-500 hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={Unity} alt="C++ icon" />
                    <p className='my-2'>Unity</p>
                </div>
                <div className='shadow-lg shadow-blue-500 hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#0a192f] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={Ableton} alt="C++ icon" />
                    <p className='pt-3'>Ableton</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills