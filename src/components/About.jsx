import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue-Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#CDEA68]">
        <div className="w-1/2">
          <h1 className="text-4xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 text-white  rounded-full ">
            READ MORE
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div>
      </div>
    </div>
  );
}

export default About;
