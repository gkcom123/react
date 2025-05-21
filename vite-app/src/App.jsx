import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildrenProp from "./components/ChildrenProp";
import ReUsableComponent from "./components/ReUsableComponent";
import { CORE_CONCEPTS } from "./data.js";

function HeaderComponent() {
  return (
    <header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </header>
  );
}
function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <ChildrenProp>This is children Prop Demo</ChildrenProp>
      <ul>
        <ReUsableComponent
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
        />
        <ReUsableComponent {...CORE_CONCEPTS[1]} />
        <ReUsableComponent {...CORE_CONCEPTS[2]} />
        <ReUsableComponent {...CORE_CONCEPTS[3]} />
      </ul>
    </>
  );
}

export default App;
