// src/App.jsx
import React from "react";
import "./assets/App.css";
import profileImage from "./assets/profile.png"; // Substitua pela imagem real
import logoEscola from "./assets/logoescola.svg"; // Importe o logotipo da escola
import facebookIcon from "./assets/facebook_branco.svg"; // Ícone do Facebook
import instagramIcon from "./assets/instagram_branco.svg"; // Ícone do Instagram
import youtubeIcon from "./assets/youtube_branco.svg"; // Ícone do YouTube
import twitterIcon from "./assets/twitter_branco.png"; // Ícone do Twitter
import abrinqIcon from "./assets/abrinq.svg"; // Ícone da Abrinq

function App() {
  return (
    <div className="container">
      <div className="main-content">
        <div className="left-side">
          <img src={logoEscola} alt="School Logo" className="logo" />
          <img src={profileImage} alt="Profile" className="profile-image" />
          <button className="status-button expired">CARTEIRINHA VÁLIDA</button>
        </div>
        <div className="content">
          <div className="details">
            <h1>Paulo Emanuel Prado Dias Diniz</h1>
            <hr />
            <div className="info-grid">
              <div className="full-width">
                <label>Colégio</label>
                <p>(COLÉGIO TÉCNICO BENTO QUIRINO - CAMPINAS - SP - CAMPINAS/SP)</p>
              </div>
              <div>
                <label>Curso</label>
                <p>Ensino Médio</p>
              </div>
              <div>
                <label>Série</label>
                <p>3º Ano</p>
              </div>
              <div>
                <label>Data de nascimento</label>
                <p>15/02/2008</p>
              </div>
              <div>
                <label>RG</label>
                <p>00000059068480-2/SP</p>
              </div>
              <div>
                <label>RA</label>
                <p>000113280789-X/SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-link">Política de compra e devolução</span> |{" "}
          <span className="footer-link">Política de privacidade</span>
          <br />
          <span className="foder">Pixel Gráfica, Editora E Produtos Digitais LTDA - 10.709.188/0001.03 - © 2025 School Picture - Todos os direitos reservados</span>
          <br />
          <span></span>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com/schoolpicture/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/schoolpicture/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCnTy3FMVM7ZXwHhXqgCVrFw" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
          </a>
          <a href="https://x.com/schoolpicture?mx=2" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon twitter-icon" />
          </a>
          <a href="https://www.fadc.org.br/" target="_blank" rel="noopener noreferrer">
            <img src={abrinqIcon} alt="Abrinq" className="social-icon abrinq-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
