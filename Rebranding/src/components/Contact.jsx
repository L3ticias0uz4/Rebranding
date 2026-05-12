import { useState } from 'react';
import '../styles/Contact.css';
import phoneIcon from '../assets/Icons/phone.svg';
import emailIcon from '../assets/Icons/email.svg';
import locationIcon from '../assets/Icons/location.svg';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert('Mensagem enviada!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contato">
      <p className="contact-breadcrumb">Inicio &gt; <span>Contato</span></p>
      <h1>Contato</h1>
      <p className="contact-subtitle">
        Vamos começar? Preencha o formulário e entraremos em contato.
      </p>

      <div className="contact-grid">
        {/* Form */}
        <div className="contact-form-card">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mensagem</label>
            <textarea
              name="message"
              placeholder="Escreva sua mensagem..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className="btn-submit" onClick={handleSubmit}>
            Enviar mensagem
          </button>
        </div>

        {/* Info */}
        <div className="contact-info-card">
          <h3>Outras formas de contato</h3>

          <div className="contact-item">
            <div className="contact-icon">
              <img src={phoneIcon} alt="Telefone" />
            </div>
            <div className="contact-item-text">
              <label>Telefone</label>
              <span>(11) 99999-9999</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <img src={emailIcon} alt="E-mail" />
            </div>
            <div className="contact-item-text">
              <label>E-mail</label>
              <a href="mailto:contato@suportededomingo.com.br">
                contato@suportededomingo.com.br
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <img src={locationIcon} alt="Endereço" />
            </div>
            <div className="contact-item-text">
              <label>Endereço</label>
              <span>Rua das Inovações, 123<br />São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;