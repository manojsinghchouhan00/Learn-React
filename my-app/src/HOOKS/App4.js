import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HookApp from "./HookApp";
import UseEffect from "./UseEffect";
// import Context from "./useContext";
import { createContext, useState } from "react";
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";
import UseCallback from "./callback/UseCallback";
import UseMemo from "./UseMemo";
import ApplyHooks from "./custumhook/ApplyHooks";

export const userContext = createContext();
function App4() {
    const [user, setUser] = useState("jay");
    console.log("User in App4 :- ", user)
    return (
        <Router>
            <h1 >This is my App file</h1>
            <ul id="myid" >
                <li><Link to="/">Usestate</Link></li>
                <li><Link to="/effect">UseEffect</Link></li>
                <li><Link to="/ref">Useref</Link></li>
                <li><Link to="/reducer">Reducer</Link></li>
                <li><Link to="/callback">UseCallback</Link></li>
                <li><Link to="/usememo">UseMemo</Link></li>
                <li><Link to="/custom">Custom hooks</Link></li>

            </ul>
            <hr />
            <userContext.Provider value={[user, setUser]} >
                <Routes>
                    <Route path="/" element={<HookApp />} />
                    <Route path="/effect" element={<UseEffect />} />
                    <Route path="/ref" element={<UseRef />} />
                    <Route path="/reducer" element={<UseReducer />} />
                    <Route path="/callback" element={<UseCallback  />} />
                    <Route path="/usememo" element={<UseMemo  />} />
                    <Route path="/custom" element={<ApplyHooks  />} />

                    <Route path="*" element={<h1> 404 Error page not found</h1>} />
                </Routes>
            </userContext.Provider>
        </Router>
    );
}


export default App4;
