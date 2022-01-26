import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import SignUp from "./routes/Signup";
import SearchCamping from "./routes/SearchCamping";
import Login from "./routes/Login";
import Community from "./routes/Community";
import Profile from "./routes/Profile";
import Message from "./routes/Message";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/search/camping" element={<SearchCamping></SearchCamping>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/community" element={<Community></Community>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/message" element={<Message></Message>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
