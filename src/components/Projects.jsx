import React from 'react'
import ttt from '../assets/tictac.jpg'
import site from '../assets/site.jpg'
import arduino from '../assets/arduino.jpg'
import bouncy from '../assets/bouncy.jpg'
import discord from '../assets/discord.jpg'
import frontier from '../assets/frontier.png'
import swiftshot from '../assets/swiftshot.jpg'
import feathers from '../assets/feathers.jpg'
import letters from '../assets/letters.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-black bg-blue text-center'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500 pt-1'>Projects</p>
            </div>
            <div className='justify-center mx-auto pb-10'>
                <h1 className='p-1 bg-gray-300 bg-opacity-20 rounded-lg mx-auto flex justify-center font-bold text-lg'>Examples of some of my projects:</h1>
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
                <div style={{backgroundImage: `url(${feathers})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider text-center'>
                            A Pair of Feathers Squawk Together
                        </p>
                        <p className='text-center'>
                            Unity game published to Steam; solo developed over 6 months
                        </p>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bloewe21/APairOfFeathersGame">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3075170/A_Pair_of_Feathers_Squawk_Together/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${letters})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider text-center'>
                            Search Daily
                        </p>
                        <p className='text-center'>
                            Daily word search website made with HTML, CSS, JavaScript
                        </p>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bloewe21/WordSearchWebsite">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://search-daily.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${swiftshot})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider text-center'>
                            Swiftshot
                        </p>
                        <p className='text-center'>
                            Unity game developed entirely by me for 3 months
                        </p>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bloewe21/SwiftshotGame">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://funnymewy.itch.io/swiftshot">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${discord})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider text-center'>
                            Discord Clone
                        </p>
                        <p className='text-center'>
                            A simple Discord clone made for FullyHacks 2023
                        </p>
                        <div className='pt-2 text-center'>
                            {/*
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/SValls2023/GroupStudy">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            */}
                            <a target="_blank" rel="noopener noreferrer" href="https://group-study-w7iv-1svfrqpn0-svalls2023.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*End of Grid Item*/}
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${frontier})`}} className='shadow-lg shadow-blue-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider text-center'>
                            Frozen Frontier
                        </p>
                        <p className='text-center'>
                            A 2D game made with Unity for Mini Jam 130; I worked on coding, art/animation, and music
                        </p>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/shinjin-santhakumar/LunarJam2023/tree/mewyo">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://funnymewy.itch.io/frozen-frontier">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
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
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bloewe21/Bouncing-Balls-Pygame">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
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