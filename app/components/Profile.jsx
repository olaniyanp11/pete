import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { BiWorld, BiShield } from 'react-icons/bi'
import { HiAcademicCap } from 'react-icons/hi'
import { FcDocument } from 'react-icons/fc'
import { GrDocument } from 'react-icons/gr'
import { BsWhatsapp } from 'react-icons/bs'
const Profile = () => {
    return (
        <>
            <section className='flex md:flex-row flex-col gap-5'>
                <section className='bg-[#161616] h-[250px] w-[300px] rounded-lg p-4'>
                    <h3 className='text-white pb-2'>Work Gallery</h3>
                    <div className='w-full h-[80%] flex justify-center items-center border  border-[#2b2a2a]'>
                        <div className='bg-main  p-2 px-4  rounded-md text-center font-bold'>
                            Project done
                        </div>
                    </div>
                </section>
                <section className='bg-[#161616] rounded-md  pl-3' >
                    <div className='flex pt-4 justify-start gap-2'>
                        <div className=' w-[100px] '>
                            <img src="/person.png" className='rounded-2xl' alt="" />
                        </div>
                        <div className='text-white '>
                            <div className='bg-[#141414] flex rounded-lg border border-[#292929]  justify-between items-center px-2 w-[160px]  '>
                                <div className='w-[8px] h-[8px] rounded-full shadow-lg shadow-[#75ffa7] bg-main '> </div>
                                <p className='text-white  text-md'>Available To Work </p>
                            </div>
                            <h1> OGUNGBE PETER</h1>
                            <p className='text-[12px] text-[#666666]'>i'm a frontend developer & product designer </p>

                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3 px-5 pt-2'>
                        <div className='flex text-white text-lg gap-1 justify-center items-center'>
                            <div><CiLocationOn className="text-main " /></div>
                            <mdall>Nigeria</mdall>
                        </div>
                        <div className='flex text-white text-lg gap-1 justify-center items-center'>
                            <div><BiWorld className="text-main " /></div>
                            <mdall>English & Spanish</mdall>
                        </div>
                        <div className='flex text-white text-lg gap-1 justify-center items-center'>
                            <div><HiAcademicCap className="text-main " /></div>
                            <mdall>Good boy</mdall>
                        </div>
                        <div className='flex text-white text-lg gap-1 justify-center items-center'>
                            <div><CiLocationOn className="text-main " /></div>
                            <mdall>Futa</mdall>
                        </div>
                        <div className='flex text-white text-lg gap-1 justify-center items-center'>
                            <div><GrDocument className="text-main " /></div>
                            <mdall>Nigeria</mdall>
                        </div>
                    </div>
                    <div className='text-[#8b8b8b] flex gap-2 py-5 ' >
                        <mdall className=''> send me a message on Gmail </mdall>
                        <BsWhatsapp className='text-main ' />
                        <mdall>Whatsapp me </mdall>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Profile