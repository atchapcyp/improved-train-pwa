import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <iframe
          id='inlineFrameExample'
          title='Inline Frame Example'
          width='300'
          height='200'
          src='https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik'
        ></iframe>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <span className='text-3xl font-bold underline'>Hello world!</span>
      <span className='text-2xl font-bold underline'>Hello world!</span>
      <span className='text-xl font-bold underline'>Hello world!</span>
    </>
  );
}

export default App;
