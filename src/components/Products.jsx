import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    const data = [
        {
            title: "Arqitel",
            description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false
        },

        {
            title: "Cula",
            description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: false
        },

        {
            title: "Layout Land",
            description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live: true,
            case: false
        },

        {
            title: "TTR",
            description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false
        },

        {
            title: "Maniv",
            description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live: true,
            case: false
        },

        {
            title: "Like Magic",
            description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
            live: true,
            case: true,
        }
    ]

    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val * 16)
    }




    return (
        <div className='mt-32  relative'>
            {data.map((elem, index) => <Product  val={elem} mover={mover} count={index} key={index} />)}
            <motion.div
                initial={{ y: pos, x: "-18%" }}
                animate={{ y: pos + `rem` }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: .6 }}
                className='absolute pointer-events-none top-0 w-full '>
                <div className='Window absolute w-[27rem] h-[17rem]  left-[47%]  overflow-hidden  '>
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: .6 }}
                        className=' w-full h-full rounded-md '>
                        <video className='w-[27rem] h-[15rem]' autoPlay loop muted>
                            <source src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/bcgp-169.webm" type='video/mp4' />
                        </video>
                    </motion.div>

                    <motion.div animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: .6 }}
                        className=' w-full h-full rounded-md '>
                        <video className='w-[27rem] h-[14rem]' autoPlay loop muted >
                            <source src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/sevdesk-169.webm" type='video/mp4' />
                        </video>
                    </motion.div>

                    <motion.div animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: .6 }}
                        className=' w-full h-full rounded-md'>
                        <video className='w-[27rem] h-[220px]' autoPlay loop muted >
                            <source src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm" type='video/mp4' />
                        </video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: .6 }}
                        className=' w-full h-full rounded-md'>
                        <video className='w-[27rem] h-[14rem] pb-4' autoPlay loop muted >
                            <source src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm" type='video/mp4' />
                        </video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: .6 }}
                        className=' w-full h-full rounded-md '>
                        <video className='w-[20rem] h-[12rem] pb-[10px]' autoPlay loop muted >
                            <source src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm" type='video/mp4' />
                        </video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: .6 }}
                        className=' w-full h-full '>
                        <video className='w-[27rem] h-full ' autoPlay loop muted >
                            <source src="https://cdn.refokus.com/website/2022/videos/weglot.webm" type='video/mp4' />
                        </video>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    )
}

export default Products
