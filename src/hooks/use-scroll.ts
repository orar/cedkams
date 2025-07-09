import { useCallback, useEffect, useState } from "react";

export function useScroll({ shrink = 60, expand = 40 } = {}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (!scrolled && window.scrollY > shrink) setScrolled(true);
      else if (scrolled && window.scrollY < expand) setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled, shrink, expand]);
  return scrolled;
}
