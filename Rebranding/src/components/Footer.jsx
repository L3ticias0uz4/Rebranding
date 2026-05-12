import '../styles/Footer.css';
import Logo from '../assets/images/Logo.svg';
import facebookIcon from '../assets/Icons/facebook.svg';
import instagramIcon from '../assets/Icons/instagram.svg';
import linkedinIcon from '../assets/Icons/linkedin.svg';
import phoneIcon from '../assets/Icons/phone.svg';
import emailIcon from '../assets/Icons/email.svg';
import locationIcon from '../assets/Icons/location.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About */}
        <div className="footer-about">
          <div className="footer-logo">
            <img src={Logo} alt="Logo" height={36} />
            <div>
              <div className="footer-logo-bold">SUPORTE</div>
              <div className="footer-logo-sub">DE DOMINGO</div>
            </div>
          </div>
          <p>Soluções em tecnologia para impulsionar negócios e gerar resultados reais.</p>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <div className="footer-contact-item">
            <img src={phoneIcon} alt="" />
            <span>(11) 99999-9999</span>
          </div>
          <div className="footer-contact-item">
            <img src={emailIcon} alt="" />
            <a href="mailto:contato@suportededomingo.com.br">
              contato@suportededomingo.com.br
            </a>
          </div>
          <div className="footer-contact-item">
            <img src={locationIcon} alt="" />
            <span>Rua das Inovações, 123, São Paulo, SP</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        @2024 Suporte de Domingo. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;