import React from 'react'
import { BiPlus, BiSmile, BiStar } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";
import { CgFigma } from 'react-icons/cg';
import { DiReact } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
const Nums = () => {
    return (
        <>
            <section className='grid  gap-4 pt-4 w-full md:grid-cols-2 grid-cols-1'>
                <section className=' bg-[#141414] text-white  rounded-md my-4 py-4'>
                    <div className='text-center'>
                        <h1> My Stacks </h1>
                        <h1 className='font-bold pb-2'> Tech Arsenal </h1>
                    </div>
                    <div className='flex gap-4 flex-col'>
                        <div className='flex justify-center gap-14 '>
                            <div className='flex bg-[#252525] gap-2 w-[110px] p-2 justify-center rounded-md'>
                                <FiFigma className='text-[#444444] text-[15px]' />
                                Figma
                            </div>
                            <div className='flex bg-[#252525] gap-2 w-[110px] p-2 justify-center rounded-md'>
                                <FaReact className='text-[#444444] text-[15px]' />
                                Figma
                            </div>
                        </div>
                        <div className='flex justify-center gap-14 '>
                            <div className='flex bg-[#252525] gap-2 w-[110px] p-2 justify-center'>
                                <FiFigma className='text-[#444444] text-[15px]  rounded-md' />
                                Figma
                            </div>
                            <div className='flex bg-[#252525] gap-2 w-[110px] p-2 justify-center'>
                                <FaReact className='text-[#444444] text-[15px]  rounded-md' />
                                Figma
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" flex items-center gap-4 pb-4 ">
                    <div className=" px-2 pb-3 bg-[#141414] w-[30%] rounded-xl flex justify-center items-center flex-col  ">
                        <div className="relative">
                            <h1 className="md:text-[70px] text-[40px] text-[#525252] p-0 m-0">
                                12
                            </h1>
                            <BiPlus className="text-main absolute bottom-0 right-0 mb-5 ml-5" />
                        </div>
                        <div className="flex text-white w-full justify-center items-center gap-3">
                            <div className="">
                                <BiFlag className="text-main shadow-[#7bffac] " />
                            </div>
                            <p className="text-md "> projects </p>
                        </div>
                    </div>
                    <div className=" px-2 pb-3 bg-[#141414] w-[30%] rounded-xl flex justify-center items-center flex-col  ">
                        <div className="relative">
                            <h1 className="md:text-[70px] text-[50px] text-[#525252]">
                                06
                            </h1>
                            <BiPlus className="text-main absolute bottom-0 right-0 mb-5 ml-5" />
                        </div>
                        <div className="flex text-white w-full justify-center items-center gap-3">
                            <div className="">
                                <BiSmile className="text-main " />
                            </div>
                            <p className="text-md "> happy clients  </p>
                        </div>
                    </div>
                    <div className=" px-2 pb-3 bg-[#141414] w-[30%] rounded-xl flex justify-center items-center flex-col  ">
                        <div className="relative">
                            <h1 className="md:text-[70px] text-[50px] text-[#525252]">
                                02
                            </h1>
                            <BiPlus className="text-main absolute bottom-0 right-0 mb-5 ml-5" />
                        </div>
                        <div className="flex text-white w-full justify-center items-center gap-3">
                            <div className="">
                                <BiStar className="text-main " />
                            </div>
                            <p className="text-md "> projects </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Nums;
