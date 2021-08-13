import React from 'react';
import './App.css';

interface User{
  name: string,
  age: number,
  job: boolean
}

function App() {
  const users:User[] = [{name: "Shiv", age: 19, job: false}, {name:"Rajiv", age: 22, job:true}];
  return (
    <div className="App">
      {users.map((user,index)=>(
        <div className="user-info" key={index}>
          <h2>{user.name}</h2>
          <h3>{user.age}</h3>
          <h4>{user.job ? "Working" : "Not working"}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
