import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Start a Project"}) {

    return (
        <div className='w-40 h-4 px-3 py-4 bg-white rounded-full flex items-center text-sm justify-between text-black'>
            <span>{title}</span>
            <IoIosReturnRight className='size-5' />
        </div>
    )
}

export default Button
