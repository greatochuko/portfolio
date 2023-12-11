import  { useEffect } from "react";

export default function useScrollRefresh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
