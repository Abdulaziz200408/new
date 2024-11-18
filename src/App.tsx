import "./App.css";
import AllPopulapost from "./Pages/Allposts/Allpopular";
import Latesvedios from "./Pages/Latesvedios";
import NewPost from "./Pages/Newposts";
import Populapost from "./Pages/Popularposts";
import Topposts from "./Pages/Topposts";
import Trendyvedios from "./Pages/Trendyvedios";

function App() {
  return (
    <>
      <AllPopulapost />
      <Populapost />
      <NewPost />
      <Latesvedios />
      <Trendyvedios />
      <Topposts />
    </>
  );
}

export default App;
