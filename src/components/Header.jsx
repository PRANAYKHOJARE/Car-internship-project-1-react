import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="logo">🚗 Pranay CarHub</div>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </header>
  );
}

export default Header;
