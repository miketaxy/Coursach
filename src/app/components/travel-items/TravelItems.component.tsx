"use client";
import { useEffect, useState } from "react";
import { Role, TravelItem, User } from "../../../../generated/prisma-client";
import { jwtDecode } from "jwt-decode";
import trash from "@assets/trash.svg";

export default function TravelItems({ isFavorite }: { isFavorite: boolean }) {
  const [travelItems, setTravelItems] = useState<TravelItem[]>([]);
  const [chosenIds, setChosenIds] = useState<number[]>([]);
  const [role, setRole] = useState<Role>();

  useEffect(() => {
    const role = (jwtDecode(localStorage.getItem("token") || "") as User).role;
    setRole(role);
  });

  useEffect(() => {
    const jsonChosenId = localStorage.getItem("chosenId");
    if (!jsonChosenId) return;
    const chosenId: number[] = JSON.parse(jsonChosenId);
    setChosenIds(chosenId);
  }, []);

  useEffect(() => {
    function getTravelItems() {
      fetch("api/getAllTravelItems")
        .then((response) => response.json())
        .then((data) => setTravelItems(data.travelItems));
    }
    console.log("Fetching travel items");
    getTravelItems();
  }, []);

  const handleChosenId = (id: number) => {
    const newChosenIds = chosenIds.includes(id)
      ? chosenIds.filter((chosenId) => chosenId !== id)
      : [...chosenIds, id];
    setChosenIds(newChosenIds);
    localStorage.setItem("chosenId", JSON.stringify(newChosenIds));
  };

  const isChosenId = (id: number) => {
    return chosenIds.includes(id);
  };

  async function handleDeleteTravelItem(id: number) {
    const response = await fetch(`/api/travel-items/deleteTravelItem/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(response);
      return;
    }
    window.location.reload();
  }

  return (
    <ul className="flex flex-wrap justify-center">
      {(isFavorite
        ? travelItems.filter((travelItem) => chosenIds.includes(travelItem.id))
        : travelItems
      ).map((travelItem) => (
        <li
          key={travelItem.id}
          className="border-2 border-gray-300 p-4 m-2 width-1/4 rounded-lg shadow-md"
        >
          <div className={`flex ${role === "GUEST" ? "justify-between" : ""}`}>
            {role === "GUEST" && (
              <button
                className="hover:cursor-pointer"
                onClick={() => handleDeleteTravelItem(travelItem.id)}
              >
                <span>
                  <img src={trash.src} alt="" width={20} height={20} />
                </span>
              </button>
            )}
            <button
              onClick={() => handleChosenId(travelItem.id)}
              className={`flex justify-self-end text-xl ${
                isChosenId(travelItem.id) ? "text-rose-800" : "text-gray-500"
              } hover:cursor-pointer`}
            >
              ♥
            </button>
          </div>
          <div className="flex items-center mb-2 bg-gray-200 p-2 rounded  justify-center">
            <h2 className="text-xl font-sans ">{travelItem.Title}</h2>
          </div>
          <img
            src={travelItem.Image ?? ""}
            alt="wow"
            className="object-cover h-48 mb-2 rounded"
          />
          <p>{travelItem.description}</p>
        </li>
      ))}
    </ul>
  );
}
