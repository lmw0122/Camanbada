import NavBar from "../components/NavBar";
import Album from "../components/Album";
import SelectVariants from "../components/SelectVariants";
import NewsFeed from "../components/NewsFeed";

// 현재 인기 캠핑장 순위
function Main() {

  return (
    <div>
      <NavBar></NavBar>
      <SelectVariants></SelectVariants>
      <Album></Album>
      <NewsFeed></NewsFeed>
    </div>

  )
}

export default Main;