import { useCallback, useEffect, useRef } from 'react';

// export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   const cbRef = useRef(cb);
//   const argsRef = useRef(args);
//   const timerRef = useRef<ReturnType<typeof setTimeout>>();

//   const setup = useCallback(() => {
//     timerRef.current = setTimeout(cbRef.current, delay, ...argsRef.current);
//   }, [delay]);
//   const clear = useCallback(() => clearTimeout(timerRef.current), []);
//   const reset = useCallback(() => {
//     clear();
//     setup();
//   }, [clear, setup]);

//   useEffect(() => {
//     setup();
//     return clear;
//   }, [setup, clear]);

//   return { reset, clear };
// };

type TimerFn = typeof setTimeout | typeof setInterval;
type ClearFn = typeof clearTimeout | typeof clearInterval;

function useTimer<T extends (...args: Parameters<T>) => ReturnType<T>>(
  this: { timerFn: TimerFn; clearFn: ClearFn },
  cb: T,
  delay: number,
  ...args: Parameters<T>
) {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);
  const timerRef = useRef<ReturnType<typeof this.timerFn>>();

  const { timerFn, clearFn } = this;
  const setup = useCallback(() => {
    timerRef.current = timerFn(cbRef.current, delay, ...argsRef.current);
  }, [delay, timerFn]);
  const clear = useCallback(() => clearFn(timerRef.current), [clearFn]);
  const reset = useCallback(() => {
    clear();
    setup();
  }, [clear, setup]);

  useEffect(() => {
    setup();
    return clear;
  }, [setup, clear]);

  return { reset, clear };
}

export const useTimeout = useTimer.bind({
  timerFn: setTimeout,
  clearFn: clearTimeout,
});
export const useInterval = useTimer.bind({
  timerFn: setInterval,
  clearFn: clearInterval,
});

// hook 규칙 위반!!
// export const useInterval = <
//   T extends (...args: Parameters<T>) => ReturnType<T>,
// >(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   useEffect(() => {
//     const timer = setInterval(cb, delay, ...args);

//     return () => clearInterval(timer);
//   }, [cb, delay, args]);
// };

// function useTimer(
//   timerFn: typeof setTimeout | typeof setInterval,
//   clearFn: typeof clearTimeout | typeof clearInterval
// ) {
//   const useTimeoutInterval = <
//     T extends (...args: Parameters<T>) => ReturnType<T>,
//   >(
//     cb: T,
//     delay: number,
//     ...args: Parameters<T>
//   ) => {
//     const cbRef = useRef(cb);
//     const argsRef = useRef(args);
//     const timerRef = useRef<ReturnType<typeof timerFn>>();

//     const setup = useCallback(() => {
//       timerRef.current = timerFn(cbRef.current, delay, ...argsRef.current);
//     }, [delay]);
//     const clear = useCallback(() => clearFn(timerRef.current), []);
//     const reset = useCallback(() => {
//       clear();
//       setup();
//     }, [clear, setup]);

//     useEffect(() => {
//       setup();
//       return clear;
//     }, [setup, clear]);

//     return { reset, clear };
//   };

//   return useTimeoutInterval;
// }

// export const useTimeout = useTimer(setTimeout, clearTimeout);
// export const useInterval = useTimer(setInterval, clearInterval);
