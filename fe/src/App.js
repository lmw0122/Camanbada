import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import SignUp from "./routes/Signup";
import SearchCamping from "./routes/SearchCamping";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/search/camping" element={<SearchCamping></SearchCamping>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
