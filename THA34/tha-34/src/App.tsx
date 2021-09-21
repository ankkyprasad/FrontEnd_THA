import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from './reducers';
import { addNote, deleteNote } from './actions';
import './App.css';

function App() {
  const notes = useSelector((state: reducerType)=> state.notes)
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  return (
    <div className="App">
      <div>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={()=>{
          dispatch(addNote(input));
          setInput("");
        }}>Add</button>
      </div>
      <div className="notes">
        {notes.length === 0 ? (
          <h2>Click on Add to add notes</h2>
        ) : (
          notes.map((note:string, index:number)=>(
            <div key={index}>
              <h2>{note}</h2>
              <button onClick={()=>{
                dispatch(deleteNote(index))
              }}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
