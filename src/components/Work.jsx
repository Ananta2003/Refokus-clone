import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { data } from 'autoprefixer'

function Work() {
    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
        function ImagesLoader(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true })
            );
        }


        switch (Math.floor(data * 100)) {
            case 0:
                ImagesLoader([])
                break;
            case 1:
                ImagesLoader([0])
                break;
            case 2:
                ImagesLoader([0, 1])
                break;
            case 3:
                ImagesLoader([0, 1, 2])
                break;
            case 4:
                ImagesLoader([0, 1, 2, 3])
                break;
            case 5:
                ImagesLoader([0, 1, 2, 3, 4])
                break;
            case 6:
                ImagesLoader([0, 1, 2, 3, 4, 5])
                break;
            case 7:
                ImagesLoader([0, 1, 2, 3, 4, 5, 6])
                break;
        }
    })

    const [Images, setImages] = useState([
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-500.webp", top: "60%", left: "50%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-500.webp", top: "50%", left: "40%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d000c5875a51723e197f_Brightwave%20-%204%203.webp", top: "40%", left: "50%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203.webp", top: "60%", left: "60%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1-p-500.webp", top: "70%", left: "65%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203.webp", top: "80%", left: "38%", isActive: false },
    ])


    return (
        <div className='w-full'>
            <div className='relative max-w-screen-md mx-auto text-center'>
                <h1 className='text-medium text-[30vw] leading-none tracking-tight select-none'>work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {
                        Images.map((elem, index) => (elem.isActive && <img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] ' src={elem.url} key={index} style={{ top: elem.top, left: elem.left }} alt="" />)
                        
                        )
                    }

                </div>
                <h1 className='text-zinc-500'>Web Design, Webflow Development, Creative Development</h1>
            </div>
        </div>
    )
}

export default Work
