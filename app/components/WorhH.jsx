"use client"
import React from 'react'
import { BiCircle, BiDownArrow, BiStar } from 'react-icons/bi'
import { BsArrow90DegDown, BsFillStarFill, BsStarFill } from 'react-icons/bs'
import { BsArrowDown } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import { motion } from 'framer-motion'
// BsArrow90DegDown


const WorhH = () => {
  return (
    <>
      <div>
        <div className='rounded-lg bg-[#1b1b1b] mt-3 ' >
          <p className='flex w-full justify-center pt-4 font-bold gap-2'>
            <BsFillStarFill className='text-main' />
            <mdall className='text-white text-center'>Work Highlights </mdall>
          </p>
          <h2 className='text-4xl py-5 border-b text-white font-bold text-center mb-3'>Work Highlights</h2>
          <div className=' flex justify-between px-7 py-2'>
            <div className='flex  gap-2  '>
              <div className='bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md '>
                <BiCircle className='text-white w-full h-full' />
              </div>
              <p className='text-white ' >Goals and Objectives </p>
            </div>
            <div className='bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md '>
              <BsArrowDown className='text-white w-full h-full' />
            </div>
          </div>
          <div className=' flex justify-between px-7 py-2'>
            <div className='flex  gap-2  '>
              <div className='bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md '>
                <BsFillStarFill className='text-white w-full h-full' />
              </div>
              <p className='text-white ' >Research process  </p>
            </div>
            <div className='bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md '>
              <BsArrowDown className='text-white w-full h-full' />
            </div>
          </div>
          <div className=' flex justify-between px-7 py-2'>
            <div className='flex  gap-2  '>
              <div className='bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md '>
                <TfiWrite className='text-white w-full h-full' />
              </div>
              <p className='text-white ' >Goals and Objectives </p>
            </div>
            <div className='bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md '>
              <BsArrowDown className='text-white w-full h-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorhH