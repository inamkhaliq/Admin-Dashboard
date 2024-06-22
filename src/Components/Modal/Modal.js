import React from "react";
import fullscreenSvg from "../../Assets/fullscreen.svg";
import atom from "../../Assets/atomsvg.svg";
import download from "../../Assets/downloadsvg.svg";
import { Link } from "react-router-dom";

const  Modal=()=> {
  return (
        <section className="w-screen md:h-screen py-6 px-6 lg:pl-6 lg:pr-32 bg-[#131212a1] ">
          <div className="w-full md:h-full flex md:flex-nowrap flex-wrap rounded-lg bg-[#e5e5e5] ">
            <div className="md:w-3/4  border-gray-400 md:border-r-[0.25px] px-4 py-4 md:py-10 md:px-8 lg:px-16">
              <img 
                src="https://images.unsplash.com/photo-1716125614302-c26b12135270?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-full h-full object-cover" 
                alt="modal Pic" 
              />
            </div>
            <div className="md:w-1/4 py-10 px-6">
              <div className="content">
                <div className="flex justify-between items-center ">
                  <h1 className="font-semibold text-sm text-gray-500">Prompt</h1>
                  <div className="w-[15px] h-[15px]">
                    <img src={fullscreenSvg} className="w-full h-full" alt="" />
                  </div>
                </div>
                <p className="text-sm leading-6 py-1">Dog eating fish</p>
                <div className="my-8">
                  <div className="flex w-full my-2 justify-between">
                    <p className="font-semibold w-1/2 text-sm text-gray-500">Model</p>
                    <p className="font-semibold w-1/2 text-sm text-gray-500">Styles</p>
                  </div>
                  <div className="flex my-2 w-full justify-between">
                    <p className=" w-1/2 text-sm ">Fotor M2</p>
                    <p className=" w-1/2 text-sm ">None</p>
                  </div>
                </div>
                <div className="my-8">
                  <div className="flex w-full my-2 justify-between">
                    <p className="font-semibold w-1/2 text-sm text-gray-500">Size</p>
                    <p className="font-semibold w-1/2 text-sm text-gray-500">Create time</p>
                  </div>
                  <div className="flex my-2 w-full justify-between">
                    <p className=" w-1/2 text-sm ">2048 x 2048 px</p>
                    <p className=" w-1/2 text-sm ">24-05-22 12:07</p>
                  </div>
                </div>
                <div className="buttons flex flex-wrap  gap-3  justify-between">
                    <Link className="flex gap-2 items-center py-2 px-4 border border-black rounded-lg text-base leading-6">
                      <span className="w-4 h-4"><img className="w-full" src={atom} alt="" /></span>
                      <span>Evolve</span>
                    </Link>
                    <Link className="flex gap-2 bg-[#0069FF] items-center py-2 px-6  rounded-lg text-base leading-6">
                      <span className="w-4 h-4"><img className="w-full" src={download} alt="" /></span>
                      <span className="text-[#FAFAFA]">Download</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
export default Modal