"use client"
import React from "react";
import { motion } from "framer-motion";
import { BsLightbulbFill, BsQrCode, BsYoutube, BsTwitter } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Follow = () => {
    const socialLinks = [
        { icon: <FaGithub className="text-white w-full h-full" />, username: "@Peterog" },
        { icon: <BsYoutube className="text-white w-full h-full" />, username: "@Peterog" },
        { icon: <BsTwitter className="text-white w-full h-full" />, username: "@Peterog" },
    ];

    return (
        <motion.section
            className="grid grid-cols-1 md:grid-cols-2 w-full gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Social Media Section */}
            <motion.section
                className="bg-[#1b1b1b] mt-3 rounded-md"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="text-center">
                    <p className="flex w-full justify-center pt-4 font-bold gap-2 items-center tracking-tight">
                        <BsLightbulbFill className="text-main" />
                        <span className="text-white text-xl">Follow Me</span>
                    </p>
                    <p className="text-white font-light mt-[-10px]">Online presence</p>
                </div>
                <hr className="text-white py-2 mt-2" />
                <div className="px-7 flex flex-col gap-2 pb-5">
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-between rounded-md px-1 py-2 bg-[#181818] cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex gap-2">
                                <div className="bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md">{link.icon}</div>
                                <p className="text-white">{link.username}</p>
                            </div>
                            <div className="bg-[#3f3f3f] relative w-[30px] p-1 h-[30px] rounded-md">
                                <CgArrowTopRight className="text-white w-full h-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                className="bg-[#1b1b1b] px-3 mt-3 rounded-md flex justify-center py-3 flex-col items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <motion.div
                    className="w-[40px] rounded-full flex justify-center items-center h-[40px] bg-[#3f3f3f] p-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <BsQrCode className="text-main" />
                </motion.div>
                <p className="text-white font-bold">Let's Work Together</p>
                <p className="text-[#c0c0c0] font-light">Let's make magic happen together</p>
                <motion.button
                    className="flex gap-2 rounded-md mt-2 bg-[#3f3f3f] w-full justify-center py-2 items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <MdEmail className="text-main" />
                    <span className="text-white text-md">Email me</span>
                </motion.button>
                <motion.button
                    className="flex gap-2 rounded-md mt-3 bg-[#3f3f3f] w-full justify-center py-2 items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <IoCall className="text-main" />
                    <span className="text-white text-md">Schedule a call</span>
                </motion.button>
            </motion.section>
        </motion.section>
    );
};

export default Follow;
