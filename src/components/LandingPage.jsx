import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="data-scroll data-scroll-section data-scroll-speed=''-.3' w-full h-screen bg-zinc-900 text-white pt-1">
      <div className="textstructure mt-52 px-20">
        {["we create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], damping: 1 }}
                    className="mr-5 w-[9vw] rounded-md h-[5.7vw] top-[0.5vw] m-b-3 relative bg-red-500"
                  ></motion.div>
                )}
                <h1 className="uppercase flex items-center text-[6vw] leading-[5vw] h-full tracking-tighter font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between capitalize py-5 px-20 bg-zinc-900 text-white">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md capitalize uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
