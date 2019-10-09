import { useEffect } from "react";

const useCarouselPlay = (index, setIndex, delay) => {
  useEffect(() => {
    let loopCarousel = setInterval(() => {
      if (index === 5) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, delay);
    return () => {
      clearInterval(loopCarousel);
    };
  }, [index]);
};

export default useCarouselPlay;
