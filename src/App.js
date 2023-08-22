import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame1 from "./container/desktop";
//import FramePhone from "./container/phone/PhoneFrame";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Frame1 />} />
      {/* <Route path="/phone" element={<FramePhone />}/> */}
    </Routes>
    
    // <Frame1/>
  );
}
export default App;
