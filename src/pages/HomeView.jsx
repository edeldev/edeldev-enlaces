import PhotoEdelDev from "../assets/PERSONAL-FOTO-EDELDEV.webp";
import "./index.css";
import { Enlaces, SocialMediaIcons } from "../components";

export const HomeView = () => {
  return (
    <>
      <header className="root">
        <hero className="container-home">
          <img
            src={PhotoEdelDev}
            alt="Foto personal"
            className="img-personal"
            loading="lazy"
          />
        </hero>
        <main>
          <h1>Edel Ballesteros</h1>
          <p className="username">@edel.dev</p>

          <SocialMediaIcons />

          <Enlaces />

          <footer>
            <p className="fin">¡VAMOS A CREAR JUNTOS!</p>
          </footer>
        </main>
      </header>
      <div className="overlay"></div>
    </>
  );
};
