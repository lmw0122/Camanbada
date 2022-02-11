import NavBar from "../components/NavBar";
import Album from "../components/Album";
import SelectVariants from "../components/SelectVariants";
import NewsFeed from "../components/NewsFeed";


// 현재 인기 캠핑장 순위
function Main() {
  //카카오 access token받기
  const current = decodeURI(window.location.href);
  const search = current.split("?")[1];
  const params = new URLSearchParams(search);
  const keyword = params.get('kakao_token');

  if (keyword !== null) {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", "Bearer " + keyword);
  }

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