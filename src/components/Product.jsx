import React from 'react'
import Button from './Button'

function Product({ val ,mover, count }) {
    return (
        <div onMouseEnter={()=>{mover(count)}} className='w-full h-[16rem] mt-2 text-white'>
            <div  className='max-w-screen-xl px-10 mx-auto flex  items-center justify-between'>
                <h1 className='text-6xl capitalize text-medium'>{val.title}</h1>
                <div className='w-1/3'>
                    <p className='mb-10'>{val.description}</p>
                    <div className='flex gap-5'>
                        {val.live && <Button title="Live Website"/>}
                        {val.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
