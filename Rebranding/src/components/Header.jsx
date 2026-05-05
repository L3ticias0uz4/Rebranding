import whatsApp from '../assets/images/whatsApp.svg';
import Logo from '../assets/images/Logo.svg';

function Header() {
  return ( 
    <header className="header-wrapper">
      <div className="header">

        <div className="logo">
          <img src="/Logo.svg" alt="Logo" />
        </div>

        <button className="contact-btn">
          Contato
          <whatsApp />
        </button>

      </div>
    </header>
  );
}

export default Header;