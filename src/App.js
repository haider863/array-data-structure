import { useState } from "react";
import "./App.css";
function App() {
  const [inputEntry, setInputEntry] = useState("");
  const [clickedIndex, setClickedIndex] = useState();
  const [updatedValue, setUpdatedValue] = useState("");
  const [updateBtn, setUpdateBtn] = useState(false);
  const [da, setDa] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    setDa([...da, inputEntry]); 
    setInputEntry("");
  };
  function removeItem(index) {
    let data = [...da];
    data.splice(index, 1);
    setDa(data);
  }
  function handleUpdateInput(e, index) {
    let val = e.target.value;
    setUpdatedValue(val);
  }

  function handleUpdateButton(index) {
    let data = da;
    data[index] = updatedValue;
    setDa(data);
    setClickedIndex("");
  }
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={inputEntry}
          onChange={(e) => setInputEntry(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>

      {da.map((a, index) => (
        <div key={index}>
          <input
            value={clickedIndex === index ? updatedValue : a}
            disabled={clickedIndex === index ? false : true}
            onChange={(e) => handleUpdateInput(e, index)}
            type="text"
          />
          <button onClick={() => removeItem(index)}>Delete</button>

          {clickedIndex === index ? (
            <button onClick={() => handleUpdateButton(index)}>Update</button>
          ) : (
            <button onClick={() => setClickedIndex(index)}>Edit</button>
          )}
        </div>
      ))}
    </>
  );
}

export default App;
