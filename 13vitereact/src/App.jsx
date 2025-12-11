import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [index,setIndex] = useState(1);

  const getData = async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${index}&limit=48`
    );
    let data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    getData()
  },[index])

  let printUserData = <h3 className="text-gray-500">No user available</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((e) => {
      return (
        <div>
          <a href={e.url} target="_blank">
            <div className="h-44 w-44 overflow-hidden  rounded-xl">
              <img
                className="h-full object-cover"
                src={e.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-xl">{e.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="h-screen overflow-auto p-4 bg-black text-white">
      <button
        onClick={() => getData()}
        className="bg-green-600 active:scale-95 text-white px-5 py-2 rounded-xl m-4"
      >
        Get Data
      </button>
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }} className="bg-amber-400 text-black rounded px-4 cursor-pointer active:scale-95 py-2  text-sm font-semibold">Prev</button>
        <h4>Page {index}</h4>
        <button
        onClick={() => {
          setIndex(index+1)
        }} 
        className="bg-amber-400 text-black rounded px-4 cursor-pointer active:scale-95 py-2 text-sm font-semibold">Next</button>
      </div>
    </div>
  );
}

export default App;
