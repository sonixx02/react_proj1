import React, { useState } from "react";

function Featured() {
  return (
    <div className="w-full py-20 m-5 overflow-hidden">
      <div className="w-full px-20 border-b-1 pb-20 border-zinc-700">
        <h1 className="text-7xl font-Neue_Montreal">Featured projects</h1>
      </div>
      <div className="px-20 ">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <h1 className="absolute text-8xl text-CDEA68 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none tracking-tighter ml-[50vh] z-[9]">
              {"Fyde".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="Project 1"
              />
            </div>
          </div>
          <div className="cardcontainer relative  w-1/2 h-[70vh] ">
            <h1 className="absolute text-8xl right-full  top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 leading-none tracking-tighter z-[9] ml-[-850px]">
              {"Vise".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Project 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
