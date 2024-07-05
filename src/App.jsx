import octoLogo from './assets/octo_1_2.png';
import textLogo_White from './assets/logo_texto_2.png';
import svg_Left from './assets/svg/left.svg';
import svg_User from './assets/svg/user.svg';
import './App.css';

function App() {
  return (
    <>
      <main className="hero">
        <img src={octoLogo} alt="Octotimer logo" />
        <h2>15:00</h2>
        <section className="hero__instructions">
          <div>
            <p>Instructions</p>
            <input type="text" />
            <button type="button">Iniciar Temporizador</button>
          </div>
          <div>
            <p>Mensaje al finalizar el tiempo</p>
            <button type="button">Vuelvan a la sala</button>
          </div>
          <div>
            <div>
              <p>Número de usuarios finales conectados al timer</p>
              <p>5</p>
              <img src={svg_User} alt="User Icon svg" />
            </div>
          </div>
        </section>
      </main>
      <aside className="aside">
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
