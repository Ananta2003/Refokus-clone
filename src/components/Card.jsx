import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function Card() {
    return (
        <div className='w-full py-10'>
            <div className='max-w-screen-lg mx-auto flex gap-1 '>
                <div className='w-1/3 bg-[#29292e] hover:bg-[#3e3e46] rounded-[20px]'>
                    <div >
                        <div className='flex items-center justify-between p-5'>
                            <h3>Up Next:News </h3>
                            <IoIosArrowRoundForward className='size-7' />
                        </div>
                        <h1 className='p-5 text-2xl font-regular'>Insights and behind the scenes</h1>
                    </div>
                    <p className='text-xs font-semibold text-zinc-400 p-5 mt-44'>Explore what drives our team.</p>
                </div>
                <div className='w-4/6 bg-[#323238] hover:bg-[#7443ff] rounded-[20px]'>
                    <div>
                        <div className='flex items-center justify-between p-5'>
                            <h3>Get In Touch </h3>
                            <IoIosArrowRoundForward className='size-7' />
                        </div>
                        <h1 className='p-5 text-2xl font-regular'>Let's get to it,<br/>together.</h1>
                    </div>
                    <h1 className='text-8xl font-semibold px-5 mt-10'>Start a Project</h1>
                    <button className='px-6 py-2 rounded-full border-[1px] border-white m-5 font-semibold'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Card
