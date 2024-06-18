import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-[600px]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center'>
            <h1 className='text-black font-bold bg-gray-400 bg-opacity-20 rounded-lg mx-auto p-1'>
                Hi, my name is
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-blue-500 py-4'>
                Brian Loewe
            </h2>
            <h1 className='text-black p-2 py-4 max-w-[700px] rounded-lg bg-gray-400 bg-opacity-20 mx-auto font-bold text-xl'>
            I am a 23 y/o graduate from California State University, Fullerton with a B.S. in Computer Science. I'm a junior software engineer in the Lake Forest, CA area. I'm interested in machine learning, data management, website development, and game design. This page showcases some of my skills and projects I've worked on.
            </h1>
            <div className='pt-4'>
            <Link to='projects' smooth={true} offset={-180} duration-500>
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