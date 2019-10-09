import React, { useEffect } from "react";

const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  });
  return null;
};

export default ScrollToTopOnMount;
