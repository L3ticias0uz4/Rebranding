import '../styles/MVV.css';
import missaoIcon from '../assets/Icons/Missao.svg';
import visaoIcon from '../assets/Icons/Visao.svg';
import valoresIcon from '../assets/Icons/Valores.svg';

function MVV() {
  const items = [
    {
      icon: <img src={MissaoIcon} alt="Missão" className="mvv-icon" />,
      title: 'Missão',
      desc: 'Oferecer soluções de TI que simplificam processos e geram valor para nossos clientes.',
    },
    {
      icon: <img src={VisaoIcon} alt="Visão" className="mvv-icon" />,
      title: 'Visão',
      desc: 'Ser referência em tecnologia e suporte, reconhecida pela qualidade e inovação.',
    },
    {
      icon: <img src={ValoresIcon} alt="Valores" className="mvv-icon" />,
      title: 'Valores',
      desc: 'Compromisso, transparência, inovação e foco em pessoas.',
    },
  ];

  return (
    <section className="mvv-section" id="Missao">
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