import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import Hero from "../components/Hero";
import "../styles/Home.css";

const Home = () => {
  const nfts = exploreList.result;
  return (
    <div id="home">
      <Hero />
      <div id="list-container">
        <CardList list={nfts} />
      </div>
    </div>
  );
};

export default Home;
