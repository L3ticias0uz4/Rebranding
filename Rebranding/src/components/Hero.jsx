import Notebook from '../assets/images/Notebook.svg';
import Logo from '../assets/images/Logo.svg';
import Hero from 'styles/Hero.css';
function Hero() {
  return (
    <section className="hero">
      <Notebook />
      <div className="hero-content">
        <p className="tag">TECNOLOGIA QUE RESOLVE</p>

        <h1>
          Soluções inteligentes <br />
          para <span>impulsionar</span> <br />
          seu negócio
        </h1>

        <p className="description">
          Oferecemos tecnologia, suporte e consultoria para
          levar sua empresa para o próximo nível.
        </p>

        <div className="buttons">
          <button className="btn-primary">Nossos serviços</button>
          <button className="btn-outline">Fale com especialista</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/notebook.svg" alt="Notebook" />
      </div>

    </section>
  );
}

export default Hero;