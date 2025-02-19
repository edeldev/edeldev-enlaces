import PhotoEdelDev from "../assets/PERSONAL-FOTO-EDELDEV.webp";
import { Enlaces, SocialMediaIcons } from "../components";
import "./index.css";
import "../components/styles/tooltip.css";

export const HomeView = () => {
  return (
    <>
      <header className="root">
        <hero className="container-home">
          <div className="container__tooltip">
            <img
              src={PhotoEdelDev}
              alt="Foto personal"
              className="img-personal"
              loading="lazy"
            />
            <span className="tooltip">Hola, bienvenido!</span>
          </div>
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
