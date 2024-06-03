import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.jsx';

import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Abonnez-vous à notre newsletter pour recevoir nos meilleures offres.
        </p>
        <p className="footer-subscription-text">Aucun spam. Juste des offres alléchantes.</p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Nous joindre</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>A propos</h2>
            <Link to="/sign-up">Fonctionnement</Link>
            <Link to="/">Témoignages</Link>
            <Link to="/">Opportunités</Link>
            <Link to="/">Investisseurs</Link>
            <Link to="/">Politique du service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsors</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Vidéos</h2>
            <Link to="/">Soumettre Video</Link>
            <Link to="/">Ambassadeurs</Link>
            <Link to="/">Agence</Link>
            <Link to="/">Influenceur</Link>
          </div>
          <div className="footer-link-items">
            <h2>Réseaux Sociaux</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              SN`TOUR <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">SN`TOUR copyright 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
