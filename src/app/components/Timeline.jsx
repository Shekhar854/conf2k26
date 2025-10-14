import React from 'react'

const page = () => {
  return (
    <div className="my-10">
      <div className="bg-white relative flex flex-col items-center w-full max-w-[99vw] opacity-0" style={{ opacity: 1, transform: "none" }}>
        <div className="absolute top-3 sm:top-6 w-[80%] sm:w-[90%] h-[1px] sm:h-1 bg-[#D2D2D2] ">
          <div className="h-full bg-[#4B82C8] relative" style={{ width: "50%" }}></div>
          <div className="absolute top-1/2 size-2 sm:size-5 bg-[#F43C52] rounded-full shadow-lg animate-breathing" style={{ transform: "translate(-50%, -50%)", left: "50%" }}></div>
        </div>
        <div className="relative flex w-full justify-between">
          <div className="relative flex flex-col items-center">
            <div className="size-7 sm:size-14 rounded-full border-4 border-red-500 bg-white flex items-center justify-center" style={{ transform: "none" }}>
              <div className="size-4 sm:size-9 rounded-full bg-red-500" aria-hidden="true"></div>
            </div>
            <p className="text-center mt-3 text-[6px] sm:text-sm md:text-base text-gray-600 w-full font-semibold" style={{ opacity: 1, transform: "none" }}>
              <span>25th April, 2025</span> <br /><span>Call for Papers</span>
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="size-7 sm:size-14 rounded-full border-4 border-red-500 bg-white flex items-center justify-center" style={{ transform: "none" }}>
              <div className="size-4 sm:size-9 rounded-full bg-red-500" aria-hidden="true"></div>
            </div>
            <p className="text-center mt-3 text-[6px] sm:text-sm md:text-base text-gray-600 w-full font-semibold" style={{ opacity: 1, transform: "none" }}>
              <span>17th September, 2025</span> <br /><span>Last date of Submission</span>
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="size-7 sm:size-14 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center" style={{ transform: "none" }}>
              <div className="size-4 sm:size-9 rounded-full bg-gray-300" aria-hidden="true"></div>
            </div>
            <p className="text-center mt-3 text-[6px] sm:text-sm md:text-base text-gray-600 w-full font-semibold" style={{ opacity: 1, transform: "none" }}>
              <span>10th October, 2025</span> <br /><span>Acceptance Notification</span>
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="size-7 sm:size-14 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center" style={{ transform: "none" }}>
              <div className="size-4 sm:size-9 rounded-full bg-gray-300" aria-hidden="true"></div>
            </div>
            <p className="text-center mt-3 text-[6px] sm:text-sm md:text-base text-gray-600 w-full font-semibold" style={{ opacity: 1, transform: "none" }}>
              <span>16th October, 2025</span> <br /><span>Final Camera-Ready Paper</span>
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="size-7 sm:size-14 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center" style={{ transform: "none" }}>
              <div className="size-4 sm:size-9 rounded-full bg-gray-300" aria-hidden="true"></div>
            </div>
            <p className="text-center mt-3 text-[6px] sm:text-sm md:text-base text-gray-600 w-full font-semibold" style={{ opacity: 1, transform: "none" }}>
              <span>20th October, 2025</span> <br /><span>Registration Deadline</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page