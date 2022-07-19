import { useRef } from "react";

const InputFile = () => {
  const fileUpload = useRef(null);
  return (
    <>
      <button
        onClick={() => {
          fileUpload.current.click();
        }}
      >
        파일 업로드
      </button>
      <input type="file" ref={fileUpload} style={{ display: "none" }} />
    </>
  );
};

export default InputFile;
