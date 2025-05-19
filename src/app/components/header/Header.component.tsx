import logo from "@/../public/67fbdba3-d0e5-438b-8e3a-21882b3d25a0-removebg-preview.png";
import profile from "@/../public/profile-svgrepo-com.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-2">
      <div className="flex flex-row items-center gap-3">
        <img src={logo.src} alt="Header" width={40} height={40} />
        <span>Обрані тури</span>
      </div>
      <h1 className="text-center text-2xl">Tourist Agency</h1>
      <img src={profile.src} width={40} height={40}></img>
    </header>
  );
}
