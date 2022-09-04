import React from "react";
import Image from "next/image";

function ConferenceContent({ speakers, loading }) {
  if(loading){
    return <div className=" mt-12 w-fit text-h3 text-bold mx-auto">Loading...</div>;

  }
  return (
    <div className=" sm:w-full sm:h-auto lg:w-[880px] lg:h-[620px] rounded-lg   overflow-auto">
      {speakers?.map((item, i) => {
        return (
          <div
            key={i}
            className=" flex sm:gap-5 lg:gap-10 sm:mb-5 lg:mb-6 sm:py-2 sm:px-6 lg:p-8"
          >
            <div className="relative sm:w-[88px] sm:h-[88px] lg:w-[140px] lg:h-[140px] rounded-lg ">
              <Image
                src={item.image.url}
                className=" rounded-lg"
                layout="fill"
                alt={item.name}
                objectPosition="center"
              />
            </div>
            <div className="w-full flex flex-col justify-center sm:gap-2 lg:gap-5">
              <div className="flex sm:flex-col lg:flex-row lg:items-center justify-between">
                <h3 className=" sm:text-h4 lg:text-h3 font-bold text-bg-darkBlue">
                  {item.name}
                </h3>
                <h4 className=" sm:text-h5 sm:mt-2 lg:mt-0 lg:text-h4 font-medium sm:text-[#0045FF] lg:text-shadowGrey">
                  {item.company || "Company Name"}
                </h4>
              </div>
              <div>
                <p className=" sm:text-[12px] lg:text-p text-shadowGrey text-regular">
                  {item.aboutShort}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ConferenceContent;
