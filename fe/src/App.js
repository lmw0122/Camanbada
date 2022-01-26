import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import SignUp from "./routes/Signup";
import Login from "./routes/Login";
import Community from "./routes/Community";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/community" element={<Community></Community>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
