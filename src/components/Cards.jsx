import React from "react";

function Cards() {
  return (
    <div className="w-full  h-screen bg-zinc-900  flex items-center px-32 gap-5">
      <div className="cardcontainer m-10 h-[50vh] w-1/2">
        <div className="card h-full relative rounded-xl bg-[#004D43] w-full flex items-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
        </div>
      </div>
      <div className="flex gap-5 w-1/2 h-[50vh]  cardcontainer">
        <div className="card rounded-xl relative flex items-center w-1/2 h-[50vh] bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
        </div>
        <div className="card rounded-xl relative flex items-center w-1/2 h-[50vh] bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Cards;
