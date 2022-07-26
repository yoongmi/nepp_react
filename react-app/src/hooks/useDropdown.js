import { useState, useEffect } from "react";
const useDropdown = (element) => {
  const [buttonOn, setButtonOn] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (element.current.contains(e.target)) return;
      setButtonOn(false);

      //   if (e.target !== buttonEl.current) {
      //     setButtonOn(false);
      //   }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return [buttonOn, setButtonOn];
};

export default useDropdown;
