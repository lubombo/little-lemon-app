import { Link } from 'react-router-dom';
function Highlights() {
  return (
    <section className="highlights">
      <h2>This week’s specials</h2>
      <div className="specials">
        <div className="dish">
          <div className="img-placeholder"><img src="/images/greek-salad.jpg" alt="Greek Salad" /></div>
          <h3>Greek Salad</h3>
          <p>Fresh and crispy salad with feta cheese.</p>
          <p>$12.99</p>
        </div>
        <div className="dish">
          <div className="img-placeholder"><img src="/images/bruschetta.jpg" alt="Bruschetta" /></div>
          <h3>Bruschetta</h3>
          <p>Grilled bread with tomatoes and olive oil.</p>
          <p>$9.99</p>
        </div>
        <div className="dish">
          <div className="img-placeholder"><img src="/images/lemon-dessert.jpg" alt="Lemon Dessert" /></div>
          <h3>Lemon Dessert</h3>
          <p>Delicious lemon dessert with cream.</p>
          <p>$7.99</p>
        </div>
      </div>
            <Link to="/booking">
      <button>Order Online</button>
</Link>
    </section>
  );
}

export default Highlights;
