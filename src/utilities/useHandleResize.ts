import { useEffect, useState } from "react";

const useHandleResize = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 769;
      setIsMobileView(mobileView);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileView;
};

export default useHandleResize;
