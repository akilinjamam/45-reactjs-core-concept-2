import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Count></Count>
      <Loadcommets></Loadcommets>
    </div>
  );
}

function Loadcommets() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  return (
    <div>
      <h2>Users: {comments.length} </h2>
      {
        comments.map(comment => <Commento name={comment.name} email={comment.email} id={comment.id}></Commento>)
      }
    </div>
  )
}


function Commento(props) {
  return (
    <div className='style'>
      <h2>Comments : {props.name}</h2>
      <p>Email : {props.email}</p>
      <p>ID : {props.id}</p>
    </div>
  )
}


function Count() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => setCount(count - 1)
  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={handleIncrease}> Increase</button>
      <button onClick={handleDecrease}> Decrease</button>
    </div>
  )
}

export default App;
