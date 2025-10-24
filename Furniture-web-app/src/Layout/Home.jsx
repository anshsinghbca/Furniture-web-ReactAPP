import React from "react";
import Homeitem from "../Components/Homeitem";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((store) => store.items ?? []);

  return (
    <main>
      <div className="main1">
        {Array.isArray(items) &&
          items.map((item) => <Homeitem key={item.id} item={item} />)}
      </div>
    </main>
  );
}

export default Home;
