import '../styles/MVV.css';
import missaoIcon from '../assets/Icons/missao.svg';
import visaoIcon from '../assets/Icons/visao.svg';
import valoresIcon from '../assets/Icons/valores.svg';

function MVV() {
  const items = [
    {
      icon: <img src={missaoIcon} alt="Missão" className="mvv-icon" />,
      title: 'Missão',
      desc: 'Oferecer soluções de TI que simplificam processos e geram valor para nossos clientes.',
    },
    {
      icon: <img src={visaoIcon} alt="Visão" className="mvv-icon" />,
      title: 'Visão',
      desc: 'Ser referência em tecnologia e suporte, reconhecida pela qualidade e inovação.',
    },
    {
      icon: <img src={valoresIcon} alt="Valores" className="mvv-icon" />,
      title: 'Valores',
      desc: 'Compromisso, transparência, inovação e foco em pessoas.',
    },
  ];

  return (
    <section className="mvv-section" id="missao">
      <div className="mvv-grid">
        {items.map((item, index) => (
          <div className="mvv-card" key={index}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MVV;