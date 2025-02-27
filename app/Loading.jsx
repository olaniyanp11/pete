"use client"
import React from "react";
import { motion } from "framer-motion";
import { BsQrCode } from "react-icons/bs";

const Loading = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen bg-[#1b1b1b] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Rotating QR Icon */}
            <motion.div
                className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#3f3f3f] p-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
                <BsQrCode className="text-main text-3xl" />
            </motion.div>

            {/* Pulsing Loading Text */}
            <motion.p
                className="mt-4 text-xl font-semibold tracking-wider"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                Loading....
            </motion.p>
        </motion.div>
    );
};

export default Loading;
