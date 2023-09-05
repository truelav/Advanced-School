import { useCallback, useRef } from "react";

export function useThrottle(callBack: () => void, delay: number) {
  const throttleRef = useRef(false);

  return useCallback(() => {
    if (!throttleRef.current) {
      callBack();
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, []);
}
