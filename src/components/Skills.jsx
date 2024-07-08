import React from 'react'

import CPlusPlus from '../assets/cplusplus.png'
//import CProgram from '../assets/cprogram.png'
import Python from '../assets/python.png'
//import Linux from '../assets/linux.png'
import GitHub from '../assets/github.png'
import ReactJS from '../assets/reactjs.png'
import Unity from '../assets/unity.png'
//import Ableton from '../assets/ableton.png'
import Java from '../assets/java.png'
import MyHtml from '../assets/html.png'
import CSharp from '../assets/csharp.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full font-bold'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
            <div className='text-center'>
                <p className='text-4xl font-bold border-b-4 inline border-blue-500 text-center'>Skills</p>
            </div>
            <div className='justify-center mx-auto py-4'>
                <h1 className='p-1 bg-gray-300 bg-opacity-20 rounded-lg mx-auto flex justify-center text-lg'>A list of technologies in which I'm proficient:</h1>
            </div>
            {/*Boxes*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110  hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={CPlusPlus} alt="C++ icon" />
                    <p className='my-2'>C++</p>
                </div>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={CSharp} alt="C++ icon" />
                    <p className='my-2'>C#</p>
                </div>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={Python} alt="C++ icon" />
                    <p className='my-2'>Python</p>
                </div>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-16 mx-auto py-2' src={Java} alt="C++ icon" />
                    <p className='my-2'>Linux</p>
                </div>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={MyHtml} alt="C++ icon" />
                    <p className='pt-3'>HTML</p>
                </div>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={ReactJS} alt="C++ icon" />
                    <p className='pt-5'>React JS</p>
                </div>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={Unity} alt="C++ icon" />
                    <p className='my-2'>Unity</p>
                </div>
                <div className='shadow-lg shadow-blue-500 text-white hover:scale-110 hover:bg-blue-900 hover:font-bold duration-500 bg-[#110b4d] rounded-lg'>
                    <img className='w-20 mx-auto py-2' src={GitHub} alt="C++ icon" />
                    <p className='pt-3'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills