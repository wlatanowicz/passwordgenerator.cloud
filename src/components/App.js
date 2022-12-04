import "./App.css"

import ConfigEditor from "./ConfigEditor";
import PasswordList from "./PasswordList";

function App() {
  return (
    <main>
      <h2>Password Generator</h2>
      <ConfigEditor />
      <PasswordList />
    </main>
  );
}

export default App;
