import $ from "./App.scss";
import Messenger from "./components/Messenger";

function App() {
  return (
    <div className={$.Wrapper}>
      <Messenger />
    </div>
  );
}

export default App;
