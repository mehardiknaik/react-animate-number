import { useRef, useEffect } from "react";

export default function usePrevious(value: number) {
  const ref = useRef<null | number>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
