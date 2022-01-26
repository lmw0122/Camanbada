import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
<<<<<<< HEAD
import SignUp from "./routes/Signup";
=======
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
>>>>>>> dfe7508f6f05229bb011a57d5922cd9d9ce88c84

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
