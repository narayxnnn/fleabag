import useLocalStorage from './hooks/useLocalStorage';
import useDebounce from './hooks/useDebounce';
import { useCallback } from 'react';

function App() {

 const [input, setInput] = useLocalStorage<string>('input', '');
 const handleDebounce = useCallback(() => {
  console.log(input);
 }, [input])
 const debouncedInput = useDebounce(input, 500, handleDebounce);

  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <p>Input: {debouncedInput}</p>
    </div>
  );
}

export default App
