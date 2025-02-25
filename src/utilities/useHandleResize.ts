import { useEffect, useState } from "react";
import { setMobileView } from "../store/store"; // Ensure this is a valid setter function

const useHandleResize = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 769;
      setIsMobileView(mobileView);
      setMobileView(mobileView); // If needed, update the store
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileView;
};

export default useHandleResize;
