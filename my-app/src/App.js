import "./App.css"
import About from "./component/About";
import Home from "./component/Home"
import Team from "./component/Team";
import Unmount from "./lcm/unmount/Unmount"
import Mounting from "./lcm/mount/GetDerivedStateFromProps"
import Update from "./lcm/update/updating"
import CsbuCDM from "./lcm/update/gsbu&cdm.js"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import User from "./pureComponent/User";
import ConditionRender from "./reactConditinal/ConditionRender";
import List from "./listing/List";
import MyForm from "./formHandle/MyFrom";
import MyForm2 from "./formHandle/MyForm2";
import Style from "./style/Style";


function App() {
  return (
    <Router>
      <h1 >This is my App file</h1>
      <div id="myid">
        <ul>
          <li><Link className="target" to="/">Home</Link></li>
          <li><Link className="target" to="/about">About</Link></li>
          <li><Link className="target" to="/team">Team</Link></li>
          <li><Link className="target" to="/mount">Mount</Link></li>
          <li><Link className="target" to="/update">Update</Link></li>
          <li><Link className="target" to="/gsbu">GsbuCDM</Link></li>
          <li><Link className="target" to="/unmount">Unmount</Link></li>
          <li><Link className="target" to="/user">pureComponent</Link></li>
          <li><Link className="target" to="/condition">Conditioner render</Link></li>
          <li><Link className="target" to="/list">Listing</Link></li>
          <li><Link className="target" to="/form">Form</Link></li>
          <li><Link className="target" to="/style">Style</Link></li>
        </ul>
      </div>
      <hr />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name="Jayesh Rajput" />} />
        <Route path="/team" element={<Team name="Jayesh" />} />
        <Route path="/mount" element={<Mounting color="red" />} />
        <Route path="/update" element={<Update myColor="red" />} />
        <Route path="/gsbu" element={<CsbuCDM myColor="red" />} />
        <Route path="/unmount" element={<Unmount />} />
        <Route path="/user" element={<User />} />
        <Route path="/condition" element={<ConditionRender isRender={false} />} />
        <Route path="/list" element={<List />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/form/form2" element={<MyForm2 />} />
        <Route path="/form/new" element={<h1>I an nexted components</h1>} />
        <Route path="/form/new2" element={<h1>New2 I an nexted components</h1>} />
        <Route path="/style" element={<Style />} />


        <Route path="*" element={<h1> 404 Error page not found</h1>} />

      </Routes>
    </Router>
  );
}


export default App;
