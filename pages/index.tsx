import { SetStateAction, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation"
import Welcome from "../components/welcome"
import Videos from "../components/videos"
import Images from "../components/images"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Navigation onNavClick={handleNavClick}></Navigation>

      {/* Home */}
      {activeSection === "home" &&
        <Welcome></Welcome>
      }

      {/* Videos */}
      {activeSection === "video" &&
        <Videos></Videos>
      }

      {/* Images */}
      {activeSection === "images" &&
        <Images></Images>
      }
    </div>
  );
}
