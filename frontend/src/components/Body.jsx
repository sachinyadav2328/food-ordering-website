import resList from "../common/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [listofrestaurant, setlistofrestaurant] = useState(resList);
  return (
    <div className="body-container">
      <div className="filter ">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurant.filter((res) => res.info.avgRating > 4);
            setlistofrestaurant(filteredList);
          }}
        >
          top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listofrestaurant.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
