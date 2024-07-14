import { useState, useEffect } from "react";

function throttle<T extends (...args: any[]) => void>(
  action: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastExec = 0;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    const elapsed = performance.now() - lastExec;

    const execute = function () {
      action.apply(context, args);
      lastExec = performance.now();
    };

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

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

function useWindowSize(delay = 100): WindowSize {
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
