import "../App.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import File1 from "./File1";



function App() {
  return (
    <Router>
      <h1 >This is my Api calling page file</h1>
      <div id="myid">
        <ul>
          <li><Link className="target" to="/get">Get</Link></li>
          
        </ul>
      </div>
      <hr />
      
      <Routes>
        <Route path="/get" element={<File1 />} />
        <Route path="*" element={<h1> 404 Error page not found</h1>} />

      </Routes>
    </Router>
  );
}


export default App;
