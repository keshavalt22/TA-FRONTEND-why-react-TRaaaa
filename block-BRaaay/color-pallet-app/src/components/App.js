import colors from "../data/colors";
import Color from "./Color";

function App() {
  return (
    <div className="App">
      {
        Object.entries(colors).map(([key, value]) => {
          return <div className="flex">
            <Color key={key} keyValue={key} value={value} />
          </div>
        })
      }
    </div>
  );
}

export default App;
