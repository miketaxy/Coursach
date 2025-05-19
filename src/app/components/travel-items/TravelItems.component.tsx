"use client";
import { useEffect, useState } from "react";
import { TravelItem } from "../../../../generated/prisma-client";

export default function TravelItems() {
  const [travelItems, setTravelItems] = useState<TravelItem[]>([]);

  useEffect(() => {
    function getTravelItems() {
      fetch("api/getAllTravelItems")
        .then((response) => response.json())
        .then((data) => setTravelItems(data.travelItems));
    }
    console.log("Fetching travel items");
    getTravelItems();
  }, []);

  return (
    <ul className="flex flex-wrap justify-center">
      {travelItems.map((travelItem) => (
        <li
          key={travelItem.id}
          className="border-2 border-gray-300 p-4 m-2 width-1/4 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-2 bg-gray-200 p-2 rounded  justify-center">
            <h2 className="text-xl font-sans ">{travelItem.Title}</h2>
          </div>
          <img src={travelItem.Image ?? ""} alt="wow" />
          <p>{travelItem.description}</p>
        </li>
      ))}
    </ul>
  );
}
