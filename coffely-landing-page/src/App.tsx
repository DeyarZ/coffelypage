import React from 'react';
// import logo from './logo.svg'; // Logo wird vorerst nicht verwendet
import './App.css';

function App() {
  return (
    <>
      <header className="main-nav">
        <div className="container nav-content">
          <div className="nav-logo">Coffely</div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content container">
        <section className="hero-section">
          {/* <img src={logo} className="App-logo" alt="logo" /> // Vorerst entfernt */}
          <h1>Welcome to Coffely</h1>
          <p>
            {/* Edit <code>src/App.tsx</code> and save to reload. */}
            Your amazing coffee experience starts here. Discover the best brews and blends.
          </p>
          <a
            // className="App-link" // Alte Klasse entfernt
            className="btn" // Neue Button-Klasse
            href="https://reactjs.org" // Linkziel vorerst beibehalten
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More (Example Button)
          </a>
        </section>

        {/* Hier könnten weitere Sections folgen, z.B.: */}
        {/* <section id="features">
          <h2>Features</h2>
          ...
        </section>
        <section id="pricing">
          <h2>Pricing</h2>
          ...
        </section> */}
      </main>

      {/* Optionaler Footer */}
      {/* <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Coffely. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
}

export default App;
