import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildrenProp from "./components/ChildrenProp";
import ReUsableComponent from "./components/ReUsableComponent";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";

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
  let tabContent = "Select a tab to see the content";
  const [selectedTab, setSelectedTab] = useState(tabContent);
  function handleSelect(selectedButton) {
    console.log("Tab button clicked", selectedButton);
    setSelectedTab(selectedButton);
  }
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
      <section id="examples">
        <h2>Tab Button Demo</h2>
        <p>Click on the tab button to see the effect</p>
        <menu>
          <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
        </menu>
        <p>
          <strong>Note:</strong> The TabButton component is a reusable component
          that can be used to create tab buttons. It takes the children prop to
          display the text on the button.
        </p>
        {selectedTab}
      </section>
    </>
  );
}

export default App;
