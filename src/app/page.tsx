"use client";

import { useEffect, useRef, useState } from "react";
import Travel from "./components/travel/Travel.component";
import menu from "@/../public/menu.svg";
import Header from "./components/header/Header.component";
import { Role, User } from "../../generated/prisma-client";
import { jwtDecode } from "jwt-decode";
import AddTouristicPlace from "./components/addTouristicPlace/AddTouristicPlace.component";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [role, setRole] = useState<Role>(Role.USER);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    function getRoleFromLocalStorage() {
      const token = localStorage.getItem("token");
      if (!token) {
        setRole(Role.GUEST);
      } else {
        const user: User = jwtDecode(token);
        setRole(user.role);
      }
    }
    getRoleFromLocalStorage();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex h-full">
        {/* Кнопка меню */}
        <div className="h-full flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="opacity-40 hover:opacity-100 cursor-pointer flex items-center gap-2 rotate-90 z-20"
            aria-label="Меню"
          >
            <img src={menu.src} width={30} height={30} alt="Menu" />
            <span>Menu</span>
          </button>
        </div>

        {/* Оверлей меню */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-30 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Само меню */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-64`}
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Меню</h2>
            <ul className="space-y-2">
              <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                Обрані тури
              </li>
              {role === Role.GUEST && (
                <li
                  className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                  onClick={() => {
                    setIsDialogOpen(true);
                    setIsMenuOpen(false); // Закрываем меню при открытии диалога
                  }}
                >
                  Додати тур
                </li>
              )}
            </ul>
          </div>
        </div>

        <Travel />
      </div>
      {isDialogOpen && (
        <AddTouristicPlace
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
}
