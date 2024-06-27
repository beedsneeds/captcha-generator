import React, { SetStateAction, useRef, useEffect } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";


// onDoneClick={(e) => {
//     setImageUrl(e.allEntries[0].cdnUrl);
//   console.log(e);
// }} is dependant on the object returned. Which is very likely to change as UploadCare is still in beta
export default function ImgUploadField({
  setImageUrl, setImageName
}: {
  setImageUrl: React.Dispatch<SetStateAction<string | null>>;
  setImageName: React.Dispatch<SetStateAction<string>>;
}) {

  return (
    <div className="">
      <FileUploaderRegular
        ctxName="my-uploader"
        pubkey="83e6af70d75ab66735de"
        maxLocalFileSizeBytes={10000000}
        multiple={false}
        imgOnly={true}
        sourceList="local, url"
        cropPreset="1:1"
        // apiRef={ctxProviderRef}
        onFileUploadSuccess={(e) => {}}
        onDoneClick={(e) => {
          setImageUrl(e.allEntries[0].cdnUrl);
          setImageName(e.allEntries[0].name);
          console.log(e);
        }}
        className="text-gray-900 font-medium"
      />

    </div>
  );
}
