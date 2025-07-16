import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      <p>We serve Mediterranean-inspired food.</p>
      <Link to="/booking">
        <button>Reserve a Table</button>
      </Link>
    </section>
  );
}

export default Hero;
