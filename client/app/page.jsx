"use client";
import { useContext } from "react";
import Homeone from "./components/homeone/Homeone";
import NewCollection from "./components/newCollection/NewCollection";
import NewLetter from "./components/newLetter/NewLetter";
import Offers from "./components/offers/Offers";
import Popular from "./components/popular/Popular";
import { ShopContext } from "./context/ShopContext";
import { useRouter } from "next/navigation";


export default function Home() {
  // const {User}=useContext(ShopContext)
  // const router = useRouter();
  // if (!User) {
  //   router.push("/login");
  // }
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
