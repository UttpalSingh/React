import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };
  const deleteNote = (idx) => {
    const deleteTask = [...task];
    deleteTask.splice(idx, 1);
    setTask(deleteTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submithandler(e)
        }}
        className="flex flex-col lg:w-1/2 items-start p-10"
      >
        <h1 className="text-4xl font-bold mb-2">Add notes</h1>
        <div className="flex w-1/2 flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5  py-2 border-2 font-medium rounded-xl outline-none"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            type="text"
            placeholder="Enter Details"
            className="px-5 h-30 py-2 border-2 font-medium rounded-xl outline-none"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />

          <button className="bg-white text-black py-3 rounded-xl outline-none active:bg-gray-900 cursor-pointer">
            Add Notes
          </button>
        </div>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function (e, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative  h-60 w-60 bg-center text-black rounded-xl bg-gray-600  p-1"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold uppercase text-white">
                    {e.title}
                  </h3>
                  <p className="mt-2 leading-tight text-gray-300">
                    {e.details}
                  </p>
                </div>
                <button
                  onClick={() => deleteNote(idx)}
                  className="w-full cursor-pointer active:scale-95 bg-red-700 py-1 text-xs rounded font-bold"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
