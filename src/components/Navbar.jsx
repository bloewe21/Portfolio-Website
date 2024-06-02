import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import pfp from '../assets/pfp.png'
import {Link} from 'react-scroll'
/*import resumepdf from '../assets/Brian Loewe - 2023 Resume.pdf'*/
/*import resumepdf2 from '../assets/Brian Loewe - Resume 2024.pdf'*/
import resumepdf2 from '../assets/Brian_Loewe_Resume2024.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
        <div>
            <img src={pfp} alt="Logo" style={{width: '50px'}}/>
        </div>

        {/*menu*/}
        <ul className='hidden md:flex'>
            <a target="_blank" rel="noopener noreferrer" href={resumepdf2}>
                <li>
                    <p className='text-blue-500 font-bold'>Resume</p>
                </li>
            </a>
            <li>
                <Link to='home' smooth={true} duration-500>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' offset={-110} smooth={true} duration-500>
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' offset={-110} smooth={true} duration-500>
                    Skills
                </Link>
            </li>
            <li>
                <Link to='projects' offset={-80} smooth={true} duration-500>
                    Projects
                </Link>
            </li>
            <li>
                <Link to='contact' offset={-20} smooth={true} duration-500>
                    Contact
                </Link>
            </li>
        </ul>

        {/*hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <a target="_blank" rel="noopener noreferrer" href={resumepdf2}>
                <li>
                    <p className='text-blue-500 font-bold py-4 text-4xl'>Resume</p>
                </li>
            </a>
            <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration-500>
                    Home
                </Link>
            </li>
            <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration-500>
                    About
                </Link>
            </li>
            <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration-500>
                    Skills
                </Link>
            </li>
            <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to='projects' smooth={true} duration-500>
                    Projects
                </Link>
            </li>
            <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration-500>
                    Contact
                </Link>
            </li>
        </ul>


        {/*social icons*/}
        <div className='fixed flex-col top-[20%] left-0 hidden lg:flex'>
            <ul>
            <a target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300 font-bold' href="https://www.linkedin.com/in/brian-loewe-258385236/">
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    LinkedIn <FaLinkedin size={30} />
                </li>
            </a>
            <a target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300 font-bold' href="https://github.com/bloewe21">
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                    GitHub <FaGithub size={30} />
                </li>
            </a>
            <a target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300 font-bold' href="mailto:brianloewe21@gmail.com">
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                    Email <HiOutlineMail size={30} />
                </li>
            </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar