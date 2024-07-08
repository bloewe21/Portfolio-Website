import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 text-center text-black font-bold'>
        <form action="https://getform.io/f/ed9238bc-40f2-48f8-a020-e0559e3b3b30" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='space-y-5 py-5'>
                <p className='font-bold text-4xl inline border-b-4 border-blue-500 '>Contact</p>
                <div>
                <p className='p-2 bg-gray-300 bg-opacity-20 rounded-lg mx-auto justify-center font-bold inline'>Please fill out the form below to reach out, or send me an email - 
                  <a target="_blank" rel="noopener noreferrer"href="mailto:brianloewe21@gmail.com">
                    <span className='border-b-2 border-blue-400 text-blue-400'> brianloewe21@gmail.com</span>
                  </a>
                </p>
                </div>
            </div>
            <input className='bg-gray-300 p-2 text-black' type="text" name='name' placeholder='Name'/>
            <input className='bg-gray-300 p-2 my-4 text-black' type="email" name='email' placeholder='Email'/>
            <textarea className='bg-gray-300 p-2 text-black' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 bg-white border-black font-bold mx-auto px-4 py-3 my-4 hover:bg-blue-500 flex duration-300'>Send</button>
        </form>
    </div>
  )
}

export default Contact