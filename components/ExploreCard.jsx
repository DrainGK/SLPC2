'use client';

import {motion} from "framer-motion";

import styles from "../styles"
import { fadeIn } from "../utils/motion"
import Modal from "./Modal";
import { useState } from "react";

const ExploreCard = ({pc, index, active, handleClick}) => {
  const [open, setOpen]= useState(false)
  const publicFolder = "http://localhost:5000/images/"
  
  return(
  <motion.div 
  variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
  className={`relative ${ 
    active === pc._id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(pc._id)}>
    <img 
    src={publicFolder+ pc.photo} 
    alt={pc.title} 
    className="absolute w-full h-full object-cover rounded-[24px]" />
    {active !== pc._id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {pc.title}
      </h3>
    ) : (

      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <button type="button" className="flex items-center justify-center w-[100px]  py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] text-white"
        onClick={() => setOpen(true)}>
            Voir
        </button>
        <Modal open={open} onClose={()=>setOpen(false)}>
          <div className="flex items-center justify-center flex-col  max-h-md md:max-w-md sm:max-w-xs object-cover rounded-[24px]">
            <img src={publicFolder+ pc.photo} alt={pc.title}
            className="max-w-{680} max-h-{472} mt-4" />
            <h3 className="font-semibold sm:text-[26px] text-[18px] text-white z-0 ">
              {pc.title}
            </h3>
            <p className="font-normal text-[16px] leading-[20px] text-white p-4 max-w-md max-h-96 overflow-y-auto">{pc.desc}</p>
          </div>

        </Modal>
        <h2 className="mt-[12px] font-semibold sm:text-[32px] text-[24px] text-white">{(pc.title).substring(0,25)}</h2>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">{(pc.desc).substring(0, 100) + "..."}</p>
        

      </div>
    )}
  </motion.div>
  )
};

export default ExploreCard;
