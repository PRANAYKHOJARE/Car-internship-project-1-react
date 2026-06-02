import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h1>My Cart</h1>

      <p>Total Cars: {cart.length}</p>

      {cart.map((car, index) => (
        <div key={index} className="cart-item">
          <img src={car.image} alt={`${car.make} ${car.model}`} />

          <div>
            <h3>
              {car.make} {car.model}
            </h3>

            <p>{car.year}</p>

            <button onClick={() => removeFromCart(car.id)}>Remove</button>
          </div>
        </div>
      ))}

      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}

export default Cart;
