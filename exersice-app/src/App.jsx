// import React, { useState, useEffect} from 'react';
// import ToggleButton from './component/toggleBotton'
// import Counter from './component/Counter';
// import LiveClock from './component/liveClock';
// import Greeting from './component/greetng';


//  function App() {
//   return (
//     <>
//     <div className="border bg-blue-100 p-4 m-5">
//       <h5>Toggle Button Example</h5>
//       <ToggleButton />
//     </div>

//     <div className="border p-4">
//       <h5>Count</h5>
//       <Counter />
//     </div>

//     <div className="border m-4 bg-pink-100 border-black">
//       <h5>LiveClock</h5>
//       <LiveClock />
//     </div>

//     <div className="border p-4 m-5 bg-gray-100">
//       <h5>Greeting</h5>
//       <Greeting />
//     </div>
//     </>
//   );
// }


// export default App;



import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import ToggleButton from './component/toggleBotton'
import Counter from './component/Counter';
import LiveClock from './component/liveClock';
import Greeting from './component/greetng';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-10 justify-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>

      <div className="text-center">

        <div className="border p-2 m-5 flex-col">
          <h5>Toggle Button Example</h5>
          <ToggleButton />
        </div>

        <div className="border p-4">
          <h5>Count</h5>
          <Counter />
         </div>

         <div className="border m-4 border-gray-100">
          <h5>LiveClock</h5>
          <LiveClock />
          </div>

          <div className="border p-4 m-5">
            <h5>Greeting</h5>
            <Greeting />
          </div>

      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;




