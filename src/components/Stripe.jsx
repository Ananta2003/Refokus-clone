import React from 'react'

function Stripe({val}) {
    return (
        <div className='w-[16.6%] flex items-center select-none justify-between p-5 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-500'>
            <img className='w-[90px]' src={val.url} alt="" />
            <span className='font-semibold'>{val.number}</span>
        </div>
    )
}

export default Stripe
