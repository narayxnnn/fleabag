import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            const item = window.localStorage.getItem(key);
            if (item) return item as unknown as T;
            console.log('Data is plane string',error);
            return initialValue;
          }
      });
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value, key]);

      return [value, setValue] as const;
}

export default useLocalStorage;