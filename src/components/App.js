import "./App.css";

import ConfigEditor from "./ConfigEditor";
import CopyrightInfo from "./CopyrightInfo";
import PasswordList from "./PasswordList";

function App() {
  return (
    <main>
      <h2>Password Generator</h2>
      <ConfigEditor />
      <PasswordList />
      <CopyrightInfo />
    </main>
  );
}

export default App;
