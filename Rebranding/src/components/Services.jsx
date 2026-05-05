import monitor from '../assets/Icons/monitor.svg';
import fone from '../assets/Icons/fone.svg';
import celular from '../assets/Icons/celular.svg';
import Seta from '../assets/Icons/seta.svg';
function Services() {
  const services = [
    {
      icon: <monitor />,
      title: "Desenvolvimento Web",
      desc: "Sites modernos, rápidos e responsivos para o seu negócio."
    },
    {
      icon: <fone />,
      title: "Suporte técnico",
      desc: "Atendimento ágil e especializado sempre que você precisar."
    },
    {
      icon: <celular />,
      title: "Desenvolvimento mobile",
      desc: "Aplicativos intuitivos e de alta performance para iOS e Android."
    },
    {
      icon: <Seta />,
      title: "Consultoria em TI",
      desc: "Estratégias e soluções tecnológicas para acelerar seus resultados."
    }
  ];

  return (
    <section className="services-section">
      <p className="services-tag">NOSSOS SERVIÇOS</p>

      <h2>
        Soluções completas para o seu negócio
      </h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;