// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import BeautifulMoments from "./components/BeautifulMoments";
import OurJourney from "./components/OurJourney";
import LoveLetter from "./components/LoveLetter";
import BirthdayWishes from "./components/BirthdayWishes";
import BackgroundMusic from "./components/BackgroundMusic";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  return (
    <div className="min-h-screen bg-gradient-pink">
      <FloatingHearts />
      <BackgroundMusic />
      <Header />
      <BeautifulMoments />
      <OurJourney />
      <LoveLetter />
      <BirthdayWishes />
    </div>
  );
}

export default App;
