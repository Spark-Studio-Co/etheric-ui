import { useState, useEffect } from "react";

// Helper function to throttle an action
function throttle<T extends (...args: any[]) => void>(
  action: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastExec = 0;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this;
    const elapsed = performance.now() - lastExec;

    const execute = function () {
      action.apply(context, args);
      lastExec = performance.now();
    };

    clearTimeout(timeoutId as NodeJS.Timeout);
    if (elapsed > delay) {
      execute();
    } else {
      timeoutId = setTimeout(execute, delay - elapsed);
    }
  };
}

interface WindowSize {
  width: number;
  height: number;
}

// Custom hook for window size with throttling
function useWindowSize(delay: number = 100): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, delay);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);

  return size;
}

export default useWindowSize;
