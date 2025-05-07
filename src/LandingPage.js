import React from 'react';
import './landingpage.css';
import teamcollab from './assets/teamcollab.jpg';


export default function LandingPage() {
  return (
    <div className="body">
      <header className="header">
        <div className="header-left">
          <div className="logo" role="img" aria-label="TeamFlow Logo">TeamFlow</div>
          <nav>
            <button type="button" className="nav-link">Features</button>
            <button type="button" className="nav-link">Pricing</button>
            <button type="button" className="nav-link">Resources</button>
          </nav>
        </div>
        <nav className="nav-right">
          <button type="button" className="nav-link nav-login">Log in</button>
          <button type="button" className="btn-primary">
            Sign up
          </button>
        </nav>
      </header>

      <main className="main">
        <div className="hero-text">
          <h1 className="hero-h1">Your productivity app with endless possibilities</h1>
          <p className="hero-p">Bring teams together, organize projects, and build your dream workflow.</p>
          <div className="cta-buttons">
            <button className="btn-primary" aria-label="Sign up for TeamFlow">Sign up – it's free!</button>
            <button className="btn-secondary" aria-label="Watch TeamFlow video">Watch video</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={teamcollab}
            alt="People collaborating and working on tasks"
            className="hero-img-tag"
          />
        </div>
      </main>

      <section className="features-section" aria-label="Features of TeamFlow">
        <h2 className="features-h2">Why teams love TeamFlow</h2>
        <p className="features-p">
          Customizable boards, lists, and cards help you organize and prioritize your projects in a fun, flexible, and rewarding way.
        </p>
        <div className="feature-list">
          <div className="feature">
            <h3 className="feature-h3">Flexible project management</h3>
            <p className="feature-p">Use boards, lists, and cards to organize and prioritize your work in a way that suits you and your team.</p>
          </div>
          <div className="feature">
            <h3 className="feature-h3">Visual collaboration</h3>
            <p className="feature-p">Keep everyone on the same page with communication and file sharing directly on cards.</p>
          </div>
          <div className="feature">
            <h3 className="feature-h3">Powerful integrations</h3>
            <p className="feature-p">Connect TeamFlow with the tools your team already uses, like Dropbox, Google Drive, and more.</p>
          </div>
        </div>
      </section>

      <footer className="footer" role="contentinfo">
        © 2024 TeamFlow Clone. All rights reserved.
      </footer>
    </div>
  );
}