import Header from "./components/header/Header.component";
import Travel from "./components/travel/Travel.component";
import menu from "@/../public/menu.svg";

export default async function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-full">
        <span className="opacity-50 hover:opacity-100 cursor-pointer flex items-center gap-2 rotate-90 sticky">
          <img src={menu.src} width={30} height={30} />
          Menu
        </span>
        <Travel />
      </div>
    </div>
  );
}
