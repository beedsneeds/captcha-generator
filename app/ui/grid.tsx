'use client'

import React, { useState } from "react";
import Image from "next/image";



const urlImgArray = Array(
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
)

urlImgArray.map((url) => console.log(url))
console.log("this part is being run")

interface gridImg {
  urlImg: string;
  setSelected: any;
}

function GridItem ({ urlImg, setSelected }: gridImg) {

  return (
    <div>
      <Image
        src={urlImg}
        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
        className="rounded-lg bg-gray-100"
        width={600}
        height={600}
        onClick={() => (console.log("clicked " + urlImg))}
        />
      
    </div>
  );
};


export default function Grid({ urlImgArray } : { urlImgArray : Array<string>}) {
  const [selected, setSelected] = useState(false);

    function handleClick (urlImg: string) {
    //   setSelected(!selected)
        console.log("clicked " + urlImg)
    }


  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="grid grid-cols-3 grid-rows-3 gap-1 sm:gap-2 lg:gap-3 sm:size-10/12 md:size-3/4 lg:size-4/6">
            {urlImgArray.map((urlImg, index) => (
                <GridItem key={index} urlImg={urlImg} setSelected={setSelected} />
            ))}
            {/* <SingleImage /> */}
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Reset
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


function SingleImage () {
    return (
        <div>
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
            onClick={() => (console.log("clicked"))}
          />
          
        </div>
      );
}


{/* <div className="grid grid-cols-3 grid-rows-3 gap-1 sm:gap-2 lg:gap-3 sm:size-10/12 md:size-3/4 lg:size-4/6">
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            width={600}
            height={600}
          />
        </div> */}