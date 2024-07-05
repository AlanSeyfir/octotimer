import octoLogo from './assets/octo_1_2.png';
import textLogo_White from './assets/logo_texto_2.png';
import svg_Left from './assets/svg/left.svg';
import svg_User from './assets/svg/user.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0 && parseInt(minutes) > 0) {
      setMinutes(parseInt(minutes) - 1);
      setSeconds(59);
    } else if (isActive && seconds === 0 && parseInt(minutes) === 0) {
      clearInterval(interval);
      setIsActive(false);
      alert(text);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, text]);

  const handleStart = () => {
    if (parseInt(minutes) >= 0) {
      setIsActive(true);
    } else {
      alert('Escriba solo numeros');
    }
  };

  const handleInputChange = (event) => {
    setMinutes(event.target.value);
    setSeconds(0);
  };

  const handleInput = (e) => {
    setText(event.target.value);
  };

  return (
    <>
      <main className="hero">
        <img className="hero__logo" src={octoLogo} alt="Octotimer logo" />
        <h2 className="hero__text">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>

        <section className="hero__instructions">
          <div className="hero__instructions--container">
            <p className="light">Temporizador</p>
            <input
              className="hero__input"
              value={minutes}
              onChange={handleInputChange}
              type="text"
              min="0"
            />
            <div></div>
            <button
              onClick={handleStart}
              className="btn btn--Purple"
              type="button"
            >
              Iniciar temporizador
            </button>
          </div>
          <div className="hero__instructions--container">
            <p className="bold">Mensaje al finalizar el tiempo</p>
            <input
              className="hero__input btn"
              value={text}
              onChange={handleInput}
              type="text"
              placeholder="Mensaje"
            />
          </div>
          <div className="hero__instructions--container">
            <div className="wrapper">
              <p className="bold text-left">
                Número de usuarios finales conectados al timer
              </p>
              <p className="hero__instructions__participants">4</p>
            </div>
            <img
              className="hero__instructions--svg"
              src={svg_User}
              alt="User Icon svg"
            />
            <img
              className="hero__instructions--svg"
              src={svg_User}
              alt="User Icon svg"
            />
            <img
              className="hero__instructions--svg"
              src={svg_User}
              alt="User Icon svg"
            />
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
