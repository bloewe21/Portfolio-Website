import React from 'react'
import ttt from '../assets/tictac.jpg'
import site from '../assets/site.jpg'
import arduino from '../assets/arduino.jpg'
import bouncy from '../assets/bouncy.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-white bg-blue text-center'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500 pt-1'>Projects</p>
            </div>
            <div className='justify-center mx-auto pb-10'>
                <h1 className='p-1 bg-gray-300 bg-opacity-20 rounded-lg mx-auto flex justify-center font-bold text-lg'>Some projects that I've contributed a lot to:</h1>
            </div>
            {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${site})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider text-center'>
                            React JS Website
                        </p>
                        <p className='text-center'>
                            The website you're on right now!
                        </p>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bloewe21/Portfolio-Website">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${ttt})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider'>
                            Tic Tac Toe AI
                        </p>
                        <p className='text-center'>
                            Tic Tac Toe with an unbeatable Artificial Intelligence
                        </p>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bloewe21/Tic-Tac-Toe-AI">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/c_QTkdanAUQ">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${arduino})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider text-center'>
                            Morse Code
                        </p>
                        <p className='text-center'>
                            Arduino program that translates user input into light
                        </p>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bloewe21/Morse-Code-Arduino">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/shorts/06f5Xu6K09A">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${bouncy})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <p className='text-2xl font-bold text-white tracking-wider'>
                            Ball Simulation
                        </p>
                        <p className='text-center'>
                            Simulation of bouncy balls in a box
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
            </div>
        </div>
    </div>
  )
}

export default Projects