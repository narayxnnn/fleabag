import { useEffect, useRef } from "react";

function useDebounce(value: string, delay: number, callback: () => void) {
 const timeoutRef = useRef<ReturnType<typeof setTimeout>  | null>(null);

 useEffect(() => {
    const timer = setTimeout(() => {
        callback();
    }, delay);
    timeoutRef.current = timer;
    return () => clearTimeout(timeoutRef.current as ReturnType<typeof setTimeout>);
 }, [value, delay, callback]);

 return value;
}

export default useDebounce;