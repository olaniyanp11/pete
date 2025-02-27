"use client"
import React from 'react'
import { BiCode, BiWorld } from 'react-icons/bi'
import { FaMeetup } from 'react-icons/fa'
import { motion } from "framer-motion"


const Reliability = () => {
    return (
        <>
            <section className=' mt-2 md:grid-cols-2 grid-cols-1 rounded-md'>
                <div className='w-full py-6 px-4 bg-bac'>
                    <div className='flex justify-center items-center gap-4'>
                        <BiCode className='bg-main rounded-full w-7 h-7 ' />
                        <h2 className='text-white '>Web development </h2>
                    </div>
                    <p className='pt-2 text-[#cecece] text-sm pb-4 border-b-[#cccccc]'> Crafting functional websites with clean code and responsive design to meet client objective and enhance user experience </p>
                    <motion.div className='bg-[#505050] flex justify-center items-center py-2 rounded-md gap-2'
                        whileHover={{ scale: 1.05, backgroundColor: "green" }}
                        transition={{ duration: 1 }}

                    >
                        <FaMeetup className='text-main' />
                        <p className='text-[#cecece]'>Schedule a call</p>
                    </motion.div>
                    <div className='w-full flex justify-between text-sm text-[#c2c2c2]'>
                        <p>completed projects</p>
                        <p>projects done</p>
                    </div>
                    <motion.div className='bg-[#505050] flex justify-center items-center py-2 rounded-md px-2 gap-2 text-[#ececec] flex-wrap'
                        whileHover={{ scale: 1.05, backgroundColor: "green" }}
                        transition={{ duration: 1 }}

                    >
                        <div className='flex justify-center items-center gap-2'>
                            <div className='bg-[#8d8d8d] p-1'>
                                <BiCode className='' />
                            </div>
                            <p className='text-sm '>Saas development </p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='bg-[#8d8d8d] p-1'>
                                <BiCode className='' />
                            </div>
                            <p className='text-sm '>A landing page </p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='bg-[#8d8d8d] p-1'>
                                <BiCode className='' />
                            </div>
                            <p className='text-sm '> Agency </p>
                        </div>

                    </motion.div>
                </div>
                <div className='bg-bac  mt-2'>
                    <h2 className='text-white   font-bold text-center text-2xl'>Reliability </h2>
                    <div className='flex gap-2'>
                        <BiWorld className='text-main text-3xl' />
                        <div className='w-full bg-black rounded-t-xl py-10'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reliability