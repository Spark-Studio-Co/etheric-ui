import { DeviceSize } from "@/types/deviceSize";
import { breakpoints } from "../components/breakpoints";

export const getBreakpoint = (width: number): string => {
  const sortedBreakpoints = Object.entries(breakpoints).sort(
    ([, a], [, b]) => a - b
  );

  for (const [name, breakpoint] of sortedBreakpoints) {
    if (width < breakpoint) {
      return name;
    }
  }
  return sortedBreakpoints[sortedBreakpoints.length - 1][0] as DeviceSize;
};
