import { useState, useCallback, useEffect,useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllowed) str += "1234567890" ;
    if (charactersAllowed) str += "!@#$%^&*?_,";
    

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    //The charAt() method in JavaScript returns the character at a specified index within a string.

    // useCallback() is used for optimization,memorization

    setPassword(pass);
  }, [numberAllowed, charactersAllowed, length, setPassword]); // setPassword in dependencies is for optimiztion

  const copyPasswordToClipBoard = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,25)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charactersAllowed,passwordGenerator])// passwordGenerator() in dependencies is for optimiztion


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={passRef}
            type="text"
            value={password}
            className="bg-white outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button 
          onClick={copyPasswordToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={8}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox"
             defaultChecked={numberAllowed} 
             onChange={() => {
                setNumberAllowed((prev) => !prev)
             }}
             className="cursor-pointer"
            />
            <label htmlFor="">Numbers</label>
            <input
             type="checkbox"
             defaultChecked={charactersAllowed} 
             onChange={() => {
                setCharactersAllowed((prev) => !prev)
             }}
             className="cursor-pointer"
            />
             <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
