import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='max-w-screen-md mx-auto p-3 flex items-center justify-between font-["satoshi_vairable"] border-b-2 border-zinc-700'>
            <div className='nleft flex justify-between'>
                <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Refokus Logo" />
                <div className='links flex items-center gap-14 ml-20'>
                    {
                        ["Home", "Work", "About", "", "News"].map((elem, index) =>
                            elem.length === 0 ? <span key={index} className='w-[3px] h-20 bg-zinc-800'></span> : (<a key={index} className='text-sm flex items-center '>
                                {index === 1 && <span className='inline-block w-1 h-1 rounded-full bg-green-500 '></span>}
                                {elem}
                            </a>))

                    }

                </div>
            </div>
            <Button />

        </div>
    )
}

export default Navbar
