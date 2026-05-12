import '../styles/About.css';
import GrupoFoto from '../assets/images/GrupoFoto.svg';

function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-text">
        <p className="about-breadcrumb">Inicio &gt; Sobre</p>
        <h1>Sobre nós</h1>
        <p>
          A Suporte de Domingo nasceu com o propósito de oferecer soluções
          tecnológicas práticas, eficientes e personalizadas para empresas que
          querem crescer com segurança.
        </p>
        <p>
          Nosso time é formado por especialistas apaixonados por tecnologia e
          resultados.
        </p>
      </div>
      <div className="about-image">
        <img src={GrupoFoto} alt="Equipe Suporte de Domingo" />
      </div>
    </section>
  );
}

export default About;