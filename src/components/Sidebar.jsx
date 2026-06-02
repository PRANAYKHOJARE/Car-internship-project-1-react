import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>🚗 CarHub</h2>

      <div className="sidebar-section">
        <p>MAIN</p>
        <a href="/">🏠 Dashboard</a>
        <a href="/">🚘 Browse Cars</a>
      </div>

      <div className="sidebar-section">
        <p>MY ACCOUNT</p>
        <a href="/wishlist">❤️ Wishlist</a>
        <a href="/cart">🛒 Cart</a>
      </div>

      <div className="sidebar-section">
        <p>CATEGORIES</p>
        <a href="/">⚡ Electric</a>
        <a href="/">🚙 SUV</a>
        <a href="/">🏎️ Sports</a>
      </div>
    </aside>
  );
}

export default Sidebar;
