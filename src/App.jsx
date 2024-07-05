import octoLogo from './assets/octo_1_2.png';
import textLogo_White from './assets/logo_texto_2.png';
import svg_Left from './assets/svg/left.svg';
import svg_User from './assets/svg/user.svg';
import './App.css';

function App() {
  return (
    <>
      <main className="hero">
        <img className="hero__logo" src={octoLogo} alt="Octotimer logo" />
        <h2 className="hero__text">15:00</h2>

        <section className="hero__instructions">
          <div className="hero__instructions--container">
            <p className="light">Temporizador</p>
            <input className="hero__input" type="text" />
            <div></div>
            <button className="btn btn--Purple" type="button">
              Iniciar temporizador
            </button>
          </div>
          <div className="hero__instructions--container">
            <p className="bold">Mensaje al finalizar el tiempo</p>
            <button className="btn" type="button">
              Vuelvan a la sala
            </button>
          </div>
          <div className="hero__instructions--container">
            <div className="wrapper">
              <p className="bold text-left">
                Número de usuarios finales conectados al timer
              </p>
              <p className="hero__instructions__participants">5</p>
            </div>
            <img
              className="hero__instructions--svg"
              src={svg_User}
              alt="User Icon svg"
            />
          </div>
        </section>
      </main>
      <aside className="float">
        <div>
          <img src={svg_Left} alt="Left arrow svg" />
        </div>
      </aside>
      <footer className="footer">
        <img src={textLogo_White} alt="Octotimer logo white" />
      </footer>
    </>
  );
}

export default App;
