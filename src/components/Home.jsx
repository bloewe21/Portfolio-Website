import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-[600px]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center'>
            <h1 className='text-white font-bold bg-gray-300 bg-opacity-20 rounded-lg mx-auto p-1'>
                Hi, my name is
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-blue-500 py-4'>
                Brian Loewe
            </h2>
            <h1 className='text-white p-2 py-4 max-w-[700px] rounded-lg bg-gray-300 bg-opacity-20 mx-auto font-bold text-xl'>
                I am a 4th year student at California State Univeristy, Fullerton studying for a B.S. in Computer Science, expecting to graduate in Spring 2023. I'm currently interested in a job or internship for Software Programming or a similar position! This page provides details on me, my skills and certain projects I've worked on.
            </h1>
            <div className='pt-4'>
            <Link to='projects' smooth={true} offset={-80} duration-500>
                <button className='text-black bg-white group border-2 border-black font-bold px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-black hover:text-black duration-200 mx-auto'>
                        View Projects
                    <span className='group-hover:rotate-90 duration-200'>
                        <HiArrowNarrowRight className='ml-2' />
                    </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home