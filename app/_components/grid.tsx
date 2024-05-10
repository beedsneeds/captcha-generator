"use client";

import React, { useState } from "react";
import Image from "next/image";


type gridImg = {
  urlImg: string;
  selected: Array<boolean>;
  index: number;
  handleClick: any;
}


function GridItem({ urlImg, selected, index, handleClick }: gridImg) {
  return (
    <div>
      <Image
        src={urlImg}
        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
        className={`rounded-lg bg-gray-100 ${selected[index] === true ? 'border-blue-300 border-4 scale-[0.85] transition-all' : 'transition-all'}`}
        //  potental transitions: grayscale scale-90 transition-all / opacity-50 / border-lime-300 border-4 / 
        width={1200} // remove if images are local
        height={1200}
        onClick={() => handleClick(index)}
        // alt is to onClick={onSquareClick} here and pass the args within Grid props
        //  like handleClick={() => handleclick(args)}, but I find it too long
        //  and I want to do a few things with the same args anyways
      />
    </div>
  );
}


export default function Grid({ urlList }: { urlList: Array<string> }) {
  const [selected, setSelected] = useState(Array(9).fill(false));

  function handleClick(index: number) {
    const newSelected = selected.slice();
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    // console.log("clicked " + index);
    // console.log(newSelected);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-1 sm:gap-2 sm:size-10/12 md:size-3/4 lg:size-4/6">
          {urlList.map((urlImg, index) => (
            <GridItem
              key={index}
              urlImg={urlImg}
              selected={selected}
              index={index}
              handleClick={handleClick}
            />
          ))}
          {/* <SingleImage /> */}
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Alt button
          </button>
          <button
            type="button"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 self-center"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

function SingleImage() {
  return (
    <div>
      <Image
        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
        className="rounded-lg bg-gray-100"
        width={600}
        height={600}
        onClick={() => console.log("clicked")}
      />
    </div>
  );
}

