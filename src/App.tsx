import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.blahClick}>Go!</button>
      <br />
    </div>
  );
}

function AmountOfGo(props: any) {
  return <label>{props.num}</label>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GoButton blahClick={() => setCount(count + 1)} />
      <AmountOfGo num={count} />
    </div>
  );
}

export default App;
