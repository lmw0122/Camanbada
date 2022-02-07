import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import SignUp from "./routes/Signup";
import SearchCamping from "./routes/SearchCamping";
import Login from "./routes/Login";
import Community from "./routes/Community";
import Profile from "./routes/Profile";
import Message from "./routes/Message";
import CampingDetail from "./routes/CampingDetail";
import Create from "./routes/Create";
import BoardUpdate from "./routes/BoardUpdate";
import Update from "./routes/Update";
import Search from "./routes/Search";
import CampingFiltering from "./routes/CampingFiltering";
import SearchUser from "./routes/SearchUser";
import SearchCommunity from "./routes/SearchCommunity";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/camping" element={<CampingFiltering></CampingFiltering>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/community" element={<Community></Community>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/message" element={<Message></Message>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/board/update" element={<BoardUpdate></BoardUpdate>}></Route>
        {/* 캠핑장 상세 수정해야함 */}
        <Route path="/campingdetail" element={<CampingDetail></CampingDetail>}></Route>
        {/* 프로필 편집 링크 수정 */}
        <Route path="/profile/update" element={<Update></Update>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/search/camping" element={<SearchCamping></SearchCamping>}></Route>
        <Route path="/search/user" element={<SearchUser></SearchUser>}></Route>
        <Route path="/search/community" element={<SearchCommunity></SearchCommunity>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
