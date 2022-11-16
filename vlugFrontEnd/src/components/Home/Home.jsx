import React from "react";
import Flights from "../Flights/Flights";
import { Navbar } from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-around w-[80%] h-full p-10">
        <div className=" h-[30%] w-full text-center border-2 border-black">
          IMG
        </div>
        <Flights />
      </div>
    </>
  );
}

export default Home;
