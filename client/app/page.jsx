
import Homeone from "./components/homeone/Homeone";
import NewCollection from "./components/newCollection/NewCollection";
import NewLetter from "./components/newLetter/NewLetter";
import Offers from "./components/offers/Offers";
import Popular from "./components/popular/Popular";


export default function Home() {
  return (
    <div className="">
      <Homeone/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLetter/>
    </div>
  );
}
