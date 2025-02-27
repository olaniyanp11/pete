"use client";
import React from 'react';
import { BiCode } from 'react-icons/bi';
import { motion } from 'framer-motion';

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "SEO Optimization",
];

const ClientService = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* Services Section */}
      <motion.div className="bg-[#161616] flex flex-col gap-3 relative overflow-hidden py-7 rounded-lg mt-2">
        <h2 className="text-center text-white w-full text-[25px] font-bold">
          Services
        </h2>
        <motion.div className="bg-main z-10 p-3 top-[40%] absolute rounded-2xl font-bold right-[35%] shadow-md shadow-main cursor-pointer hover:scale-105 transition-transform">
          View all Services
        </motion.div>

        {/* Scrolling Services */}
        <motion.div
          className="flex gap-6 relative w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...services, ...services].map((service, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center gap-2 p-2 px-4 rounded-lg bg-[#202020] shadow-lg transition-all hover:shadow-main hover:scale-110"
            >
              <BiCode className="text-[#636363] bg-[#333333] w-7 h-7 p-1 rounded-full" />
              <p className="text-[#949494]">{service}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-6 relative w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay:10 }}
        >
          {[...services, ...services].map((service, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center gap-2 p-2 px-4 rounded-lg bg-[#202020] shadow-lg transition-all hover:shadow-main hover:scale-110"
            >
              <BiCode className="text-[#636363] bg-[#333333] w-7 h-7 p-1 rounded-full" />
              <p className="text-[#949494]">{service}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Clients Section */}
      <motion.div className="bg-[#161616] flex flex-col gap-3 relative overflow-hidden py-7 rounded-lg mt-2">
        <h2 className="text-center text-white w-full text-[25px] font-bold">
          MY Clients
        </h2>
        <motion.div className="bg-main z-10 p-3 top-[40%] absolute rounded-2xl font-bold right-[35%] shadow-md shadow-main cursor-pointer hover:scale-105 transition-transform">
          View all Services
        </motion.div>
        {/* Scrolling Clients */}
        <motion.div
          className="flex gap-6 relative w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...services, ...services].map((service, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center gap-2 p-2 px-4 rounded-lg bg-[#202020] shadow-lg transition-all hover:shadow-main hover:scale-110"
            >
              <BiCode className="text-[#636363] bg-[#333333] w-7 h-7 p-1 rounded-full" />
              <p className="text-[#949494]">{service}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-6 relative w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...services, ...services].map((service, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center gap-2 p-2 px-4 rounded-lg bg-[#202020] shadow-lg transition-all hover:shadow-main hover:scale-110"
            >
              <BiCode className="text-[#636363] bg-[#333333] w-7 h-7 p-1 rounded-full" />
              <p className="text-[#949494]">{service}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientService;
