import React, { useState } from "react";
import Image from "next/image";



export default function GridImage () {
    return (
        <div
            className="container w-1/4 "
            
            >
            <Image 
                fill={true}
                src="/prompts/barrier.jpg"
                alt="grid image"
                className="w-auto h-auto"
            />
        </div>
    )
}

// export default function Grid () {
//     const imgURL = 'https://i.ibb.co/ScKZzRc/rei.jpg'

//     // const images = Array.from({length: 9}, () => imgURL);
//     return (
//         <>
//             <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
//                 {/* {images.map((imgURL, index) => (
//                     <GridItem key={index} imgURL={imgURL} />
//                 ))} */}

//                 {[...Array(9)].map((_, index) => (
//                     <div 
//                         key={index} 
//                         className=""
//                 ))}

//             </div>
        
//         </>
//     )
// }


// const GridItem = ({ imgURL }) => {
//     // const [opaque, setOpaque] = useState(false);

//     // const handleClick = () => {
//     //     setOpaque(!opaque)
//     //     onClick();
//     // }

//     return (
//         <>
//             <Image 
//                 src={imgURL} alt="grid item"
//                 className="w-full h-full"
//             />
//         </>
//     )
// }