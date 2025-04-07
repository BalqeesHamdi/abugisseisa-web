'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Timeline = () => {
  const timelineData = [
    { year: "1991 - 1997", title:"Contributed to the Improvement and Redrafting of Dubai Islamic Bank Finance Products", text: "Played a significant role in enhancing and refining the Islamic finance products offered by financial institutions, ensuring alignment with Sharia principles and market needs.These initiatives underscore our Chief Sharia Controller's profound impact on the evolution and advancement of Islamic finance, reinforcing our commitment to excellence and compliance within the industry." },
    { year: "1997 - 2001", title:"Contributed to the Establishment of ADIB (Abu Dhabi Islamic Bank)", text: "Played a vital part in the establishment of Abu Dhabi Islamic Bank, a pioneering institution in Islamic finance, contributing to its foundation and early development." },
    { year: "2001 - 2015", title:"Structured and Established Islamic Banking Division at ARBIFT Group (AL MASRAF BANK)", text: "Played a key role in structuring and establishing the Islamic Banking Division at ARBIFT Group, specifically at AL MASRAF BANK, contributing to its growth and success over the years." },
  ];
  const [selectedYear, setSelectedYear] = useState(timelineData[0]);

  return (
    <div className="w-full m-auto">
    <motion.div
      className="flex overflow-x-auto space-x-4 py-8 border-b border-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {timelineData.map((item) => (
        <motion.button
          key={item.year}
          whileTap={{ scale: 0.97 }}
          className={`flex-grow py-2 h-20 border rounded-md text-2xl transition-colors duration-300 ${
            selectedYear.year === item.year
              ? "bg-primary-light text-white"
              : "bg-white text-primary-light border-primary-light hover:bg-primary-light-50 hover:text-white"
          }`}
          onClick={() => setSelectedYear(item)}
        >
          {item.year}
        </motion.button>
      ))}
    </motion.div>

    <div className="mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear.year}
          className="flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-primary-light text-5xl leading-tight w-3/3 mr-20">{selectedYear.title}</h1>
          <p className="my-4 text-lg w-full">{selectedYear.text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
);
  };
  
  export default Timeline;
  