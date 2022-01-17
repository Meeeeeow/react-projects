
import './App.css';
import Form from './Components/form/form.component';
import { ClockList } from './Components/Clocklist/clocklist.component';
import TempInput from './Components/TempCalc/tempcalc.component';
import HoveredMouse from './Components/HigherOrder/hoveredMouse.component';
import ClickedMouse from './Components/HigherOrder/clickedMouse.component';
import ControlAction from './Components/ControlHoverClick/control.component';
function App() {
  // const quantity =[1,2,3];
  return (
    <div className="App">
      {/* <ClockList quantity={quantity}/> */}
      {/* <Form/> */}
      {/* <TempInput/> */}
       <HoveredMouse/>
      <ClickedMouse/> 
      {/* <ControlAction/> */}
    </div>
  );
}

export default App;
