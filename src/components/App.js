import { useState } from "react";
import { nexWorld } from "../base/nexWorld";
import NexDialog from "./NexDialog";
import NexWorld from "./NexWorld";
import CoordinateDisplay from "./CoordinateDisplay";
import DraggableDialog from "./Resize";
import WorldMapCanvas from "./WorldMapCanvas";

function App() {
  const [coords, setCoords] = useState([0, 0]);
  return (
    <div className="App">
      <div>nexWorld3</div>

      <CoordinateDisplay coords={coords} />
      <WorldMapCanvas
        nexWorld={nexWorld}
        setCoords={setCoords}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      <NexDialog nexWorld={nexWorld} />
    </div>
  );
}

export default App;

/*
    <div className="App">
      <div>Hello</div>
      <NexDialog nexWorld={nexWorld} />
  </div>
  */
