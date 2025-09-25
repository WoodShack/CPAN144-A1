import { SetStateAction, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation"
import Welcome from "../components/welcome"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section: SetStateAction<string>) => {
    console.log(section);
    setActiveSection(section);
  };

  return (
    <div>
      <Navigation onNavClick={handleNavClick}></Navigation>
      <Welcome></Welcome>
    </div>
  );
}
