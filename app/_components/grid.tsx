"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ButtonSecondary, ButtonSubmit } from "./utility-components";

type gridImg = {
  urlImg: string;
  selected: Array<boolean>;
  index: number;
  handleClick: any;
};

function GridItem({ urlImg, selected, index, handleClick }: gridImg) {
  return (
    <div>
      <Image
        src={urlImg}
        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
        className={`rounded-md bg-gray-100 ${
          selected[index] === true
            ? "border-blue-300 border-4 scale-[0.85] transition-all"
            : "transition-all"
        }`}
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

export default function Grid({
  urlList,
  prompt_text,
}: {
  urlList: Array<string>;
  prompt_text: string;
}) {
  const [selected, setSelected] = useState(Array(9).fill(false));

  function handleClick(index: number) {
    const newSelected = selected.slice();
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    // console.log("clicked " + index);
    console.log(newSelected);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitted!");
    console.log(selected);
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="max-w-lg">
        <p className="text-lg font-medium text-gray-900 justify-start mb-3">
          {prompt_text}
        </p>
        <div className="grid grid-cols-3 grid-rows-3 gap-1 sm:gap-2">
          {urlList.map((urlImg, index) => (
            <GridItem
              key={index}
              urlImg={urlImg}
              selected={selected}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
        <div className="flex items-center justify-end gap-x-6 mt-3">
          <ButtonSecondary buttonText="Reset" />
          <ButtonSubmit disabledState={false} buttonText="Continue" />
        </div>
      </form>
    </div>
  );
}
