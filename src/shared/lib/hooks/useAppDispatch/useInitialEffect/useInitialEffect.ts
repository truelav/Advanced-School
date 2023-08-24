import { useEffect } from "react";

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
}
