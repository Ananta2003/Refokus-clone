import React from 'react'

function Footer() {



    return (
        <div className='max-w-screen-lg mx-auto h-14 bg-black flex  items-center justify-between'>
            <div className='flex gap-5'>
                {["Privacy Policy", "Cookie Policy", "Impressum", "Terms", "Webflow Agency"].map((item, index) => <a key={index} className='text-xs text-zinc-400'>{item}</a>)}
            </div>
            <button><img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" /></button>
        </div>
    )
}

export default Footer
