"use client";

import { useState } from "react";
import TravelItems from "../travel-items/TravelItems.component";
import classes from "./Travel.module.css";
export default function Travel() {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className={classes.textBg}>
          <p className={classes.text}>
            Eurotrips — це «свій» у світі туризму Розпродаж турів травня: знижки
            на останні місця, бронювання за 10€.
          </p>
        </div>
        <h2 className="text-center text-2xl font-sans">
          Тури, які ми пропонуємо
        </h2>
      </div>

      <div className="w-4/5">
        <span className="flex justify-self-end gap-2">
          <label htmlFor="favorite">Обране</label>
          <input
            id="favorite"
            type="checkbox"
            checked={isFavorite}
            onChange={(e) => {
              setIsFavorite(e.target.checked);
            }}
          />
        </span>
      </div>

      <TravelItems isFavorite={isFavorite} />
    </div>
  );
}
