import React, { useState, useEffect } from "react";

const useWindowScroll = () => {
  const [isScrolled, setTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      currentPos >= 50 ? setTop(true) : setTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
};

export default useWindowScroll;
